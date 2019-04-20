const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var bcrypt = require("bcrypt-nodejs");
var FacebookStrategy = require('passport-facebook').Strategy;
var uniqid = require('uniqid');


module.exports = function (app) {

  // const facebookConfig = {
  //   clientID : process.env.FACEBOOK_CLIENT_ID,
  //   clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
  //   callbackURL : process.env.FACEBOOK_CALLBACK_URL
  // };

  const facebookConfig = {
  clientID : process.env.FACEBOOK_CLIENT_ID,// '2356209677946197'
  clientSecret : process.env.FACEBOOK_CLIENT_SECRET,//'f703c6a374da5f683dd13f043ebc54be'
  callbackURL : process.env.FACEBOOK_CALLBACK_URL, //'mongodb://heroku_xlvc3rq2:v9glk7aplstlil9vqr10ntiaek@ds113815.mlab.com:13815/heroku_xlvc3rq2'//
  //   clientID :'2356209677946197',
  //   clientSecret :'f703c6a374da5f683dd13f043ebc54be',
  //   callbackURL :'mongodb://heroku_xlvc3rq2:v9glk7aplstlil9vqr10ntiaek@ds113815.mlab.com:13815/heroku_xlvc3rq2'
  };

  passport.use(new LocalStrategy(localStrategy));
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);


  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function localStrategy(username, password, done) {
    userModel
      .findUserByUserName(username)
      .then(
        function (user) {
          if (user && bcrypt.compareSync(password, user.password)) {
            console.log("local strategy verification success");
            return done(null, user);
          } else {
            console.log("local strategy verification failed");
            return done(null, false);
          }
        },
        function (err) {
          return done(err);
        });
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel.findUserByFacebookId(profile.id).then(
      function(user) {
        if(user) {
          return done(null, user);
        } else {
          var names = profile.displayName.split(" ");
          var newFacebookUser = {
            username: 'fb' + uniqid(),
            lastName: names[1],
            firstName: names[0],
            email: profile.emails ? profile.emails[0].value:"",
            facebook: { id: profile.id, token: token},
            flag: 'Guest'
          };
          return userModel.createUser(newFacebookUser);
        }
        }, function(err) {
        if (err) {
          return done(err);
        }
      }).then(
        function(user){
          return done(null, user);
          }, function(err){
          if (err) {
            return done(err);
          }
        });
  }

  var userModel = require("../model/user/user.model.server");

  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/register', register);
  app.post ('/api/loggedIn', loggedIn);

  app.post("/api/user", createUser);
  app.get("/api/user", findUserByCredentials);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUserById);
  app.delete("/api/user/:userId", deleteUser);
  app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));

  app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/profile', failureRedirect: '/login' }));

  var multer = require('multer');
  var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });

  app.post ("/api/upload", upload.single('myFile'), uploadImage);
  app.get("/api/user/:userId/followlist", findFollowusers);
  app.put("/api/user/:userId/follow", followuser);
  app.put("/api/user/:userId/unfollow", unFollowUser);
  app.get("/api/user/alluser", alluser);

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logout();
    res.status(200);
    res.json("log out success");
  }

  function loggedIn(req, res) {
    res.json(req.isAuthenticated() ? req.user : 0);
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .findUserByUserName(user.username)
      .then(function (data) {
        if(data){
          res.status(400).send('Username is in use!');
        } else {
          userModel
            .createUser(user)
            .then(
              function(user){
                if(user){
                  req.login(user, function(err) {
                    if(err) {
                      res.status(400).send(err);
                    } else {
                      res.json(user);
                    }
                  });
                }
              }
            );
        }
      })

  }

  function createUser(req, res) {
    const new_user = req.body;
    userModel.createUser(new_user)
      .then(function(user){
        res.json(user);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function findUserById(req, res){
    var userId = req.params["userId"];
    userModel.findUserById(userId).then(function (user){
      if (user) {
        res.json(user);
      } else {
        res.status(404);
        res.json(user);
      }
    }, function(err) {
      res.status(500).json(err);
    });
  }

  function updateUserById(req, res){
    var userId = req.params['userId'];
    var user = req.body;
    console.log('update user' + userId);

    userModel.updateUser(userId, user)
      .then(function(status){
        res.json(user);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function deleteUser(req, res) {
    const userId = req.params['userId'];

    userModel.deleteUser(userId).then(function(status) {
      res.json(status);
    }, function(err) {
      res.status(500).json(err);
    });
  }


  function findUserByCredentials(req, res){
    var username = req.query["username"];
    var password = req.query["password"];

    if (username && password) {
      userModel.findUserByCredentials(username, password)
        .then(function(user) {
          if (!user) {
            res.status(401).json(user);
          } else {
            res.json(user);
          }
        }, function(err) {
          res.status(500).json(err);
        }).catch( err => {
          return res.json("no such user");
      });

    }
  }


  function uploadImage(req, res) {
    var myFile = req.file;
    var userId = req.body.userId;

    let baseUrl = "http://localhost:3200/";
    //let baseUrl = "https://webdev-yangli-cs5610.herokuapp.com/";
    let callbackUrl = baseUrl + "profile";

    if(myFile == null) {
      return res.redirect(callbackUrl);
    }

    var filename  = myFile.filename;     // new file name in upload folder


    userModel.findUserById(userId).then(function (user){
      user.url = '/uploads/' + filename;
      userModel.updateUser(user._id, user).then(function (status) {
        return res.redirect(callbackUrl)
      }, function (err) {

      })
    });
  }

  function findFollowusers(req, res) {
    var userId = req.params["userId"];
    userModel.findUserById(userId).then(function (user){
      return res.json(user.subscribe);
    }, function(err) {
      res.status(500).json(err);
    });
  }

  function followuser(req, res) {
    console.log("server-side follow user");
    var userId = req.params["userId"];
    console.log('current user:' + userId);
    var followId = req.body.followId;
    console.log('followed user: '+followId);
    userModel.findUserById(followId).then(function (followUser){
      userModel.findUserById(userId).then(function (user) {
        const respUser = {
          username: followUser.username,
          email: followUser.email,
          url: followUser.url,
          _id: followUser._id
        };
        user.subscribe.push(respUser);
        user.save();
      }, function (err) {
        res.status(500).json(err);
      });
      return res.json("Success follow user!");
    }, function(err) {
      res.status(500).json(err);
    });
  }

  function unFollowUser(req, res) {
    var userId = req.params["userId"];
    var unFollowId = req.body.unFollowId;
    userModel.findUserById(userId).then(function (user){
      user.subscribe.pull({_id: unFollowId});
      user.save();
      return res.json("Success unfollow user!")
    }, function(err) {
      res.status(500).json(err);
    });
  }

  function alluser(req, res) {
    userModel.findAlluser().then(function (users) {
      return res.json(users);
    }, function (err) {
      res.status(500).json(err);
    });
  }

};

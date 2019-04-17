module.exports=function(app) {



  app.post("/api/website/:websiteId/answer", createPage);
  app.get("/api/website/:websiteId/answer", findAllPagesForWebsite);
  app.get("/api/answer/:pageId", findPageById);
  app.put("/api/answer/:pageId", updatePage);
  app.delete("/api/answer/:pageId", deletePage);

  const pageModel = require('../model/answer/answer.model.server');




  function createPage(req, res){
    const websiteId = req.params['websiteId'];
    const page = req.body;

    pageModel
      .createPage(websiteId,page)
      .then(function(pages) {
        console.log("answer created!");
        res.json(pages);
      }, function(error) {
        if (error) {
          console.log("create answer error" + error);
          res.send(error);
        }
      });
  }


  function findAllPagesForWebsite(req, res) {
    const websiteId = req.params['websiteId'];

    pageModel
      .findAllPagesForWebsite(websiteId)
      .then(function (pages) {
        console.log("find pages by user id:" + pages);
        res.json(pages);
      }, function (error) {
        if (error) {
          console.log("Find pages by user id error:" + error);
          res.send(error);
        }
      });
  }


  function findPageById(req, res) {
    const pageId = req.params['pageId'];

    pageModel
      .findPageById(pageId)
      .then(function (page) {
        console.log("find answer by id:" + page);
        res.json(page);
      }, function (error) {
        if (error) {
          console.log("Find answer by id error:" + error);
          res.send(error);
        }
      });
  }


  function updatePage(req, res) {
    const pageId = req.params['pageId'];
    const newPage = req.body;
    pageModel
      .updatePage(pageId, newPage)
      .then(function (page) {
        console.log("answer updated!");
        pageModel
          .findAllPagesForWebsite(page.websiteId)
          .then(function (pages) {
            console.log("find pages by website id:" + pages);
            res.json(pages);
          }, function (error) {
            if (error) {
              console.log("Find pages by website id error:" + error);
              res.send(error);
            }
          });
      }, function (error) {
        if (error) {
          console.log("update pages error" + error);
          res.send(error);
        }
      });
  }


  function deletePage(req, res) {
    const pageId = req.params['pageId'];
    pageModel.deletePage(pageId)
      .then(function (page) {
        console.log("answer removed!");
        // pageModel
        //   .findAllPagesForWebsite(answer.websiteId)
        //   .then(function (pages) {
        //     console.log("find pages by website id:" + pages);
        //     res.json(pages);
        //   }, function (error) {
        //     if (error) {
        //       console.log("Find pages by website id error:" + error);
        //       res.send(error);
        //     }
        //   });
        res.json(page);
      }, function (error) {
        if (error) {
          console.log("delete answer error" + error);
          res.send(error);
        }
      });
  }
}


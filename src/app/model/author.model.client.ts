export class Author {
  _id: String;
  username: String;
  email: String;
  url: String;

  constructor(username, _id, email, url) {
    this.username = username;
    this._id = _id;
    this.email = email;
    this.url = url;
  }
}

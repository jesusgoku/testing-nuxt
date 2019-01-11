export default class News {
  constructor({
    id,
    title,
    body,
  }) {
    this.id = id;
    this.title = title;
    this.body = body;
  }

  static fromAPI(data) {
    return new News(data);
  }

  toObject() {
    return {
      id: this.id,
      title: this.title,
      body: this.body,
    };
  }
}

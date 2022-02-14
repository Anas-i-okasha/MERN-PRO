const posts = require("../module/SchemaData");

const getAll = (req, res) => {
  posts
    .find({})
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log("The err is:");
    });
};

const addNewPost = (req, res) => {
  const newPost = new posts(req.body);
  newPost
    .save({})
    .then((result) => {
      res.json("new post add sucessfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAll,
  addNewPost,
};

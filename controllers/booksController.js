const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // READ ALL
  findAll: function(req, res) {
    db.Book
      .find({})
      .sort({ createdAt: "desc" })
      .then(dbModel => {
            console.log("find all saved books: ", dbModel);
            res.json(dbModel)
       })
        
      .catch(err => res.status(422).json(err));
  },

  //READ ONE
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // SAVE
  save: function(req, res) {
    console.log("req.body: ", req.body);
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

//   // UPDATE
//   update: function(req, res) {
//     db.Book
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

  // DELETE
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

const knex = require("../db/knex.js");

module.exports = {

// GET ALL COMPANY
  getAll: function(req, res) {
    knex('pokemon').then((result) => {

      res.render('pokemon', {pokemon: result})
    })
    .catch((err) => {
      console.error(err)
    });
  },
}

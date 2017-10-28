const knex = require("../db/knex.js");

module.exports = {

// GET ALL COMPANY
  getAll: function(req, res) {
    knex('trainers')
    .then((results) => {

      knex('pokemon')
      .then((pokemon_data) => {

        res.render('pokemon', {pokemonInfo: pokemon_data, trainersInfo: results})
      })
    })
  },


// NEW POKEMON
  create: function(req, res){
    knex('pokemon')
      .insert({
        trainer_id: req.body.trainers,
        name: req.body.name,
        cp: req.body.cp,
        in_gym: req.body.in_gym
      })
      .then((reult) => {
        res.redirect('pokemon')
      });
    },

// EDIT POKEMON
  edit: function(req, res) {
    knex('trainers')
    .then((tResults) => {

      knex('pokemon')
        .where('id', req.params.id)
        .then((result) => {
          res.render('edit', {pokemon: result[0], trainerInfo: tResults})
        })
        .catch((err) => {
          console.error(err);
        });
    })
  },


// DELETE POKEMON
  delete: function(req, res) {
    knex('pokemon')
      .del()
      .where('id', req.params.id)
      .then(() => {
        res.redirect('/pokemon');
      })
      .catch((err) => {
        console.error(err)
      });
  },

// UPDATE POKEMON
  update: function(req, res) {
    knex('pokemon')
      .update(req.body)
      .where('id', req.params.id)
      .then(() => {
        res.redirect('/pokemon');
      })
      .catch((err) => {
        console.error(err)
      })
  }

}


// last update: sat28oct2017@0830

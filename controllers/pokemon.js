const knex = require("../db/knex.js");

module.exports = {

// GET ALL COMPANY
  getAll: function(req, res) {
    // knex('pokemon').then((result) => {
    //
    //   res.render('pokemon', {pokemon: result})
    // })
    // .catch((err) => {
    //   console.error(err)
    // });


    // TESTING NEW CODE FOR GET ALL
    // knex('trainers')
    //   .then((trainersResults) => {
    //
    //     knex('pokemon')
    //     .then((pokemonResults) => {
    //
    //       res.render('pokemon', {trainers:trainersResults, pokemon:pokemonResults});
    //     })
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    // },




    // WORKING CODE - DO NOT DELETE BELOW THIS LINE
    knex('trainers')
    // .where('pokemon.trainer_d', req.trainers.id)
    .then((results) => {
      // let joinData = results;


      knex('pokemon')
      .then((pokemon_data) => {
        // console.log(pokemon_data);
        res.render('pokemon', {pokemonInfo: pokemon_data, trainersInfo: results})
      })
    })
    // WORKING CODE - DO NOT DELETE ABOVE THIS LINE
  },

// CREATE NEW COMPANY
  create: function(req, res){
    knex('pokemon')
      .insert({
        name: req.body.name,
        cp: req.body.cp,
        in_gym: req.body.in_gym
      }, "*")
      .then((result)=>{
        res.redirect("/pokemon")
      })
      .catch((err) => {
        console.error(err)
      });
  },


// NEW POKEMON
    newPokemon: function(req, res){
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
      }

// GET ONE TRAINER

}

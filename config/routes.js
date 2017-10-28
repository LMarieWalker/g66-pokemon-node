//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const pokemon = require("../controllers/pokemon.js");

module.exports = function(app){

  app.get('/', pokemon.getAll);

  app.get('/pokemon', pokemon.getAll);

  // app.post('/pokemon', pokemon.create);

  app.post('/pokemon', pokemon.newPokemon);

  app.use(function(req, res){
    res.send('not found');
  });
}

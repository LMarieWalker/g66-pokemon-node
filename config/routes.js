//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const pokemon = require("../controllers/pokemon.js");

module.exports = function(app){

  app.get('/', pokemon.getAll);

  app.get('/pokemon', pokemon.getAll);

  app.post('/pokemon', pokemon.create);

  app.get('/edit/:id', pokemon.edit);

  app.get('/delete/:id', pokemon.delete);

  app.post('/update/:id', pokemon.update);

  app.get('/profile/:id', pokemon.getOne);

  app.use(function(req, res){
    res.send('not found');
  });
}

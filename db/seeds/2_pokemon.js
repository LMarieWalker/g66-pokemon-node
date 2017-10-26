exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('pokemon').del(),

    knex('pokemon').insert(
      {
        id: 500,
        name: "Bulbasaur",
        cp: 15,
        in_gym: false,
        trainer_id: 1
      }
    ),
    knex('pokemon').insert({id: 501, name: "Ivysaur",
      cp: 60, in_gym: false, trainer_id: 1}),
    knex('pokemon').insert({id: 502, name: "Venasaur",
      cp: 100, in_gym: false, trainer_id: 2}),
    knex('pokemon').insert({id: 503, name: "Charmander",
      cp: 15, in_gym: false, trainer_id: 2}),
    knex('pokemon').insert({id: 504, name: "Charmeleon",
      cp: 55, in_gym: false, trainer_id: 2}),
    knex('pokemon').insert({id: 505, name: "Charizard",
      cp: 99, in_gym: false, trainer_id: 3}),
    knex('pokemon').insert({id: 506, name: "Squirtle",
      cp: 19, in_gym: false, trainer_id: 4}),
    knex('pokemon').insert({id: 507, name: "Wartortle",
      cp: 22, in_gym: false, trainer_id: 4}),
    knex('pokemon').insert({id: 508, name: "Blastoise",
      cp: 111, in_gym: false, trainer_id: 4}),
    knex('pokemon').insert({id: 509, name: "Caterpie",
      cp: 5, in_gym: false, trainer_id: 3}),
    knex('pokemon').insert({id: 510, name: "Metapod",
      cp: 18, in_gym: false, trainer_id: 1}),
    knex('pokemon').insert({id: 511, name: "Butterfree",
     cp: 104, in_gym: false, trainer_id: 1})
  );
};

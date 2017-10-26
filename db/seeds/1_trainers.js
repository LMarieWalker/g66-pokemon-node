exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('trainers').del(),

    // Inserts seed entries
    knex('trainers').insert({id: 1, name: "Markel" }),
    knex('trainers').insert({id: 2, name: "Jacob" }),
    knex('trainers').insert({id: 3, name: "Ella" }),
    knex('trainers').insert({id: 4, name: "Valencia" })

  );
};

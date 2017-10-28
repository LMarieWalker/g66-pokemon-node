module.exports = {
  development: {
      client: 'pg',
      connection: {
        database: "pokemon_node",
        host: "localhost"
      },
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
};


// last update: sat28oct2017@0830

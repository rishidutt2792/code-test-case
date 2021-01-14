// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    debug: true,
    // local-dev
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5433,
      user: process.env.DB_USER || 'rishi',
      password: process.env.DB_PASS || 'password',
      database: process.env.DB_NAME || 'pets',
      charset: 'utf8'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    debug: true,
    // local-dev
    connection: {
      host: process.env.DB_HOST || '',
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER || '',
      password: process.env.DB_PASS || '',
      database: process.env.DB_NAME || '',
      charset: 'utf8'
    },
    useNullAsDefault: true
  }

};

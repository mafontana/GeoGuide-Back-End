module.exports = {

  development: {
    client: 'pg',
    connection:
      'postgresql://localhost/geoguide'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};

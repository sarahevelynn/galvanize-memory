// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: "postgresql:///memory3"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};

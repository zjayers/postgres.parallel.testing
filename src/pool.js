const pg = require("pg");

// Create a pool to the pg instance
// Setup the connection so that it can connect to different databases
// This makes for easier testing setups
class Pool {
  _pool = null;

  connect(options) {
    this._pool = new pg.Pool(options);
    return this._pool.query("SELECT 1 + 1;");
  }

  close() {
    return this._pool.end();
  }

  query(sql, params) {
    return this._pool.query(sql, params);
  }
}

module.exports = new Pool();

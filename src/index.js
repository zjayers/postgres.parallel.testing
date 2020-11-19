const app = require("./app");
const pool = require("./pool");

// Attempt connection to database
pool
  .connect({
    host: "localhost",
    port: 5432,
    database: "socialnetwork",
    user: "postgres",
    password: "0okmNJI9",
  })
  .then(() => {
    console.log("Database connection successful");
    app.listen(3005, () => {
      console.log("App listening on post 3005");
    });
  })
  .catch((err) => console.log(err));

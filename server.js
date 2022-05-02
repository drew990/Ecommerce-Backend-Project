const express = require("express");
const routes = require("./routes");
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connects to mysql Database
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: process.env.mysqlPassword,
//   database: "ecommerce_db",
// });

app.use(routes);

// sync sequelize models to the database, then turn on the server

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

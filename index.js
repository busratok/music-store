"use strict";
/**-----------------------------------------------------------
 ******************** STORE APP ******************************
 ------------------------------------------------------------*/

const express = require("express");
require("express-async-errors");
require("dotenv").config();

const app = express();

/** JSON parser  */
app.use(express.json());

const PORT = process.env.PORT || 8000;

/** DB Connection */
require("./src/config/dbConnection");

// Session Cookies
const session = require("cookie-session");
app.use(
  session({
    secret: process.env.SECRET_KEY, // Şifreleme anahtarı
    // maxAge: 1000 * 60 * 60 * 24 * 3  // miliseconds // 3 days
  })
);

//Middlewares
app.use(require("./src/middlewares/loginCheck"));

//Routes
app.all("/", (req, res) => {
  res.send("Welcome");
});

app.use("/products", require("./src/routes/products.router"));
app.use("/users", require("./src/routes/user.router"));
app.use(
  "/admin",
  require("./src/middlewares/auth"),
  require("./src/routes/admin.router")
);

app.use(require("./src/middlewares/errorHandler"));

// require("./sync")();

app.listen(PORT, () => console.log(`running on: http://127.0.0.1:${PORT}`));

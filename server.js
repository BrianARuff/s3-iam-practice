const express = require("express");
const configureMiddleware = require("./middleware");

const app = express();

const port = process.env.PORT || 3000;

configureMiddleware(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

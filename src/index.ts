import * as express from "express";
const app = express();

// main routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

// start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = app;

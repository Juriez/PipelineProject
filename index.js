
// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// // Export the server for testing
// const server = app.listen(port, () => {
//   console.log(`App is running on http://localhost:${port}`);
// });

// module.exports = { app, server };


const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Export the server for testing
const server = app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

module.exports = { app, server };

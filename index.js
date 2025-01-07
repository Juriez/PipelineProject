// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// app.listen(port, () => {
//   console.log(`App is running on http://localhost:${port}`);
// });

// module.exports = app;


const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Export the server for testing

export default app;

if(import.meta.url === `file://${process.argv[1]}`){
   app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
  });
}

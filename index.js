const express = require("express");
const app = express();
const axios = require("axios"); // Http Client
const cors = require("cors"); // Cross Origin Resourse Sharing ( to make requests to other websites)

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
  });
}
// Start server...
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

// Routes
app.get("/api", (req, res) => {
  // axios
  //   .get("https://api.github.com/users/reedbarger")
  //   .then(response => {
  //     console.log("WORKING");
  //     res.json({ user: "Richard is the Greatest!" });
  //   })
  //   .catch(err => {
  //     res.json({ user: "Something didn't work! ", err: err });
  //     console.log("Shit", err);
  //   });

  res.json({ user: "Axios is not working" });
});

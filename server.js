const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json({ extended: false }));

connectDB();

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

//serve static assets in production
if (process.env.Node_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve((__dirname, "client", "build", "index.html")))
  );
}

const PORT = 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Logs = require('./models/logs')
const port = 3000;
require("dotenv").config();
console.log(process.env.MONGO_URI)

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

async function main() {
  await mongoose.connect(process.env.MONGO_URI,
     console.log("Connected!!"));
}
main().catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));

app.get("/logs", async (req, res) => {
    try {
      const foundLogs = await Logs.find({});
      res.render("Index", { logs: foundLogs });
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred while fetching data");
    }
  });

app.get("/new", (req, res) => {
  res.render("New");
});

app.post("/logs", async (req, res) => {
  if (req.body.shipIsBroken === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.shipIsBroken = true;
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.shipIsBroken = false;
  }
  try {
    await Logs.create(req.body), res.redirect("/logs");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching data");
  }
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});

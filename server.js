const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Logs = require("./models/logs");
const port = 3000;
const methodOverride = require("method-override");
require("dotenv").config();

const logsController = require("./controllers/logs");

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

async function main() {
  await mongoose.connect(process.env.MONGO_URI, console.log("Connected!!"));
}
main().catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use("/logs", logsController);




app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});

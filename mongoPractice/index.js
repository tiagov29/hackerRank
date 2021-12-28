const mongoose = require("mongoose");
require("dotenv").config;
const config = require("./config");
const mongo = config.module.mongo;
// main().catch((err) => console.log(err));

(async function main() {
  await mongoose.connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("db connected");
  });

  const cdSchema = new mongoose.Schema({
    name: String,
    price: String,
  });

  const Cd = mongoose.model("cd", cdSchema);

  //   create cd
  const cdNew = new Cd({ name: "cdTest", price: "2000" });
  //   cdNew.save();
  const cds = await Cd.find();
  //   search cd
  const findCd = await Cd.findById("61ca09d88959a99465050a15");
  //   update cd
  //   findCd.price = 3500;
  //   findCd.save();
  // delete cd
  const deleteCd = await Cd.findByIdAndDelete("61ca09d88959a99465050a15");

  console.log(cds);
})();

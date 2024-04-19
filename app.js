const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wander";
async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("hii i am root");
});

app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "my new villa",
    description: "Buy the beach",
    price: 1200,
    location: "calangute , Goa",
    country: "India",
  });
  await sampleListing.save();
  console.log("sample was saved");
  res.send("succesFull Testing");
});
app.listen(8080, () => {
  console.log("server is listing to port 8080");
});

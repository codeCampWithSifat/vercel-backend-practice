const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

// use all the middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.nrvwj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("connected db successfully")
  // perform actions on the collection object
  client.close();
});


app.get("/", (req, res) => {
  res.send("Hello Bangladesh Server");
});

app.listen(port, () => {
  console.log(`Listening to the ${port} successfully`);
});

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://dbUser:8g3pG8SPYcqXSNQ@ac-lovf3h8-shard-00-00.4pjf68s.mongodb.net:27017,ac-lovf3h8-shard-00-01.4pjf68s.mongodb.net:27017,ac-lovf3h8-shard-00-02.4pjf68s.mongodb.net:27017/?ssl=true&replicaSet=atlas-h3rits-shard-0&authSource=admin&appName=Cluster0"
)
.then(() => {
  console.log("Connected!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
const mongoose = require("mongoose");
const DB =
  "mongodb+srv://myapi:jfmamjjasond@cluster0.i8bmc.mongodb.net/mysmartapi?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

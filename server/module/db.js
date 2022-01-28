const mongoose = require("mongoose")
const db = mongoose.Connection
const options = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  };
//   console.log(process.env.DB_URL)
   mongoose.connect(process.env.DB_URI, options).then(
    () => {
      console.log("DB Ready To Use");
    },
    (err) => {
      console.log("the error is",err);
    }
  );
const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: String, // String is shorthand for {type: String}
    adress: { province: String },
  }
  //{collection: 'nameCollection'} กรณีต้องการให้ตรงกับฐาน db collection
);
const company = mongoose.model("Company", schema);
module.exports = company;

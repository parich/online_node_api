const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number},
    saraly: { type: Number},
    adress: { type: String},
    created: { type: Date, default: Date.now },
  }
  //{collection: 'Staffs'} กรณีต้องการให้ตรงกับฐาน db collection
);
const staff = mongoose.model("Staff", schema);
module.exports = staff;

const Staff = require("../models/staff");

exports.index = async (req, res, next) => {
  const staff = await Staff.find().sort({ _id: 1 });
  res.status(200).json({
    data: staff,
  });
};

exports.show = async (req, res, next) => {
  try {
    const { id } = req.params;
    //const staff = await Staff.findOne({_id: id})
    const staff = await Staff.findById(id);

    if (!staff) {
      throw new Error("ไม่พบข้อมูล"); // Error เข้า catch
    }

    res.status(200).json({
      data: staff,
    });
  } catch (error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด " + error.message,
      },
    });
  }
};

exports.insert = async (req, res, next) => {
  const staff = new Staff(req.body);

  // const staff = new Staff({
  //   name: name,
  //   saraly: saraly
  // })

  await staff.save();
  res.status(201).json({
    message: "เพิ่มข้อมูลเรียบร้อย",
    data: staff,
  });
};

exports.delecte = async (req, res, next) => {
  try {
    const { id } = req.params;
    const staff = await Staff.deleteOne({ _id: id });

    if (staff.deletedCount === 0) {
      throw new Error("ลบข้อมูลไม่ได้");
    } else {
      res.status(200).json({
        message: id + " ลบแล้ว",
      });
    }
  } catch (error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด " + error.message,
      },
    });
  }
};
exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, saraly, age } = req.body;

    // const staff = await Staff.findById(id);
    // staff.name = name;
    // staff.saraly = saraly;
    // staff.age = age;
    // await staff.save();

    const staff = await Staff.findByIdAndUpdate(id, {
      name: name,
      saraly: saraly,
      age: age,
    });

    console.log(staff);

    res.status(200).json({
      message: "แก้ไขข้อมูลเรียบร้อย",
    });
  } catch (error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด " + error.message,
      },
    });
  }
};

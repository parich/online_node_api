exports.index = (req, res, next) => {
  res.status(200).json({
    data: [
      { id: 1, name: "parich" },
      { id: 2, name: "parichsu" },
      { id: 3, name: "suriya" },
    ],
  });
};

exports.login = (req, res, next) => {
  res.status(200).json({ message: "hello login" });
};

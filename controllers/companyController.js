exports.index = (req, res, next) => {
  res.status(200).json({
    data: {
      name: "dokkooon.com",
      address: {
        province: "surin",
      },
    },
  });
};

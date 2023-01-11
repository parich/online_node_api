exports.index = (req, res, next) => {
  res.send('Hello Users');
}

exports.login = (req, res, next) => {
  res.status(200).json({message: 'hello login'});
}

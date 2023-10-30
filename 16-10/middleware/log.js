const logMiddleWare = (req, res, next) => {
  console.log("ddax vafo log-");
  next();
};
module.exports = logMiddleWare;

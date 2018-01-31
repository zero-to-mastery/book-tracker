const overrideMethod = (req, res, next) => {
   if (req.query._method) {
      req.method = req.query._method;
      req.url = req.path;
   }
   next();
}

module.exports = overrideMethod
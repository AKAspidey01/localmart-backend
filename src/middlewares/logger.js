const logger = (req, res, next) => {
    console.log(`Request made to: ${req.url} at ${new Date()}`);
    next();
  };
  
  module.exports = logger;
  
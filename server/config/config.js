const env = process.env.NODE_ENV || 'development'

if (env === 'development') {
   process.env.PORT = 3000;
   const config = require('./keys');
   Object.keys(config).forEach(key => {
      process.env[key] = config[key];
   });
}
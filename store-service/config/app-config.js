const bodyParser = require('body-parser');

class AppConfig {
  constructor(app) {
    process.on('unhandledRejection', (reason, p) => {
      console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
      // application specific logging, throwing an error, or other logic here
    });
    this.app = app;
  }
  

  includeConfig() {
    this.loadAppLevelConfig();
  }

  

  loadAppLevelConfig() {
    this.app.use(
      bodyParser.json(),
    );
  }
}
module.exports = AppConfig;

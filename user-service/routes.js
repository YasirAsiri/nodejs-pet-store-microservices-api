const routeHandler = require('./handlers/route-handler');

class Routes {
  constructor(app) {
    this.app = app;
  }

  /* creating app Routes starts */
  appRoutes() {
    this.app.post('/user', routeHandler.createNewUserRouteHandler); 

    this.app.get('/user/:username', routeHandler.findUserByUsernameRouteHandler); 

    this.app.delete('/user/:username', routeHandler.deleteUserByUsernameRouteHandler); 

    this.app.put('/user/:username', routeHandler.updateUserRouteHandler);

    this.app.get('*', routeHandler.routeNotFoundHandler);
  }

  routesConfig() {
    this.appRoutes();
  }
}
module.exports = Routes;

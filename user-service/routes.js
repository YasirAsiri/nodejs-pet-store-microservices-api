const routeHandler = require('./handlers/route-handler');

class Routes {
  constructor(app) {
    this.app = app;
  }

  /* creating app Routes starts */
  appRoutes() {
    this.app.post('/user', routeHandler.createNewUserRouteHandler); // place order

    this.app.get('/user/:username', routeHandler.findUserByUsernameRouteHandler); // find order by id

    this.app.delete('/user/:username', routeHandler.deleteUserByUsernameRouteHandler); // delete order by id

    this.app.put('/user/:username', routeHandler.updateUserRouteHandler); //get pet inventory 

    this.app.get('*', routeHandler.routeNotFoundHandler);
  }

  routesConfig() {
    this.appRoutes();
  }
}
module.exports = Routes;

const routeHandler = require('./handlers/route-handler');

class Routes {
  constructor(app) {
    this.app = app;
  }

  /* creating app Routes starts */
  appRoutes() {
    this.app.post('/pet', routeHandler.addNewPetRouteHandler);

    this.app.get('/pet', routeHandler.findAllPetsRouteHandler);

    this.app.get('/pet/findById/:id', routeHandler.findPetByIdRouteHandler);

    this.app.get('/pet/findByStatus/:status', routeHandler.findPetByStatusRouteHandler);

    this.app.put('/pet', routeHandler.updatePetRouteHandler);

    this.app.get('*', routeHandler.routeNotFoundHandler);
  }

  routesConfig() {
    this.appRoutes();
  }
}
module.exports = Routes;

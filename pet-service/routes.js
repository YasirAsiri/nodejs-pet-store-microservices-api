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

    //this.app.post('/pet/uploadImage/:petId', routeHandler.uploadPetImageRouteHandler);

    this.app.get('*', routeHandler.routeNotFoundHandler);
  }

  routesConfig() {
    this.appRoutes();
  }
}
module.exports = Routes;

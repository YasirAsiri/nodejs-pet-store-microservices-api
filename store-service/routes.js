const routeHandler = require('./handlers/route-handler');

class Routes {
  constructor(app) {
    this.app = app;
  }

  /* creating app Routes starts */
  appRoutes() {
    this.app.post('/store/order', routeHandler.placeNewOrderRouteHandler); // place order

    this.app.get('/store/order/:id', routeHandler.findOrderByIdRouteHandler); // find order by id

    this.app.delete('/store/order/:id', routeHandler.deleteOrderByIdRouteHandler); // delete order by id

    this.app.get('/store/inventory', routeHandler.getPetInventoriesRouteHandler); //get pet inventory 

    this.app.get('*', routeHandler.routeNotFoundHandler);
  }

  routesConfig() {
    this.appRoutes();
  }
}
module.exports = Routes;

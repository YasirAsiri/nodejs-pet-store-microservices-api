
const httpProxy = require('express-http-proxy');
const bodyParser = require('body-parser');

const storeServiceProxy = httpProxy('http://localhost:2000');
const petServiceProxy = httpProxy('http://localhost:3000');
const userServiceProxy = httpProxy('http://localhost:4000');

class Routes {
  constructor(app) {
    this.app = app;
  }

  /* creating app Routes starts */
  appRoutes() {

    this.app.get('/', (req, res) => {
      res.json({msg: 'Welcome to The Pet Store API !'})
    });

    // Find all stored pets
    this.app.get('/pet', (req, res) => {
      petServiceProxy(req, res);
    });
    
    // Add a new pet to the DB
    this.app.post('/pet', (req, res) => {
      petServiceProxy(req, res);
    });

    // Get pets by status [available, sold, pending]
    this.app.get('/pet/findByStatus/:status', (req, res) => {
      petServiceProxy(req, res);
    });

    // Find pet by pet's Id
    this.app.get('/pet/findById/:id', (req, res) => {
      petServiceProxy(req, res);
   });

    // Place an order for pet
    this.app.post('/store/order', (req, res) => {
    storeServiceProxy(req, res);
  });

    // Find purchase order by ID
    this.app.get('/store/order/:orderId', (req, res) => {

      storeServiceProxy(req, res);
    });

    // Find purchase order by ID
    this.app.delete('/store/order/:orderId', (req, res) => {
      storeServiceProxy(req, res);
    });

    // Returns all orders
    this.app.get('/store/inventory', (req, res) => {
      storeServiceProxy(req, res);
    });

    // Create user
    this.app.post('/user', (req, res) => {
      userServiceProxy(req, res);
    });

    // Get user by user name
    this.app.get('/user/:username', (req, res) => {
      userServiceProxy(req, res);
  });

    // Get all users
    this.app.get('/users', (req, res) => {
      userServiceProxy(req, res);
    });

  }

  routesConfig() {
    this.appRoutes();
  }
}

module.exports = Routes;
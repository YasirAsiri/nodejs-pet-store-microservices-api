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

    // Update pet
    this.app.put('/pet/:id', (req, res) => {
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
    this.app.get('/store/order/:id', (req, res) => {

      storeServiceProxy(req, res);
    });

    // Delete purchase order by ID
    this.app.delete('/store/order/:id', (req, res) => {
      storeServiceProxy(req, res);
    });

    // Get pet inventories by status
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

    // Delete user by username
    this.app.delete('/user/:username', (req, res) => {
    userServiceProxy(req, res);
  });

    // Update user info by username
    this.app.put('/user/:username', (req, res) => {
      userServiceProxy(req, res);
    });

  }

  routesConfig() {
    this.appRoutes();
  }
}

module.exports = Routes;
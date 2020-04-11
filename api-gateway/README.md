# Pet Store Microservices API

A node js backend API for the pet store, designed to accept requests through http using a tool (e.g postm or curl). This project contains three stand-alone services and a gateway 
- ##### [API Gateway](https://github.com/YasirAsiri/nodejs-pet-store-microservices-api/tree/master/api-gateway)
- ##### [Pet Service](https://github.com/YasirAsiri/nodejs-pet-store-microservices-api/tree/master/pet-service)
- ##### [Store Service](https://github.com/YasirAsiri/nodejs-pet-store-microservices-api/tree/master/store-service)
- ##### [User Service](https://github.com/YasirAsiri/nodejs-pet-store-microservices-api/tree/master/user-service)

---
## Requirements

For development, you will only need **Node.js**, **MongoDB** and a node global package, **npm**, installed in your environement.


## Install

    $ git clone https://github.com/YasirAsiri/nodejs-pet-store-microservices-api
    $ cd /nodejs-pet-store-microservices-api
    $ npm install


## Running the project

To run the project you need navigate to each directory under [project directory](https://github.com/YasirAsiri/nodejs-pet-store-microservices-api) and run it using



    $ 'Your Local Path'\nodejs-pet-store-microservices-api\api-gateway> node index.js
    $ 'Your Local Path'\nodejs-pet-store-microservices-api\pet-service> node index.js
    $ 'Your Local Path'\nodejs-pet-store-microservices-api\store-service> node index.js
    $ 'Your Local Path'\nodejs-pet-store-microservices-api\user-service> node index.js

const helper = require('./../handlers/query-handler');
const CONSTANTS = require('./../config/constants');
const ApiHandler = require('./../handlers/api-handler');

class RouteHandler {

  async findOrderByIdRouteHandler(request, response) {

      const id = request.params.id;
      try {
        const order = await helper.findOrderById(id);
        if (order === undefined) {
          response.status(CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE).json({
            error: true,
            details: CONSTANTS.OPERATION_FAILD,
          });
        } else {
          let msg = (order.length > 0) ? CONSTANTS.ORDER_FOUND : CONSTANTS.ORDER_NOT_EXIST;
          response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
            error: false,
            message: msg,
            order: order,
          });
        }
      } catch (error) {
        response.status(CONSTANTS.SERVER_ERROR_HTTP_CODE).json({
          error: true,
          message: error.message,
        });
      }
    }

    async deleteOrderByIdRouteHandler(request, response) {

      const id = request.params.id;
      try {
        const order = await helper.deleteOrderById(id);
        if (order === undefined) {
          response.status(CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE).json({
            error: true,
            message: CONSTANTS.OPERATION_FAILD,
          });
        } else {
          let msg = (order.length > 0) ? CONSTANTS.ORDER_DELETED_SUCCESS : CONSTANTS.ORDER_NOT_EXIST;
          response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
            error: false,
            message: order.message,
          });
        }
      } catch (error) {
        response.status(CONSTANTS.SERVER_ERROR_HTTP_CODE).json({
          error: true,
          message: error.message,
        });
      }
    }

  // async findAllPetsRouteHandler(request, response) {

  //     try {
  //       const allPets = await helper.finAllPets();
  //       if (allPets === undefined) {
  //         response.status(CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE).json({
  //           error: true,
  //           details: CONSTANTS.OPERATION_FAILD,
  //         });
  //       } else {
  //         response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
  //           error: false,
  //           pets: allPets,
  //         });
  //       }
  //     } catch (error) {
  //       response.status(CONSTANTS.SERVER_ERROR_HTTP_CODE).json({
  //         error: true,
  //         message: CONSTANTS.SERVER_ERROR_MESSAGE,
  //       });
  //     }
  // }

  async placeNewOrderRouteHandler(request, response) {
    try {
      const orderData = request.body;
      const result = await helper.placeNewOrder(orderData);
      if (result === undefined) {
        response.status(CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE).json({
          error: true,
          details: CONSTANTS.OPERATION_FAILD,
        });
      } else {
        response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
          error: false,
          message: CONSTANTS.ORDER_PLACED_SUCCESS,
          details: result,
        });
      }
    } catch (error) {
      response.status(CONSTANTS.SERVER_ERROR_HTTP_CODE).json({
        error: true,
        message: error.message,
      });
    }
  }

  async getPetInventoriesRouteHandler(request, response) {
    try {
      const result = await helper.getPetInventories();
      if (result === undefined) {
        response.status(CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE).json({
          error: true,
          details: CONSTANTS.OPERATION_FAILD,
        });
      } else {
        response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
          error: false,
          message: CONSTANTS.PET_INVENTORIES,
          details: result,
        });
      }
    } catch (error) {
      response.status(CONSTANTS.SERVER_ERROR_HTTP_CODE).json({
        error: true,
        message: error.message,
      });
    }
  }

  routeNotFoundHandler(request, response) {
    response.status(CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE).json({
      error: true,
      message: error.message,
    });
  }
}

module.exports = new RouteHandler();

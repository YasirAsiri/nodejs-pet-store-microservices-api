const helper = require('./../handlers/query-handler');
const CONSTANTS = require('./../config/constants');

class RouteHandler {

  async findUserByUsernameRouteHandler(request, response) {

      const username = request.params.username;
      try {
        const user = await helper.findUserByUsername(username);
        if (user === undefined) {
          response.status(CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE).json({
            error: true,
            details: CONSTANTS.OPERATION_FAILD,
          });
        } else {
          let msg = (user.length > 0) ? "" : CONSTANTS.USER_NOT_FOUND;
          response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
            error: false,
            message: msg,
            user: user,
          });
        }
      } catch (error) {
        response.status(CONSTANTS.SERVER_ERROR_HTTP_CODE).json({
          error: true,
          message: error.message,
        });
      }
    }

    async updateUserRouteHandler(request, response) {

      const data = request.body;
      const username = request.params.username;
      try {
        const result = await helper.updateUser(data, username);
        if (result === undefined) {
          response.status(CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE).json({
            error: true,
            details: CONSTANTS.OPERATION_FAILD,
          });
        } else {
          let check = (result == null);
          let msg = (!check) ? CONSTANTS.USER_UPDATED_SUCCESS : CONSTANTS.USER_NOT_FOUND;
          response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
            error: false,
            message: msg,
            user: result,
          });
        }
      } catch (error) {
        response.status(CONSTANTS.SERVER_ERROR_HTTP_CODE).json({
          error: true,
          message: error.message,
        });
      }
  
    }

    async deleteUserByUsernameRouteHandler(request, response) {

      const username = request.params.username;
      try {
        const user = await helper.deleteUserByUsername(username);
        if (user === undefined) {
          response.status(CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE).json({
            error: true,
            message: CONSTANTS.OPERATION_FAILD,
          });
        } else {
          let msg = (user.length > 0) ? CONSTANTS.USER_ : CONSTANTS.ORDER_NOT_EXIST;
          response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
            error: false,
            message: user.message,
          });
        }
      } catch (error) {
        response.status(CONSTANTS.SERVER_ERROR_HTTP_CODE).json({
          error: true,
          message: error.message,
        });
      }
    }

  async createNewUserRouteHandler(request, response) {
    try {
      const userData = request.body;
      const result = await helper.createNewUser(userData);
      if (result === undefined) {
        response.status(CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE).json({
          error: true,
          details: CONSTANTS.OPERATION_FAILD,
        });
      } else {
        response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
          error: false,
          message: CONSTANTS.USER_CREATED_SUCCESS,
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

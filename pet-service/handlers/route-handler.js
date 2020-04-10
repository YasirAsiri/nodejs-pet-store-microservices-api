const helper = require('./../handlers/query-handler');
const CONSTANTS = require('./../config/constants');

class RouteHandler {

  async findPetByIdRouteHandler(request, response) {

    const id = request.params.id;
    try {
      const pet = await helper.findPetById(id);
      if (pet === undefined) {
        response.status(CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE).json({
          error: true,
          details: CONSTANTS.OPERATION_FAILD,
        });
      } else {
        response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
          error: false,
          pets: pet,
        });
      }
    } catch (error) {
      response.status(CONSTANTS.SERVER_ERROR_HTTP_CODE).json({
        error: true,
        message: CONSTANTS.SERVER_ERROR_MESSAGE,
      });
    }
}

  async findAllPetsRouteHandler(request, response) {

      try {
        const allPets = await helper.finAllPets();
        if (allPets === undefined) {
          response.status(CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE).json({
            error: true,
            details: CONSTANTS.OPERATION_FAILD,
          });
        } else {
          response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
            error: false,
            pets: allPets,
          });
        }
      } catch (error) {
        response.status(CONSTANTS.SERVER_ERROR_HTTP_CODE).json({
          error: true,
          message: CONSTANTS.SERVER_ERROR_MESSAGE,
        });
      }
  }

  async addNewPetRouteHandler(request, response) {
    try {
      const petData = request.body;
      const result = await helper.addNewPet(petData);
      if (result === undefined) {
        response.status(CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE).json({
          error: true,
          details: CONSTANTS.OPERATION_FAILD,
        });
      } else {
        response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
          error: false,
          message: CONSTANTS.PET_ADDED_SUCCESS,
          details: result,
        });
      }
    } catch (error) {
      response.status(CONSTANTS.SERVER_ERROR_HTTP_CODE).json({
        error: true,
        message: CONSTANTS.SERVER_ERROR_MESSAGE,
      });
    }
  }

  routeNotFoundHandler(request, response) {
    response.status(CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE).json({
      error: true,
      message: CONSTANTS.ROUTE_NOT_FOUND,
    });
  }
}

module.exports = new RouteHandler();

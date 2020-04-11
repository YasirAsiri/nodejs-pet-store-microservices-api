'use strict';
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
          let check = (pet.length > 0);
          let msg = (check) ? "" : CONSTANTS.PET_ID_NOT_EXIST;
          response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
            error: false,
            message: msg,
            pets: pet,
          });
        }
      } catch (error) {
        response.status(CONSTANTS.SERVER_ERROR_HTTP_CODE).json({
          error: true,
          message: error.message,
        });
      }
    }

    async findPetByStatusRouteHandler(request, response) {

      const status = request.params.status;
      try {
        const pet = await helper.findPetByStatus(status);
        if (pet === undefined) {
          response.status(CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE).json({
            error: true,
            details: CONSTANTS.OPERATION_FAILD,
          });
        } else {
          let st = ['available', 'pending', 'sold'];
          let check = st.includes(status);
          let msg = (check) ? "" : CONSTANTS.PET_STATUS_INVALID;
          response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
            error: false,
            message: msg,
            pets: pet,
          });
        }
      } catch (error) {
        response.status(CONSTANTS.SERVER_ERROR_HTTP_CODE).json({
          error: true,
          message: error.message,
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
          let msg = (allPets.length > 0) ? "" : CONSTANTS.NO_PETS_STORED;
          response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
            error: false,
            message: msg,
            pets: allPets,
          });
        }
      } catch (error) {
        response.status(CONSTANTS.SERVER_ERROR_HTTP_CODE).json({
          error: true,
          message: error.message,
        });
      }
  }

  async updatePetRouteHandler(request, response) {

    const data = request.body;
    try {
      const result = await helper.updatePet(data);
      if (result === undefined) {
        response.status(CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE).json({
          error: true,
          details: CONSTANTS.OPERATION_FAILD,
        });
      } else {
        let check = (result == null);
        let msg = (!check) ? CONSTANTS.PET_UPDATED_SUCCESS : CONSTANTS.PET_ID_NOT_EXIST;
        response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
          error: false,
          message: msg,
          pet: result,
        });
      }
    } catch (error) {
      response.status(CONSTANTS.SERVER_ERROR_HTTP_CODE).json({
        error: true,
        message: error.message,
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
        message: error.message,
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

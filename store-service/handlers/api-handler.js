'use strict';

const axios = require('axios');
const CONSTANTS = require('./../config/constants');

class ApiHandler{

	async getPetDetails(){
		return axios(`http://localhost:3000/pet`);
	}
}

module.exports = new ApiHandler();

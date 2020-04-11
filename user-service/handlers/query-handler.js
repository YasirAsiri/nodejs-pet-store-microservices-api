'use strict';
const database = require('./../config/database');
const User = require('./../config/user-schema');
const CONSTANTS = require('./../config/constants');





class QueryHandler{

	/*
	* Name of the Method : placeNewOrder
	* Description : Inserts new order in the database
	* Parameter : 
	*		1) orderData <Order>
	* Return : Promise <Order>
	*/
	createNewUser(userData) {
		return new Promise( async (resolve, reject) => {
			const user = new User(userData);
			user.save(function (err) {
				if (err) reject(err)
				resolve(user);
			})
		});
	}

	/*
	* Name of the Method : findPetById
	* Description : Finds one order by id
	* Parameter : Order id
	* Return : Promise <Order>
	*/
	findUserByUsername(username) {
		return new Promise(async (resolve, reject) => {
			User.find({username: username}, function (err, result) {
				if (err)  reject(error);
				resolve(result);
			  });
		});
	}

	updateUser(data, username) {

		delete data.username;
		return new Promise(async (resolve, reject) => {
			User.findOneAndUpdate({username: username},data, {new: true}, function (err, result) {
				if (err)   
				reject(error);
				resolve(result);
			  });
		});
	}

	/*
	* Name of the Method : findPetByStatus
	* Description : Deletes order by id
	* Parameter : None
	* Return : Promise<Object>
	*/
	deleteUserByUsername(username) {

		return new Promise(async (resolve, reject) => {
			User.findOneAndDelete({username: username}, function (err, result) {
				if (err)  reject(error);
				if (result == null){
				resolve({error: false, message: CONSTANTS.USER_NOT_FOUND});
				}
				resolve({error: false, message: CONSTANTS.USER_DELETED_SUCCESS});
			  });
		});
	}
}

module.exports = new QueryHandler();

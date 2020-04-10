'use strict';
const database = require('./../config/database');
const Order = require('./../config/order-schema');
const apiHandler = require('./api-handler');
const CONSTANTS = require('./../config/constants');





class QueryHandler{

	/*
	* Name of the Method : getPetInventories
	* Description : Gets pet inventory by statuse from the pet service through http
	* Parameter : 
	* Return : Promise <Object>
	*/
	getPetInventories() {
		
		return new Promise( async (resolve, reject) => {
			try {
			const getPets = await apiHandler.getPetDetails();
			const pets = getPets.data.pets;
			if( pets == undefined ) {
				reject(`Pet Service is Down or not Working`);
			} else {
				let available = pets.filter(pet => { return pet.status === 'available'}).length;
				let pending = pets.filter(pet => { return pet.status === 'pending'}).length;
				let sold = pets.filter(pet => { return pet.status === 'sold'}).length;

				const inventories = {
					available: available,
					pending: pending,
					sold: sold,
				}
				resolve(inventories);				
			}
		} catch (err) {
			console.error(err);
		}
	});
	}

	/*
	* Name of the Method : placeNewOrder
	* Description : Inserts new order in the database
	* Parameter : 
	*		1) orderData <Order>
	* Return : Promise <Order>
	*/
	placeNewOrder(orderData) {
		return new Promise( async (resolve, reject) => {
			const order = new Order(orderData);
			order.save(function (err) {
				if (err) reject(err)
				resolve(order);
			})
		});
	}

	/*
	* Name of the Method : findPetById
	* Description : Finds one order by id
	* Parameter : Order id
	* Return : Promise <Order>
	*/
	findOrderById(id) {
		return new Promise(async (resolve, reject) => {
			Order.find({id: id}, function (err, result) {
				if (err)  reject(error);
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
	deleteOrderById(id) {

		return new Promise(async (resolve, reject) => {
			Order.findOneAndDelete({id: id}, function (err, result) {
				if (err)  reject(error);
				if (result == null){
				resolve({error: false, message: CONSTANTS.ORDER_NOT_EXIST});
				}
				resolve({error: false, message: CONSTANTS.ORDER_DELETED_SUCCESS});
			  });
		});
	}
}

module.exports = new QueryHandler();

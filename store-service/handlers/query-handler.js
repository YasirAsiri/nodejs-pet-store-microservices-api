'use strict';
const database = require('./../config/database');
const Order = require('./../config/order-schema');
const axios = require('axios');
const apiHandler = require('./api-handler');




class QueryHandler{

	/*
	* Name of the Method : addNewPet
	* Description : Inserts new pet model in the database
	* Parameter : 
	*		1) petData <Pet>
	* Return : Promise <Pet>
	*/
	getPetInventories() {
		
		return new Promise( async (resolve, reject) => {
			const getPets = await apiHandler.getPetDetails();
			const pets = getPets.data.pets;
			if( pets.error ) {
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
	});
	}

	/*
	* Name of the Method : addNewPet
	* Description : Inserts new pet model in the database
	* Parameter : 
	*		1) petData <Pet>
	* Return : Promise <Pet>
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
	* Name of the Method : findAllPets
	* Description : Fetchs the list of pets
	* Parameter : None
	* Return : Promise<Pet>
	*/
	finAllPets() {
		return new Promise(async (resolve, reject) => {
			Pet.find({}, function (err, result) {
				if (err)  reject(error);
				resolve(result);
			  });
		});
	}

		/*
	* Name of the Method : findPetById
	* Description : Finds one pet by id
	* Parameter : id Number
	* Return : Promise <Pet>
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
	* Description : Finds one pet by status
	* Parameter : None
	* Return : Promise<Pets>
	*/
	deleteOrderById(id) {
		return new Promise(async (resolve, reject) => {
			Order.findOneAndDelete({id: id}, function (err, result) {
				if (err)  reject(error);
				resolve(result);
			  });
		});
	}
}

module.exports = new QueryHandler();

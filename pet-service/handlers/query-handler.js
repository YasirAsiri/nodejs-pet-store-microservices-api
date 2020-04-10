'use strict';
const database = require('./../config/database');
const Pet = require('./../config/pet-schema');


class QueryHandler{

	/*
	* Name of the Method : addNewPet
	* Description : Inserts new pet model in the database
	* Parameter : 
	*		1) petData <Pet>
	* Return : Promise <Pet>
	*/
	addNewPet(petData) {
		return new Promise( async (resolve, reject) => {
			const pet = new Pet(petData);
			pet.save(function (err) {
				if (err) reject(err)
				resolve(pet);
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
	findPetById(id) {
		return new Promise(async (resolve, reject) => {
			Pet.find({id: id}, function (err, result) {
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
	findPetByStatus(status) {
		return new Promise(async (resolve, reject) => {
			Pet.find({status: status}, function (err, result) {
				if (err)  reject(error);
				resolve(result);
			  });
		});
	}
}

module.exports = new QueryHandler();

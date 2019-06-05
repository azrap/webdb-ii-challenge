const knex=require('knex');
const db = require('./dbConfig');
const express = require('express')

module.exports = {
    find,
    findById,
    add,
    remove,
    update
  };



// Select * from zoo;

function find() {
    return db('zoos')

}

// Select * from zoos where id=x;
 function findById(id) {
    return db('zoos').where({id}); //can also say ('id', id)
}

// INSERT INTO zoo VALUES ('name');
function add(zoo){
    return db('zoos').insert(zoo);
}


function update(id, changes) {
    return db('zoos').where({id}).update(changes);

}

function remove(id) {
    return db('zoos')
      .where({ id })
      .del();
  }



// async function execute(){
//     zoos = await find();
//     console.log(zoos);
  
// }

// execute();

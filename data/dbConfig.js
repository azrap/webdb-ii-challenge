const knex = require('knex');

const configOptions = {
    client: 'sqlite3',
    connection: {
        filename:"./data/lambda.db3"
    },
    useNullAsDefault:true
};

module.exports = knex(configOptions);



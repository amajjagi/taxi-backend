const mysql = require('mysql2');

const pool = mysql.createPool({

    host :'localhost',
    user:'root',
    database:'node_complete',
    password:'mysql@123',
    multipleStatements: true
});

module.exports = pool.promise();
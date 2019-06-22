const mysql = require('mysql');
const config = requiere('./config.js');

const connection = mysql.createConnection(config);

module.exports = {
    getConnection: () => {
        return new Promise((resolve, reject) => {
            connection.getConnection((err, sql) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(sql);
                }
            });
        });
    }
}
module.exports = {

    get: async (connection) => {
        return new Promise((resolve, reject) => {
            connection.query(`CALL filterTodo(?)`, (error, results, fields) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    },
    insert: (body) => {
        return null
    },
    update: (body) => {
        return null
    }
}
const connection = require('../database/connection');
const methods = require('../methods/method');

module.exports = {
    ping :(req, res) => {
        res.status(200).json({ 'response': 'ping' });
    },
    get :async (req, res) => {
        let sql;
        try {
            sql = await connection.getConnection();
            let result = await methods.get(sql);
            res.status(200).json(result);
            sql.release();

        } catch (e) {
            sql.release();
            res.status(500).json({ 'error': e.message });
        }
    },
    post : (req, res) => {
        try {
            res.status(200).json({ 'message': 'post' });
        } catch (e) {
            res.status(500).json({ 'error': e.message });
        }
    },
    put : (req, res) => {
        try {
            res.status(200).json({ 'message': 'put' });
        } catch (e) {
            res.status(500).json({ 'error': e.message });
        }
    }
}



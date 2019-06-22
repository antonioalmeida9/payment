const express = require('express');
const paymentController = require('../controllers/controller');

const router = express.Router();

router.use((req,res,next) => {
    console.log('Time', Date.now());
    next();
});

router.get('/ping',paymentController.ping);
router.get('/',paymentController.get);
router.post('/',paymentController.post);
router.put('/',paymentController.put);

module.exports = router;
const { Router } = require('express');
const router = Router();
const ctrl = require('./common.ctrl');


router.get('/', ctrl.get_Hello)



module.exports = router;





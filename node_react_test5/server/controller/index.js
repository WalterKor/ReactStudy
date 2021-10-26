const { Router } = require('express');
const router = Router()

/*router 설정해주기*/
router.use('/common', require('./common'));
// router.use('/user', require('./User'));
router.use('/user', require('./user'));

module.exports = router;
const { Router } = require('express');
const router = Router()

/*router 설정해주기*/
router.use('/common', require('./common'));

module.exports = router;
const { Router } = require('express');
const router = Router()

/*사용할 url index*/
router.use('/login', require('./login'));
router.use('/logut', require('./logout'));
router.use('/mypage', require('./mypage'));


module.exports = router;
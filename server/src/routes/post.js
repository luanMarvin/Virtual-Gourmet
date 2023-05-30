const Router = require('koa-router');
const router = new Router();

//Controllers
const infoController = require('../controllers/infoController');

//Routes
router.post('/infos', infoController.postInfo);

module.exports =  router ;
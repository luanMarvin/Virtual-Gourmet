const Router = require('koa-router');
const router = new Router();

//Controllers
const infoController = require('../controllers/infoController');

//Routes
router.get('/infos', infoController.getInfo);

module.exports =  router ;
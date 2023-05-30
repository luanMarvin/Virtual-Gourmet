const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const getRouter = require('./src/routes/get');
const postRouter = require('./src/routes/post');
const app = new koa();

app.use(bodyParser());
app.use(getRouter.routes());
app.use(postRouter.routes());

port = 8080;
app.listen(port, console.log(`Servidor online: 127.0.0.1:${8080}`));

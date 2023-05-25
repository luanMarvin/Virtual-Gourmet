const koa = require('koa');
const router = require('./src/routes/get');
const app = new koa();

app.use(router.routes());

port = 8080;
app.listen(port, console.log(`Servidor online: 127.0.0.1:${8080}`));

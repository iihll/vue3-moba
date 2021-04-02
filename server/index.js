const Koa = require('koa')
const app = new Koa()

app.use(require('@koa/cors')())

app.use(require('koa-json')())

app.use(async ctx => {
  ctx.body = { foo: 'bar' }
})

require('./plugins/db')(app)

app.listen(3000)
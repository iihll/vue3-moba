const Koa = require('koa')
const app = new Koa()
const static = require('koa-static')

app.use(require('@koa/cors')())

app.use(require('koa-json')())

// app.use(async ctx => {
//   ctx.body = { foo: 'bar' }
// })

app.use(static(__dirname + '/public'))

// require('./plugins/db')(app)

require('./routes/admin')(app)

app.listen(3000)
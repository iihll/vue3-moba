// const koa = require('koa')
const Router = require('@koa/router')

const router = new Router()

module.exports = app => {
  router.post('/', async (ctx, next) => {
    ctx.body
    next()
  })

  app.use(router.routes())
}
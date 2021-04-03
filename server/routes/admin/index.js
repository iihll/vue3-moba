// const koa = require('koa')
const Router = require('@koa/router')

const router = new Router()

module.exports = app => {
  router.post('/', async (ctx, next) => {
    ctx.body = 'test'
    next()
  })

  router.post('/login', async (ctx, next) => {

  })

  app.use(router.routes())
}
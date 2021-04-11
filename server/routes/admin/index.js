// const koa = require('koa')
const Router = require('@koa/router')
const query = require('../../plugins/db')

const router = new Router()

module.exports = app => {
  router.get('/login', async (ctx, next) => {
    // const res = await query('select username,password from adminuser where username=?', [username])
    const data = await query(`select * from adminuser`).catch(err => {
      console.log(err)
    })
    data.forEach(row => {
      if(row.username === 'admin') {
        console.log(typeof row)
        ctx.body = row
      }
    })
    
  })

  app.use(router.routes())
}
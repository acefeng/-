const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const routerBase = require('./routes/routerBase')
const n_env = process.env.NODE_ENV == 'development'

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'nunjucks'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 对开发环境做的兼容代码
if(n_env) {
  app.use(async (ctx, next) => {
    if(/^\/dist/.test(ctx.url)) {
      ctx.redirect("http://localhost:8080"+ctx.url);
    } else {
      await next();
    }
  });  
}

// routes
app.use(routerBase.routes(), routerBase.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app

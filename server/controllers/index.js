const n_env = process.env.NODE_ENV == 'development';
const user = require('../services/user');

class textIndex {
    async getIndex(ctx){
        // await user.addUser(0, 'asdf', 123);  数据层数据进入
        // await ctx.render('index', {
        //     title: 'Hello Koa 2!',
        //     n_env
        // })
    }
 
    // async postIndex(ctx){
    //     await ctx.render('index', {
    //     })
    // }

    async getString(ctx, next){
        ctx.body = 'koa2 string'
    }

    async getJson(ctx, next){
        ctx.body = {
          title: 'koa2 json'
        }
    }
}

module.exports = textIndex;

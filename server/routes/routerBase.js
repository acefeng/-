const router = require('koa-router')();
var path = require('path');
var fs = require("fs");
// router.prefix('/users')

(function() {
  const files = fs.readdirSync(__dirname);
  let mainRouters = [];
  for (let i=0; i < files.length; i++) {
    if(!/^routerBase/.test(files[i]) && fs.statSync(path.join(__dirname,files[i]))) {
      mainRouters = mainRouters.concat(require(`./${files[i]}`));
    }
  }
  try {
    for(item of mainRouters){
      if(item[0] === 'GET') {
        (function addGetRouter() {
          const thisRoute = require(path.resolve(__dirname, item[2]));
          router.get(item[1], new thisRoute()[item[3]]);
        })()
      }else if(item[0] ==='POST') {
        (function addPostRouter() {
          const thisRoute = require(path.resolve(__dirname, item[2]));
          router.get(item[1], new thisRoute()[item[3]]);
        })()
      }else {
        throw 'router is not get or post'
      }
    }
  } catch(err) {
    console.error(err);
  }
})()

module.exports = router

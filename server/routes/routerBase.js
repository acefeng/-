const router = require('koa-router')();
var path = require('path');
var fs = require("fs");
// router.prefix('/users')

const files = fs.readdirSync(__dirname);
let mainRouters = [];
for (let i=0; i < files.length; i++) {
  if(!/^routerBase/.test(files[i]) && fs.statSync(path.join(__dirname,files[i]))) {
    mainRouters.push(require(`./${files[i]}`));
  }
}
try {
  mainRouters.forEach(itemRouters => {
    let obj = null;
    itemRouters.forEach((item,index) => {
      const thisRoute = require(path.resolve(__dirname, item[2]));
      if(index === 0) {
        obj = new thisRoute();
      }
      if(item[0] === 'GET') {
        router.get(item[1], obj[item[3]].bind(obj));
      }else if(item[0] ==='POST') {
        router.post(item[1], obj[item[3]].bind(obj));
      }else {
        throw 'router is not get or post'
      }
    })
  })
  for(item of mainRouters){
    
  }
} catch(err) {
  console.error(err);
}

module.exports = router

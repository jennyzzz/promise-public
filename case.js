 let Promise1 = require('./promise');
let p = new Promise1(function (resolve,reject) {
   resolve('hello')
})
p.then(function(data){
  return new Promise1((resolve,reject)=>{
    resolve(new Promise1((resolve,reject)=>{
      setTimeout(() => {
        resolve(1000);
      }, 1000);
    }));
  })
}).then(function (data) {
  console.log(data);
},function (err) {
  console.log('err',err);
});
// promise要求必须异步执行then方法
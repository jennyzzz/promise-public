//let Promise = require('./2.promise');
let p = new Promise(function (resolve,reject) {
  resolve();
});
p.then(function (value) {
  console.log('val',value);
  return new Promise(function(resolve,reject){
    reject(1000)
  })
},function (reason) {
  console.log('rea',reason);
}).then(function (data) {
  console.log(data);
})

// then执行后应该返回一个新的promise
// 因为promise的状态 一旦失败就不能再成功了
// Promise.reject().then(null,(reason)=>{
//   return 100
// }).then((data)=>{
//   console.log(data);
// },err=>{})
let Promise1 = require('./3.promise');
let p = new Promise1(function (resolve,reject) {
  setTimeout(() => {
    resolve();
  }, 1000);
});
let p1 = p.then(function (data) {
  // 循环引用 因为自己永远不会完成
  return p1
})

// .then(function (data) {
//   // 如果返回的结果 和p1 相等 ,返回循环引用
//   return data+2000;
// },function (err) {
//     console.log(err)
// }).then(data=>{
//   console.log(data);
// })

// then执行后应该返回一个新的promise
// 因为promise的状态 一旦失败就不能再成功了
// Promise.reject().then(null,(reason)=>{
//   return 100
// }).then((data)=>{
//   console.log(data);
// },err=>{})
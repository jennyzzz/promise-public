let Promise = require('./promise');
let p = new Promise(function (resolve, reject) {
  reject('hello')
})
// p.then().then().then().then((data)=>{
//   console.log(data);
// })
p.then().then().then().then((data) => {
  console.log(data);
},err=>{
  console.log(err)
})
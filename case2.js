let fs = require('fs');

function read(url, encoding) {
  return new Promise(function (resolve, reject) {
    fs.readFile(url, encoding, function (err, data) {
      //  promise 的成功或者失败 取决于你是怎样定义的
      if (err) reject(err);
      resolve(data)
    });
  });
}
// Promise.all 表示全部成功才成功 有任意一个失败 都会失败
Promise.all = function (promises) {
  return new Promise((resolve,reject)=>{
    let arr = [];
    let currentIndex = 0;
    function processData(index,val) {
      arr[index] = val;
      currentIndex++; // 记录一下成功的次数
      // 如果达到了执行目标就让all的promise成功
      if(currentIndex === promises.length){
        resolve(arr);
      }
    }
    for(let i = 0; i<promises.length;i++){
      promises[i].then(function (data) {
        processData(i, data)
      },reject)
    }
  })
}
Promise.all([read('name.txt', 'utf8'), read('age.txt', 'utf8')]).then(data=>{
  console.log(data);
},err=>{
  console.log(err);
})


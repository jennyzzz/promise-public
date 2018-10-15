
// Case 1:
// 有一个函数可以接收一个函数，可以根据条件选择执行这个函数

 function after(times,callback) {
    return function () {
       if(--times === 0){
         callback();
       }
    }
 }
 let fn = after(3,function () {
   console.log('fn was called 3 times')
 });
 fn();
 fn();
 fn();

 // notes: fn is the result of func after executing, which is actually the anonymous function in line 5.
 // let fn = after      -> fn is after
 // let fn = after()    -> fn is the result of after executing
 // closure: a function which could call parameters in other scopes. 
 // In this case, fn(also the anonymous function in line 5) is a closure, which could treat outside parameter "times" as a global parameter.
 // For fn, "times" is a global parameter, and only was assigned to 3 once at the beginning. fn could change "times" inside fn.

 // callback is a function as a parameter, but not to execute now.
 // when callback() was called later, then to execute it.


// Case 2:
// read a file, but get the result after 3 seconds.

function read(callback) {
   setTimeout(() => {
     let r = 'zfpx'
     callback(r);
   }, 3000);
 }
 read(function (result) {
   console.log(result)
 });

// read a file
let fs = require('fs'); // fileSystem
// readFile 第一个参数是路径 如果用coderunner 目录指向的都是当前运行的根目录 , 编码 回调
//（err 所有的异步方法都需要捕获错误 但是不能try catch）
// try catch 用于同步
fs.readFile('./1.txt','utf8',function (err,data) {
  console.log(data);
});
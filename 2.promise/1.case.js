let Promise = require('./1.promise');
let p = new Promise(function (resolve,reject) {
    resolve();
});
p.then(function (value) {
  console.log('val',value);
},function (reason) {
  console.log('rea',reason);
});


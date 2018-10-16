// if using './1.promise', it couldn't handle the asych case.
// Promise from 1.promise would handle .then before setTimeout is due.
// So, we need './2.promise', using subscribe-publish to save the .then in an array first,
// then to execute .then after setTimeout is done.

let Promise = require('./1.promise');
let p = new Promise(function (resolve,reject) {
  setTimeout(() => {
    reject();
  }, 1000);
});

p.then(function (value) {
  console.log('val',value);
},function (reason) {
  console.log('rea',reason);
});

p.then(function (value) {
  console.log('val', value);
}, function (reason) {
  console.log('rea', reason);
});

p.then(function (value) {
  console.log('val', value);
}, function (reason) {
  console.log('rea', reason);
});

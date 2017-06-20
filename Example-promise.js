function getAddPromise (a ,b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    } else {
      reject("Only numbers allowed");
    }
  });
}
//then usa dois parametros, os dois são funcões
getAddPromise('la',20).then(function (result){
  console.log('Promise success', result);
}, function (err) {
  console.log('Error: ', err);
});

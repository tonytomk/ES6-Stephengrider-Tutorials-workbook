//Promises
// javascript doesn't have a property like sleep/pause a line of code execution for some time
// Whenever you want to make a request and the request to retrive the result may take time and you want to
// --notify when the results are available  


//3 States of Promise
// unresolved- waiting for something to finish
// resolved- something finished and it all went ok
// rejected- something finished and something went bad

// Promise- resolved --then (call back ppty)
// Promise- rejected --catch

//Native implementation of Promise in ES 6 no need to load any library



pro=new Promise((resolve,reject)=>{

});

pro=new Promise((resolve,reject)=>{
    resolve();
});


pro=new Promise((resolve,reject)=>{
    reject();
});

pro
  .then(()=>{
   console.log('finally done!');
   })
   .then(()=>{
       console.log('child also finally done!');
   })
   .catch(()=>{
    console.log('ayyo');
   });

//example 2
   
asyncProm=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },3000)
});
asyncProm
  .then(()=>{
   console.log('finally done!');
   })
   .then(()=>{
       console.log('child also finally done!');
   })
   .catch(()=>{
    console.log('ayyo');
   });

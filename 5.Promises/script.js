//Promises: Represents eventual completion/failure.
//three states of Promises: 1.Rejected 2.Pending 3.Fullfilled

// let promise = new Promise((resolve,reject) =>{ //resolve and reject are handler
//     console.log("I am a promise");
//     resolve(123);
// })

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("Success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     })
// }

//When a promise is fullfilled we use promise.then()
//When a promise is rejected we use promise.catch() 


//Sync function promise
// const getPromise = () => {
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         resolve("success");
//     });
// }

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// })   

//Async function promise
// function asyncFunction1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data1");
//             resolve("success1");
//         }, 4000);
//     });
// }

// function asyncFunction2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data2");
//             resolve("success2");
//         }, 4000);
//     });
// }

// console.log("fetching data1");
// let p1 = asyncFunction1();
// p1.then((res) => {
//     console.log(res);   
// });

// console.log("fetching data2");
// let p2 = asyncFunction2();
// p2.then((res) => {   // ✅ changed from p1 → p2
//     console.log(res);   
// });


//Promise Chain
function getData(dataId,getNextData){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("data",dataId);
            resolve("Success");
            if(getNextData){
                getNextData();
            }
        },5000);
    })
}

getData(1)
   .then((res)=>{
    return getData(2);
   })
   .then((res)=>{
    return getData(3);
   })
   .then((res)=>{
    console.log(res);
   });
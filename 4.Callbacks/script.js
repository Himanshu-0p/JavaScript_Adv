//Syncrohnous CallBack
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallBack){
    sumCallBack(a,b);
}

calculator(45,67,sum);

//Asynchronous Callback
const hello = () => {
    console.log("Hello")
}
setTimeout(hello,3000);

//CallbackHell:Callback Hell → deeply nested callbacks → hard to read, debug, maintain
function getData(dataId,getNextData){
    setTimeout(() =>{
        console.log("data",dataId);
    if(getNextData){
        getNextData();
    }
    },2000)
}
//this is callback hell
getData(1,() => {
    getData(2,() => {
        getData(3,()=>{
            getData(4)
        })
    })
});

//Callback hell is a problem to solve this Promises comes in role


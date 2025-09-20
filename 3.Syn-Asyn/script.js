// Synchronous Code (Sync): Code runs strictly line by line
//Asynchronous Code (Async): Code that may take time (wait) but does not block the rest of the program from executing immediately

function waitrun(val){
    setTimeout(() =>{
        console.log(val);
    },Math.floor(Math.random()*10));
}

waitrun(12);

//
function runAsync(fnc){
    setTimeout(fnc,Math.floor(Math.random()*20)*1000);
}

runAsync(function(){
    console.log("Hello World");
}); 

//set timeout function
function hello(){
    console.log("Hello World");
}
setTimeout(hello,2000);  //2 sec ke baad hello call hoga

function hello1(){
    setTimeout(() => {
        console.log("Hello World");
    },3000);
}

//Aysnc code 
console.log("one");
console.log("two");
setTimeout(() =>{
    console.log("three");
},3000)
console.log("four");
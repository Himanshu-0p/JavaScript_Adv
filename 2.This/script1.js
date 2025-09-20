//call apply blind 
//function ko call karte waqt aap set kr skte ho ki uski this ki value kya hogi

let obj = {
    name : "Harsh",
}
function abcd(){
    console.log(this);
}
abcd.call(obj);

let obj1 = {
    name:"Himanshu"
}
function abcd1(a,b,c){
    console.log(this,a,b,c)
}
abcd.call(obj,[1,2,3]); 
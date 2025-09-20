//This : is a keyword and it is very special
//Unlike other keywords its key value and nature changes based on the context
//It is used to refer to the current object
//It is a reference variable that refers to the current object


//global scope
console.log(this);

//function ke andar
function show() {
    console.log(this);
}
show();

let obj = {
    name :"Harsh",
    sayName:function(){      //Ek aisa function jo object ke andhar ho                         use hum methoda bolte hai
        console.log(this);
    }
}
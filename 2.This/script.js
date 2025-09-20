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
        console.log(this.name);
    }
}

//So far we have seen that [this] is Window in Global and Function Scope
//But in case of Object it is the object itself

//Event Handler
document.querySelector("h1").addEventListener("click", function() {
    this.style.color = "red";
    console.log(this.style.color);
});
//this depends on how the handler is defined

//In [class] this->blank object

//In obj method this->object right but there is some exception
let obj2 = {
    name: "Harsh",
    sayName: () => {      //Arrow function due to which this is not working as expected 
        console.log(this.name);
    }
}

//this keyword
// global - window
// function - window
// method with es5 function - Object
// method with es6 arrow function - window
// es5 function inside es5 method - window
// arrow function inside es5 method - Object
// event handler - Element
// class - blank object


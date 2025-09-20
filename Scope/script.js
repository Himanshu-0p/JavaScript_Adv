//Scope:Scope defines where you can use your created variables and functions

//Types of Scope
//function scope : function ke andar hi use ho sakti hai
//global scope : poore code mein kahi bhi use ho sakti hai
//block scope : {} curly braces mein hi use ho sakti hai


//Execution Content
// Definition: A hypothetical stage or space allocated by JavaScript specifically for a function to run.
// • Purpose: Allocates memory for variables and functions, and runs the code within that allocated space.
// • Two Phases of EC:
//     1. Memory Phase: Space (memory) is allocated for all variables and functions.
//     2. Execution Phase: The code runs line by line within that allocated space

//JavaScript follows Lexical Scoping
//It means ki aap kaha physically present available ho ye poori tareeke se depened krega ki app ky access karoge

function abcd(){
    let a = 12     //a is lexical scopped to abcd
    function defg(){
        console.log(a);
    }
}

//dynamic scopping -> kall se call kr he ho uspe depend krega ki kya value milegi

function defg(){
    let a = 13;
    abcd();
}
defg();

// closures: Hote hai functions jo ki kisi parent function ke andar ho
//           aur andar wala function return ho raha ho and returning use 
//           kare parent function ka koi variable

function abcd(){
    let a = 12;
    return function(){
        console.log(a)
    }
}

let func = abcd();
func();

//ye sach hai func ke khatam hone pe apka func and uska variables khtm hojaate hai par jab bhi closure banta hai to aapka fnc aur uske variables ek backline bnaya jaata hai aur uska naam hota hai

//Use cases of this Private 
function countForMe(){
    let c = 0;
    return function(){
        c++;
        console.log(c);
    }
}
let fnc = countForMe;
fnc();
fnc();
fnc();


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

// 
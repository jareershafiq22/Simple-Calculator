#! /usr/bin/env node

import inquirer from "inquirer";

//Printing a Welcome Massage
console.log("\n\tWelcome To \ 'JareerShafiq'\ - CLI Simple Calculator\n");

//Asking Questions from Users thought Inquirer

let answers = await inquirer.prompt([
    {massage: "Enter First Number", type: "number", name: "firstNumber"},
    {massage: "Enter Second Number", type:"number", name: "secondNumber"},
{
     message :"Select one Operator to perfom Operations",
     type :"list",
     name :"operator",
     choices : ["Addition","Subtraction", "Multiplication","Divison"],
     }
    ]);

//Conditonal statements If-Else

if (answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator === "Subtraction"){
    
    console.log(answers.firstNumber-answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber *answers.secondNumber)
}
else if(answers.operator === "Divison"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log ("Invalid Input")
}   
alert("Welcome to Calculator");

var num1 = prompt ("enter first number:");
alert("You have selected " + num1);
var num2 = prompt ("enter second number: ");
alert("You have selected " + num2);
var x = prompt ("Enter which operation you want to choose: " + " 1. Addition " + " 2.Subtraction " + " 3.Multiplication " +  " 4. Division ");

alert("You have selected " + choice);

var choice = parseInt(x);
var a = parseInt(num1);
var b = parseInt(num2);

var add = (num1, num2) => {return num1 + num2};
var subtract = (num1, num2) => {return num1 - num2};
var multiply = (num1, num2) => {return num1 * num2};
var divide = (num1, num2) => {return num1 / num2};


if (choice == 1){  
    alert(add(a, b));
}
else if (choice == 2){  
   
    alert(subtract(a, b));
}
else if (choice == 3){  
   
    alert(multiply(a, b));
}
else if (choice == 4){  
  
    alert(divide(a, b));
}
else
    console.log("Invalid Operation");





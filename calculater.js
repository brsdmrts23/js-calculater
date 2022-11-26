var result = prompt("Enter a number:");
result = Number(result);

do{
    var transaction = prompt("Chose a transaction '+' , '-' , '*' , '/' , '=' ");
   
    if(transaction != "="){var num2 = prompt("Enter a other number:"); }
    num2 = Number(num2);
   
    var num1 = result;
   
    switch(transaction){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;    
            break;      
    }

}while(transaction != "=")

console.log(result);




try {
        var result = prompt("Enter a number (! just enter = 0 !):");result = Number(result);
   
             if(isNaN(result) === true){throw new TypeError ("The value you enter must be a number");}
    
} catch (error) {
   
        while(isNaN(result)){ alert(error.message);result = prompt("Enter a number (! just enter = 0 !):");}

}

result = Number(result);



do{

    try {
        
        var transaction = prompt("Chose a transaction '+' , '-' , '*' , '/' , '= :: If you want to see the result' ");
        
             if(transaction !== ("+") && transaction !== ("-") && transaction !== ("*") && transaction !== ("/") && 
                    transaction !== ("=")){throw new TypeError("You have to choose one of the operations")}
        
    } catch (err) {

        while(transaction !== ("+") && transaction !== ("-") && transaction !== ("*") && transaction !== ("/") && 
                transaction !== ("=")){alert(err.message);
                  transaction = prompt("Chose a transaction '+' , '-' , '*' , '/' , '= :: If you want to see the result'");}
    }

    if(transaction != "="){
    
    try {
    
        var num2 = prompt("Enter a other number (! just enter = 0 !):"); num2 = Number(num2);

            if(isNaN(num2) === true){throw new TypeError ("The value you enter must be a number");}

    } catch (er) {

          while(isNaN(num2)){ alert(er.message);num2 = prompt("Enter a other number (! just enter = 0 !):");}
    
    }   

}
    
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

alert(result);
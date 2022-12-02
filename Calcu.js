var input2 = "";
var secim;
var input4 = "";
var result = 0;

do{
    var input1 = prompt("Input");

        try {

               if(isNaN(Number(input1)) && input1 !== "+" && input1 !== "-" && input1 !== "=" && input1 !== "*" && input1 !== "/")
                    {throw new TypeError ("Invalid input"); }

            } catch (error) {

                    while(isNaN(Number(input1)) && input1 !== "+" && input1 !== "-" && input1 !== "=" && input1 !== "*" && input1 !== "/")
                        {alert(error.message);input1 = prompt("Input");}

            }


  if(!(isNaN(Number(input1)))){
    input2 += input1;
  }
 

}while(input1 !== "+" && input1 !== "-" && input1 !== "=" && input1 !== "*" && input1 !== "/")
secim = input1;
if(secim === "=")
    result = Number(input2);
    
while(secim !== "="){
do{
    if(secim === "=")
        break;

    var input3 = prompt("Input");

        try {

               if(isNaN(Number(input3)) && input3 !== "+" && input3 !== "-" && input3 !== "=" && input3 !== "*" && input3 !== "/")
                    {throw new TypeError ("Invalid input"); }

            } catch (error) {

                    while(isNaN(Number(input3)) && input3 !== "+" && input3 !== "-" && input3 !== "=" && input3 !== "*" && input3 !== "/")
                        {alert(error.message);input3 = prompt("Input");}

            }


  if(!(isNaN(Number(input3)))){
    input4 += input3;
  }
 
}while(input3 !== "+" && input3 !== "-" && input3 !== "=" && input3 !== "*" && input3 !== "/")

switch (secim) {
    case "+":
        result = Number(input2) + Number(input4);
        input2 = String(result);
        input4 = "";
        break;
    case "-":
     result = Number(input2) - Number(input4);
     input2 = String(result);
     input4 = "";
     break; 
    
     case "*":
        result = Number(input2) * Number(input4);
        input2 = String(result);
        input4 = "";
        break;
    case "/":
        result = Number(input2) / Number(input4);
        input2 = String(result);
        input4 = "";
        break;    
    default:
        break;
}

secim = input3;

}
alert(result);
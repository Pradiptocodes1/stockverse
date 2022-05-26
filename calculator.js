

function Multi(){
    
    var money1 = document.getElementById("money").value;
    var year1 = document.getElementById("year").value;
    var Stock_name = document.getElementById("stock").value;
    
    switch(Stock_name){
        case "Asian Paints": 
        var RI = 1.67;
        var Stock_value=3050;
        break;

        case "Ambuja Cements ": 
        var RI = 0.24;
        var Stock_value=361.95;
        break;
        case "Axis Bank": 
        var RI = -1.49;
        var Stock_value=649.75;
        break;
   
        case "Bajaj Finance": 
        var RI = -2.22;
        var Stock_value=5686.30;
        break;
        case "Bharat Petroleum": 
        var RI = -1.55;
        var Stock_value=326.75;
        break;
        
        case "Bank Of Baroda": 
        var RI = -2.61;
        var Stock_value=96.85;
        break;
        
        case "Cipla": 
        var RI = -0.76;
        var Stock_value=949.85;
        break;
        case "Dr Reddys Laboratories": 
        var RI = -0.84;
        var Stock_value=3873;
        break;
        case "DLF": 
        var RI = -1.22;
        var Stock_value=321;
        break;
    
        case "Godrej Consumer Products": 
        var RI = -1.95;
        var Stock_value=814.2;
        break;
        case "Tata Motors ": 
        var RI = -2.28;
        var Stock_value=405.7;
        break;
        case "Hindustan Unilever": 
        var RI = -1.38;
        var Stock_value=2259.70;
        break;
        case "Housing Development Finance Corporation": 
        var RI = -2.01;
        var Stock_value=2140.60;
        break;
        case "IRCTC": 
        var RI = -2.28;
        var Stock_value=656.45;
        break;
        case "Jindal Steels & Power": 
        var RI = -3.82;
        var Stock_value=463.90;
        break;
        case "Kotak Mahindra Bank": 
        var RI = -1.77;
        var Stock_value=1814.20;
        break;
        case "Muthoot Finance": 
        var RI = -2.09;
        var Stock_value=1161.8;
        break;
        case "Oil And Natural Gas Corporation": 
        var RI = -0.86;
        var Stock_value=161.80;
        break;
        case "Reliance Industries": 
        var RI = -1.4;
        var Stock_value=2502.85;
        break;
        case "Sun Pharmaceutical Industries": 
        var RI = -1.55;
        var Stock_value=326.75;
        break;
        case "Tata Steel": 
        var RI = -3.01;
        var Stock_value=1144.75;
        break;
        default:
            var RI = 1;
            var Stock_value = 1;
            break;
    
    }
    
    // var CoI = ((RI)*(year1)*(money1))/100 ;
     var CoI = Math.floor((year1 * (money1/Stock_value) * RI)/100);

  
     
//  let total = CoI+money1;
    
        alert("You purchased Stock of "+Stock_name +" having stock value "+Stock_value+" and it's current rate is "+ RI  +"% by investing money  "+money1+" for "+year1+" months Time ");
        alert("Your intrest upon it " + CoI);
         if(CoI>0)
         {
             alert("You Gained Profit :)");
         }
         else{
             alert("You Gained loss :(");
         }

         alert("Try again");
       
    }

    
    
   

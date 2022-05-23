     var x = 20
     var y = 20
     var x = prompt('Enter your First Number');
     var y = prompt('Enter your Second Number');
     x=parseInt(x,10);
     y=parseInt(y,10);

    if(x < y){
        console.log("this is right");
    }
    else if(x > y){
        console.log("no,this is not right.");
    }
    else{
        console.log("both same");
    }

    // Simple Result Grade program 
    
     var marks = prompt('Enter your marks:');

     if( marks > 100 ){
          document.write("invalid number");
         }
         else if( marks >= 80 && marks <= 100 ){
          document.write("A+");
         }
         else if( marks >= 70 && marks <= 79){
          document.write("A");
         }
         else if( marks >= 60 && marks <= 69){
          document.write("A-");
         } 
         else if( marks >= 50 && marks <= 59){
            document.write("B");
         }
         else if( marks >= 40 && marks <= 49){
            document.write("C");
         }
         else if( marks >= 33 && marks <= 39){
            document.write("D");
         }
         else {
            document.write("fale")
         }
        
         //Facebook loging program---
         var yourMobileNumber = parseInt(prompt("Enter your Mobile Number"));
         var yourFbPassward = prompt("Enter Your Passward");

           if(yourFbPassward == 'ashraful0074' && yourMobileNumber == '01315042591'){
               document.write('Your Mobile Number & passward is right');
           }
           else {
               document.write('invalid passward');
           }
           

         
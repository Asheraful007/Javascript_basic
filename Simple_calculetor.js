   //siple calculetor program//

   var num1 = prompt('Enter your First Number');
   var num2 = prompt('Enter your Second Number');
    num1=parseInt(num1,10);
    num2=parseInt(num2,10);

    var plus,mainas,multipul,division,modulas;

    plus = num1 + num2;
    document.write('Plus = ' + plus + '<br/>');

    mainas = num1 - num2;
    document.write('Mainas = ' + mainas + '<br/>');

    multipul = num1 * num2;
    document.write('Multipul =' + multipul +'<br/>');

    division = num1 / num2;
    document.write('Division =' + division +'<br/>');

    modulas = num1 % num2;
    document.write('Modulas =' + modulas +'<br/>');

// Input event is used to show change at the particular moment

var cel = document.getElementById('cel');
var fah = document.getElementById('fah');
var kel = document.getElementById('kel');

var decimalDigits = 2;

// For fahrenheit part

cel.addEventListener('input', function(){

    let c = this.value // storing the value

    // Converting to Fahrenheit

    let f = (c * 9/5) + 32;

    // Checking for number of decimal places

    if(!Number.isInteger(f)){
        f = f.toFixed(decimalDigits);
    }

    // Changing the value of fah

    fah.value = f;

    // Converting to Kelvin

    let k = (c * 1) + 273.15;

    if(!Number.isInteger(k)){
        k = k.toFixed(decimalDigits);
    }

    kel.value = k;

});

// For celsius part

fah.addEventListener('input', function(){

    let f = this.value; // storing the value

    let c = (f - 32) * 5/9; // converting to celsius

    // Checking for number of decimal places

    if(!Number.isInteger(c)){
        c = c.toFixed(decimalDigits);
    }
 
    cel.value = c; // changing to celsius

    let k =   (f - 32) * 5/9 + 273.15;

    if(!Number.isInteger(k)){
        k = k.toFixed(decimalDigits);
    }

    kel.value = k;

});

// For kelvin part
kel.addEventListener('input', function(){
     
    let k = this.value; 

    // Converting kelvin to celsius

    let c = (k - 273.15);

    if(!Number.isInteger(c)){
        c = c.toFixed(decimalDigits);
    }

    cel.value = c;

    // Converting kelvin to fahrenheit

    let f = (k - 273.15) * 9/5 + 32;

    if(!Number.isInteger(f)){
        f = f.toFixed(decimalDigits);
    }

    fah.value = f;

});

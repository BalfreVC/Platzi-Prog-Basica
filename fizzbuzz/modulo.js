var numeros = 100; 
var mod3 = moduleOf(3); 
var mod5 = moduleOf(5);
var typeNum; 

for (var i=1; i<=numeros; i++) {
    typeNum = true; 
    if (mod5(i)) {
        document.write("Fiz"); 
        typeNum = false; 
    }
    if (mod3(i)) {
        document.write("Buzz"); 
        typeNum = false; 
    } 
    if (typeNum) {
        document.write(i); 
    }
    document.write("<br />"); 
}

function moduleOf(n) {
    return (x) => (x % n == 0 ) ? true : false;
}
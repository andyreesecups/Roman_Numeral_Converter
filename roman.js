
function convertToRoman(num) {
  var obj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  },
    
  roman = "";
  
  // Find the largest value in obj
    for (var i in obj) {

      // while num is greater than or equal to the value of the object property...
       while (num >= obj[i]) {

        // Add string value to roman
         roman += i;

         // decrement num by the value of the object's property 
         num -= obj[i];
       } 
      }
  
  
 return roman;
}

convertToRoman(36);
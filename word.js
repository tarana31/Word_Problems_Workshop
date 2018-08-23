// #Problem : 1

// function wordstring(str) {
        
//     var newstring= "";
//     for(var i= str.length-1; i>=0; i--) {
//         newstring = newstring + str[i];
//     console.log(newstring);
//     }
// }
// wordstring('Hello');



// #Problem : 2

// for (var i=1; i <= 100; i++) {
//     if(i % 3 == 0){                           //nested if for multiple of 3 and 5
//         if(i % 5 == 0){
//             console.log("FizzBuzz");
//         } else {
//             console.log("Fizz");
//         }
//     } else  if(i % 5 == 0) {
//         console.log("Bizz");
//     } else {
//         console.log(i);
//     }
// }


// #Problem : 3

function convert(str) {
    var vowel =['a','e','i','o','u'];
    var abc = '';
    var arr= str.split('');          //split a string into an array of substrings, and returns the new array
    
    for( var i=0; i<vowel.length; i++){           
        for(var j=0;j<str.length;j++){
            if(str[j]===vowel[i]) {
                for(var x=j;x<str.length;x++){
                    abc=abc+str[x];
                }
                for (var n=0;n<j;n++)
                {
                    abc=abc+str[n];
                }
                return abc + "ay";
            }
        }
        console.log(str);
    }
    
}
console.log(convert("bulrush"));
console.log(convert("icecream"));
console.log(convert("monopoly"));

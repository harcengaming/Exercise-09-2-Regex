//No. 01
//Huruf pertama adalah besar
let regex2 = /(?=.*[A-Z])/;
console.log(regex2.test("Harcen"));

//atau
let regex5 = /[^a-z]+/g;
console.log(regex5.test("Harcen"));



//Huruf pertama bukan besar
let regex3 = /^[a-z]/;
console.log(regex3.test("harcen"));



//No. 02
//Nomor HP 
// let regex4 = /^[0-9]{10,12}$/;

// let regex4 = /^.{10,12}/;

//Berhasil min 10, max 12
let regex4 = /^([^0-9]*[0-9]){10,12}[^0-9]*$/;
console.log(regex4.test(0857402834545));

//No. 03
let regex6 = /(?:abc)/;
let myRegex = "Bagaimana cara memulai usaha bisnis";
console.log(regex6.test(myRegex));

let regex7 = /(?=abc)/;
let myRegex2 = "Bootcamp impact byte";
console.log(regex7.test(myRegex2));

let regex8 = /(?!abc)/;
let myRegex3 = "Status covid hari ini";
console.log(regex8.test(myRegex3));


//No. 04
let regex9 = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,}/;
let myRegex4 = "Harcen Gaming";

console.log(myRegex4);
console.log(regex9.test(myRegex4));


let regex10 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
let myRegex5 = "Skillvul9&";
console.log(myRegex5);
console.log(regex10.test(myRegex5));

let regex11 = /h/gi;
let myName = "Harcen";
console.log(myName.match(regex11));

//Sudah Cukup
var pwdList = 
[
    '@@V4-\3Z`zTzM{>k',
    '12qw!"QW12',
    '123qweASD!"#',
    '1qA!"#$%&',
    'Günther32',
    '123456789',
    'qweASD123',
    'qweqQWEQWEqw',
    '12qwAS!'
  ],
  re = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
  
  pwdList.forEach(function (pw) {
    document.write('<span style="color:'+ (re.test(pw) ? 'green':'red') + '">' + pw + '</span><br/>');
  });
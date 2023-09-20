//Uchburchak yuzini topish 

// function STriangle(a, h) {
//  let S = 0;
//  S = (a*h)/2;
//  return S;
// }



//Aylana uzunligini topish

// function LCircle(r){
//   let p = 3.14;
//   S = 2 * p * r;
//   return S;
// }


//Doira yuzini topish

// function SCircle(r){
//   let p = 3.14;
//   S = p * (r**2);
//   return S;
// }



//sonni polindromlikka tekshirish

// function isPolindrom(n) {
//   let yuzlik = parseInt(n / 100) * 100;
//   let unlik = (parseInt((n / 10)) - parseInt((n / 100)) * 10)  * 10;
//   let birlik = n - parseInt(n / 100) * 100 - (parseInt((n / 10)) - parseInt((n / 100)) * 10)  * 10;
//   let result = (birlik*100) + (unlik) + (yuzlik / 100);

//   if(n === result) {
//     console.log("polindrom") ;
//   } else {
//     console.log("polindrom emas!");
//   }


// }
// isPolindrom(121);






// FizzBuzz

// function FizzBuzz(n) {
//   for(let i = 1; i <= n; i++){
//     if( i % 3 === 0 && i % 5 ===0) {
//       console.log("FizzBuzz");
//     } else  if(i % 3 === 0) {
//       console.log("Fizz")
//     } else if( i % 5 === 0) {
//       console.log("Buzz");
//     } else{
//       console.log(i);
//     }
//   }
// }


// FizzBuzz(100)
// --------------------Task1-------------------
// * * * * * * *
// * * * * * * *
// * * * * * * *
// * * * * * * *
// * * * * * * *

// n = 10;
// str = "";

// for(let q = 1; q <= n; q++) {
//   for(let u = 1; u <= n * 2 - 1; u++) {
//       if(u % 2 === 1){
//           str += "*";      
// } else {str += " "}
//     }
//     console.log(str); 
//     str = "";
// }





// --------------------Task2-------------------

// * * * * * * *
// *         * *
// *       *   *
// *     *     *
// *   *       *
// * *         *
// * * * * * * *

// let num = 7;
// let char = "* ";
// let str = '';

// for (let i = 0; i < num; i++) {
//   for (let j = 0; j < num; j++) {
//     if (j+i == num-1 || i == 0 || i == num-1 || j == 0 || j == num-1){
//       str += char;
//     } else {
//       str += '  ';
//     }   
    
//   }
//   str += '\n';
// }
// console.log(str);




//--------------------task3---------------




// * * * * * * * 
// * *       * * 
// *   *   *   * 
// *     *     * 
// *   *   *   * 
// * *       * * 
// * * * * * * *


// let num = 7;
// let char = "* ";
// let str = '';

// for (let i = 0; i < num; i++) {
//   for (let j = 0; j < num; j++) {
//     if (j+i == num-1 || j-i == 0 || i == 0 || i == num-1 || j == 0 || j == num-1){
//       str += char;
//     } else {
//       str += '  ';
//     }
    

//   }
//   str += '\n';
// }
// console.log(str);


//-----------task4--------------
 

//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//* * * * * * 




// let n =10;
// let str="";

// for (let i=1; i <=n; i++) {
//     for (let k =i; k<n; k++) {
//         str += " ";
//     }
//     for (let g=1; g<=i*2-1; g++) {
//         str += "*";
//     }
//     console.log(str);
//     str= "";
// }





//----------------task5------------------


// *             *
// * *         * *
// * * *     * * *
// * * * * * * * *



// let n = 4;
// let len = n * 2;
// let str="";
// for (let i=1; i <=n; i++) {
//   for (let j = 1; j <= len; j++) { 
//       str += (j <= i || len-j < i) ? '* ' : '  '
//    }
//     str += "\n";
//   }
//   console.log(str);



// for sikl bo`yicha masalalar




// --------------------------for1--------------------------------

// k va n butun sonlari berilgan (n > 0). k sonini n martta chiqaruvchi programma tuzing

// let k = 2;
// let x = 10;

// for(let n = 1; n <= x; n++ ) {
//  console.log(k)
// }


// --------------------------for2--------------------------------

// a va b butun sonalari berilgan. (a < b) a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini ham chiqaruvchi programma tuzish

// let b = 10;
// let a = 3;
// let sum = 0;

//  for ( a; a <= b; a++) {
//   console.log(a);
//   sum++;
//  }
//  console.log(`${sum} ta son bor`)


// --------------------------for3--------------------------------

// a va b butun sonlari berilgan. (a< b) a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi chiqarilgan sonlarni sonini chiqaruvchi progma tuzish

// let a = 3;
// let b = 10;
// let sum = 0;

// for(b -= 1; b > a; b--) {
//   console.log(b);
//   sum++;
// }
// console.log(`orasidagi sonlar ${sum} ta`)


// --------------------------for4--------------------------------

// Bir kg konfetning narxi berilgan. (haqiqiy son), 1,2.....10kg konfetning narxini chiqaruvchi programma tuzilsin

// let k = 15;
// let sum = 0;
// for(let kg = 1; kg <= 10; kg++) {
//  sum = kg * k;
//  console.log(sum);
// }



//---------------------------------------------------for5---------------------------

// Bir kg konfetning narxi berilgan. (haqiqiy son), 0.1, 0.2.....0.9, 1kg konfetning narxini chiqaruvchi programma tuzilsin


// let k = 15;
// let sum = 0;

// for(let kg = 0.1; kg <= 1; kg += 0.1) {
//   sum = kg * k;
//   console.log(sum);
// }

//----------------------------------------for6---------------------

// Bir kg konfetning narxi berilgan. (haqiqiy son), 1.2, 1.4.....2kg konfetning narxini chiqaruvchi programma tuzilsin
// let k = 15;
// let sum = 0;

// for(kg = 1.2; kg <= 2; kg += 0.2) {
//   sum = kg * k;
//   console.log(sum);
// }




//-------------------------------for7----------------------------------------------


// a va b butun sonlar berilgan (a < b). a dan b gacha bo`lgan barcha butun sonlar yig`indisini chiqaruvchi programma tusilsin

// let a = 3;
// let b = 10;
// let sum = 0;
// let result;

// for(a; a <= b; a++) {
//   sum += a;
// }
// console.log(sum);

//-------------------------------for8----------------------------------------------

// a va b butun sonlar berilgan (a < b). a dan b gacha bo`lgan barcha butun sonlar ko`paytmasi chiqaruvchi programma tusilsin

// let a = 3;
// let b = 10;
// let sum = 1;

// for(a; a <= b; a++) {
//   sum *= a;
// }
// console.log(sum);



//-------------------------------for9----------------------------------------------

// a va b butun sonlar berilgan (a < b). a dan b gacha bo`lgan barcha butun sonlar kvadratlarinig yig`indisini chiqaruvchi programma tusilsin

// let a = 3;
// let b = 10;
// let sum = 1;

// for(a; a <= b; a++) {
//   sum *= (a**2);
// }
// console.log(sum);

//-------------------------------for10----------------------------------------------

// n butun soni berilgan (n > 0). Quyidagi yig`indini hisoblovchi programma tuzilsin. S = 1 + 1/2 + 1/3 .... + 1/n.

// let n = 10;
// let S = 0;

// for(let i = 1; i <= n; i++) {
//   S += 1/i;
// }
// console.log(S);
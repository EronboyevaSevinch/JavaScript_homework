//task1  ---------------------------------------------------------------------------------
//berilgan stringdagi harflar soni bir biriga teng yoki teng emasligini tekshirish. tartibi munim emas

// let str1 = "web";
// let str2 = "ewb";

  // String.prototype.Eaquality = function(str2) {
  //   let sum = 0;
  //     for(let i = 0; i < this.length; i++) {
  //       if(str2.includes(this[i]) ) {
  //         sum++
  //       }  
        
  //     }
  //       return sum == this.length? true: false
  //   };


  // console.log(str1.Eaquality(str2));







//task2---------------------------------------------------------------------------------
//polimdrimlikka tekshirish

// String.prototype.isPolindrome = function() {
//   let arr = this.split("");
//   let newArr = [];
//   let res = "";

//   for(let i = arr.length-1; i >= 0; i--) {
//     newArr.push(arr[i])
//   };


//   res = newArr.toString().replaceAll(",", "");

//   return this.toLowerCase() == res.toLowerCase();


// }

// let str = "Vev";
// console.log(str.isPolindrome());




//task3----------------------------------------------------------------------------------------
//duplicate qilish


// String.prototype.toDuplicate = function() {
//  return this.split("").map(v => v + v).toString().replaceAll(",", "");


// }

// let str = "Sev";
// console.log(str.toDuplicate());








//task4----------------------------------------------------------------------
//raqamlarni ajratish

// String.prototype.filterNumbers = function() {
//   return this.split("").filter((v) => !Number.isNaN(+v)).toString().replaceAll(",", "");

// }

// let str = "3f4s5tg6";

// console.log(str.filterNumbers());



//task5----------------------------------------------------------
//duplicate bo`lgan harflarni o`chirish

// String.prototype.removeDuplicates = function() {
//   let arr = this.split("");
//   let set = new Set(arr);
//   let res = "";
//   set.forEach(function(v) {return res += v});
//   return res;

// }



// let str = "sseevv hayottni";
// console.log(str.removeDuplicates());




//task6-------------------------------------------------------------------------------
//@ ni a harfi bilan o`zgartirish

// String.prototype.replaceSomething = function() {
//  return this.split("").map(v => v == "@"? v = "a": v ).toString().replaceAll(",", "");
  

// }

// let str = "sev@";
// console.log(str.replaceSomething());










































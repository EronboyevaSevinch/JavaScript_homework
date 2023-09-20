//HOMEWORK




//task myMath


// let myMath = {
//   sign(num) {
//     let result;
//     if(num < 0) {
//       result = -1;
//       return result;
//     }  else if(num > 0) {
//       result = 1;
//       return result;
//     } else if(num == -0) {
//       result = -0;
//       return result;
//     } else {
//       result = 0;
//       return result;
//     }
//   },

//   randomGenerator(min, max) {
//     num = Math.trunc((Math.random() * (max - min + 1))) + min;    
//     return num;
//   },



//   round(num) {
//    let result = parseInt(num);
//    return result;
//   },

//   floor(num) {
//     let result = parseInt(num);
//     return result;
//    },


//    ceil(num) {
//     let result = parseInt(num) + 1;
//     return result;
//    }







// }

// console.log(myMath.cbrt(64));


//task2

// function positive(a, b, c) {
//   let sum = 0;
  
// }


// console.log(myMath.ceil(22.99994));





// function initials(n) {
//   return n.split(' ').map((v, i, a) => v.charAt(0).toUpperCase() + (i == a.length - 1 ? v.slice(1) : '.')).join('');
// }
// initials("sevinch dgg eronboyeva");


// initials = n =>
//   (n = n.split(' ')).map(w => w[0].toUpperCase()).join('.') + n.pop().slice(1);

//   console.log(initials("dfjhd kasdjhfud jahfuhed"))


// function initials(n) {
//   n = n.trim();
//   var str = n.split(' ');
//   if(str.length <= 1)
//     throw new Error('Name should consist at least two words divided by space!');
//   str[str.length - 1] = str[str.length - 1].replace(/^(\w{1})?/, function(match){
//     return match.toUpperCase();
//   });
//   for(var i=0; i < (str.length - 1); i++) {
//     str[i] = (str[i].substr(0,1).toUpperCase());
//   }
//   return str.join('.');
// }

// console.log(initials("jbjsd jabdfj jabfu"));


function initials(n){
  return n = n.split(' '), n.map(function(w,i){
    return w[0].toUpperCase() + (i<n.length-1 ? '':w.slice(1))
  }).join(".")
};

console.log(initials("jsdbfjdbs dhfj9dzsf jhdsfud "))













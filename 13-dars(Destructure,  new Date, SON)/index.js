//task1



// mometn = () => {
//   let data = new Date();
//   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
//   let weekDays = ["Sunday", "Monday", "Thusday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   return {
//     format(param) {
//       switch(param) {
//         case `MMMM Do YYYY, h:mm:ss a`:
//           console.log(`${months[data.getMonth()]} ${data.getDate()}th ${data.getFullYear()}, ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()} `);
//           break;

//         case `dddd`:
//           console.log(weekDays[data.getDay()]);
//           break;

//         case `MMM Do YY`:
//           console.log(`${months[data.getMonth()]} ${data.getDate()}th ${ (data.getFullYear())}`);
//           break;


//         case `LT`:
//           console.log(`${data.getHours()} : ${data.getMinutes()}`);
//           break;


//         case `LTS`:
//           console.log(`${data.getHours()} : ${data.getMinutes()} : ${data.getSeconds()}`);
//           break;


//         case `L`:
//           console.log(`${data.getMonth() + 1} / ${data.getDate()} / ${data.getFullYear}`);
//           break;



//         case `l`:
//           console.log(`${(data.getMonth() + 1)}/${data.getDate()}/${data.getFullYear()} `);
//           break;


//         case `ll`:
//           console.log(`${months[data.getMonth()].slice(0, 3)} ${data.getDate()}, ${data.getFullYear()}`);
//           break;


//         case `LL`:
//           console.log(`${months[data.getMonth]} ${data.getDate()}, ${data.getFullYear()}`);
//           break;


//         case `LLL`:
//           console.log(`${months[data.getMonth()]} ${data.getDate()}, ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`);
//           break;


//         case `lll`:
//           console.log(`${months[data.getMonth()].slice(0, 3)} ${data.getDate()}, ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`);
//           break;


//         case `LLLL`:
//           console.log(`${weekDays[data.getDay()]}, ${months[data.getMonth()]} ${data.getDate()}, ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`);
//           break;


//         case `llll`:
//           console.log(`${weekDays[data.getDay()].slice(0, 3)}, ${months[data.getMonth()].slice(0, 3)} ${data.getDate()}, ${data.getFullYear()} ${data.getHours()}:${data.getMinutes}`);
//           break;
//        }
//     }

//   }
// }

// mometn().format(``);



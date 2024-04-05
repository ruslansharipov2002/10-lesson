//1. Ixtiyoriy arrow function yarating va unga beriladigan argument promt yordamida 
// kiritilgan son bo'lsin. Kiritilgan sonning raqamlari yig'indisi topilsin.


// const fn = (...prompt) => {
//   let array = Array.from(prompt.toString(), Number)
//   let result = 0
//   for(let i = 0; i < array.length; i++) {
//     result += array[i]
//   }
//   return result
// }
// console.log(fn(45));

// 2.Ixtiyoriy arrow function yarating va uning parametriga bir nechta 
// sonlar berilsin. va o'sha sonlar yig'indisini arrayning element lari ko'rinishida ifodalang:
// masalan: [1, 22, 3] yigindisi: 26
// result=> [2,6]


// const sumxy = (...numbers) => {
//     const sum = numbers.reduce((total, num) => total + num, 0);
//     const digitArray = sum.toString().split('').map(Number);
//     return digitArray;
//   }
  
//   console.log(sumxy(1, 22, 3));
  



// 3.Kiritilgan so’z yoki sonni palindrome yoki palindrome emasligini aniqlab beradigan 
// function yarating argument string yoki number ligini tekshiring

// function x (params){
//     let type = typeof params 
//     if (type === "number"){
//         let arr = Array.from(params.toString(), Number).reverse()
//         let new_number = Number(arr.join(""))
//         if(params === new_number){
//             return "palindrome"
//         }else {
//             return "palindrome emas"
//         }
//     }else if(type === "string"){
//         let arr = params.split("").reverse()
//         let new_str = arr.join("")
//         if(params === new_str){
//             return "palindrome"
//         }else{
//             return "palindrome emas"
//         }   
//     }else {
//         return "type xato"
//     }
// }

// console.log(x("kiyik"));

// 4.Ixtiyoriy object yarating => {a:1,b:22}
// value larinig yig'indisini toping => 23
// value larining yigindising raqamlar yig'indisini toping => 2 + 3 = 5

// const xy = (obj) => {
//     const valuesSum = Object.values(obj).reduce((a, b) => a + b, 0);
//     const digitSum = valuesSum.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
//     return digitSum;
//   };
  
//   const myObject = { a: 1, b: 22 };
  
//   console.log(xy(myObject)); 
  
//   argument sifatida berilgan so’z da nechta unli harf borligini aniqlab beradigan function
//  yarating (trim() dan foydalaning) darsda ko’rsatib berilgan

// const count = (word) => {
//     const trimmedWord = word.trim().toLowerCase(); 
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
    
//     for (let char of trimmedWord) {
//       if (vowels.includes(char)) {
//         count++;
//       }
//     } 
//     return count;
//   }
  
//   console.log(count("  Hello World  "));
  
// 6.N natural son berilgan. Dastlabki n ta toq sondan tashkil topgan array qaytaruvchi getInitialOdds(n) nomli function tuzing 
// input: 3
// output: [1,3,5]

//   const natural = (n) => {
//     const result = [];
//     let odd = 1;
  
//     for (let i = 0; i < n; i++) {
//       result.push(odd);
//       odd += 2;
//     }
  
//     return result;
//   }
//   console.log(natural(3)); 
  













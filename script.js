// Task 1
// console.log(12 * 8);

// let x = 10 / 2;
// console.log(x);

// let num1 = 20;
// let num2 = 17;
// console.log(num1 + num2);

// let name = 'Heyder';
// let surname = 'Veliyev';
// let year = '2001';
// let info = name + surname + year;
// console.log(info);

// console.log(17 % 12);

// let cityName = 'Baku';
// console.log(cityName);
// cityName = 'Gence';
// console.log(cityName);

// Task 2
// let a = 1, b = 1;
// let c = ++a;
// let d = b++;
// console.log(c); // 2
// console.log(d); // 1
// console.log(b); // 2

// Task 3
// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x); // 5

// Task 4
// console.log('test1', test); // test1 undefined
// {
//     let test = "something"
//     console.log('test2', test); // test2 something
// }
// console.log('test3', test);  // test3 undefined


// console.log('test1', test);  // test1 undefined
// {
//     var test = "something"
//     console.log('test2', test); // test2 something
// }
// console.log('test3', test); // test3 something

// Task 5
// let name = "Ulfat";
// let surname = Zakirli;
// let year = 2000;
// year1 = "2000";
// let city;
// let qualification = null;
// let obj = { name: 'ulfat' };
// let arr = ['a', 'b', 'c'];

// console.log(typeof name);          // string
// console.log(typeof surname);       // (zakirli is undefined )
// console.log(typeof year);          // number
// console.log(typeof year1);         // string
// console.log(typeof city);          // undefined
// console.log(typeof qualification); // object
// console.log(typeof obj);           // object
// console.log(typeof arr);           // object

// Task 6
// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];

// let sum = 0
// const result11 = arr1.map((item)=> sum = sum + item)
// console.log(result11);
// console.log(sum);    // 129

// arr1.push(10, 88);
// console.log(arr1);

// arr1.splice(0,2);
// console.log(arr1);

// arr1.unshift(0, 9, 11);
// console.log(arr1);

// arr1.shift();
// arr1.shift();
// arr1.shift();
// arr1.shift();
// console.log(arr1);

// Task 7
// const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"];
// const cavab = arr2.filter((item,index) => index > 1 )
// console.log(cavab);

// arr2[arr2.indexOf('Gulshen')] = 'Rovshen';
// console.log(arr2);

// arr2.map(name => console.log(name));

// console.log(arr2.filter(name => name === 'Anar'));

// arr2.forEach((name, index) => {
//     if (name === 'Anar') {
//         arr2[index] = 'Perviz';
//     }
// });
// console.log(arr2);

// console.log(arr2[arr2.length - 2]);

// console.log(arr2.length);

// Task 8
// const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false];
// console.log(arr3.filter(item => typeof item === 'number'));

// console.log(arr3.filter(item => typeof item === true));

// console.log(arr3.filter(item => typeof item === false));

// console.log(arr3.filter(item => typeof item === 'string'));

// Task 8.1
// const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);

// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(oddNumbers);

// Task 9
// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]
// const modifiedValues = arr4.map(value => {
//     if (typeof value === 'number') {
//       return value + 10;
//     } else if (typeof value === 'string') {
//       return value + ' is string';
//     } else {
//       return value + ' is falsy value';
//     }
// });
// console.log(modifiedValues);

// const sumOfNumbers = arr4.reduce((sum, value) => {
//     if (typeof value === 'number') {
//       return sum + value;
//     } else {
//       return sum;
//     }
//  }, 0);
// console.log(sumOfNumbers);

// const trueCount = arr4.filter(value => value === true).length;
// console.log(trueCount);

// const stringCount = arr4.filter(value => typeof value === 'string').length;
// console.log(stringCount);

// const falseCount = arr4.filter(value => value === false).length;
// console.log(falseCount);

// Task 10
// const obj = {
//     name : 'Heydar',
//     email: 'heydar@gmail.com',
//     info: {
//         gender: 'Male',
//         loc: {
//             city: "Baku",
//             street: 'RAZIN',
//             education: {
//                 "uni name": "AZTU",
//             }
//         }
//     }
// }
// obj.name = 'Jhon';

// console.log(obj.info.gender);
  

// console.log(obj.info.loc.city);
  

// console.log(obj.info.loc.education["uni name"]);
  
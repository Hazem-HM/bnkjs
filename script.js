"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// *** START LESSON 147 CREATING DOM ELEMENTS ***//

/*
1- created a function called displayMovements and called it with account1.movements
2-in the function we did a forEach on every mov and index of movements to create the html and check the movement type.
3- added the html to the app container through insertAdjecentHTML.
4- cleared the html of the app container.
*/

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type} </div>
          <div class="movements__value">${Math.abs(mov)}€</div>
        </div>
  `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);
// *** END LESSON 147 ***//

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//lecturs
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const [i, mov] of movements.entries()) {
//   if (mov > 0) {
//     console.log(`movement nr${i + 1} you deposited ${mov}`);
//   } else {
//     console.log(`movement nr${i + 1} you withdrew ${Math.abs(mov)}`);
//   }
// }
// console.log(`////////// foreach arrow function /////////`);
// movements.forEach((mov, i) =>
//   console.log(
//     `movement nr ${i + 1} is ${
//       mov > 0 ? `deposit ${mov}` : `withdrawal ${Math.abs(mov)}`
//     }`
//   )
// );
// console.log(`////////// foreach NORMAL FUNCTION /////////`);
// movements.forEach(function(mov, i){
//   if(mov >0){
//     console.log(`mov nr ${i+1} is a deposit ${mov}`);
//   }else{
//     console.log(`mov nr ${i+1} is a withdrawal ${Math.abs(mov)}`)
//   }
// })
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);
// currencies.forEach(function(value, key, map){
//   console.log(` key:  ${key} , value : ${value}`);
// })

// const setto = new Set(['euro', 'euro','usd','usd','gbp','aud','aed'])
// setto.forEach((value)=> console.log( `we have ${value}`));

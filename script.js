function isPrime(n) {
      if (n <= 1) return false;
      for (let i = 2; i * i <=n; i++) {
        if (n % i === 0) return false;
      }
      return true;
    }

    document.getElementById("primeForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const value = Number(document.getElementById("number").value);
      const out = document.getElementById("result");

      if(!Number.isInteger(value) || value < 0) {
        out.textContent = "Please enter a valid positive integer.";
        return;
      }

      out.textContent = isPrime(value) ? `${value} is a Prime Number` : `${value} is NOT a Prime Number`;
    });








//Iterative Check: Basic Approach

// let n = 17;
// let isPrime = true;

// if (n <= 1){
//   isPrime = false;
// } else {
//   for(let i =2; i<n; i++) {
//     if(n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
//console.log(isPrime ? `${n} is a prime number.` : `${n} is not a prime number.`);


//Iterative Check: Optimized Approach

// let n = 17;
// let isPrime = true;

// if (n <= 1){
//   isPrime = false;
// } else {
//   for(let i =2; i * i <= n; i++) {
//     if(n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// console.log(isPrime ? `${n} is a prime number.` : `${n} is not a prime number.`);


//Checking Multiple Numbers in an Array

// let a = [3,4,5,16,17,18];
// let obj = {};
// for (let n of a ){
//   let isPrime = true;
//   if(n <=1){
//     isPrime = false;
//   } else {
//     for (let i=2; i*i<=n; i++){
//       if (n % i===0){
//         isPrime = false;
//         break;
//       }
//     }
//   }
//   obj[n] = isPrime;
// }
// console.log(obj);


//Using Sieve of Eratosthenes Algorithm

// let max = 20;
// let a = new Array(max+1).fill(true);
// a[0] = a[1] = false;

// for(let i=2; i*i<=max; i++){
//   if(a[i]){
//     for(let j=i*i; j<=max; j+=i){
//       a[j] = false;
//     }
//   }
// }
// let obj = {};
// for(let i=0; i<=max; i++){
//   obj[i] = a[i];
// }
// console.log(obj);


//Bitwise Optimization Approach

// let n = 19;
// let isPrime = n>1 && !(n % 2 === 0 && n !==2);

// for(let i=3; i*i<=n && isPrime; i+=2){
//   if(n % i === 0){
//     isPrime = false;
//   }
// }
// console.log(isPrime ? `${n} is a prime number.` : `${n} is not a prime number.`);


//Recursion-Based Prime Check

// let n = 13;
// let isPrime = true;

// function check(num, divisor = 2){
//   if(num <= 1) return false;
//   if(divisor * divisor > num) return true;
//   if(num % divisor === 0) return false;
//   return check(num, divisor + 1);
// }
// isPrime = check(n);
// console.log(isPrime ? `${n} is a prime number.` : `${n} is not a prime number.`);

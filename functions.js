//function are blocks of reuseable codes.

//basic syntax
// function demofunc(){
//     console.log("Hi, there");
// }

//arrow function
const demoFunc = () => {
  console.log("Hi, there 2");
}

const q = 1;
let p = 4;

//call function
// demofunc();
// demofunc2();

const demoFunc2 = (a,b, d) => { //pass something in the paranthesis as parameters 
   const c = (a + b) * 2;
   const z = (c / 3) + d;
   const y = p + q;
   console.log("p - before: ", p)
   p = z - y;
   console.log("p - after: ", p)
   return z;
  }

  console.log("p - outside: ", p)
 
  const k = demoFunc2(4, 5, 1);
  console.log(k);

//   console.log(j); //undefined
//   console.log(k);

// console.log("Addiction: ", demoFunc2(1, 5));
// console.log("Addiction: ", demoFunc2(6, 2));

//a particular function can work anywhere.
// things declared inside a function is not available in the outside world
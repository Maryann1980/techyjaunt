let x = 100;
console.log(typeof x);
console.log(x.toString());
console.log(typeof x.toString());

let y = 7.7654;
console.log(y.toFixed(3)); //starts after the decimal.
console.log(y.toPrecision(3)); //Starts from the first number

console.log(Number("10"));
console.log(Number("1.0765"));
console.log(Number(true)); //true can be 1
console.log(Number(false)); //false can be 0
console.log(Number(new Date("2024-08-26")));

//2 ways to create arrays
// const colors = ["red", "blue", "green", 89, {name: "max"}, true];
// const colors2 = new Array["red", "blue", "green", 89, {name: "max"}, true];

// console.log(colors[0]);


const colors = ["red", "blue", "green"]
console.log(colors);

const color1 =colors.at(0);
console.log(color1);
console.log(colors.join("|"));
console.log(colors.join(" "));

const popedColor = colors.pop();
console.log(popedColor);

colors.push("brown"); //removes from the right of the array
console.log(colors);

const shiftedColor = colors.shift();
console.log(shiftedColor);

colors.shift("pink"); //removes from the left
console.log(colors);


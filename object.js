//create a phone object

const phone ={
    brand: 'Samsung',
    color: 'black',
    camera: '200px',
    weight: '200',
    screenSize: 6.8,
    description: () =>  {
        return `This is ${this.color} ${this.brand} phone with a ${this.camera} camera and a ${this.screenSize} inch size`
    }
}

console.log("phone:", phone.description());
const phoneTwo = new Object();

phoneTwo.brand = 'infinix';
phoneTwo.color = 'blue';

console.log("phoneTwo:", phoneTwo)

//there are two ways to add object, the normal way and using the new object method. you just need to add properties for the new object method

//different ways to access values in js object
console.log("phoneTwo brand:", phoneTwo.brand);
console.log("phoneTwo brand:", phoneTwo["color"]);
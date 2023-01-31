// function makeCounter(){
//     let x = 0;
//     return function(){
//         return x++;
//     }
// }

// let counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());


// function car(name,model,engine,average){
//     this.name = name;
//     this.model = model;
//     this.engine = engine;
//     this.average = average;
// }

// car.prototype.start = function(){
//     console.log(`${this.name} has started`);
// }
// car.prototype.stop = function(){
//     console.log(`${this.name} has stopped`);
// }
// car.prototype.avg = function(){
//     console.log(`${this.name} has an average of ${this.average}`);
// }
// let a = new car("hyabhusa","suzuki","087353E","60");
// let b = new car("bmw","maruti","017327E","80");

// a.start();
// a.stop();
// a.avg();

// b.start();
// b.stop();
// b.avg();

// above one is constructor object so we need prototype and below one is a class so no need for prototype

// class  Car{
//     constructor(name,model,engine){
//         this.name = name;
//         this.model = model;
//         this.engine = engine;
//     }
//     getDetails() {
//         console.log(`${this.name} has model ${this.model} and engine ${this.engine}`);

//     }
//     start(){
//         console.log(`${this.name} has started`);
//     }
//     stop(){
//         console.log(`${this.name} has stopped`);
//     }
// }
// let a = new Car("Toyota","tata","936353E");
// let b = new Car("BMW","Ninja","9836353U");

// a.start();
// a.getDetails();
// a.stop();

// b.start();
// b.getDetails();
// b.stop();
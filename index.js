// function person(name, age) {
//     console.log(`${name}` + ' is a good boy and his age is ' + `${age}`);
// }

// person("Turjo", 25);
// person("Nazmul", 25);
// person("Masfi", 25);


// function myFunction(){
//     let carName = 'Volvo';
//     console.log(carName);
// }

// myFunction();


// Event
// document.getElementById("demo").onclick = function(){
//     document.getElementById("demo").innerHTML = Date();
// };

// String Method
// let x = "Please Visit Other It Company";
// let y = "This is the second text"
// // console.log(x.replace("Other It Company", "My Company"));
// console.log(x.includes("It"));


// Array
// const cars = ["BMW","Corolla", "Honda"];
// let x = cars.join(" * ")
// console.log(x);
const cars = ["BMW", "Corolla", "Honda", "Audi"];

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
    return a - b;
})
console.log(points);
console.log(cars.reverse());
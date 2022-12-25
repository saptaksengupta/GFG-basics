// De-structuring.

// reference type
var obj = {
    name: "GFG",
    domain: "ED-tech"
}


// var name = obj.name;
// var domain = obj.domain;
const {name, domain} = obj; 
console.log(name);
console.log(domain);


//deep copy.
// var obj2 = Object.assign({}, obj);
var obj2 = {...obj}; //spread operator.

var arr = [1, 2];
var arr2 = [...arr]; 


// obj1{},  obj2{}

console.log(obj.domain);
obj2.domain = "Fin-tech";
console.log(obj.domain);

// Promises.
function eat (food) {
    return new Promise(function(resolve, reject) {
        if (true) {
            resolve(food);
        } else {
            reject(food);
        }
    });
}

function goToBed(resp){
    console.log("I am going to bed after having", resp);
}

function beHungry(error) {
    console.log("Just be hungry");
}

var eatingCake = eat("Cake");
// after 100 line...
eatingCake.then(goToBed).catch(beHungry);

const dataFromBackend = fetchData();
dataFromBackend.then(function() {
    storeThatIntoSomeOtherDb();
});


var eatRice = eat("Rice");
eatRice.then(goToBed);

// es6 async, await;
// async function eat1 (food) {
//     return new Promise(function(resolve, reject) {
//         if (true) {
//             resolve(food);
//         } else {
//             reject(food);
//         }
//     });
// }

// const cake = await eat1("Cake");
// goToBed(cake);



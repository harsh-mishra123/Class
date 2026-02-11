// const p = new Promise((resolve,reject) => {
//     reject("Big error");    
//     resolve("Success");

// });


// p.then((data) => {
//     console.log("Data: ", data);
// }).catch((err) => {
//     console.log("Error: ", err);
// });



console.log("1) Start");

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2) Promise resolved");
    }, 2000);
});
console.log("3) Promise created");

p.then((data) => {
    console.log(data);
});
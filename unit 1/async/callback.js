// function aa(){
//     console.log("aa");
//     setTimeout(() => {
//         console.log("bb");
//     }, 2000);
//     console.log("cc");
// }
// aa();




// setInterval(() => {
//     console.log("Hello, World!");
// }, 1000);


// let count = 0;
// let id = setInterval(() => {
//     console.log("Hello, World!");
//     if(count === 4){
//         clearInterval(id);
//     }
//     count++;
// }, 1000);


// function roll(num,next){
//     setTimeout(() => {
//         console.log(`You rolled a ${num}`);
//         next();
//     }, 2000);
// }

// roll(5, () => {
//     console.log("Rolling again...");
//     roll(3, () => {
//         console.log("Rolling again...");
//         roll(6, () => {
//             console.log("Done rolling!");
//         });
//     });
// });


// function roll(num, delay, next){
//     setTimeout(() => {
//         console.log(`You rolled a ${num}`);
//         if (next) next();
//     }, delay);
// }

// roll(5, 1000, () => {
//     console.log("Rolling again...");
    
//     roll(3, 2000, () => {
//         console.log("Rolling again...");
        
//         roll(6, 3000, () => {
//             console.log("Done rolling!");
//         });
//     });
// });



// Teams
const uiTeam = ["Harsh", "Aman", "Riya"];
const flutterTeam = ["Yashi", "Kunal", "Arjun"];

function showMenu() {
    console.log("UI Team:");
    console.log(uiTeam);

    console.log("\nFlutter Team:");
    console.log(flutterTeam);


    const mergedTeam = [...uiTeam, ...flutterTeam];

    console.log("\nMerged Team:");
    console.log(mergedTeam);
}

function display(teamType, option) {
    switch(teamType) {
        case "ui":
            console.log("UI Team Members:");
            console.log(uiTeam);
            break;

        case "flutter":
            console.log("Flutter Team Members:");
            console.log(flutterTeam);
            break;

        case "all":
            const merged = [...uiTeam, ...flutterTeam];
            console.log("All Team Members:");
            console.log(merged);
            break;

        default:
            console.log("Invalid team type");
    }
}
showMenu();

display("ui");
display("flutter");
display("all");

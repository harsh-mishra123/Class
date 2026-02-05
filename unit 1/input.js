const r1 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});


r1.question("Enter Something: ",
    (answer) => {
        console.log(`You Entered: ${answer}`);
        r1.close();
    }
)
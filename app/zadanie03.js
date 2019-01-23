sumArgs();

function sumArgs() {
    let arr = [];
    for (let i = 2; i < process.argv.length; i++) {
        arr.push(Number(process.argv[i]));
    }
     console.log(arr.reduce((a,b)=>a+b));
}
setTime();

function setTime() {
    for (let i = 2; i < process.argv.length; i++) {
        setTimeout(function () {
            console.log(process.argv[i])

        }, Number(process.argv[i])*1000);

    }
}
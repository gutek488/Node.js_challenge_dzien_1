
arrangeText();

function arrangeText() {
  let counter = 0;
  setInterval(function () {
      switch (counter) {
          case 0:
              console.log("Witam");
              break;
          case 1:
              console.log("się");
              break;
          case 2:
              console.log("z");
              break;
          case 3:
              console.log("programem");
              break;
          case 4:
              console.log("Node.js");
              break;
          case 5:
              console.log("w konsoli");
              break;
          case 6:
              console.log("i korzystam");
              break;
          case 7:
              console.log("z funkcji czasu")
              break;
      }
      counter++;
      if (counter > 8) return;
  },1000)
}
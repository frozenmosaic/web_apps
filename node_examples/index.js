var rect = require("./rectangle");

function solveRect(l, b) {
  console.log("Solving...");

  rect(l, b, (err, rectangle) => {
    console.log('rect');
    if (err) {
      console.log("Error:", err.message);
    } else {
      console.log("Area:", rectangle.area());
      console.log("Perimeter:", rectangle.perimeter());
    }
  });

  console.log('after the call to rect');
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
const data1 = [150, 200, 105, 50, 350];
const data2 = [15, 5, 50, 10, 35, 200];

function setup() {
    createCanvas(400, 400);
  }

  function draw() {
    background(0);
    
    for (let i = 0; i < data1.length; i++) {
      
      rect(data1[i], data2[i], 10, 10);
      circle(data2[i], data2[i], data2[i]);
      
    }
  }
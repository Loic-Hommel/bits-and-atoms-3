function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('sky.csv', 'csv', 'header');
  //the file can be remote
  //table = loadTable("http://p5js.org/reference/assets/mammals.csv",
  //                  "csv", "header");
}

let table;
let row = -1;
let step = 1;
var max_val = 0;

let data = [];

function findMax(max_val) {
  for (let row_tmp = 0; row_tmp < table.getRowCount(); row_tmp++) {
    if (table.get(row_tmp, "Full(RAW)") > max_val) {
      max_val = table.get(row_tmp, "Full(RAW)");
      return max_val;
    }
  }
}

function setup() {

  //load data in array
  for (let r = 0; r < table.getRowCount(); r++) {
    data[r] = table.get(r, "Full(RAW)");
  }

  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');

  //find maximum value in rows
  //print("maximum value: " + max_val)

    
  createCanvas(table.getRowCount(), 400);
    background(126);
    rectMode(CENTER);
    stroke(3);
    rect(width/2, height/2, width-3, height-3);

    
        for (let pos = 0; pos < table.getRowCount(); pos=pos+step) {
          row = row + 1;
          let value = table.get(row, "Full(RAW)");
          print(value);
          let color = round(map(value, 300, 1300, 0, 255));
          if (color > 0) {
            noStroke();
            fill(color)
            rect(pos, height/2, step, height);
          } else {
            noStroke();
            fill(255, 0, 255)
            rect(pos, height/2, step, height);
            
          }
          print("color :" + color);
          print("position :" + pos);
        }

        print("maximum value: " + findMax(max_val));

        for (let a = 0; a < data.length; a++) {
          print("data from array: " + data[a]);
        }

  }

  function draw() {

  }
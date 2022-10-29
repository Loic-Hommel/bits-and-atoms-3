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
//let step = 1;
let bar_size = 1;
var max_val = 0;

let data = [];

/*function findMax(max_val) {
  for (let row_tmp = 0; row_tmp < table.getRowCount(); row_tmp++) {
    if (table.get(row_tmp, "Full(RAW)") > max_val) {
      max_val = table.get(row_tmp, "Full(RAW)");
      return max_val;
    }
  }
}*/

function setup() {

  //get overview of table
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');

  //load table data into array
  print("***********************")
  for (let i = 0; i < table.getRowCount(); i++) {
    data[i] = table.get(i, "Full(RAW)");
    print("array index [" + i + "]: " + data[i]);
  }
  print("***********************")
  
  //print first and last data set in array
  print("first in array: " + table.get(0, "Full(RAW)"));
  print("last in array: " + table.get(data.length-1, "Full(RAW)"));

  createCanvas(data.length, 400);
  background(127);

  //draw canvas border
  rectMode(CENTER);
  strokeWeight(1)
  stroke(0, 0, 0);
  rect(width/2, height/2, width, height);

  //draw visualization of data
  for (let pos = 0; pos < data.length; pos++) {
    //array_index = array_index + 1;
    let color = round(map(data[pos], 350, 1300, 0, 255));
    print("mapped color :" + color);
    
    rectMode(CENTER);
    noStroke();
    fill(color);
    rect(pos, height/2, 1, height);
  }
  }

  function draw() {

  }
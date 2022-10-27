// we need to translate the temperature to y-pos
//10°c and 30°c e.g. have to be mapped to the size of the canvas

//1. sanitize data
// 2. temp -> y-pos
// lables
// axes
// looping
// axes t °c
// scale

// function convertDegreesToPosition(temp) {
// const 
//




let table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('future_cities_data.csv', 'csv', 'header');
  //the file can be remote
  //table = loadTable("http://p5js.org/reference/assets/mammals.csv",
  //                  "csv", "header");
}



function setup() {
    createCanvas(400, 400);
    background(0);

    //print(table.getRowCount() + ' total rows in table');
    //print(table.getColumnCount() + ' total columns in table');
  
    //print(table.getColumn('name'));
    //["Goat", "Leopard", "Zebra"]
  
    //cycle through the table
    //for (let r = 0; r < table.getRowCount(); r++)
      //for (let c = 0; c < table.getColumnCount(); c++) {
        //print(table.getString(r, c));
      //}

      for (let i = 30; i<35; i++) {
        let temp = table.get(i, "Annual_Mean_Temperature");
        let temp2 = map(temp, 0, 50, 0, 400);
        
        let futureTemp = table.get(i, "future_Annual_Mean_Temperature");
        let futureTemp2 = map(futureTemp, 0, 50, 0, 400);

        strokeWeight(10);

        stroke(255, 0, 0);
        point(140, temp2);

        stroke(0, 0, 255);
        point(360, futureTemp2);

        strokeWeight(1);
        stroke(0, 255, 0);
        line(140, temp2, 360, futureTemp2);

        text(table.get(i, "current_city"), 20, temp2, 80, 30);
      }
      //for (let z = 1; z < table.getRowCount(); z++) {
       

      //}

  }

  function draw() {

    //for (let z = 1; z < table.getRowCount(); z++) {
      //let temp = table.getString(z, 10);

      //print(temp);
      //let mapedTemp = map(temp, 0, 50, 0, height);
      //point(20, mapedTemp);
      //stroke(255);
      //print(mapedTemp);
    //}
    //point(100, 100);
    //stroke(255);
    //line(30, (table.getNum(10, 6)), 85, (table.getNumg(10, 6)));
    //stroke(126);

  }
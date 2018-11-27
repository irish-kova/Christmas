let snowflakes = []; // array to hold snowflake objects
var yText = 0;
var xText=100;
var r, g, b;
var ar, ag, ab;
var br, bg, bb;
var cr, cg, cb;
var dr, dg, db;
var er, eg, eb;
function setup() {
  createCanvas(500, 550);
  noStroke();

}

function draw() {
  background('#3076a5');
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (var i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }


    
  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
   
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

     
    // code for roof
    stroke('#000000'); 
    fill('#f44242');
    triangle(300, 400, 375, 275, 450, 400);
    
    // code for house
    fill('#bc5a18');
    rect(310,400,130,130);
       
    // code for window 
      fill('#ffef3f');
    rect(350,430,50,50);
    

    
    // code for stars
    noStroke();
    triangle(200, 175, 250, 175, 225, 215);
    triangle(205, 202, 225, 160, 245, 203);
    triangle(50, 50, 100, 50, 75, 100);
    triangle(50, 80, 75,25,100, 80);
    
    
    
    // code for window lines
    stroke('#000000'); 
    line(350,455,400,455);
    line(375,430,375,480);
    
    // code for tree
    noStroke();
    fill('#366d19');
    triangle(50, 525, 100,450,150, 525);
    triangle(60, 480, 100,410,140, 480);
    triangle(75, 430, 100,375,125, 430);
    
     // code for ornaments
     noStroke();
    fill(r,g,b);
    ellipse(80,510,10,10);
     fill(ar, ag, ab);
    ellipse(110,475,15,15);
     fill(cr, cg, cb);
    ellipse(85,455,10,10);
     fill(br, bg, bb);
    ellipse(105,430,8,8);
     fill(dr, dg, db);
    ellipse(100,395,10,10);
     fill(er, eg, eb);
    ellipse(120,505,8,8);
   
    // code for moon
    noStroke();
    fill('#f7f26a');
    ellipse(410,70,80,80);
    
    this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
     // code for text
        strokeWeight (1);
    fill('#ffffff');
    textFont('Georgia');
    textStyle(ITALIC)
    textSize(40);
    text('Merry Christmas!',xText,yText);
    yText= yText+1;
    if (yText>550) {yText=0;}
    
    
    // code for color for snow
    noStroke();
    fill('#ffffff'); 
    
}
function mousePressed() 
{
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
    ar = random(255);
    ag = random(255);
    ab = random(255);
    br = random(255);
    bg = random(255);
    bb = random(255);
    cr = random(255);
    cg = random(255);
    cb = random(255);
    dr = random(255);
    dg = random(255);
    db = random(255);
    er = random(255);
    eg = random(255);
    eb = random(255);
    
}



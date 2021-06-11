let b1, b2;
let  force, G, strength;

function setup() {
   createCanvas(800, 600);
   G = 10;

   b1 = new Body(400, 100, 0.7, 0.4, 1);
   b2 = new Body(200, 400, -0.5, 0.7, 1);
}

function draw() {
   background(100);
   push()
   fill(255);
   strokeWeight(0);
   text(b1.vel.x.toFixed(2) + "  " + b1.vel.y.toFixed(2) + "  " + b1.tick , 400, 50);
   text(b2.vel.x.toFixed(2) + "  " + b2.vel.y.toFixed(2) + "  " + b2.tick, 400, 80);
   pop();
   b1.update(b2);
   b2.update(b1);
   b1.display(b2);
   b2.display(b1);
}

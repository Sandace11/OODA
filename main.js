let b1, b2;
let  force, G, strength;

function setup() {
   createCanvas(800, 600);
   G = 20;

   b1 = new Body(100, 100, 20);
   b2 = new Body(120, 100, 10);
}

function draw() {
   background(100);
   text(b1.vel.x.toFixed(2) + "  " + b1.vel.y.toFixed(2) + "  " + b1.tick, 400, 50);
   b1.update(b2);
   b2.update(b1);
   b1.display();
   b2.display();
}

class Body {
   constructor(posX, posY, tickRate) {
      this.pos = createVector(posX, posY);
      this.vel = createVector(0.1, 0.1);
      this.acc = createVector(0, 0);
      this.tickRate = tickRate;
      this.tick = 0;

   }

   update(body) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      
      if(this.tick > this.tickRate) {
         force = p5.Vector.sub(body.pos, this.pos);
         let d = force.mag();
         d = constrain(d, 8, 25);
         strength = G / (d * d);
         force.setMag(strength);
         this.applyForce(force);
         this.tick = 0;
      }
      
      this.tick++;
   }

   applyForce(force) {
      this.acc.add(force);
   }

   display() {
      stroke(0);
      fill(175);
      ellipse(this.pos.x, this.pos.y, 8, 8);
      line(this.pos.x, this.pos.y, this.pos.x + this.vel.x * 100, this.pos.y + this.vel.y * 100);

   }
}
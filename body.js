class Body {
   constructor(posX, posY, velX, velY, tickRate) {
      this.pos = createVector(posX, posY);
      this.vel = createVector(velX, velY);
      this.acc = createVector(0, 0);
      this.tickRate = tickRate;
      this.tick = 0;

   }

   update(body) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      
      if(this.tick > this.tickRate) {
         // if(1) {
         force = p5.Vector.sub(body.pos, this.pos);
         // let plr = new p5.Vector(); 
         // plr.x = force.mag();
         // plr.y = degrees(force.heading());
         // plr.y = constrain(plr.y, - 30, 30);
         // console.log(this.vel.angleBetween(force));
         // let cart = new p5.Vector();
         // cart.x = plr.x * cos(radians(plr.y));
         // cart.y = plr.x * sin(radians(plr.y));
         // text(cart.x.toFixed(2) + "  " + cart.y.toFixed(2) , 400, 100);
         // text(plr.x.toFixed(2) + "  " + plr.y.toFixed(2) , 400, 120);
         // text(degrees(force.heading()), 400, 140);

         // let head = force.heading();
         // console.log(degrees(head));
         let d = force.mag();
         d = constrain(d, 8, 25);
         strength = G / (d * d);
         force.setMag(strength);
         // cart.setMag(strength);
         this.applyForce(force);
         this.tick = 0;
      }
      
      this.tick++;
   }

   applyForce(force) {
      this.acc.add(force);
   }

   display(body) {
      stroke(0);
      fill(175);
      // ellipse(this.pos.x, this.pos.y, 16, 16);
      triangle(this.pos.x - 8,this.pos.y -4, this.pos.x  + 8, this.pos.y -4, this.pos.x , this.pos.y + 12);
      line(this.pos.x, this.pos.y, this.pos.x + this.vel.x * 100, this.pos.y + this.vel.y * 100);
      // line(this.pos.x, this.pos.y, body.pos.x, body.pos.y)

   }
}
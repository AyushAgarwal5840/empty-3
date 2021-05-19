class Particle {
    constructor(x,y,r) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,this.r,options);
      this.width = width;
      this.height = height;
      this.r =r;
      this.color=color(random(0,255),random(0,255), random(0,255));
      World.add(world, this.body);
      for(var j = 0; j <particles.length; j++){
          particles[j].display();
      }
      for (var k=0; k < divisions.length; k++){
          divisions[k].display();
      }
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
     
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
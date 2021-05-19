class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,this.r,options);
      this.width = width;
      this.height = height;
      this.r =r;
     
      World.add(world, this.body);
      for (var j =40; j<=this.width; j=j+50){
        plinkos.push(new Plinko(j,75));
    }
    for (var j = 15; j <=width-10; j=j=+50){
        plinkos.push(new Plinko(j,175));
    }
     
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    
    }
  };
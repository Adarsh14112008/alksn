class bob {
  constructor(x,y) {
    var options = {
        isStatic: false
      
    }
    this.body = Bodies.circle(x,y,50,options);
    this.bobDiameter=50*2
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    
    fill("red")
    circle(pos.x,pos.y , 100);
  }
};
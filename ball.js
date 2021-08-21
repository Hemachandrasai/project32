class Ball{
    constructor(x,y,radius){
     var   options={
            isStatic:false,
            restitution:0.5,
            friction:1.0
        }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world,this.body);
    }
    show(){
        var pos = this.body.position;
        var angle =this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    ellipse(0,0,80,80);
    pop();  
    }

}

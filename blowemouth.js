class BlowerMouth{
    constructor(x,y,width,height){
     var   options={
            isStatic:true,
            
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;

    World.add(world,this.body);
    }
    show(){
        var pos = this.body.position;
        var angle =this.body.angle;
        fill("#D48B52");
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();  
    }

}
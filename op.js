class op{
    constructor(x,y,r){
        var options={
            isStatic:false
        }
      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage("polygon.png");
      this.body=Bodies.circle(x,y,r,options);
      World.add(world,this.body);
    }
    display()
	{
		var pos=this.body.position;	
		push()
		translate(pos.x, pos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image,0,0,this.r*2,this.r*2);
		pop()
 }
}
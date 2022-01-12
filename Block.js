class Block{
    constructor(x, y, width, height) {
      this.image=loadImage("block.png");
        var options = {
                   isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        if (this.body.speed>=3){
        push();
        this.visibility=20;
        this.visibility=20-5;
        tint(20,this.visibility);
        World.remove(world,this.body);
       pop();
        }
        else{
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image,-21,-21,0,0);
        pop();
        }
      }
}

class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.03,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255;
        
        World.add(world, this.body);
      }

      score(){
        if(this.visibility<0 && this.visibility>100){
          score=score+1;
        }
      }
      

      display(){
        if(this.body.speed<=3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("cyan")
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world,this.body)
        push();
        this.visibility=this.visibility-5
        pop();
      }
    }
}
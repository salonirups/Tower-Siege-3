class Slingshot{
    constructor(bodyA,pointB){
    var options={
    bodyA:bodyA,
    pointB:pointB,
    length:17,
    stiffness:0.1
    }
    this.pointB=pointB;
    this.slingshot=Constraint.create(options);
    World.add(world,this.slingshot);
    }
    fly(){
        this.slingshot.bodyA=null;
        }

        attach(RUHAAN){
            this.slingshot.bodyA=RUHAAN;
        }
    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
        }
        
    }
    
    
}
class Rope{


constructor(body1, body2, pointA, pointB){


this.pointA = pointA
this.pointB = pointB


var options = {

bodyA:body1,
bodyB:body2,
pointB:{x:this.pointA, y: this.pointB}

}

this.rope = Constraint.create(options)

World.add(world,this.rope)

}




display(){


}





}


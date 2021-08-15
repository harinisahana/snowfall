class Snow {
    constructor(x,y){
        this.image = loadImage("snow4.webp");
        this.body = Bodies.circle(x,y,30,30);
        this.radius = 40;
        World.add(world,this.body);

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
}
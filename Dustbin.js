class Dustbin{
    constructor(x,y){
        var options={
            isStatic: true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
       this.x = x;
       this.y = y;
        this.leftBody = Bodies.rectangle(x-60,y-100,5,145,options);
        this.rightBody = Bodies.rectangle(x+60,y-100,5,145,options);
        this.bottomBody = Bodies.rectangle(x,y-27,135,5,options);
        this.image = this.image = loadImage("dustbingreen.png");

        World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
    }
    display(){
    push();
    rectMode(CENTER);
    fill(255);
    imageMode(CENTER);

    image(this.image,this.bottomBody.position.x,this.bottomBody.position.y-75,130,150);
    // rect(this.bottomBody.position.x,this.bottomBody.position.y,115,5);
    // rect(this.leftBody.position.x,this.leftBody.position.y,5,145);
    // rect(this.rightBody.position.x,this.rightBody.position.y,5,145);

    pop();
    }
}
class ground{
    constructor(x, y, width, height){
        var option1={
        isStatic:true
        }
        this.body=Bodies.rectangle(x, y, width, height, option1);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(pos.x, pos.y, this.width, this.height);
    }
}
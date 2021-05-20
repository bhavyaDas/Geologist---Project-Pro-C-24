/////////////////////////////////Code Started///////////////////////////

//Creating a class name:  Hammer inside Hammer.js file
class Hammer {

  //Used a constructor to construct the object
  constructor(x, y) {

    //Created variable options and set some properties of object inside it  
    var options = {

      //Set density(heaviness) of object as 4
      'density': 4,

      //Set friction(slippriness) of object as 1.0
      'friction': 1.0,

      //Set restitution(bounciness) of object as 0.5
      'restitution': 0.5

    };

    //Set width (default) as this.width = 150; 
    this.width = 150;

    //Set height (default) as this.height = 40;
    this.height = 40;

    //Set this.body as the rectangular physics objects of Bodies with (x,y,width,height,additional properties)
    this.body = Bodies.rectangle(x, y, 150, 40, options);

    //Added this.body in world
    World.add(world, this.body);

  };

  //Started with display function( based on the setup of displaying an object)
  display() {

    //Created a variable pos where set the position of this.body : this.body.position;
    var pos = this.body.position;

    //Set value of pos.x as mouseX means object will move according to mouse's X position
    pos.x = mouseX;

    //Set value of pos.y as mouseY means object will move according to mouse's XY position
    pos.y = mouseY;

    //Created a variable angle where set the angle of this.body : this.body.angle;
    var angle = this.body.angle;

    //Started implementation of some properties so used : push() 
    push();

    //Translate the position X and position Y of this.body 
    translate(pos.x, pos.y);

    //Rotating the angle 
    rotate(angle);

    //Setting outline weight as 3 pixels
    strokeWeight(3);

    //Set outline color as 'white'
    stroke('white')

    //Set shape color of rect as 'orange'
    fill('orange')

    //Set rect mode as centre 
    rectMode(CENTER)

    //Made rectangle with X and Y position and set this.width and this.height
    rect(0, 0, this.width, this.height);

    //Ended implementation of some properties so used : pop()
    pop();

  };

};

/////////////////////////////////Code Ended///////////////////////////


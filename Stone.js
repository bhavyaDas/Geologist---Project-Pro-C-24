/////////////////////////////////Code Started///////////////////////////

//Creating a class name:  Stone inside Stone.js file
class Stone {

  //Used a constructor to construct the object
  constructor(x, y) {

    //Created variable options and set some properties of object inside it
    var options = {

      //Set density(heaviness) of object as 12
      'density': 12,

      //Set friction(slippriness) of object as 0.9
      'friction': 0.9,

      //Set restitution(bounciness) of object as 0.8
      'restitution': 0.8

    };

    //Set width (default) as this.width = 90;
    this.width = 90;

    //Set height (default) as this.height = 90;
    this.height = 90;

    //Set this.body as the rectangular physics objects of Bodies with (x,y,width,height,additional properties)
    this.body = Bodies.rectangle(x, y, 90, 90, options);

    //Added this.body in world
    World.add(world, this.body);

  };

  //Started with display function( based on the setup of displaying an object)
  display() {

    //Created a variable pos where set the position of this.body : this.body.position;
    var pos = this.body.position;

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

    //Set shape color of rect as 'green'
    fill('green')

    //Set rect mode as centre 
    rectMode(CENTER)

    //Made rectangle with X and Y position and set this.width and this.height
    rect(0, 0, this.width, this.height);

    //Ended implementation of some properties so used : pop()
    pop();

  };

};

/////////////////////////////////Code Ended///////////////////////////

/////////////////////////////////Code Started///////////////////////////

//Creating a class name:  Plane inside Plane.js file
class Plane {

  //Used a constructor to construct the object
  constructor(x, y, width, height) {

    //Created variable options and set some properties of object inside it
    var options = {

      //Made the object static (preventing to fall on it's own)
      isStatic: true

    }

    //Set this.body as the rectangular physics objects of Bodies with (x,y,width,height,additional properties)
    this.body = Bodies.rectangle(x, y, width, height, options);

    //Set width (default) as this.width = width;
    this.width = width;

    //Set height (default) as this.height = height;
    this.height = height;

    //Added this.body in world
    World.add(world, this.body);

  }

  //Started with display function( based on the setup of displaying an object)
  display() {

    //Created a variable pos where set the position of this.body : this.body.position;
    var pos = this.body.position;

    //Set rect mode as centre 
    rectMode(CENTER);

    //Set shape color of rect as 'brown'
    fill("brown");

    //Made rectangle with X and Y position and set this.width and this.height
    rect(pos.x, pos.y, this.width, this.height);

  }

};

/////////////////////////////////Code Ended///////////////////////////

/////////////////////////////////Code Started///////////////////////////

//Creating a class name:  Rubber inside Rubber.js file
class Rubber {

	//Used a constructor to construct the object
	constructor(x, y) {

		//Created variable options and set some properties of object inside it
		var options = {

			//Set restitution(bounciness) of object as 0.3
			restitution: 0.3,

			//Set density(heaviness) of object as 5
			density: 5,

			//Set friction(slippriness) of object as 1
			friction: 1

		}

		//Set X position (default) as this.x = x;
		this.x = x;

		//Set Y position (default) as this.y = y;
		this.y = y;

		//Set radius (default) as this.r = 20;
		this.r = 20

		//Set this.body as the circular physics objects of Bodies with (x,y,radius,additional properties)	
		this.body = Bodies.circle(x, y, this.r, options)

		//Added this.body in world
		World.add(world, this.body);

	}

	//Started with display function( based on the setup of displaying an object)
	display() {

		//Created a variable rubberpos where set the position of this.body : this.body.position;	
		var rubberpos = this.body.position;

		//Started implementation of some properties so used : push()	
		push()

		//Translate the position X and position Y of this.body 	
		translate(rubberpos.x, rubberpos.y);

		//Setting outline weight as 4 pixels
		strokeWeight(4);

		//Set outline color as 'black'
		stroke("black");

		//Set shape color of ellipse as 'darkBlue'
		fill("darkblue");

		//Set ellipse mode as Radius
		ellipseMode(RADIUS)

		//Drew the ellipse here to display the rubber ball
		ellipse(0, 0, this.r, this.r)

		//Ended implementation of some properties so used : pop()
		pop()

	}

}

/////////////////////////////////Code Ended///////////////////////////

/////////////////////////////////Code Started///////////////////////////

//Created variable and set the value
const Engine = Matter.Engine;

//Created variable and set the value
const World = Matter.World;

//Created variable and set the value
const Bodies = Matter.Bodies;

//Created variables
var engine, world;

//Created variables
var hammer, circle1, rect1, rect2, small1, small2, small3, plane;

//Pre-defined function: function setup
function setup() {

    //Created canvas
    var canvas = createCanvas(1200, 600);

    //Created Engine inside the variable engine
    engine = Engine.create();

    //Set the value of world equal to engine.world
    world = engine.world;

    //Made an object(plane) using the Plane class (js file)
    plane = new Plane(600, height, 1200, 20)

    //Made an object(hammer) using the hammer class (js file)
    hammer = new Hammer(100, 100);

    //Made an object(circle1) using the Rubber class (js file)
    circle1 = new Rubber(550, 300)

    //Made an object(rect1) using the Iron class (js file)
    rect1 = new Iron(200, 40)

    //Made an object(rect2) using the Stone class (js file)
    rect2 = new Stone(300, 50)

    //Made an object(small1) using the Circle class (js file)
    small1 = new Circle(700, 300)

    //Made an object(small2) using the Circle class (js file)
    small2 = new Circle(720, 300)

    //Made an object(small3) using the Circle class (js file)
    small3 = new Circle(740, 300)

}

//Pre-defined function: function draw (repeatation)
function draw() {

    //Set canvas color as "lightBlue"
    background("lightBlue");

    //Making engine updated (up to date)
    Engine.update(engine);

    //Displayed the object : plane.display()
    plane.display();

    //Displayed the object : hammer.display() 
    hammer.display();

    //Displayed the object : circle1.display()
    circle1.display()

    //Displayed the object : rect1.display()
    rect1.display()

    //Displayed the object : rect2.display()
    rect2.display()

    //Displayed the object : small1.display()
    small1.display()

    //Displayed the object : small2.display()
    small2.display()

    //Displayed the object : small3.display()
    small3.display()

}

/////////////////////////////////Code Ended///////////////////////////

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rajah;
var hr, min, sec;
var hrAng, minAng, secAng;
var seconds, minutes, hours
var science = []

function preload() {

}

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES)
    seconds = createElement('h3')
    for (var i = 0; i <= 1000000; i++) {
        if (Math.atan2(4, i) + Math.atan2(6, i) == Math.sin(9)) {
            return console.log("4^x+6^x=9^x is true when x equals: " + i)
        }
    }

    seconds.position(300, 30)

    /* for (var i = 0; i <= 12; i++) {
         rajah = createElement("h3")
         var solution
         rajah.position(Math.cos(180 + hr * (360 / 6)) * 100 + 250, Math.sin(180 + hr * (360 / 6)) * 100 + 250)
         rajah.html(i)
     }*/
}

function draw() {
    background(200, 255, 200);
    hr = hour()
    min = minute()
    sec = second()
        // seconds.html(hr % 12 + ":" + min + ":" + sec)
    hrAng = map(hr, 0, 12, 0, 360)
    strokeWeight(6)





    push()
    translate(200, 200);
    strokeWeight(6)
    stroke("red")
    rotate(180 + sec * (360 / 60))
    line(0, 100, 0, 0)
    pop()

    push()
    translate(200, 200)
    rotate(180 + min * 6)
    strokeWeight(6)
    stroke("green")
    line(0, 75, 0, 0)
        //secAng = map(sec, 0, 60, 0, 360)
    pop()

    push()
    translate(200, 200)
    rotate(180 + hr * (360 / 12))
    strokeWeight(6)
    stroke("brown")
    line(0, 50, 0, 0)
        //secAng = map(sec, 0, 60, 0, 360)
    pop()
    push()
    ellipseMode(CENTER)
    noFill()
    stroke("red")
    for (var i = 0; i <= 10; i++) {
        stroke("green");
        ellipse(200, 200, 300 + (i * 6));
        stroke("red");
        ellipse(200, 200, 300 + (i + 12 * 2));

    }

    ellipse(200, 200, 324)
    pop()
        //translate(sec, sec)

    //line(250, 250, Math.cos(sec / Math.PI) * 100 + 250, Math.sin(sec / Math.PI) * 100 + 250)
    //drawSprites()
    //keyPressed()
}

function R2D(angle) {
    return (angle * 180) / Math.PI;
}

function keyPressed() {
    if (keyCode == 0b100000) {
        science.push({ mouseX, mouseY })
        console.log()
    }
}
---
title: "Random Triangles (p5js)"
date: "2021-09-07T22:30:00-04:00"
---

Made some generative art today.

![random triangles (sample)](/images/2021-09-07_randomtriangles_img_small.png)

_Very_ basic stuff, but I've always been fond of this type of artwork.
I'd like to do this more often and embed a widget to play with it directly in my website. But until then, paste the code below into the p5js editor at `[editor.p5js.org](https://editor.p5js.org/)` and hit "play" a few times to generate some results.

```
let s = 1000;
let overdraw = s * 0.4;
let randomBound = s + overdraw;

function setup() {
  createCanvas(s, s);
}

function draw() {
  background(255);

  for (let i = 0; i < 12; i++) {
    fill(randomColor());
    noStroke();
    randomTriangle();
  }
  noLoop();
}

function randomColor() {
  let myColor = color(random(255), random(255), random(255));
  while (saturation(myColor) > 50 || lightness(myColor) < 50) {
    myColor = color(random(255), random(255), random(255));
  }
  return myColor;
}

function randomValue() {
  return random(randomBound) - overdraw / 2;
}

function randomTriangle() {

  let dist12, dist23, dist13 = 0;
  let x1, y1, x2, y2, x3, y3 = 0;

  let thinThreshold = 300;

  while (dist12 < thinThreshold || dist23 < thinThreshold || dist13 < thinThreshold) {
    x1 = randomValue();
    y1 = randomValue();
    x2 = randomValue();
    y2 = randomValue();
    x3 = randomValue();
    y3 = randomValue();


    dist12 = Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) );
    dist23 = Math.sqrt( Math.pow((x2-x3), 2) + Math.pow((y2-y3), 2) );
    dist13 = Math.sqrt( Math.pow((x1-x3), 2) + Math.pow((y1-y3), 2) );
  }

  triangle(x1, y1, x2, y2, x3, y3);
}
```

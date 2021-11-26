---
title: "Generative Trees (p5js)"
date: 2021-09-13T23:00:00-04:00
draft: false
---

Generative trees using p5.js

![generative trees](/img/2021-09-13-generativetrees1.png)

I'm really happy with how these turned out. Honestly it's pretty cool this is possible given <50 lines of code.
I plan to expand this experiment more in the future.

Paste the code below into the p5js editor at `[editor.p5js.org](https://editor.p5js.org/)` and hit "play" a few times to generate results.

```
let size = 900;

function setup() {
  createCanvas(size, size);
}


function draw() {
  background(255);
  let startPoint = [size / 2, size];
  let length = randomBetween(90, 120);
  let weight = randomBetween(20, 35);
  strokeWeight(weight);
  stroke(30);
  let branchAngle = PI / 2;
  branch(startPoint, weight, length, branchAngle);
  noLoop();
}

function branch(startPoint, weight, length, angle) {
  // 𝑥1=𝑥+𝑛cos𝜃
  // 𝑦1=𝑦+𝑛sin𝜃
  let x1 = startPoint[0] + length * cos(angle);
  let y1 = startPoint[1] - length * sin(angle);
  let endpoint = [x1, y1];

  strokeWeight(weight);
  line(startPoint[0], startPoint[1], endpoint[0], endpoint[1]);

  let angleMax = angle + (PI / 4);
  let angleMin = angle - PI / 4;
  let angleDiff = randomBetween(0, angleMax - angleMin - (PI / 16));
  let angle1 = angleMax - angleDiff / 2;
  let angle2 = angleMin + angleDiff / 2;
  let newWeight = randomBetween(weight * 0.6, weight * 0.8);
  let newLength = randomBetween(length * 0.7, length * 0.9);

  if (newLength < 3) {
    return;
  }

  branch(endpoint, newWeight, newLength, angle1);
  branch(endpoint, newWeight, newLength, angle2);
}

function randomBetween(low, high) {
  return random(high - low) + low;
}

```

Test update!

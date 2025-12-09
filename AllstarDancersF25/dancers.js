
///======From Gohai's Section=============
class AimeeDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.t = random(1000);
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    this.jumpUp = sin(frameCount * 0.08) * -40;
    this.noseScale = 0.05 * sin(frameCount * 0.08) + 1;
    this.earSwing = radians(sin(frameCount * 0.08) * 10);
    this.t += 0.01;
    this.xMove = sin(this.t) * 40;
    this.yMove = cos(this.t) * 10;
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x + this.xMove, this.y + this.yMove);
    noStroke();

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    push();
    rotate(sin(this.t * 20) * 0.15);
    fill(255, 174, 185);
    rect(-33, 25, 12, 12);
    rect(21, 25, 12, 12);
    fill(227, 115, 131);
    arc(-27, 37, 12, 8, 0, PI);
    arc(27, 37, 12, 8, 0, PI);

    fill("pink");
    ellipse(0, 0, 85, 80);

    push();
    fill(255, 174, 185);
    translate(-12, -22);
    rotate(radians(-28) + this.earSwing);
    translate(-15, -10);
    ellipse(0, 0, 30, 20);
    pop();

    push();
    fill(255, 174, 185);
    translate(12, -22);
    rotate(radians(28) - this.earSwing);
    translate(15, -10);
    ellipse(0, 0, 30, 20);
    pop();

    push();
    stroke(0);
    translate(7, -4);
    rotate(radians(25));
    fill(255);
    strokeWeight(2);
    ellipse(0, 0, 14, 20);
    fill(0);
    circle(-2, 1, 7);
    pop();

    push();
    stroke(0);
    translate(-8, -3);
    rotate(radians(-20));
    fill(255);
    strokeWeight(2);
    ellipse(0, 0, 12, 15);
    fill(0);
    circle(1.5, 1, 5);
    pop();

    noStroke();
    fill(227, 115, 131);
    push();
    scale(this.noseScale);
    ellipse(0, 13, 45, 32);

    push();
    translate(-8, 13);
    rotate(radians(-32));
    fill(0);
    ellipse(0, 0, 6, 4);
    pop();

    push();
    translate(8, 13);
    rotate(radians(32));
    fill(0);
    ellipse(0, 0, 6, 4);
    pop();
    pop();

    fill(0);
    triangle(-6, -12, -14, -17, -17, -13);
    triangle(2, -13, 11, -21, 15, -17);
    pop();

    push();
    translate(0, -40 + this.jumpUp);

    fill(255, 239, 219);
    ellipse(0, -70, 80, 75);
    circle(0, -45, 35);
    circle(0, -95, 35);
    circle(-15, -50, 35);
    circle(15, -50, 35);
    circle(-15, -90, 35);
    circle(15, -90, 35);
    circle(-25, -80, 35);
    circle(25, -80, 35);
    circle(-25, -60, 35);
    circle(25, -60, 35);
    circle(-28, -70, 35);
    circle(28, -70, 35);

    fill(205, 129, 98);
    ellipse(0, -65, 45, 50);

    push();
    translate(-18, -70);
    rotate(radians(40) - this.earSwing);
    translate(-10, -8);
    ellipse(0, 0, 20, 15);
    pop();

    push();
    translate(18, -70);
    rotate(radians(-40) + this.earSwing);
    translate(10, -8);
    ellipse(0, 0, 20, 15);
    pop();

    stroke(0);
    strokeWeight(2.5);
    line(0, -42, 0, -48);
    line(0, -48, -8, -52);
    line(0, -48, 8, -52);
    strokeWeight(2);
    fill(255);
    ellipse(-5, -66, 8, 10);
    ellipse(4, -66, 10, 13);
    strokeWeight(2.5);
    line(-12, -67, 12, -68);
    noStroke();
    fill(0);
    arc(-4, -66, 6, 5, 0, PI);
    arc(4, -67, 7, 8, 0, PI);

    push();
    translate(-8, -78);
    rotate(radians(70));
    ellipse(0, 0, 3, 8);
    pop();

    push();
    translate(8, -78);
    rotate(radians(-70));
    ellipse(0, 0, 3, 8);
    pop();

    pop();

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.

    pop();
  }
}


class AmeliaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.bodyColor = "yellow";
    this.orangeColor = "orange";
    this.orangePosY = -37;
    this.orangeSpeed = -0.1;

    this.angle = 0; // Current angle of rotation
    this.wiggleSpeed = 0.2; // Speed of oscillation
    this.wiggleAmount = PI / 30; // Maximum angle of rotation
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    let oscillation = sin(frameCount * this.wiggleSpeed);
    this.angle = oscillation * this.wiggleAmount;

    // this.orangeY go from -37 to -42 and then back
    this.orangePosY += this.orangeSpeed;
    if (this.orangePosY <= -42 || this.orangePosY >= -37) {
      this.orangeSpeed = -this.orangeSpeed;
    }
    //console.log(this.orangePosY);
  }

  // Head

  drawOrange(orangePosX, orangePosY, orangeWidth, orangeHeight) {
    push();
    translate(orangePosX, orangePosY);
    fill(this.orangeColor);
    ellipse(0, 0, orangeWidth, orangeHeight);

    push();
    translate(0, -orangeHeight / 2);
    fill("brown");
    arc(0, 0, 2, 5, HALF_PI, 0, CHORD);
    pop();

    pop();
  }

  drawEyes(eyePosX, eyePosY, eyeRotation) {
    push();

    push();
    translate(-eyePosX, eyePosY);
    rotate(eyeRotation);
    fill("white");
    ellipse(0, 0, 15, 10);
    fill("black");
    circle(0.5, 1, 8);
    pop();

    push();
    translate(eyePosX, eyePosY);
    rotate(-eyeRotation);
    fill("white");
    ellipse(0, 0, 15, 10);
    fill("black");
    circle(-0.5, 1, 8);
    pop();

    pop();
  }

  drawEars(earPosX, earPosY, earRotation, earWidth, earHeight) {
    push();

    push();
    translate(-earPosX, earPosY);
    rotate(-earRotation);
    fill(this.bodyColor);
    ellipse(0, 0, earWidth, earHeight);
    pop();

    push();
    translate(earPosX, earPosY);
    rotate(earRotation);
    fill(this.bodyColor);
    ellipse(0, 0, earWidth, earHeight);
    pop();

    pop();
  }

  drawHead(headPosX, headPosY) {
    push();

    rotate(-this.angle);
    translate(headPosX, headPosY);
    fill(this.bodyColor);
    noStroke();
    ellipse(0, 0, 80, 66);

    // lower ellipse (nose and mouth)
    push();
    fill(this.orangeColor);
    translate(0, 13);
    ellipse(0, 0, 60, 40);
    pop();

    // eyes
    this.drawEyes(20, -10, PI / 15);

    // orange
    this.drawOrange(0, this.orangePosY, 15, 12);

    // ears
    this.drawEars(30, -20, PI / 9, 10, 15);

    pop();
  }

  // Body

  drawArm(armPosX, armPosY, armRotation, armWidth, armHeight) {
    push();

    // left
    push();
    translate(-armPosX, armPosY);
    rotate(-armRotation);
    fill(this.bodyColor);
    ellipse(0, 0, armWidth, armHeight);
    pop();

    // right
    push();
    translate(armPosX, armPosY);
    rotate(armRotation);
    fill(this.bodyColor);
    ellipse(0, 0, armWidth, armHeight);
    pop();

    pop();
  }

  drawBody(bodyCenterX, bodyCenterY) {
    push();

    noStroke();
    rectMode(CENTER);
    translate(bodyCenterX, bodyCenterY);

    // arms
    push();
    rotate(this.angle);
    this.drawArm(30, 0, -PI / 12, 16, 36);
    pop();

    // upper body
    push();
    fill(this.bodyColor);
    rect(0, 0, 54, 50);
    pop();

    // pants and feet
    fill(this.orangeColor);

    // left
    push();
    translate(-20, 30);
    // foot
    fill(this.bodyColor);
    ellipse(0, 2, 22, 20);
    // pant left
    fill(this.orangeColor);
    rect(0, 0, 22, 10);
    pop();

    // right
    push();
    translate(20, 30);
    // foot
    fill(this.bodyColor);
    ellipse(0, 2, 22, 20);
    // pant right
    push();
    // rotate(this.angle);
    fill(this.orangeColor);
    rect(0, 0, 22, 10);
    pop();
    pop();

    // center pant
    push();
    rotate(this.angle);
    fill(this.orangeColor);
    rect(0, 20, 60, 20);
    pop();

    pop();
  }

  drawDancer() {
    push();

    push();
    // rotate(this.angle);
    this.drawBody(0, -10);
    pop();

    this.drawHead(0, -50);

    pop();
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    this.drawDancer();

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes();

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

class AngelinaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.emotion = "normal";
    this.emotionChange = 0;
    // add properties for your dancer here:
    this.bodySway = 0;
    this.hairSway = 0;
  }
  update() {
    this.x = width / 2 + sin(frameCount * 0.05) * 10;
    this.y = height / 2 + cos(frameCount * 0.05) * 10;

    this.bodySway = map(sin(frameCount / 50), -1, 1, -10, 10);
    this.hairSway = map(sin(frameCount * 0.1), -1, 1, -5, 5);

    this.emotionChange++;
    if (this.emotionChange > 120) {
      let rand = random();
      if (rand < 0.33) {
        this.emotion = "normal";
      } else if (rand < 0.66) {
        this.emotion = "cry";
      } else {
        this.emotion = "blush";
      }
      this.emotionChange = 0;
      // update properties here to achieve
      // your dancer's desired moves and behaviour
    }
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    fill("yellow");
    stroke(0);
    noStroke();

    ellipse(this.bodySway, 230, 140, 160); //lowerbody
    circle(this.bodySway, 235, 150); //upperbody
    push();
    translate(this.bodySway - 70, 235);
    rotate(0.5 * sin(frameCount * 0.05));
    translate(0, 20);
    ellipse(0, 0, 20, 40); //hand
    pop();
    push();
    translate(this.bodySway + 70, 235);
    rotate(-0.5 * sin(frameCount * 0.05));
    translate(0, 20);
    ellipse(0, 0, 20, 40);
    pop();
    fill(150, 75, 0);
    circle(this.bodySway - 25, 205, 15); //eyes
    circle(this.bodySway + 25, 205, 15);
    stroke(150, 75, 0);
    line(
      this.bodySway - 10 + this.hairSway,
      140,
      this.bodySway + this.hairSway,
      150
    ); //hair
    line(
      this.bodySway + this.hairSway,
      150,
      this.bodySway + 10 + this.hairSway,
      140
    );
    line(this.bodySway - 15, 310, this.bodySway - 15, 325); //leg
    line(this.bodySway + 15, 310, this.bodySway + 15, 325);
    line(this.bodySway + 15, 317, this.bodySway + 27, 321); //small right leg
    line(this.bodySway + 15, 317, this.bodySway + 5, 321);
    line(this.bodySway - 15, 317, this.bodySway - 5, 321); //small left leg
    line(this.bodySway - 15, 317, this.bodySway - 25, 321);
    fill(255, 165, 0);
    ellipse(this.bodySway, 236, 35, 21); //mouth
    ellipse(this.bodySway, 226, 43, 26);
    fill(150, 75, 0);
    circle(this.bodySway - 5, 225, 5); //nose
    circle(this.bodySway + 5, 225, 5);

    // other emotions
    if (this.emotion === "cry") {
      stroke(150, 75, 0);
      fill(137, 207, 240);
      strokeWeight(1.5);
      arc(this.bodySway - 25, 212, 8, 12, 0, PI); // cry
    }

    if (this.emotion === "blush") {
      stroke(221, 123, 123);
      strokeWeight(1.5);
      line(this.bodySway - 27, 230, this.bodySway - 25, 220); // blush
      line(this.bodySway - 31, 230, this.bodySway - 29, 220);
      line(this.bodySway - 35, 230, this.bodySway - 33, 220);
      line(this.bodySway + 25, 230, this.bodySway + 27, 220);
      line(this.bodySway + 29, 230, this.bodySway + 31, 220);
      line(this.bodySway + 33, 230, this.bodySway + 35, 220);
    }

    stroke(150, 75, 0);
    if (mouseIsPressed) {
      stroke(150, 75, 0);
      strokeWeight(1.5);
      line(this.bodySway - 3, 190, this.bodySway - 3, 198); //angry
      line(this.bodySway + 2, 190, this.bodySway + 2, 198);
      fill("yellow");
      noStroke();
      circle(this.bodySway - 25, 205, 15); //eyes
      circle(this.bodySway + 25, 205, 15);
      fill(150, 75, 0);
      ellipse(this.bodySway - 25, 205, 15, 9); // new eyes
      ellipse(this.bodySway + 25, 205, 15, 9);
    }

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.

    pop();
  }
}

class AnjiDancer {
  constructor(x, y, s = 80) {
    this.x = x;

    this.y = y;

    this.s = s;

    this.angle = 0;

    this.paws = 0;
  }
  update() {
    this.angle += 0.05; //how fast or slow the cat rotates

    this.paws = sin(this.angle * 3) * 8; //how fast or slow the paws oscillate
  }

  display() {
    push();

    translate(this.x, this.y);

    rotate(sin(this.angle) * 0.4); //rotates the body

    noStroke();

    fill(100, 220, 150); //color of the alien cat

    ellipse(0, 30, 50, 60); //the body

    ellipse(0, 0, 40, 40); //the head

    triangle(
      //the ears

      -this.s * 0.2,

      -this.s * 0.4,

      -this.s * 0.2,

      -this.s * 0.05,

      0,

      -this.s * 0.1
    );

    triangle(
      this.s * 0.2,

      -this.s * 0.4,

      this.s * 0.2,

      -this.s * 0.05,

      0,

      -this.s * 0.1
    );

    //the whites of the eyes

    fill(255);

    ellipse(-10, 0, 15, 20);

    ellipse(10, 0, 15, 20);

    //the pupils moving

    fill(0);

    let eyeMove = sin(this.angle * 10); //moves the eyes up and down

    ellipse(-10, 0 + eyeMove, -8, 8);

    ellipse(10, 0 + eyeMove, -5, 5);

    fill(0);

    textAlign(CENTER, CENTER);

    textSize(this.s * 0.3); //scales the text

    rotate(radians(90)); //makes sure the 3 lays down so it looks like a cat's mouth

    text("3", 10, 0);

    //paws moving

    strokeWeight(3);

    stroke(0);

    noFill();

    ellipse(30, 10 - this.paws, 10, 15);

    ellipse(30, -10 - this.paws, 10, 15);

    pop();
  }
}

class CynthiaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    this.amp = random(50, 70);
    this.blinkCount = 0;
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour

    // blink
    if (frameCount % 120 === 0 && this.blinkCount === 0) {
      this.blinkCount = 8;
    }
    if (this.blinkCount > 0) {
      this.blinkCount--;
    }
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y + 100);
    scale(0.5);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    //===== body =====
    fill(55, 150, 100);
    circle(100, 0, 90);
    //arm
    let armSwing = map(sin(frameCount / 20), -1, 1, 10, -10);
    strokeWeight(5);
    stroke(10, 250, 20);
    line(20, 30 + armSwing, 100, 84 + armSwing);
    line(180, 30 + armSwing, 130, 84 + armSwing);
    noStroke();

    circle(100, 84, 80);
    fill(255, 150, 60);
    circle(120, 2 * 78, 70);
    fill(55, 150, 100);
    circle(150, 3 * 71, 60);

    push();
    translate(202, 3 * 77);
    rotate(sin(frameCount * 0.1));
    fill(255, 150, 60);
    circle(0, 0, 50);
    fill(55, 150, 100);
    circle(49, 10, 49);
    fill(255, 150, 60);
    circle(94, 10, 40);
    fill(55, 150, 100);
    circle(129, 10, 30);
    pop();

    //==== face ======
    fill(0);
    circle(80, -5, 10);
    circle(120, -5, 10);
    fill(color("pink"));
    ellipse(65, 3, 10, 5);
    ellipse(135, 3, 10, 5);

    noFill();
    stroke(0);
    strokeWeight(2);
    arc(100, 10, 20, 10, 0, PI);
    noStroke();

    // === chujiao ===
    stroke(10, 250, 20);
    strokeWeight(2);
    let headX = 100;
    let headY = 0;
    let rHead = 45;
    let sway = sin(frameCount * 0.12) * 6;
    line(headX - 12, headY - rHead + 8, headX - 32 - sway, headY - rHead - 25);
    line(headX + 12, headY - rHead + 8, headX + 32 + sway, headY - rHead - 25);
    noStroke();

    // === blink ===
    if (this.blinkCount > 0) {
      fill(55, 150, 100);
      noStroke();
      rect(75, -10, 10, 10, 2);
      rect(115, -10, 10, 10, 2);
      stroke(40, 120);
      strokeWeight(2);
      line(75, -5, 85, -5);
      line(115, -5, 125, -5);
      noStroke();
    }

    this.y = 100 + sin(frameCount / 20) * this.amp;

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes();

    pop();
  }
  drawReferenceShapes() {}
}

class MikeDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // Three colors for the pot
    this.potCol1 = color(177, 102, 51);
    this.potCol2 = color(199, 135, 77);
    this.potCol3 = color(211, 154, 98);
    // Color for the cactus body
    this.cactusCol = color(90, 141, 23);
    // Color for spikes
    this.spikeCol = color("red");

    // Body sway parameters
    this.swayAngle = 0;
    this.swaySpeed = 0.05;
    this.swayAmount = 0.15;

    // Arm movement parameters
    this.armLength = 80;
    this.armWaveAmplitude = 10;
    this.armWaveSegments = 30;
  }
  update() {
    this.swayAngle += this.swaySpeed;
  }

  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    push();
    translate(0, 40);
    rotate(sin(this.swayAngle) * this.swayAmount);
    translate(0, -40);
    this.drawCactusBody(0, -10);
    this.drawArms(0, 0);
    // Left Eye
    this.drawEyes(-10, -30);
    // Right Eye
    this.drawEyes(10, -30);
    // Mouth
    this.drawMouth(0, 5);
    // Spikes
    this.drawSpikesRight(30, -50);
    this.drawSpikesRight(30, -40);
    this.drawSpikesRight(30, -30);
    this.drawSpikesLeft(-30, -50);
    this.drawSpikesLeft(-30, -40);
    this.drawSpikesLeft(-30, -30);
    pop();

    this.drawPot(0, 40);

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    pop();
  }

  drawPot(potX, potY) {
    noStroke();
    let steps = 50;

    rectMode(CORNER);
    for (let i = 0; i < steps; i++) {
      let t = i / steps;
      let c;

      if (t < 0.5) {
        c = lerpColor(this.potCol1, this.potCol2, t * 2);
      } else {
        c = lerpColor(this.potCol2, this.potCol3, (t - 0.5) * 2);
      }

      fill(c);
      let x = potX - 60 + (120 / steps) * i;
      let w = 120 / steps + 1;
      rect(x, potY - 10, w, 20);
    }

    for (let i = 0; i < steps; i++) {
      let t = i / steps;
      let c;

      if (t < 0.5) {
        c = lerpColor(this.potCol1, this.potCol2, t * 2);
      } else {
        c = lerpColor(this.potCol2, this.potCol3, (t - 0.5) * 2);
      }

      fill(c);

      let topLeft = potX - 55 + (110 / steps) * i;
      let topRight = potX - 55 + (110 / steps) * (i + 1);
      let bottomLeft = potX - 40 + (80 / steps) * i;
      let bottomRight = potX - 40 + (80 / steps) * (i + 1);

      quad(
        topLeft,
        potY + 10,
        topRight,
        potY + 10,
        bottomRight,
        potY + 60,
        bottomLeft,
        potY + 60
      );
    }

    rectMode(CORNER);
  }

  drawCactusBody(bodyX, bodyY) {
    noStroke();
    fill(this.cactusCol);
    rectMode(CENTER);
    rect(bodyX, bodyY, 60, 150, 80);
    rectMode(CORNER);
  }

  drawArms(bodyX, bodyY) {
    strokeWeight(20);
    stroke(this.cactusCol);
    noFill();
    // Left Arm
    beginShape();
    for (let i = 0; i <= this.armWaveSegments; i++) {
      let t = i / this.armWaveSegments;
      let x = bodyX - t * this.armLength;
      let y =
        bodyY + sin(t * PI * 2 + this.swayAngle * 2) * this.armWaveAmplitude;
      vertex(x, y);
    }
    endShape();
    // Right Arm
    beginShape();
    for (let i = 0; i <= this.armWaveSegments; i++) {
      let t = i / this.armWaveSegments;
      let x = bodyX + t * this.armLength;
      let y =
        bodyY +
        cos(t * PI * 2 + PI + this.swayAngle * 2) * this.armWaveAmplitude;
      vertex(x, y);
    }
    endShape();
  }

  drawEyes(eyeX, eyeY) {
    fill(0);
    noStroke();
    ellipse(eyeX, eyeY, 8, 8);
  }

  drawMouth(mouthX, mouthY) {
    stroke(0);
    strokeWeight(2);
    ellipse(mouthX, mouthY, 20, 20);
  }

  drawSpikesRight(spikeX, spikeY) {
    noStroke();
    fill(this.spikeCol);
    triangle(spikeX, spikeY, spikeX, spikeY + 5, spikeX + 20, spikeY + 2.5);
  }

  drawSpikesLeft(spikeX, spikeY) {
    noStroke();
    fill(this.spikeCol);
    triangle(spikeX, spikeY, spikeX, spikeY + 5, spikeX - 20, spikeY + 2.5);
  }
}

class SabrinaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.pupilX = 0;
    this.pupilSpeedX = 0.3;
    this.h = 0;
    // add properties for your dancer here:
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.pupilX = this.pupilX + this.pupilSpeedX;
    if (this.pupilX > 5) {
      this.pupilSpeedX = this.pupilSpeedX * -1;
    }
    if (this.pupilX < -5) {
      this.pupilSpeedX = this.pupilSpeedX * -1;
    }

    this.h = 200 + sin(frameCount / 10) * 5;
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.

    push();
    translate(this.x, this.y);
    push();
    translate(0, 0);

    let angle = map(sin(frameCount / 30), -1, 1, 0 - 20, 0 + 20);
    rotate(radians(angle));

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    //back of body
    fill(255, 135, 45);
    stroke(253, 117, 13);
    ellipse(25, -5, 60, 100);
    ellipse(-25, -5, 60, 100);
    ellipse(0, -10, 60, 100);

    //legs/feet
    fill(10, 95, 21);
    stroke(10, 95, 21);
    rect(-25, this.h - 160, 5, 30);
    rect(20, this.h - 160, 5, 30);
    ellipse(-30, this.h - 130, 30, 10);
    ellipse(30, this.h - 130, 30, 10);

    //stem
    fill(10, 95, 21);
    stroke(10, 95, 21);
    rect(-10, this.h - 270, 20, 60);

    //body
    fill(255, 135, 45);
    stroke(253, 117, 13);
    ellipse(45, 0, 60, 100);
    ellipse(-45, 0, 60, 100);
    ellipse(30, 0, 60, 100);
    ellipse(-30, 0, 60, 100);
    ellipse(0, 0, 60, 100);

    //eyes
    fill(0);
    stroke(0);
    triangle(10, 0, 25, -20, 40, 0);
    triangle(-10, 0, -25, -20, -40, 0);
    ellipse(0, 20, 10, 20);
    fill(255, 240, 97);
    ellipse(25 + this.pupilX, -5, 10, 10);
    ellipse(-25 + this.pupilX, -5, 10, 10);

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes();
    pop();
    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

class MarleneDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    this.size = 100;
    this.color1 = color(181, 168, 234);
    this.color2 = color(random(255), random(255), random(255));

    this.angleX = 0;
    this.angleY = 0;
  }

  update() {
    this.angleX = this.angleX + 0.05;
    this.angleY = this.angleY + 0.05;

    this.x = this.x + sin(this.angleX);
    this.y = this.y + cos(this.angleY) * 2;
  }

  display() {
    push();
    translate(this.x, this.y);

    //butterfly wings
    push();
    rotate(sin(this.angleX) * 0.1);
    noStroke();
    fill(255);
    circle(-70, -60, 20);
    circle(-65, -50, 20);
    circle(-55, -40, 20);
    circle(-40, -35, 25);
    circle(-25, -30, 30);
    pop();

    push();
    rotate(-sin(this.angleX) * 0.1);
    noFill();
    stroke(255);
    circle(70, -60, 20);
    circle(65, -50, 20);
    circle(55, -40, 20);
    circle(40, -35, 25);
    circle(25, -30, 30);
    pop();

    //noStroke();

    push();
    rotate(PI / 6 + sin(this.angleX) * 0.1);
    noStroke();
    fill(this.color1);
    ellipse(-50, -20, this.size, this.size * 0.35);
    ellipse(15, -10, this.size * 0.5, this.size * 0.3);
    pop();

    push();
    noStroke();
    fill(this.color1);
    rotate(-PI / 6 - sin(this.angleX) * 0.1);
    ellipse(50, -20, this.size, this.size * 0.35);
    ellipse(-15, -10, this.size * 0.5, this.size * 0.3);
    pop();

    //small dots
    push();
    rotate(-sin(this.angleX) * 0.1);
    fill(this.color1);
    noStroke();
    circle(40, 20, this.size * 0.08);
    circle(47, 30, this.size * 0.12);
    circle(52, 40, this.size * 0.07);
    pop();

    push();
    noFill();
    stroke(255);
    rotate(sin(this.angleX) * 0.1);
    circle(-40, 20, this.size * 0.08);
    circle(-47, 30, this.size * 0.12);
    circle(-52, 40, this.size * 0.07);
    pop();

    //eyes
    fill(255);
    circle(-15, -60, this.size * 0.08);
    circle(15, -60, this.size * 0.08);
    fill(80, 184, 231);
    circle(-17, -59, this.size * 0.05);
    fill(255, 0, 0);
    circle(13, -59, this.size * 0.05);

    //pink ellipse
    fill(253, 177, 200);
    rect(-30, -53, this.size * 0.16, this.size * 0.08);
    rect(14, -53, this.size * 0.16, this.size * 0.08);

    //mosue
    fill(255, 193, 0);
    ellipse(0, -50, this.size * 0.05, this.size * 0.03);

    //ear
    arc(-20, -73, this.size * 0.2, this.size * 0.2, PI, 0);
    arc(20, -73, this.size * 0.2, this.size * 0.2, PI, 0);

    //this.drawReferenceShapes()

    pop();
  }

  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    //line(-5, 0, 5, 0);
    //line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}
class NiniDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.color1 = "white";
    this.u = width / 2;
    this.v = height / 2;
    this.a = 0;
  }
  update() {
    angleMode(DEGREES); // GH: added
    this.v = 30 * sin(frameCount * 5);
    let angle = sin(frameCount * 10);
    this.larm = map(angle, -1, 1, -PI / 10, PI / 10);
  }

  display() {
    push();
    translate(this.x, this.y + this.v);
    scale(0.7);

    beginShape();
    vertex(-85, 40);
    bezierVertex(0, -165, 0, -150, 85, 40);

    endShape(CLOSE);
    fill(0);
    line(20, -5, -20, -5);

    noStroke();
    fill("pink");
    triangle(-8, -20, 0, -35, 8, -20);

    fill(this.color1);
    noStroke();

    rect(-89, 10, 178, 85, 80);

    push();
    translate(-35, 25);
    fill(0);
    fill(255, 193, 246, 245);
    quad(-50, 40, 120, 40, 160, 70, -80, 70);
    pop();

    angleMode(RADIANS);
    push();
    rotate(this.larm);
    rect(50, 10, 40, 10, 100, 10, 10, 10);
    rect(-85, 0, 25, 7, 100, 10, 10, 10);
    stroke("magenta");
    strokeWeight(5);
    line(85, 15, 80, -50);
    fill(255);
    translate(80, -50);
    scale(0.5);
    beginShape();
    vertex(0, -50);
    vertex(14, -20);
    vertex(47, -15);
    vertex(23, 7);
    vertex(29, 40);
    vertex(0, 25);
    vertex(-29, 40);
    vertex(-23, 7);
    vertex(-47, -15);
    vertex(-14, -20);
    endShape(CLOSE);

    pop();

    fill(0);
    noStroke();
    angleMode(DEGREES);
    rotate(10);
    ellipse(-35, -45, 28, 35);
    fill(255);
    ellipse(-35, -56, 12, 5);
    fill(0);
    rotate(-20);
    ellipse(34, -45, 28, 35);
    fill(255);
    ellipse(35, -56, 12, 5);
    rotate(25);
    ellipse(15, -45, 12, 5);
    angleMode(DEGREES);
    rotate(330);
    fill(255);
    ellipse(-13, -45, 12, 5);
    angleMode();

    pop();

    pop();
  }
  drawReferenceShapes() {}
}

class StephenDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.col = color(176, 161, 130);
    this.rightArmAngle = 0;
    this.leftArmAngle = 0;
    this.armSpeed = random(1, 4);
    this.leftLegAngle = 0;
    this.rightLegAngle = 0;
    this.legSpeed = random(3, 8);
    this.danceStep = 0;
  }
  update() {
    angleMode(DEGREES);
    this.rightArmAngle = sin(frameCount * this.armSpeed + PI) * 30;
    this.leftArmAngle = cos(frameCount * this.armSpeed + PI) * 30;
    this.leftLegAngle = cos(frameCount * this.legSpeed + PI) * 20;
    this.rightLegAngle = sin(frameCount * this.legSpeed + PI) * 20;
    this.x = this.x + map(sin(frameCount * 10), -1, 1, -2, 2);

    if (mouseIsPressed) {
      this.danceStep = (this.danceStep + 1) % 60;

      // Two-steps forward
      if (this.danceStep < 30) {
        this.x = this.x + 1.5;
      } else {
        // Step back
        this.x = this.x - 1.5;
        this.leftarmAngle = cos(this.danceStep * 5) * 30;
        this.rightarmAngle = sin(this.danceStep * 5) * 30;
        this.leftLegAngle = cos(this.danceStep * 5) * 10;
        this.rightLegAngle = sin(this.danceStep * 5) * 10;
      }
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    this.drawFace();
    this.drawBody();
    this.drawArm();
    this.drawLeg();

    pop();
  }
  // Face
  drawFace() {
    fill(this.col);
    ellipse(0, 0, 100);
    fill("white");
    //Eyes
    circle(-25, 0, 15);
    circle(25, 0, 15);

    //Pupil
    fill("black");
    circle(-25, 0, 6);
    circle(25, 0, 6);

    //nose
    triangle(0, 10, -6, 15, 6, 15);

    //mouth
    noStroke();
    fill("white");
    arc(0, 25, 30, 30, 0, -180);
  }
  //Body
  drawBody() {
    push();
    fill(this.col);
    noStroke();
    rect(-50, 40, 100, 100);

    //Ghana flag
    fill("red");
    rect(-20, 70, 40, 10);
    fill("gold");
    rect(-20, 80, 40, 10);
    fill("green");
    rect(-20, 90, 40, 10);
    fill(0);
    triangle(-5, 85, 0, 80, 5, 85);
    triangle(-7, 85, 0, 83, 0, 88);
    triangle(7, 85, 0, 83, 0, 88);
    triangle(-5, 85, 0, 90, 5, 85);
    pop();
  }
  //Arm

  drawArm() {
    //Right-arm
    fill(this.col);
    push();
    translate(50, 50);
    rotate(this.rightArmAngle);
    noStroke();
    rect(-25, 5, 100, 20);
    circle(75, 20, 40);

    pop();

    //Left-arm
    push();
    translate(-50, 50);
    rotate(this.leftArmAngle);
    noStroke();
    rect(-75, 5, 100, 20);
    circle(-75, 15, 40);
    pop();
  }
  //Leg
  drawLeg() {
    //Left- leg
    push();
    translate(-25, 140);
    rotate(this.leftLegAngle);
    rect(-10, -10, 20, 70);
    pop();

    push();
    translate(25, 140);
    rotate(this.rightLegAngle);
    rect(-5, -10, 20, 70);
    pop();
  }
}

class QinDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.t = 0; // GH: changed
  }
  update() {
    // GH: added
  }
  display() {
    push();
    this.t += 0.05;
    translate(this.x, this.y);
    //body
    noStroke();
    colorMode(HSB);
    for (let i = -60; i < 70; i += 10) {
      for (let j = -80; j < 60; j += 10) {
        //bodycolor
        let d = dist(i, j, -50, -80);
        let dSize = dist(mouseX - this.x, mouseY - this.y, i, j);
        fill(map(d, 0, 200, 0, 360), 80, 100);
        if (dSize < 30) {
          circle(
            i + 5 * sin(this.t * 2),
            j + 5 * cos(this.t * 2),
            map(dSize, 0, 30, 3, 10)
          );
        } else {
          circle(i - 5 * sin(this.t * 2), j - 5 * cos(this.t * 2), 10);
        }
      }
    }
    colorMode(RGB);

    //eye
    let ex1, ey1, ex2, ey2;
    let d2 = dist(mouseX - this.x, mouseY - this.y, 0, -50);
    noStroke();
    fill(250);
    circle(-15, -50, 30);
    circle(15, -50, 30);
    if (d2 < 150) {
      fill(0);
      ex1 = map(mouseX - this.x, -70, 70, -20, -10);
      ey1 = map(mouseY - this.y, -100, 50, -60, -45);
      ex2 = map(mouseX - this.x, -70, 70, 10, 20);
      ey2 = map(mouseY - this.y, -100, 50, -60, -45);
      circle(ex1, ey1, 10);
      circle(ex2, ey2, 10);
    } else {
      fill(0);
      circle(-10, -50, 10);
      circle(10, -50, 10);
    }

    // limbs
    stroke(255);
    strokeWeight(3);
    noFill();
    curve(
      -40,
      -80,
      -60 - 5 * sin(this.t * 2),
      0 - 5 * cos(this.t * 2),
      -20,
      0,
      -10,
      -80
    );
    curve(
      40,
      -80,
      60 - 5 * sin(this.t * 2),
      0 - 5 * cos(this.t * 2),
      20,
      0,
      10,
      -80
    );
    curve(
      20,
      80,
      -20 - 5 * sin(this.t * 2),
      50 - 5 * cos(this.t * 2),
      -20,
      90,
      20,
      85
    );
    curve(
      -20,
      80,
      20 - 5 * sin(this.t * 2),
      50 - 5 * cos(this.t * 2),
      20,
      90,
      -20,
      85
    );
    //this.drawReferenceShapes();

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}


///========Fram Ian's Section

class XinyanHuangDancer 
{
  constructor(startX, startY) 
  {
    this.x = startX;
    this.y = startY;
    this.glowColor = random(360);
    this.glowIntensity = 0.5;
    this.bodycolor = random(360);
    this.monsterSize = 70;
    this.eyeSize = 30;
    this.spikeSize = 20;
    this.breathe = true;
    this.Timer2 = 0;
    this.isBlinking = false;
    }
  update() 
    {
    //身体大小变化
    colorMode(HSB);
    //noLoop();
    if(this.breathe){
      this.monsterSize+=5;
      if(this.monsterSize>100){
        this.breathe = false;}
      }
      else{
        this.monsterSize -=10;
        if(this.monsterSize<70){
          this.breathe = true;
        }
      }
    
    /*
    this.monsterSize += 10;
    if(this.monsterSize>110){
    this.monsterSize = lerp(this.monsterSize,70,0.05);
    */

    //眨眼
    this.Timer2++;
  if (this.Timer2 > 100) { this.isBlinking = true; this.Timer2 = 0; }
  if (this.isBlinking) {
    this.eyeSize = lerp(this.eyeSize, 5, 0.3);
    if (this.eyeSize < 6) this.isBlinking = false;
  } else {
    this.eyeSize = lerp(this.eyeSize, 30, 0.3);
  }
  }



  
  display() 
  {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    //发光
    fill(this.glowColor, 80, 100, this.glowIntensity);
    noStroke();
    circle(0,0, this.monsterSize + 15);
    fill(this.glowColor, 80, 100, this.glowIntensity * 0.5);
    circle(0,0, this.monsterSize + 25);
    fill(this.glowColor, 80, 100, this.glowIntensity * 0.35);
    circle(0,0, this.monsterSize + 35);

    //手
    fill(random(360),85,90);
    strokeWeight(10);
    bezier(0,0,-100,random(-50,50), - 75,
   random(-50,50),-100,0);
  bezier(0,0,100,random(-50,50),75,random(-50,50),100,0);
 
    //身体
    fill(this.bodycolor,80,90);
    circle(0,0,this.monsterSize);
    
    //尖刺
    for (let i = 0; i < 15; i++) {
      let angle = map(i, 0, 15, 0, TWO_PI);
      fill(random(360), 80, 90);
      noStroke();
      let r1 = this.monsterSize / 2 + this.spikeSize + 10;
      let r2 = this.monsterSize / 2 + this.spikeSize / 2;
      triangle(
        0,
        0,
        cos(angle) * r1,
        sin(angle) * r1,
        cos(angle + PI / 15) * r2,
        sin(angle + PI / 15) * r2
      );
    }
    //眼睛

    fill('white');
    ellipse(-40, -20, this.eyeSize + 15, this.eyeSize + 10);
    fill(0, 0, 0);
    ellipse(-40, -20, this.eyeSize / 2, this.eyeSize / 2);
    fill('white');
    ellipse(40, -20, this.eyeSize + 15, this.eyeSize + 10);
    fill(0, 0, 0);
    ellipse(40, -20, this.eyeSize / 2, this.eyeSize / 2);
    //嘴
    noFill();
    stroke(0, 0, 0);
    strokeWeight(4);
    arc(0, 20, 60, 40, 0, PI);

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }
 
}

// from Micheal
class Tapper {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.t = 0;
  }

  update() {
    this.t += 0.05;
    this.hipSwing = sin(this.t) * 8; //side movement
    this.legSwing = sin(this.t) * 12; // leg swing
    this.armSwing = sin(this.t * 0.5) * 0.3; // arm movement
  }
display() {
  push();
  translate(this.x, this.y);

  stroke(255);
  strokeWeight(3);
  noFill();

  // body tilt
  push();
  let tilt = this.hipSwing * 0.2; 
  translate(this.hipSwing, 0);
  rotate(tilt); 
  line(0, -50, 0, 0);
  // head
  ellipse(0, -80, 20);
  
  // arms swing relative to body
  let shoulderY = -40;
  let armLength = 30;
  let armAngle = this.armSwing;

  // left arm draws arm based off there the shoulder y level should be and rotates it 
  push();
  translate(-10, shoulderY);
  rotate(armAngle);
  line(0, 0, -armLength, 0);
  pop();

  // right arm draws arm based off there the shoulder y level should be and rotates it 
  push();
  translate(10, shoulderY);
  rotate(armAngle);
  line(0, 0, armLength, 0);
  pop();

  pop();

  // creates main hip point where the legs and hips will swing
  push();
  translate(this.hipSwing, 0);
  ellipse(0, 0, 10);

  // legs swing, just two lines going opposite directions just like the arms 
  let legMovement = this.legSwing;
  line(0, 0, -25 + legMovement, 40);
  line(0, 0, 25 + legMovement, 40);
  pop();

  // reference box and cross
  this.drawReferenceShapes();

  pop();
}

  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

// From Nick
class NickDancer 
{
  constructor(startX, startY) 
  {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    this.time = 0;
    this.bobAmount = 10;
    this.speed = 1.5;
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.time += 0.08 * this.speed;
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    let bob = sin(this.time) * this.bobAmount;
    
    stroke(255);
    strokeWeight(2);
    fill(255);
    
    push();
    translate(0, 70 + bob);
    rotate(this.time);
    noFill();
    circle(0, 0, 40);
    line(-10, -10, 10, 10);
    line(-10, 10, 10, -10);
    pop();
    
    push();
    translate(0, 40 + bob);
    line(0, 0, 0, 30);
    
    fill(255);
    noStroke();
    ellipse(0, 2, 20, 8);
    stroke(255);
    
    fill(255);
    triangle(-15, 0, 15, 0, 0, -25);
    
    strokeWeight(2);
    noFill();
    
    let pedalRadius = 15;
    let wheelCenterY = 30;
    let leftPedalX = cos(this.time) * pedalRadius;
    let leftPedalY = sin(this.time) * pedalRadius + wheelCenterY;
    let rightPedalX = cos(this.time + PI) * pedalRadius;
    let rightPedalY = sin(this.time + PI) * pedalRadius + wheelCenterY;
    
    line(0, wheelCenterY, leftPedalX, leftPedalY);
    line(0, wheelCenterY, rightPedalX, rightPedalY);
    
    let thighLength = 18;
    
    let leftDist = dist(0, 0, leftPedalX, leftPedalY);
    let leftAngle = atan2(leftPedalY, leftPedalX);
    let leftMidDist = min(leftDist / 2, thighLength);
    let leftKneeX = cos(leftAngle) * leftMidDist + sin(leftAngle) * 8;
    let leftKneeY = sin(leftAngle) * leftMidDist - cos(leftAngle) * 8;
    line(0, 0, leftKneeX, leftKneeY);
    line(leftKneeX, leftKneeY, leftPedalX, leftPedalY);
    
    rectMode(CENTER);
    fill(255);
    noStroke();
    rect(leftPedalX, leftPedalY, 12, 4);
    stroke(255);
    
    let rightDist = dist(0, 0, rightPedalX, rightPedalY);
    let rightAngle = atan2(rightPedalY, rightPedalX);
    let rightMidDist = min(rightDist / 2, thighLength);
    let rightKneeX = cos(rightAngle) * rightMidDist + sin(rightAngle) * 8;
    let rightKneeY = sin(rightAngle) * rightMidDist - cos(rightAngle) * 8;
    line(0, 0, rightKneeX, rightKneeY);
    line(rightKneeX, rightKneeY, rightPedalX, rightPedalY);
    
    rectMode(CENTER);
    fill(255);
    noStroke();
    rect(rightPedalX, rightPedalY, 12, 4);
    stroke(255);
    
    strokeWeight(2);
    line(-15, -10, -25, -5);
    line(15, -10, 25, -5);
    
    noFill();
    circle(0, -40, 25);
    
    fill(255);
    triangle(-10, -52, 10, -52, 0, -70);
    
    strokeWeight(3);
    point(3, -42);
    point(8, -40);
    
    pop();




    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
}
}

// From Alyx
class AlyxDancer 
{
  constructor(startX, startY, colorR, colorG, colorB) {
    this.x = startX;
    this.y = startY;
    this.f = 100;
    this.j = 0
    this.r = colorR;
    this.g = colorG;
    this.b = colorB;
    this.arm = 0;
    this.leg = 0;
    this.tail = 0;
    this.horn = 20;
    this.speed = 1
    this.pistol = 0;
    
  }
  update() {
    this.x += this.speed;
    this.y += sin(frameCount*0.05) * 2 ;
    
    this.f += sin(frameCount*0.05) * 0.5 ;
    this.j += sin(frameCount*0.05);
    this.arm = sin(frameCount * 0.1) * 30;
    this.leg = sin(frameCount * 0.15) * 20;
    this.tail = sin(frameCount * 0.1) * 10;
    this.pistol += 1
    if( this.x > 2*width/3 | this.x < width/3) {
      this.speed *= -1
    }
    if(keyIsPressed) {
      this.leg *= 1.5
    }
    
  }
  
  
   
  display() {
    this.r = map(this.f, 90, 110, 200, 50);
    this.g = map(this.f, 90, 110, 50, 200);
    this.b = map(this.f, 90, 110, 50, 200);
    
    

    push();
    translate(this.x, this.y);
      push()
    scale(0.5)
   
      fill(this.r, this.g, this.b);
      noStroke();
      //body
      circle(0, 0 - this.j, this.f );
      rect(0 - this.f/2, 0 - this.j, this.f);
      ellipse(0, 0 + this.f - this.j, this.f, this.f - 60);
      //head
      ellipse(0, 0 - 50 - this.j, this.f, this.f - 20)
      //eyes
      fill(255)
      ellipse(-15 - this.j/6, -60 - this.j, 10, 10);
      ellipse(15 + this.j/6, -60 - this.j, 10, 10);
      fill(0)
      ellipse(-15 - this.j/6, -60 - this.j, 8, 8);
      ellipse(15 + this.j/6, -60 - this.j, 8, 8);
      //eye brown
      noFill()
      stroke(50)
      strokeWeight(3)
      bezier(-25 - this.j/6, -70 - this.j, -15 - this.j/6, -80 - this.j, -10 - this.j/6, -60 - this.j, -5 - this.j/6, -70 - this.j)
      bezier(25 + this.j/6, -70 - this.j, 15 + this.j/6, -80 - this.j, 10 + this.j/6, -60 - this.j, 5 + this.j/6, -70 - this.j)
      //heart
      noStroke()
      fill("red")
      circle(10 - this.j/10,10 - this.j/4,10 + this.j/5);
      circle(20 + this.j/10,10 - this.j/4,10 + this.j/5);
      triangle(
        5 - this.j/5,12 - this.j/4,25 + this.j/5,12 - this.j/4,15,22 - this.j/4  + this.j/5
      )
      //mouth
      fill(255, 100, 100);
      arc(0, -50 - 3 * this.j/4, 30, 20, 0, PI);
    
      //hat
      fill("#795548")
      stroke("#250C03B7")
      
      rect(20 - this.f/2, -150 - this.j, this.f - 45, this.f - 50)
      ellipse(0, - 90 - this.j, this.f + 20, 30)
      ellipse(-3, - 150 - this.j, this.f - 46, 20)
      noStroke()
      rect(22 - this.f/2, -110 - this.j, this.f - 49, this.f - 90)
      //arms and legs
      fill(this.r, this.g, this.b);
      push();
      rotate(radians(this.arm * 0.15));
      rect(-this.f * 0.7, -30, 10, 60);
       //pistol
       push();
        translate(-this.f * 0.7 - 2, 26); 
        rotate(radians(this.pistol * 10));    
        fill("grey");
        rect(-2.5, 0, 5, 30); 
        rect(0, -3, 17, 8)
        noFill()
        strokeWeight(2)
        stroke("grey")
        rect(0, -3, 10, 15)
        rect(0, 7, 5,1)
        pop();
      pop();


      push();
      rotate(radians(this.arm));
      rect(this.f * 0.6, -30, 10, 60);
      pop();

      rect(-30, 100 + this.leg, 15, 50);
      rect(20, 100 - this.leg, 15, 50);
    
    //tongue
    if(keyIsPressed){
      fill("#CE514C")
      rect(-10,-this.j * 0.8 - 45,20,30)
      ellipse(0, -this.j * 0.8 - 15 , 20, 10)
      fill("#BF3934")
      rect(-1,-this.j * 0.8 - 45,2,30)
    }
    
        



  
    pop();
    //this.drawReferenceShapes()
    
   
    
  }
}


// From Jinhan Niu
class Stickman
{ 
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.groundY = startY; // Remember the ground position

    //Basic Look
    this.bodyHeight = 80;
    this.limbLength = 40;
    this.headR = 20; 
    this.strokeW = 3; 
    this.color = color(255);

    //Movement
    this.bodyAngle = 0; //swayangle
    this.armAngle = 0;
    this.bodySpeed = random(0.01, 0.05); // swayspeed
    this.armSpeed = random(0.05, 0.1);

    //Mouse Jump
    this.velY = 0; // jump velocity
    this.gravity = 0.3; //Gravity
    this.isJumping = false; 
    this.hitBox = this.headR + 20; 
  }

  update() {
    //randomly change speed
    //chance each frame to change speed)
    if (random(1) < 0.01) {
      this.bodySpeed = random(0.01, 0.05);
    }
    if (random(1) < 0.01) {
      this.armSpeed = random(0.05, 0.2);
    }

    // Basic Movement
    this.bodyAngle += this.bodySpeed;
    this.armAngle += this.armSpeed;

    //Mouse Interaction
    //Calculate distance between mouse and stickman's head
    let d = dist(mouseX, mouseY, this.x, this.y - this.bodyHeight - this.headR);

    // if mouse is close
    if (d < this.hitBox && !this.isJumping) {
      this.isJumping = true; // Set state to "jumping"
      this.velY = -8; // Apply an upward force
    }

    //Jump Physics
    if (this.isJumping) {
      this.y += this.velY; // Move Y position based on velocity
      this.velY += this.gravity; // Apply gravity

      //if on the ground
      if (this.y >= this.groundY) {
        this.y = this.groundY; //on the ground
        this.isJumping = false; //set state
        this.velY = 0; //Reset
      }
    }
  }

  display() {
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    // Calculate body rotation
    let bodyRot = sin(this.bodyAngle) * 0.2;
    rotate(bodyRot);

    stroke(this.color);
    strokeWeight(this.strokeW);
    noFill();

    //Head
    ellipse(0, -this.bodyHeight - this.headR, this.headR * 2);

    //Body
    line(0, 0, 0, -this.bodyHeight);

    // Right Arm
    push();
    translate(0, -this.bodyHeight * 0.75); 
    rotate(sin(this.armAngle) * 0.5);
    line(0, 0, this.limbLength, 0);
    pop();

    //Left Arm
    push();
    translate(0, -this.bodyHeight * 0.75); 
    rotate(sin(this.armAngle) * -0.5);
    line(0, 0, -this.limbLength, 0);
    pop();

    //Right Leg
    push();
    translate(0, 0); 
    rotate(sin(this.bodyAngle * 0.8) * 0.2);
    line(0, 0, this.limbLength * 0.5, this.limbLength);
    pop();

    //Left Leg
    push();
    translate(0, 0); 
    rotate(sin(this.bodyAngle * 0.8) * -0.2);
    line(0, 0, -this.limbLength * 0.5, this.limbLength);
    pop();

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // comment this out or delete it to remove the red box
    // this.drawReferenceShapes() //

    pop();
  }
}


// From Sarah
class BadbadtzSarah {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.t = 0;
    this.mouth = 0;
    this.jump = 0;
    this.jumpSpeed = 0;
    this.dance = random(0.5,1);
    this.move = random([-1,1]);
    this.moveSpeed = random(0.2,0.5);
    this.color = 0;
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.t += 0.05;
    this.mouth = sin(this.t)*6;
    this.jump += this.jumpSpeed;
    this.jumpSpeed += random(0.5,2);
    if (this.jump > 0) {
      this.jump = 0;
      this.jumpSpeed = random(-8, -5);
    }
    this.x += this.moveSpeed * this.move;
    if (this.x > 200 || this.x < -200) {
      this.move *= -1;
    }
    this.color += 0.005; 
     if (this.color > 1) {
      this.color = 0;
    }
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    let bodyR = lerp(20, 50, this.color);
    let bodyG = lerp(20, 60, this.color);
    let bodyB = lerp(30, 160, this.color);

    push();//身体
    translate(this.x, this.y+this.jump);
    rotate(sin(this.t)*0.1);
    fill(bodyR, bodyG, bodyB);
    ellipse(0,40,80,90);
    fill(250);
    noStroke();
    ellipse(0,55,55,60);
    pop();

    push();//头
    translate(this.x, this.y+this.jump);
    noStroke();
    fill(bodyR, bodyG, bodyB);
    ellipse(0,-20,70,60);
    
    fill(255);
    ellipse(-15,-30,15,20);
    ellipse(15,-30,15,20);
    
    fill(0);
    ellipse(-15,-30,5,8);
    ellipse(15,-30,5,8);
    
    
    noStroke();
    fill(255,245,127);
    ellipse(0,this.mouth-14.5,18,20);

    stroke(0);
    fill(255);
    ellipse(0,this.mouth-14.5,13,15);
    pop();
    
    push();//左翅膀
    translate(this.x-35, this.y+10+this.jump);
    rotate(sin(this.t)*this.dance);
    noStroke();
    fill(bodyR, bodyG, bodyB);
    ellipse(0,30,30,50);
    pop();
  
    push();//右翅膀
    translate(this.x+30, this.y+10+this.jump);
    rotate(-sin(this.t)*this.dance);
    noStroke();
    fill(bodyR, bodyG, bodyB);
    ellipse(0,30,30,50);
    pop();
  
    push();//脚
    translate(this.x, this.y+this.jump);
    rotate(sin(this.t)*0.1);
    fill(255,245,127);
    noStroke()
    ellipse(15,90,20,10);
    ellipse(-15,90,20,10);
    pop();
    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
  }

  
  drawReferenceShapes() {
    translate(this.x, this.y);
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(100);
    rect(-100, -100, 200,200 );
    fill(255);
    stroke(0);
  }
}

// From Chenbing
class LeiaDancer {

  constructor(startX, startY) {

    this.x = startX;

    this.y = startY;

    this.body = 120;

    this.eye = this.body / 5;

    this.smileAngle = 0;

    this.cx = 0

    this.direction = 1

    this.cy = 0

    this.jumpAngle = 0

    this.eyeAngle = 0

  }

  update() {

    //eye

    this.eyeAngle+=5

    //smile

    this.smileAngle = abs(((frameCount % 120) - 60))/2;

    //bounce

    this.cy += 1 * this.direction

    if (this.cy <= 25 && this.cy >= -25) {

      this.direction = this.direction

    } else {

      this.direction = -this.direction

    }

    //jump

    if (this.direction >= 0) {

      this.jumpAngle+=3

    } else {

      this.jumpAngle-=3

    }

  }

  display() {

    push();

    translate(this.x, this.y);



    // ******** //

    // ⬇️ draw your dancer from here ⬇️

    noStroke()

    angleMode(DEGREES);

    fill(229, 218, 235)

    arc(this.cx, this.cy, this.body, this.body, 180, 360, CHORD);

    rect(this.cx - this.body / 2, this.cy, this.body, this.body * 0.25);//body

    push()

    // translate(this.cx, this.cy)

    // for (let i = 180; i <= 360; i += 20) {

    //   push()

    //   translate(this.body / 2 * cos(i), this.body / 2 * sin(i))

    //   rotate(0.01 * (i - 270) * this.jumpAngle)

    //   fill(229, 218, 235)

    //   ellipse(0, 5, 10, 10)

    //   rect(-5, 5, 10, 30)

    //   ellipse(0, 35, 10, 10)

    //   pop()



    // }

    // for (let i = 190; i <= 350; i += 20) {

    //   push()

    //   translate(this.body / 2 * cos(i), this.body / 2 * sin(i))

    //   rotate(0.01 * (i - 270) * this.jumpAngle)

    //   fill(135, 192, 202)

    //   ellipse(0, 5, 10, 10)

    //   rect(-5, 5, 10, 30)

    //   ellipse(0, 35, 10, 10)

    //   pop()

    // }

    // for (let i = 180; i <= 360; i += 20) {

    //   push()

    //   translate(this.body / 4 * cos(i), this.body / 3.98 * sin(i))

    //   rotate(0.02 * (i - 270) * this.jumpAngle)

    //   fill(229, 218, 235)

    //   ellipse(0, -10, 10, 10)

    //   rect(-5, -10, 10, 30)

    //   ellipse(0, 25, 10, 10)

    //   pop()

    // }

    // for (let i = 190; i <= 350; i += 20) {

    //   push()

    //   translate(this.body / 4 * cos(i), this.body / 3.99 * sin(i))

    //   rotate(0.02 * (i - 270) * this.jumpAngle)

    //   fill(135, 192, 202)

    //   ellipse(0, -10, 10, 10)

    //   rect(-5, -10, 10, 30)

    //   ellipse(0, 25, 10, 10)

    //   pop()

    // }

    // pop()//fur

    push()

    translate(this.cx - this.eye * 0.5 - 2, this.cy - this.eye)

    rotate(this.eyeAngle)

    fill(255)

    ellipse(

      0,

      0,

      this.eye,

      this.eye

    );

    fill(0);

    ellipse(

      this.eye * 0.2 + 4,

      0,

      this.eye * 0.3,

      this.eye * 0.3

    );

    pop()//left eye

    push()

    translate(this.cx + this.eye * 0.5 + 2, this.cy - this.eye)

    rotate(-this.eyeAngle)

    fill(255)

    ellipse(

      0,

      0,

      this.eye,

      this.eye

    );

    fill(0);

    ellipse(

      -this.eye * 0.2 - 4,

      0,

      this.eye * 0.3,

      this.eye * 0.3

    );

    pop()//right eye

    push()

    translate(this.cx - this.body * 0.25, this.cy + this.body * 0.2)

    rotate(this.jumpAngle)

    quad(

      0,

      - this.body * 0.1,

      - this.body * 0.35,

      - this.body * 0.1,

      - this.body * 0.35,

      this.body * 0.1,

      0,

      this.body * 0.1

    );

    pop()//left leg

    push()

    translate(this.cx + this.body * 0.25, this.cy + this.body * 0.2)

    rotate(-this.jumpAngle)

    quad(

      0,

      - this.body * 0.1,

      this.body * 0.35,

      - this.body * 0.1,

      this.body * 0.35,

      this.body * 0.1,

      0,

      this.body * 0.1

    );

    pop()//right leg

    noFill();

    stroke(0)

    arc(

      this.cx,

      this.cy - this.body / 4,

      this.body * 0.8,

      this.body * 0.6,

      0 + this.smileAngle,

      150 + this.smileAngle

    ); //smile

    // ⬆️ draw your dancer above ⬆️

    // ******** //



    // the next function draws a SQUARE and CROSS

    // to indicate the approximate size and the center point

    // of your dancer.

    // it is using "this" because this function, too,

    // is a part if your Dancer object.

    // comment it out or delete it eventually.

    //this.drawReferenceShapes()



    pop();

  }

  drawReferenceShapes() {

    noFill();

    stroke(255, 0, 0);

    line(-5, 0, 5, 0);

    line(0, -5, 0, 5);

    stroke(255);

    rect(-100, -100, 200, 200);

    fill(255);

    stroke(0);

  }

}


// from shae

class Shae {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.speed=1
    this.speed2=0.7
    this.dia=160
    this.dia1=160
    this.speed3=1
    
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    
    
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    
    this.x+=this.speed3
    //this.y = height*2/3-noise(sin(frameCount*0.01))*400;
    this.y=height/2+noise(frameCount*0.01)*300

  
    if(this.x>width||this.x<0){
      this.speed3=-this.speed3
    }
    
    
    this.dia+=this.speed
    this.dia1+=this.speed2
    if(this.dia > 180 || this.dia < 150) {
    this.speed = -this.speed;
  }
  if (this.dia1 > 180 || this.dia1 < 150) {
    this.speed2 = -this.speed2;
  }
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
   
  let limbangle1 = sin(frameCount * 0.09) * 0.4;
  let limbangle2 = sin(frameCount * 0.09) * -0.4;
  let limangle3 = sin(frameCount * 0.06) * 0.2;

  push();
  rotate(limbangle1);
    fill(255, 254, 208, 230);
  ellipse(90, 10, 80, 60);
  pop();

  rotate(limangle3);

  push();
  rotate(limbangle2);
    fill(255, 254, 208, 230);
  ellipse(-90, 10, 80, 60);
  pop();  
  fill(255, 255, 255, 250);
  
  
  stroke(0, 0, 0, 50);
  strokeWeight(3);
  ellipse(0, 0, this.dia,this.dia1);
    
  fill(216, 189, 171, 100);
  noStroke();
  ellipse(0, -10, 70, 30);

  noFill();
  stroke(0, 0, 0, 100);
  strokeWeight(3);
  circle(35, -10, 20);
  circle(-35, -10, 15);
    stroke(100)
    fill(100)
    circle(35,-10,11)
    circle(-35,-10,6)


    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}
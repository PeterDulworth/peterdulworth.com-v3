const sketch = (p) => {
  let background;
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(background);
    p.strokeWeight(0);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    if (props.background) {
      background = props.background;
    }
  };

  // #1
  // let kDensity = 0.1;
  // const K_STEP = 0.001;
  // const K_MIN = 0.004;
  // let r = 0;
  // const R_STEP = 4;
  // const R_MAX = 500;

  // #2
  let kDensity = 1.0;
  const K_STEP = 0.01;
  const K_MIN = 0.004;
  let r = 0;
  const R_STEP = 4;
  const R_MAX = 200; // try 200

  // // #3
  // let kDensity = 0.1;
  // const K_STEP = 0.0;
  // const K_MIN = 0.004;
  // let r = 0;
  // const R_STEP = 20;
  // const R_MAX = 800;

  // #1
  const X_STEP = 10;
  const Y_STEP = 10;

  // #2
  // const X_STEP = 10;
  // const Y_STEP = 1;

  // #3
  // const X_STEP = 4;
  // const Y_STEP = 4;

  // #4
  // const X_STEP = 1;
  // const Y_STEP = 1;

  const PADDING = 60;
  let y = PADDING;
  p.drawRect = () => {
    // translate(width / 2, height / 2); // center the origin

    // draw ring of circles
    for (let x = PADDING; x < p.windowWidth - PADDING; x += X_STEP) {
      p.fill(p.random(150, 220));
      p.rect(x, y, p.random(4), p.random(4));
    }

    y += Y_STEP;

    if (y >= p.windowHeight - PADDING) {
      p.noLoop();
    }
  };

  p.drawCircle = () => {
    p.translate(p.width / 2, p.height / 2); // center the origin

    // draw ring of circles
    for (let theta = 0; theta < p.TWO_PI; theta += kDensity) {
      const x = r * p.cos(theta);
      const y = r * p.sin(theta);
      p.fill(p.random(150, 220));

      p.circle(x, y, p.random(4));

      // alternative:
      // rect(x, y, random(4), random(4));
    }

    kDensity -= K_STEP; // increase the density (lower is higher density)
    r += R_STEP; // move on to next ring

    if (r > R_MAX || kDensity < K_MIN) {
      p.noLoop();
    }
  };

  p.draw = () => {
    p.drawCircle();
    // p.drawRect();
  };
};

export default sketch;

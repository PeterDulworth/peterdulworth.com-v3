const rectanglesSketch = (p) => {
  const MAX_WIDTH = 900;
  const DARK_COLOR = 22;
  const LIGHT_COLOR = 255;
  const X_STEP = 10;
  const Y_STEP = 10;
  // alternative constants:
  // const X_STEP = 10;
  // const Y_STEP = 1;
  // const X_STEP = 4;
  // const Y_STEP = 4;
  // const X_STEP = 1;
  // const Y_STEP = 1;

  let isDarkMode = false;
  let isSetup = false;
  let y = 0;

  p.setup = () => {
    const parentDiv = document.getElementById('rectanglesSketch');
    const parentWidth = parentDiv.offsetWidth;
    const parentHeight = parentDiv.offsetHeight;

    p.createCanvas(parentWidth < MAX_WIDTH ? parentWidth : MAX_WIDTH, parentHeight);
    p.strokeWeight(0);
    p.reset();

    isSetup = true;
  };

  p.reset = () => {
    p.clear();
    p.background(isDarkMode ? DARK_COLOR : LIGHT_COLOR);
    y = 0;
    p.loop();
  };

  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    isDarkMode = props.isDarkMode;
    if (isSetup && p) {
      p.reset();
    }
  };

  p.draw = () => {
    for (let x = 0; x < p.width; x += X_STEP) {
      p.fill(p.random(150, 220));
      p.rect(x, y, p.random(4), p.random(4));
    }

    y += Y_STEP;

    if (y >= p.height) p.noLoop();
  };
};

export default rectanglesSketch;

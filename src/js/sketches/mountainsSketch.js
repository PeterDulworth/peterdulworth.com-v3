const rectanglesSketch = (p) => {
  const MAX_WIDTH = 900;
  const DARK_COLOR = 22;
  const LIGHT_COLOR = 255;
  let isDarkMode = false;
  let background = LIGHT_COLOR;
  let isSetup = false;
  const FR = 30;
  let w = 1600;
  let h = 2200;
  let scale = 20;
  let cols, rows;
  let terrain = [];
  let distFlown = 0;

  p.setup = () => {
    const parentDiv = document.getElementById('mountainsSketch');
    const parentWidth = parentDiv.offsetWidth;
    const parentHeight = parentDiv.offsetHeight;

    p.createCanvas(parentWidth < MAX_WIDTH ? parentWidth : MAX_WIDTH, parentHeight, p.WEBGL);

    // create the canvas
    p.reset();
    p.frameRate(FR);

    // number of rows and columns
    cols = w / scale;
    rows = h / scale;

    isSetup = true;
  };

  p.reset = () => {
    p.clear();
    background = isDarkMode ? DARK_COLOR : LIGHT_COLOR;
    p.background(background);
    p.loop();
  };

  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    isDarkMode = props.isDarkMode;
    if (isSetup && p) {
      p.reset();
    }
  };

  p.draw = () => {
    terrain = [];
    let cOff = 0;
    for (let i = 0; i < cols; i++) {
      let rOff = distFlown;
      terrain.push([]);
      for (let j = 0; j < rows; j++) {
        terrain[i].push(p.map(p.noise(cOff, rOff), 0, 1, -100, 100));
        rOff += 0.1;
      }
      cOff += 0.1;
    }
    distFlown -= 0.05; // flying speed

    p.background(background);
    p.stroke(255);
    p.noFill();

    p.rotateX(p.PI / 4);
    p.translate(-w / 2, -h / 2);

    for (let y = 0; y < rows - 1; y++) {
      // each row is a shape
      p.beginShape(p.TRIANGLE_STRIP);
      for (let x = 0; x < cols; x++) {
        p.stroke(p.map(terrain[x][y], -100, 100, 0, 255));
        p.vertex(x * scale, y * scale, terrain[x][y]);
        p.vertex(x * scale, (y + 1) * scale, terrain[x][y + 1]);
      }
      p.endShape();
    }
  };
};

export default rectanglesSketch;

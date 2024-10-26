var sketch = (p: p5) => {

  const fps = 60;
  const dt = 1 / fps;

  // In unites of seconds
  let frameStart = 0;
  let accumulator = 0;

  p.setup = () => {
    p.createCanvas(600, 600);
  };

  p.draw = () => {
    let currentTime = p.millis() / 1000;
    accumulator += currentTime - frameStart;

    frameStart = currentTime;

    while(accumulator > dt){
      UpdatePhysics();
      accumulator -= dt;
    }
    RenderGame();
  };


  function UpdatePhysics(){
   
  }

  function RenderGame(){
    p.background(0);
    p.fill(255);
    p.rect(100,100,50,50);
  }
};

new p5(sketch);

let looping = true;
let socket, cnvs, ctx, canvasDOM;
let fileName = "/Volumes/WD001/animation-frames/racaman-spirals-semi-mid/recaman-spiral-semi-mid";
let maxFrames = 800;
let spiral;

function setup() {
    socket = io.connect('http://localhost:8080');
    cnvs = createCanvas(windowWidth / 16 * 9, windowWidth / 16 * 9);
    ctx = cnvs.drawingContext;
    canvasDOM = document.getElementById('defaultCanvas0');
    frameRate(5);
    background(255);
    fill(0, 255);
    // stroke(0, 255);
    noStroke();
    // noFill();
    spiral = new Spiral();
    translate(width / 2, height / 2);
    // spiral.show();
    // for (let i = 0; i < 20; i++) {
    //     spiral.step();
    // }
    console.log(spiral.sequence);
    if (!looping) {
        noLoop();
    }
}

function draw() {
    // background(210);
    translate(width / 2, height / 2);
    for (let i = 0; i < 300; i++) {
        // spiral.drawStep();
        spiral.step();
    }
    spiral.showSpiral();
    if (exporting && frameCount < maxFrames) {
        frameExport();
    }
}

function keyPressed() {
    if (keyCode === 32) {
        if (looping) {
            noLoop();
            looping = false;
        } else {
            loop();
            looping = true;
        }
    }
    if (key == 'p' || key == 'P') {
        frameExport();
    }
    if (key == 'r' || key == 'R') {
        window.location.reload();
    }
    if (key == 'm' || key == 'M') {
        redraw();
    }
}
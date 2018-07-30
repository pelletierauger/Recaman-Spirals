let Spiral = function() {
    this.numberLine = [];
    this.counter = 1;
    this.sequence = [];
    this.index = 0;
    this.drawnIndex = 0;
    for (let i = 0; i < 3000000; i++) {
        let x = cos(i) * i * 1;
        let y = sin(i) * i * 1;
        this.addNumber(x, y);
    }
    for (let i = 0; i < 300000; i++) {
        this.step();
    }
};

Spiral.prototype.step = function() {
    let next = this.index - this.counter;
    if (next < 0 || this.numberLine[next].v) {
        next = this.index + this.counter;
    }
    this.numberLine[next].v = true;
    this.sequence.push(next);
    this.index = next;
    this.counter++;
};

Spiral.prototype.drawStep = function() {
    // let v1 = this.numberLine[this.index];
    // let vMid1 = this.numberLine[this.sequence[this.index - 1]] ||  { x: 0, y: 0 };
    // let v2 = this.numberLine[this.index];
    // // line(v1.x, v1.y, v2.x, v2.y);
    // curve(v1.x, v1.y, vMid1.x, vMid1.y, 0, 0, v2.x, v2.y);

    if (this.drawnIndex > 0) {
        let d = this.drawnIndex;
        let v0 = this.numberLine[this.sequence[d - 1]];
        let v1 = this.numberLine[this.sequence[d]];
        let v2 = this.numberLine[this.sequence[d + 1]];
        let v3 = this.numberLine[this.sequence[d + 2]];
        line(v1.x, v1.y, v2.x, v2.y);
        // curve(v0.x, v0.y, v1.x, v1.y, v2.x, v2.y, v3.x, v3.y);
    }

    this.drawnIndex++;
};

Spiral.prototype.addNumber = function(x, y) {
    this.numberLine.push({
        x: x,
        y: y,
        v: this.numberLine.length ? false : true
    });
};


Spiral.prototype.showSpiral = function() {
    // for (let i = 0; i < this.numberLine.length; i++) {
    //     let n = this.numberLine[i];
    //     ellipse(n.x, n.y, 1);
    // }
    for (let i = 0; i < 125; i++) {
        let d = this.drawnIndex;
        let x = cos(this.sequence[d]) * this.sequence[d] * 0.01;
        let y = sin(this.sequence[d]) * this.sequence[d] * 0.01;
        let radius = map(this.sequence[d], 0, 50000, 1, 5);
        ellipse(x, y, radius);
        this.drawnIndex++;
    }

};

// Spiral.prototype.show = function() {
//     // for (let i = 0; i < this.numberLine.length; i++) {
//     //     let n = this.numberLine[i];
//     //     ellipse(n.x, n.y, 1);
//     // }
//     for (let i = 0; i < 30000; i++) {
//         let x = cos(i) * this.sequence[i] * 0.1;
//         let y = sin(i) * this.sequence[i] * 0.1;
//         ellipse(x, y, 1);
//     }
// };
var fs = require('fs');
let computedInput = "";

let sequences = [{
    path: "/Volumes/WD001/animation-frames/racaman-spirals/recaman-spiral-",
    start: 1,
    end: 1750,
    copies: 1
}];

for (s of sequences) {
    for (let f = s.start; f <= s.end; f++) {
        var formattedF = "" + f;
        while (formattedF.length < 5) {
            formattedF = "0" + formattedF;
        }
        let line = `file '${s.path}${formattedF}.png'\n`;
        for (let i = 0; i < s.copies; i++) {
            computedInput += line;
        }
    }
}

fs.writeFile('frames.txt', computedInput, function(err) {
    if (err) {
        return console.error(err);
    } else {
        console.log('frames-square-withmiddle.txt written successfully.');
    }
});
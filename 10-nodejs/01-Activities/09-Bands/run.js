// Using the require keyword lets us access all of the exports
// in our ess.js file
var bands = require("./band.js");
//console.log(bands);

for (let band in bands.musicGenres) {
    console.log(`A ${band} band is ${bands.musicGenres [band]}s`)
  };

  
const fs = require('fs');
const axios = require('axios');

var TV = function () {
  this.findShow = function (show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    return axios.get(URL)
      .then(response => {
        console.log(response.data);
        const {
          name,
          genres,
          rating,
          network,
          summary

        } = response.data
        const output = `
            name: ${name}
            genre: ${genres.join(',')}
            rating: ${rating.average}
            network: ${network}
            summary: ${summary}
            `;
        //print to log.txt
        //console.log
        fs.appendFile('log.txt', output, err => {
          if (err) {
            return console.error(err);
          }
          console.log(output)
        });
      })
      .catch(err => {

      })
  };
};

module.exports = TV;

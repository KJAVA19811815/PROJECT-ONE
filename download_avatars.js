var request = require('request');
var fs = require('fs');
var http = require('http');

var options = {
  url: 'https://api.github.com/repos/jquery/jquery/contributors',
  headers: {
    'User-Agent': "GitHub Avatar Downloader - Student Project"

  }
};

function getRepo(repoOwner, repoName, cb) {

  var options = {
    url: 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': "GitHub Avatar Downloader - Student Project"
    }
  };

  request(options, cb);
}

function getRepoContributors(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    info.forEach(function (usr) {
      console.log(usr.avatar_url);
      downloadImageByURL(usr.avatar_url, "avatars/" + usr.login +".jpg")
    });
  }
}

function downloadImageByURL(url, filePath) {
  if (fs.existsSync('./avatars/')) {
    request.get(url)
    .on('error', function(err) {
      //throw err;
      console.log(err);
    })
    .pipe(fs.createWriteStream(filePath));
  }
  else {
    throw "The file directory [" + filePath + "] does not exist.";
  }
}

getRepo('jquery', 'jquery', getRepoContributors);



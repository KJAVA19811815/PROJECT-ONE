var request = require('request');
var fs = require('fs');
var http = require('http');

var options = {
  url: 'https://api.github.com/repos/jquery/jquery/contributors',
  headers: {
    'User-Agent': "GitHub Avatar Downloader - Student Project"

  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info);
  }
}

request(options, callback);

/*

console.log('welcome to github');

var GITHUB_USER = "KJAVA19811815";
var GITHUB_TOKEN = "355ca7348ea172ba0850bd9a50f5134a6f8c5b49";



function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  //
  console.log(requestURL);

  request.get('https://api.github.com/repos/jquery/jquery/contributors', {
    header: {
      "User-Agent": "GitHub Avatar Downloader - Student Project"


    }
  })
.on('error', function(err) {
  throw err;

})
.on('response', function (response) {                           // Note 3
  console.log('Response Status Code: ', response.statusMessage);
  console.log('content type: ', response.statusMessage);
})
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
*/
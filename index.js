#!/usr/bin/env node

var FeedParser = require('feedparser');
var request = require('request');
var prompt = require('prompt');
var exec = require('child_process').exec;
var platform = require('os').platform();

var feedUrl = 'https://processwire.com/talk/rss/forums/1-processwire-forum-latest-posts/';
var req = request(feedUrl, {timeout: 10000, pool: false});
var feedparser = new FeedParser();
var posts = [];
var i = 1;

const shellOpenCommand = {
  'win32': 'start ',
  'linux': 'xdg-open ',
  'darwin': 'open '
}[platform];

req.on('error', function (error) {
  console.log('An error occured when initializing the request.');
});

req.on('response', function (res) {
  var stream = this;

  if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
  console.log("-- ProcessWire CMS Latest Forum Posts --");  
  stream.pipe(feedparser);
});


feedparser.on('error', function(error) {
  console.log('An error occured when parsing rss feed.')
});

feedparser.on('readable', function() {
  var stream = this, item;

  while (item = stream.read()) {
    posts.push(item.link);
    console.log(i.toString() + ". " + item.title);
    i++;
  }
});

feedparser.on('finish', function(){
  promptForPost();
});

/*
 * Promt post to cli
 */
function promptForPost() {
  prompt.start();
  var schema = {
    properties: {
      post: {
        message: 'Type post number to open, or 0 to quit',
        required: true
      },
    }
  };

  prompt.get(schema, function (err, result) {
    if(result.post !== "0"){
      var i = parseInt(result.post);
      if(isNaN(i) || i > posts.length || i < 1) {
        console.log("Invalid post number : " + i + " : " + isNaN(i) + " " +  (i > posts.length) + " " + (i < 1) );
        console.log(posts.length);
      } else {
        exec(shellOpenCommand + posts[i - 1], function(error){
          if(error) throw error;
        });
      }
      promptForPost();
    }
  });
}
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

'use strict';

var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


function createTweetElement(data) {
  //wrap header:
  var $user = data.user;
  var avatar = $user["avatars"]["small"];
  var $avatar = $(`<img scr=${avatar}>`);
  var $name = $(`<h1>${$user.name}</h1>`);
  var $handle = $(`<p>${$user.handle}</p>`);
  var $header = $('<header>').append($avatar).append($name).append($handle);

  //wrap text:
  var $text = $('<div>').addClass('text').append(`<p>${data.content.text}</p>`);

  //wrap footer:
  // var howLongAgo = ???;
  // var $time = $(`<p class='time'>${howLongAgo}</p>`);
  var $time = $(`<p class='time'>10 days ago</p>`);
  var $feedbackImages = $(`<img src="/images/feedback1.jpg" class="feedback"><img src="/images/feedback2.jpg" class="feedback"><img src="/images/feedback3.jpg" class="feedback">`);
  var $footer = $('<footer>').append($time).append($feedbackImages);

  //stuff $header, $text, $footer into <article> (parent);
  var $article = $("<article>").addClass("tweet");
  var $tweet = $article.append($header).append($text).append($footer);

  return $tweet;
}


// $(document).ready(createTweetElement(tweetData));



function renderTweets(data) {
  var $tweets = $("<div>").attr("id", "tweets-container");
  data.forEach((indiData) => {
    var $tweet = createTweetElement(indiData);
    $tweets = $tweets.append($tweet);
  });
  return $tweets;
}

console.log(renderTweets(data));

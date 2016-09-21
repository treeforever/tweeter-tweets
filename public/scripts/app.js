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
  var timeStamp = function (data) {
    var today = new Date().getTime();
    var diffInHours = Math.abs(today - data.created_at) / (1000 * 3600);

    if (diffInHours < 1) {
      return "less than 1 hours ago";
    }
    else if (diffInHours <= 24) {
      return `${Math.floor(diffInHours)} hours ago`;
    }
    else {
      return`${Math.floor(diffInHours / 24)} days ago`;
    }
  };

  var $tweet = $(`
    <article class="tweet">
      <header>
        <img src="${data.user.avatars.small}">
        <h2>${data.user.name}</h2>
        <p>${data.user.handle}</p>
      </header>

      <div class="text">
        <p>${data.content.text}</p>
      </div>

      <footer>
        <p>${timeStamp(data)}</p>
        <div class="hover">
          <img src="/images/feedback1.jpg"><img src="/images/feedback2.jpg"><img src="/images/feedback3.jpg">
        </div>
      </footer>
    </article>
  `);
  return $tweet;
}

function renderTweets(data) {
  var $tweets = $("<div>").attr("id", "tweets-container");
  data.forEach((indiData) => {
    var $tweet = createTweetElement(indiData);
    $tweets = $tweets.append($tweet);
  });
  $('main.container').append($tweets);
}

$(document).ready(function() {
  renderTweets(data);
});

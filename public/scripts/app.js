'use strict';

function createTweetElement(data) {
  var timeStamp = function(data) {
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
        <div class="feedback fadeOut">
          <img src="/images/feedback1.jpg"><img src="/images/feedback2.jpg"><img src="/images/feedback3.jpg">
        </div>
      </footer>
    </article>
  `);
  return $tweet;
}

function renderTweets(data) {
  var $tweets = $('div#tweets-container').empty();
  data.forEach((indiData) => {
    var $tweet = createTweetElement(indiData);
    $tweets = $tweets.append($tweet);
  });
  return $tweets;
}

function loadTweets() {
  $.ajax({
    url: "/tweets",
    method: 'GET',
    success: function(res) {
      renderTweets(res);
      $('article.tweet').hover(function() {
        $("div.feedback").toggleClass("fadeOut");
      });
    }
  });
}

function clearForm() {
  $("form").click(function() {
    $(this).closest('form').find("input[type=text], textarea").val("");
});

}

$(document).ready(function() {
  loadTweets();



  $('button').hover(function(){
    console.log("yes");
  }, function() {
    console.log("leaving");
  });

  $('input').on('click', () => {
    event.preventDefault();
    $.ajax("/tweets", {
      method: "POST",
      data: $('form').serialize(),
      success: function() {
        loadTweets();
        $('textarea').val("");
      }
    });
  });

  $("button#compose").on('click', () => {
    $('.new-tweet').slideToggle('normal');
    $('textarea').focus();
  });

});

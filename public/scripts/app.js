'use strict';

function timeCalculator(data) {
  const today = new Date().getTime();
  const diffInHours = Math.abs(today - data.created_at) / (1000 * 3600);

  if (diffInHours < 1) {
    return "less than 1 hours ago";
  }
  else if (diffInHours <= 24) {
    return `${Math.floor(diffInHours)} hours ago`;
  }
  else {
    return`${Math.floor(diffInHours / 24)} days ago`;
  }
}

function createTweetElement(data) {
  let timeStamp = timeCalculator(data);

  let $tweet = $(`
    <article class="tweet">
      <header>
        <img src=${data.user.avatars.small}>
        <h2>${data.user.name}</h2>
        <p>${data.user.handle}</p>
      </header>

      <div class="text">
        <p>${data.content.text}</p>
      </div>

      <footer>
        <p>${timeStamp}</p>
        <div class="feedback fadeOut">
          <img src="/images/feedback1.jpg"><img src="/images/feedback2.jpg"><img src="/images/feedback3.jpg">
        </div>
      </footer>
    </article>
  `);
  return $tweet;
}

function renderTweets(data) {
  let $tweets = $('div#tweets-container').empty();
  data.forEach((indiData) => {
    let $tweet = createTweetElement(indiData);
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
        $(this).find(".feedback").toggleClass("fadeOut");
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

  $('input').on('click', () => {
    event.preventDefault();
    if ($('textarea').val().length === 0) {
        event.preventDefault();
      $('p#text-required').show().fadeOut(2500);
    }
    else if ($('textarea').val().length > 140) {
      event.preventDefault();
      $('p#length-limit').show().fadeOut(2500);
    }
    else {
      $.ajax("/tweets", {
        method: "POST",
        data: $('form').serialize(),
        success: function() {
          loadTweets();
          $('textarea').val("");
          $('.counter').text('140').removeClass('red');
        }
      });
    }
  });

  $("button#compose").on('click', () => {
    $('.new-tweet').slideToggle('normal');
    $('textarea').focus();
  });
});

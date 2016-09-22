$(document).ready(function() {
  $('textarea').on('keyup', function() {
    var wordLength = $(this).val().length;
    var wordCount = 140 - wordLength;
    var counter = $(this).siblings('.counter');
    counter.text(wordCount);

    if (wordCount < 0) {
      counter.addClass("red");
    } else {
      counter.removeClass("red");
    }
  });

  $('input').on('click', () => {
    if ($('textarea').val().length === 0) {
        event.preventDefault();
      $('p#text-required').show().fadeOut(1900);
    }
    else if ($('textarea').val().length > 140) {
      event.preventDefault();
      $('p#length-limit').show().fadeOut(1900);
    }
  });
});

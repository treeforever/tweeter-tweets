$(document).ready(function() {
  $('textarea').on('keypress', function() {
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
});

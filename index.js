  $(".faq-answer").hide();

  $(".faq-question").click(function(e) {
    e.stopPropagation();

    const $answer = $(this).next(".faq-answer");

    $(".faq-question").not(this).removeClass('active');
    $(".faq-answer").not($answer).slideUp("fast");

    $(this).toggleClass('active');
    $answer.slideToggle("fast");
  });

  $(document).click(function(e) {
    if (!$(e.target).closest('.container').length) {
      $(".faq-answer").slideUp("fast");
      $(".faq-question").removeClass('active');
    }
  });

function downvoteIdea() {
  $('.ideas').delegate('.downvoteIdeaButton', 'click', function() {
    var $idea = $(this).closest(".idea");
    var quality = $idea.data('qual');
    if (quality === "swill") {
      buildPopUp($idea, 'downvote');
    } else {
      var qualInteger = qualities.indexOf(quality);
      qualInteger -= 1
      renderNewQuality($idea, qualInteger)
      $.ajax({
        type: 'PUT',
        url: '/api/v1/ideas/' + $idea.data('id'),
        data: {
          idea: {
            quality: qualInteger
          }
        },
        success: function() {},
        error: function(xhr) {
          console.log(xhr.responseText)
        }
      });
    }
  });
};

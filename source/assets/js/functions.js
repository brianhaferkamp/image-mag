$( document ).ready(function() {

  $('.featured').on('click', function() {
    $('.artist-article').hide();
    $('.featured-article').slideDown();
    $('html, body').animate({scrollTop: '+=650px'}, 800);
  });


  $('.article').on('click', function(e) {
    e.preventDefault();
    var currentArticle = $(this).attr('data-article');
    var articleID = '#' + currentArticle;
    $('.featured-article, .artist-article').hide();
    $(articleID).slideDown();
    $('html, body').animate({scrollTop: '+=650px'}, 800);
  });


  $('.article-close').on('click', function(e) {
    var sectionID = $(this).parents().prev('a').attr('data-article');
    var sectionTop = '#' + sectionID + '-top';
    e.preventDefault();
    $('.featured-article, .artist-article').hide();
    $('html, body').animate({ scrollTop: $(sectionTop).offset().top }, 800);
  });

});


// sticky menu
$(document).ready(function(){
  var num = 800; 

  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num) {
          $('header').addClass('fixed-menu');
      } else {
          $('header').removeClass('fixed-menu');
      }
  });
});

// scrolling

$(document).ready(function(){
  $(".pagescroll").on("click", function (event) {
      event.preventDefault();
      $("html,body").animate({
          scrollTop: $(this.hash).offset().top
      }, 800);
  });
});

// service - links with video content active start
$(document).ready(function () {
  $('.services-nav-links li').on('click', function (e) {
    e.preventDefault()
    $(this).closest('ul').find('li.active').removeClass('active')
    $(this).addClass('active')
    var url_content = $(this).find('.nav-link').html()
    console.log(url_content);

    if (url_content == 'Cargo Handling') {
      cargoHandlingContent()
    } else if(url_content == 'Logistic Information System') {
      logisticContent()
    } else if(url_content == 'Storage and Supply Chain'){
      storageContent()
    } else if(url_content == 'Sea and Inland Transportation'){
      transportContent()
    } else if(url_content == 'Customs Services'){
      customServiceContent()
    }

    $('video').each(function () {
      var $parentSection = $(this).parents('.video-section')
      var $self = $(this)
      var $use = $parentSection.find('use')
      var $playBtn = $parentSection.find('.play-icon')
      var parentDOM = $self.parent().parent()
      $use.attr('xlink:href', '#play')
      $playBtn.css('margin-left', '5px')
      parentDOM.find('.video-play-text').html('PLAY')
      this.pause()
      this.currentTime = 0
    })

    function cargoHandlingContent () {
      //hide others
      $('.logistic-system-block').addClass('hide').fadeOut()
      $('#logistic-system').addClass('hide').fadeOut()
      $('.storage-block').addClass('hide').fadeOut()
      $('#storage').addClass('hide').fadeOut()
      $('.transport-block').addClass('hide').fadeOut()
      $('#transport').addClass('hide').fadeOut()
      $('.custom-service-block').addClass('hide').fadeOut()
      $('#custom-service').addClass('hide').fadeOut()

      //show this
      $('.cargo-handling-block').removeClass('hide').fadeIn()
      $('#cargo').removeClass('hide').fadeIn()
    }
    function logisticContent () {
      //hide others
      $('.cargo-handling-block').addClass('hide').fadeOut()
      $('#cargo').addClass('hide').fadeOut()
      $('.storage-block').addClass('hide').fadeOut()
      $('#storage').addClass('hide').fadeOut()
      $('.transport-block').addClass('hide').fadeOut()
      $('#transport').addClass('hide').fadeOut()
      $('.custom-service-block').addClass('hide').fadeOut()
      $('#custom-service').addClass('hide').fadeOut()

      //show this
      $('.logistic-system-block').removeClass('hide').fadeIn()
      $('#logistic-system').removeClass('hide').fadeIn()
    }
    function storageContent () {
      //hide others
      $('.cargo-handling-block').addClass('hide').fadeOut()
      $('#cargo').addClass('hide').fadeOut()
      $('.logistic-system-block').addClass('hide').fadeOut()
      $('#logistic-system').addClass('hide').fadeOut()
      $('.transport-block').addClass('hide').fadeOut()
      $('#transport').addClass('hide').fadeOut()
      $('.custom-service-block').addClass('hide').fadeOut()
      $('#custom-service').addClass('hide').fadeOut()

      //show this 
      $('.storage-block').removeClass('hide').fadeIn()
      $('#storage').removeClass('hide').fadeIn()
    }
    function transportContent () {
      //hide others
      $('.cargo-handling-block').addClass('hide').fadeOut()
      $('#cargo').addClass('hide').fadeOut()
      $('.logistic-system-block').addClass('hide').fadeOut()
      $('#logistic-system').addClass('hide').fadeOut()
      $('.storage-block').addClass('hide').fadeOut()
      $('#storage').addClass('hide').fadeOut()
      $('.custom-service-block').addClass('hide').fadeOut()
      $('#custom-service').addClass('hide').fadeOut()

      //show this 
      $('.transport-block').removeClass('hide').fadeIn()
      $('#transport').removeClass('hide').fadeIn()
    }
    function customServiceContent () {
      //hide others
      $('.cargo-handling-block').addClass('hide').fadeOut()
      $('#cargo').addClass('hide').fadeOut()
      $('.logistic-system-block').addClass('hide').fadeOut()
      $('#logistic-system').addClass('hide').fadeOut()
      $('.storage-block').addClass('hide').fadeOut()
      $('#storage').addClass('hide').fadeOut()
      $('.transport-block').addClass('hide').fadeOut()
      $('#transport').addClass('hide').fadeOut()

      //show this 
      $('.custom-service-block').removeClass('hide').fadeIn()
      $('#custom-service').removeClass('hide').fadeIn()
    }
  })
})
// service - links with video content active END

// video-play/pause-action start
  $(document).ready(function () {
    $('video').each(function () {
      var $parentSection = $(this).parents('.video-section')
      var $self = $(this)
      var $use = $parentSection.find('use')
      var $playBtn = $parentSection.find('.play-icon')
      var parentDOM = $self.parent().parent()
      $use.attr('xlink:href', '#play')
      $playBtn.css('margin-left', '5px')
      parentDOM.find('.video-play-text').html('PLAY')
      this.pause()
      this.currentTime = 0
    });

    $('.video-control-btn').on('click', function (e) {
      e.preventDefault()
      var $parentSection = $(this).parents('.video-section')
      var $video = $parentSection.find('.home-services-video')
      var video = $video[0]
      var $self = $(this)
      var $use = $self.find('use')
      var $playBtn = $self.find('.play-icon')
      var parentDOM = $self.parent().parent()

      if (video.paused) {
        $video.trigger('play')
        $playBtn.css('margin-left', '0')
        $use.attr('xlink:href', '#pause')
        $('.play-icon').find('#video-trig').attr('class', 'fas fa-pause')
        parentDOM.find('.video-play-text').html('PAUSE')
      } else {
        $video.trigger('pause')
        $playBtn.css('margin-left', '5px')
        $use.attr('xlink:href', '#play')
        $('.play-icon').find('#video-trig').attr('class', 'fas fa-play')
        parentDOM.find('.video-play-text').html('PLAY')
      }

      $video.off('ended', goToStart)
      $video.on('ended', goToStart)

      function goToStart () {
        this.currentTime = 0
        $playBtn.css('margin-left', '5px')
        $use.attr('xlink:href', '#play')
        parentDOM.find('.video-play-text').html('PLAY')
      }
    });
  });
  //video-play/pause-action end

/* collapse accordion */
$(document).ready(function(){
  $('.collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });
});

/* plugin */

$('.slick').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.slick-indicator').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots : true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.single-slick').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000
});

//magnific

$('.pop-image').magnificPopup({
  type:'image',
});

//wow

var wow = new WOW({
    offset:100,   
});
wow.init();


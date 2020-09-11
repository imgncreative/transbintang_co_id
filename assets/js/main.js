
// sticky menu
$(document).ready(function(){
  var num = 200; 

  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num) {
          $('header').addClass('fixed-menu');
      } else {
          $('header').removeClass('fixed-menu');
      }
  });
});

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
        $('#video-trig').attr('class', 'fas fa-pause')
        parentDOM.find('.video-play-text').html('PAUSE')
      } else {
        $video.trigger('pause')
        $playBtn.css('margin-left', '5px')
        $use.attr('xlink:href', '#play')
        $('#video-trig').attr('class', 'fas fa-play')
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



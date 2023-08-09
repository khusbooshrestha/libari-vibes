(function ($) {
    $(document).ready(function () {
      //remove this and write code here
    });
})(jQuery);

jQuery(function() {
  window.initSlickCarousel = function () {
    return false;
  }
  initSlickCarousel();
});

// slick init
function initSlickCarousel() {
  var rtlDir = function() {
      if(jQuery('body').hasClass('rtl')) {
          return true;
      } else {
          return false;
      }
  };

  jQuery('[data-matat-slick]').each(function(index, el) {
      let __this = jQuery(this);
      let slick_option = __this.data('matat-slick');
      __this.slick(slick_option);
  });

  jQuery(".offer-slider.slider").slick({
      rtl: rtlDir(),
      dots: false,
      rows: 0,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slideswToScroll: 1,
      arrows: true,
      speed: 2000,
      autoplaySpeed: 3000,
      prevArrow: '<button class="slick-prev" aria-label="Previous" ><i class="icon-angle-right"></i></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" ><i class="icon-angle-left"></i></button>',
  });

  jQuery('.hero-banner-slider').slick({
      rtl: rtlDir(),
      slidesToScroll: 1,
      rows: 0,
      prevArrow: '<button class="slick-prev" aria-label="Previous" ><i class="icon-angle-right"></i></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" ><i class="icon-angle-left"></i></button>',
      useTransform: false,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  arrows: false,
                  dots: true,
                  speed: 100
              }
          }
      ]
  });

  jQuery('#primary-nav .mega-menu-two .menu-banner-row').slick({
      rtl: rtlDir(),
      slidesToScroll: 1,
      rows: 0,
      slidesToShow: 1,
      arrows: false,
      dots: true,
      autoplay: true
  });

  jQuery('.matat-instagram-row').each(function(index, el) {
      let $carousel = jQuery(this);
      let cellsWidth = 0;
      $carousel.find('.insta-col').each( function( i, cell ) {
          cellsWidth += jQuery( cell ).outerWidth();
      });
      let autoPlay = false;
      let prevNextButtons = false;
      let freeScroll = false;
      let wrapAround = false;
      let contain = true;
      if ( cellsWidth > $carousel.innerWidth() ) {
          autoPlay = true;
          prevNextButtons = true;
          freeScroll = true;
          wrapAround = true;
          contain = false;
      }
      $carousel.flickity({
          watchCSS: true,
          rightToLeft: true,
          freeScroll: freeScroll,
          wrapAround: wrapAround,
          contain: contain,
          autoPlay: autoPlay,
          prevNextButtons: prevNextButtons,
          pageDots: false,
          selectedAttraction: 0.01,
          friction: 0.25
      });
  });

  jQuery('.story-circles-row.has_slider').slick({
      rtl: rtlDir(),
      slidesToScroll: 1,
      rows: 0,
      prevArrow: '<button class="slick-prev" aria-label="Previous" ><i class="icon-angle-right"></i></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" ><i class="icon-angle-left"></i></button>',
      useTransform: false,
      slidesToShow: 9,
      speed: 700,
      autoplaySpeed: 3000,
      responsive: [
          {
              breakpoint: 1440,
              settings: {
                  slidesToShow: 7,
              }
          },
          {
              breakpoint: 1300,
              settings: {
                  slidesToShow: 6,
              }
          },
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 5,
              }
          },
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 4,
              }
          },
          {
              breakpoint: 767,
              settings: 'unslick'
          }
      ]
  });

  jQuery('.home-layout-five.has_slider').slick({
      rtl: rtlDir(),
      slidesToScroll: 1,
      rows: 0,
      prevArrow: '<button class="slick-prev" aria-label="Previous" ><i class="icon-angle-right"></i></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" ><i class="icon-angle-left"></i></button>',
      slidesToShow: 2,
      speed: 700,
      responsive: [
          {
              breakpoint: 767,
              settings: 'unslick'
          }
      ]
  });

  jQuery('.home-layout-three.has_slider').slick({
      rtl: rtlDir(),
      slidesToScroll: 1,
      rows: 0,
      prevArrow: '<button class="slick-prev" aria-label="Previous" ><i class="icon-angle-right"></i></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" ><i class="icon-angle-left"></i></button>',
      useTransform: false,
      slidesToShow: 3,
      speed: 700,
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 767,
              settings: 'unslick'
          }
      ]
  });

  var slideshow = jQuery('.video-layout .four_banner');
  if(slideshow.length > 0 && jQuery(document).width() < 767) {
      slideshow.on('init', function(event, slick){
          for (var i = 0; i < slick.$slides.length; i++) {
              var slide_item = jQuery(slick.$slides[i]);

              if(slide_item.find('.video-frame').length > 0 && slide_item.hasClass('slick-current')) {
                  let video_frame = slide_item.find(".defer_iframe");
                  video_frame.on('custom_iframe_loaded', function(event) {
                      let __this = jQuery(this);
                      slide_item.find('.video-frame').addClass("play-video");
                      var oldSrc = __this.attr("src"); //Get the src of the iframe
                      var newSrc = oldSrc.replace("autoplay=0", "autoplay=1"); //Replace "autoplay=1" by "autoplay=0"
                      __this.attr("src", newSrc); //Change the src attr to the new value
                  });
              }
          }
      });
  }
  jQuery('.video-layout .four_banner').slick({
      rtl: rtlDir(),
      slidesToScroll: 1,
      slidesToShow: 4,
      rows: 0,
      prevArrow: '<button class="slick-prev" aria-label="Previous" ><i class="icon-angle-right"></i></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" ><i class="icon-angle-left"></i></button>',
      useTransform: false,
      speed: 700,
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
              }
          }
      ]
  }).on('afterChange', function(event, slick, currentSlide, nextSlide){
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
      if (jQuery(document).width() < 767) {
          var slide_item = jQuery(slick.$slides[nextSlide]);
          if(slide_item.find('.video-frame').length > 0) {
              let video_frame = slide_item.find(".defer_iframe");
              video_frame.closest('.video-frame').addClass("play-video");
              var oldSrc = video_frame.attr("src"); //Get the src of the iframe
              var newSrc = oldSrc.replace("autoplay=0", "autoplay=1"); //Replace "autoplay=1" by "autoplay=0"
              video_frame.attr("src", newSrc); //Change the src attr to the new value
          }
      }
  });

  jQuery('.home-layout-two.has_slider, .home-layout-six.has_slider').slick({
      rtl: rtlDir(),
      slidesToScroll: 1,
      rows: 0,
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      useTransform: false,
      speed: 700
  });

  jQuery('.home-layout-four.has_slider').slick({
      rtl: rtlDir(),
      slidesToScroll: 1,
      rows: 0,
      prevArrow: '<button class="slick-prev" aria-label="Previous" ><i class="icon-angle-right"></i></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" ><i class="icon-angle-left"></i></button>',
      useTransform: false,
      slidesToShow: 4,
      speed: 700,
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 767,
              settings: 'unslick'
          }
      ]
  });

  ResponsiveHelper.addRange({
      '768..': {
          on: function() {
              jQuery('.related-product-slider').each(function(index, el) {
                  let self = jQuery(this);

                  let related_slider_count = Number(jQuery(this).data('slide')) || 4;

                  self.slick({
                      rtl: rtlDir(),
                      slidesToScroll: 1,
                      rows: 0,
                      prevArrow: '<button class="slick-prev" aria-label="Previous" ><i class="icon-angle-right"></i></button>',
                      nextArrow: '<button class="slick-next" aria-label="Next" ><i class="icon-angle-left"></i></button>',
                      dots: true,
                      speed: 800,
                      slidesToShow: related_slider_count,
                      responsive: [
                          {
                              breakpoint: 1200,
                              settings: {
                                  slidesToShow: 4
                              }
                          },
                          {
                              breakpoint: 992,
                              settings: {
                                  slidesToShow: 3
                              }
                          },
                          {
                              breakpoint: 768,
                              settings: 'unslick'
                          }
                      ]
                  });
              });

              jQuery('.best-selling-slider.has_slider').each(function(index, el) {
                  var self = jQuery(this);

                  var best_slider_count = Number(jQuery(this).data('slide'));

                  self.slick({
                      rtl: rtlDir(),
                      slidesToScroll: 1,
                      rows: 0,
                      prevArrow: '<button class="slick-prev" aria-label="Previous" ><i class="icon-angle-right"></i></button>',
                      nextArrow: '<button class="slick-next" aria-label="Next" ><i class="icon-angle-left"></i></button>',
                      speed: 300,
                      mobileFirst: false,
                      slidesToShow: best_slider_count,
                      touchThreshold: 70,
                      responsive: [
                          {
                              breakpoint: 1200,
                              settings: {
                                  slidesToShow: 4
                              }
                          },
                          {
                              breakpoint: 992,
                              settings: {
                                  slidesToShow: 3
                              }
                          },
                          {
                              breakpoint: 768,
                              settings: 'unslick'
                          }
                      ]
                  }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
                      slick.$slider.find('.slick-cloned').each(function(index, el) {
                          if(!jQuery(this).find('.color-variable-items-wrapper .selected').length) {
                              jQuery(this).find('.color-variable-items-wrapper li:eq(0)').addClass('selected');
                          }
                      });
                  });
                  jQuery('.tab-btn a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                      jQuery('.best-selling-slider.has_slider').slick('refresh');
                      jQuery('.best-selling-slider.has_slider').slick('refresh');
                  })
              });

              jQuery('.category-logos-row.has_slider').slick({
                  rtl: rtlDir(),
                  slidesToScroll: 1,
                  rows: 0,
                  prevArrow: '<button class="slick-prev" aria-label="Previous" ><i class="icon-angle-right"></i></button>',
                  nextArrow: '<button class="slick-next" aria-label="Next" ><i class="icon-angle-left"></i></button>',
                  speed: 800,
                  slidesToShow: 6,
                  responsive: [
                      {
                          breakpoint: 1300,
                          settings: {
                              slidesToShow: 5
                          }
                      },
                      {
                          breakpoint: 1200,
                          settings: {
                              slidesToShow: 4
                          }
                      },
                      {
                          breakpoint: 992,
                          settings: {
                              slidesToShow: 3
                          }
                      },
                      {
                          breakpoint: 768,
                          settings: 'unslick'
                      }
                  ]
              });
          },
          off: function() {
              jQuery('.best-selling-slider.has_slider').slick('unslick');
              jQuery('.related-product-slider').slick('unslick');
              jQuery('.category-logos-row').slick('unslick');
          }
      },
      '..767': {
          on: function() {
              if (jQuery('body').hasClass('single-product-layout-default')) {
                  jQuery('.single-product-slider').slick({
                      rtl: rtlDir(),
                      slidesToScroll: 1,
                      rows: 0,
                      slidesToShow: 1,
                      arrows: false,
                      speed: 600,
                      useTransform: false,
                      dots: true
                  });
              }
          },
          off: function() {
              if (jQuery('body').hasClass('single-product-layout-default')) {
                  jQuery('.single-product-slider').slick('unslick');
              }
          }
      }
  });

  if (jQuery('body').hasClass('single-product-layout-default__back')) {
      jQuery('.single-product-slider').slickLightbox({
          src: function(element) {
              return jQuery(element).data('zoom_src');
          },
          itemSelector: '.img-wrap',
          slick: {
              rtl: rtlDir(),
              prevArrow: '<button class="slick-prev" aria-label="Previous" ><i class="icon-angle-right"></i></button>',
              nextArrow: '<button class="slick-next" aria-label="Next" ><i class="icon-angle-left"></i></button>',
              speed: 1000
          }
      }).on('shown.slickLightbox', function(event) {
          jQuery('.slick-lightbox-slick-item-inner').each(function() {
              var zoomBlock = jQuery(this);
              var imgUrl = zoomBlock.find('img').attr('src');
              zoomBlock.zoom({
                  url: imgUrl
              });
          });
      });
  } else {
      jQuery(".single-product-slider").slickLightbox({
          src: function(element) {
              return jQuery(element).next('.img-wrap').data('zoom_src');
          },
          layouts: {
              closeButton:
                  '<button class="slick-lightbox-close" type="button"><i class="icon-close"></i></button>',
          },
          itemSelector: ".slide .button-zoom",
          slick: {
              rtl: rtlDir(),
              prevArrow: '<button class="slick-prev" aria-label="Previous" ><i class="icon-angle-right"></i></button>',
              nextArrow: '<button class="slick-next" aria-label="Next" ><i class="icon-angle-left"></i></button>',
              speed: 1000
          },
      }).on({
          'show.slickLightbox': function(){jQuery('body').addClass('overflow-hidden');},
          'shown.slickLightbox': function(){lockBody();},
          'hide.slickLightbox': function(){ unlockBody(); jQuery('body').removeClass('overflow-hidden')}
      });
  }

  if (jQuery('body').hasClass('single-product-layout-two')) {
      let slidetoShow = 4;
      let slidetoShowSmall = 4;
      if(jQuery('body').hasClass('single_gallery_size_big')) {
          slidetoShow = 6;
          slidetoShowSmall = 3;
      }
      jQuery(".pagination-slider")
          .slick({
              rtl: rtlDir(),
              dots: true,
              slidesToScroll: 1,
              rows: 0,
              slidesToShow: slidetoShowSmall,
              prevArrow: '<button class="slick-prev" aria-label="Previous" ><i class="icon-angle-right"></i></button>',
              nextArrow: '<button class="slick-next" aria-label="Next" ><i class="icon-angle-left"></i></button>',
              arrows: false,
              infinite: true,
              speed: 600,
              mobileFirst: true,
              useTransform: false,
              focusOnSelect: true,
              asNavFor: ".single-product-slider",
              responsive: [
                  {
                      breakpoint: 767,
                      settings: {
                          rtl: false,
                          verticalSwiping: true,
                          vertical: true,
                      },
                  },
                  {
                      breakpoint: 991,
                      settings: {
                          rtl: false,
                          verticalSwiping: true,
                          vertical: true,
                          slidesToShow: 4,
                          
                      },
                  },
                  {
                      breakpoint: 1299,
                      settings: {
                          rtl: false,
                          verticalSwiping: true,
                          vertical: true,
                          slidesToShow: slidetoShow,
                      },
                  }
              ],
          })
          .on("afterChange", function (event) {
              jQuery(".single-product-slider .slick-list").css({ "min-height": "" });
          });

      jQuery(".single-product-slider").on('init',()=> {
          ResponsiveHelper.addRange({
              '768..': {
                  on: function() {
                      if(jQuery('body').hasClass('single-product-layout-two')) {
                          let summaryHeight = jQuery('.single-product-summary').outerHeight();
                          let sliderHeight = jQuery('.single-slider-wrapper').outerHeight();
                          if(summaryHeight > sliderHeight) {
                              jQuery('.single-slider-wrapper').stickyScrollBlock({
                                  setBoxHeight: true,
                                  activeClass: 'fixed-position',
                                  positionType: 'fixed',
                                  container: '.single-product-detail-wrap',
                                  extraTop: function() {
                                      var totalHeight = 0;
                                      jQuery('#header').each(function() {
                                          totalHeight += jQuery(this).outerHeight();
                                          totalHeight += 12;
                                      });
                                      return totalHeight;
                                  },
                                  extraBottom: 20,
                                  animDelay: 0,
                                  animSpeed: 0
                              });
                          } else {
                              jQuery('.single_gallery_size_big .single-product-summary').stickyScrollBlock({
                                  setBoxHeight: true,
                                  activeClass: 'fixed-position',
                                  positionType: 'fixed',
                                  container: '.single-product-container',
                                  extraTop: function() {
                                      var totalHeight = 0;
                                      jQuery('#header').each(function() {
                                          totalHeight += jQuery(this).outerHeight();
                                          // if(jQuery('.club-banner-row').length) {
                                          //   totalHeight += jQuery('.club-banner-row').outerHeight();
                                          // }
                                          totalHeight += 12;
                                      });
                                      return totalHeight;
                                  }
                              });
                          }
                      }
                  },
                  off: function() {
                  }
              }
          });
          if(jQuery('body').hasClass('single-product-layout-two') && !jQuery('body').hasClass('single_gallery_size_big')) {
              let summaryHeight = jQuery('.single-product-summary').outerHeight();
          }
      }).slick({
          rtl: rtlDir(),
          slidesToScroll: 1,
          rows: 0,
          prevArrow: '<button class="slick-prev" aria-label="Previous" ><i class="icon-angle-right-thin"></i></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" ><i class="icon-angle-left-thin"></i></button>',
          slidesToShow: 1,
          speed: 600,
          dots: true,
          focusOnSelect: true,
          useTransform: false,
          mobileFirst: true,
          adaptiveHeight: true
      });
  }

  jQuery('.home-reviews-slider').slick({
      rtl: rtlDir(),
      slidesToScroll: 1,
      slidesToShow: 4,
      rows: 0,
      prevArrow: '<button class="slick-prev" aria-label="Previous" ><i class="icon-angle-right"></i></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" ><i class="icon-angle-left"></i></button>',
      dots: true,
      useTransform: false,
      speed: 400,
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  speed: 200
              }
          }
      ]
  });
}
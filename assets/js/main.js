!(function ($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 80;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 20,
    time: 2000
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 2
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });


  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
 
})(jQuery);

$(function() {
   
    $(".form-control").on('focus', function(){

        $(this).parents(".form-group").addClass('focused');

    });

    $(".form-control").on('blur', function(){

        $(this).parents(".form-group").removeClass('focused');

    });

});

function checkIt(x) {
  var checkbox = document.getElementById(x)
  if(!checkbox.checked) {
	checkbox.checked = true
  }
}
function filledorder() {
var element = document.getElementById("groupsize");
element.value = "4";
}
// New section
// Tour Carousel JavaScript
        const tours = [
            {
                image: "assets/leaflet/gobustan_carvings.jpg",
                title: "Gobustan, Mud Volcanoes and Absheron Peninsula Tour",
                description: "Full-day Gobustan tour covering museums, Gobustan rocks, Mud Volcanoes, Fire Temple, Burning Hill, and a Lada car ride.",
                price: "$47"
            },
            {
                image: "assets/leaflet/baku_architecture.jpg",
                title: "Absheron Tour (Half day)",
                description: "Half-day Absheron tour covering Fire Temple, Burning Mountain, Mardakan Castle, and Heydar Aliyev Center—ideal for short stays.",
                price: "$35"
            },
            {
                image: "assets/leaflet/gobustan_expedition.jpg",
                title: "Baku City & Absheron Tour",
                description: "Perfect for a 1-day visit: explore Baku’s main sights, old town, Fire Temple, and Burning Hill on this tour.",
                price: "$48"
            },
            {
                image: "assets/leaflet/baku_architecture.jpg",
                title: "Baku City Tour",
                description: "Baku City Tour showcases key sites and blends modern and ancient city life, leaving a lasting luxury impression.",
                price: "$40"
            },
            {
                image: "assets/leaflet/ganja_journey.jpg",
                title: "Baku Night City Tour",
                description: "Explore Baku’s night views in 3 hours: Flame Towers, mosques, museums, parks, and sea views with a guided walk.",
                price: "$30"
            },
            {
                image: "assets/leaflet/lankaran_coastal.jpg",
                title: "Gabala Tour",
                description: "Full-day Gabala tour from Baku explores ancient city, mountain views, nature, and historic Shamakhi sites like Juma Mosque.",
                price: "$54"
            },
            {
                image: "assets/leaflet/lankaran_coastal1.jpg",
                title: "Gobustan & Mud Volcanoes Tour (Half day)",
                description: "Half-day Gobustan tour explores Stone Age petroglyphs, mud volcanoes, Bibiheybat Mosque, and world’s first industrial oil well.",
                price: "$37"
            },
            {
                image: "assets/leaflet/lankaran_coastal2.jpg",
                title: "Goygol Tour",
                description: "Goygol, in western Azerbaijan, features stunning Goygol Lake, rich wildlife, forests, German heritage, and beautiful Caucasus scenery.",
                price: "$85"
            },
            {
                image: "assets/leaflet/lankaran_coastal3.jpg",
                title: "Guba Tour",
                description: "Guba tour offers mountain views, blooming gardens, famous apples, carpet weaving, Qachrash Forest, Red Village, and a carpet factory.",
                price: "$54"
            },
            {
                image: "assets/leaflet/lankaran_coastal4.jpg",
                title: "Khinalig Tour",
                description: "Khinalig Village, Azerbaijan’s highest, offers unique language, breathtaking mountain views, a walking tour, carpet factory, and Qachresh forest visit.",
                price: "$85"
            },
            {
                image: "assets/leaflet/lankaran_coastal5.jpg",
                title: "Lahij Tour",
                description: "Lahij tour visits Lahij village in Ismayilli, with a stop at Shamakhi city for sightseeing along the way.",
                price: "$51"
            },
            {
                image: "assets/leaflet/lankaran_coastal6.jpg",
                title: "Shahdag Tour",
                description: "Shahdag tour includes Gusar region, Red Village Jewish settlement, and Azerbaijan’s largest ski resort near Shahdag National Park.",
                price: "$54"
            }
        ];

        const carousel = document.querySelector('.tour-carousel');
        let currentIndex = 0;
        let cardWidth = 0; // Will be calculated dynamically
        let slideInterval; // Variable to store the setInterval ID for auto-slide

        // Variables for drag functionality
        let isDragging = false;
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let animationFrameId = null;

        /**
         * Creates an HTML element for a single tour card.
         * @param {Object} tour - The tour data object.
         * @returns {HTMLElement} The created tour card element.
         */
        function createTourCard(tour) {
            const card = document.createElement('div');
            card.classList.add('tour-card');
            card.innerHTML = `
                <img src="${tour.image}" alt="${tour.title}" onerror="this.onerror=null;this.src='https://placehold.co/320x200/cccccc/333333?text=Image+Not+Found';">
                <h3>${tour.title}</h3>
                <p>${tour.description}</p>
                <div class="tour-price">${tour.price}</div>
            `;
            return card;
        }

        /**
         * Populates the carousel with tour cards.
         * Duplicates the cards to create a seamless infinite loop effect.
         */
        function populateCarousel() {
            carousel.innerHTML = ''; // Clear existing cards
            // Add original set of cards
            tours.forEach(tour => {
                carousel.appendChild(createTourCard(tour));
            });
            // Add a duplicate set of cards to enable infinite scrolling without visual jump
            tours.forEach(tour => {
                carousel.appendChild(createTourCard(tour));
            });
        }

        /**
         * Calculates the width of a single tour card including its margins.
         * This value is crucial for accurate carousel translation.
         * @returns {number} The total width of a card.
         */
        function getCardTotalWidth() {
            if (carousel.children.length > 0) {
                const firstCard = carousel.children[0];
                const style = getComputedStyle(firstCard);
                // Parse float for margins as they are strings like "15px"
                const margin = parseFloat(style.marginRight) + parseFloat(style.marginLeft);
                return firstCard.offsetWidth + margin;
            }
            return 0;
        }

        /**
         * Sets the carousel position to a specific card index.
         * Handles the infinite loop by resetting the carousel position when it reaches the end of the duplicated set.
         * @param {number} index - The target index for the carousel.
         */
        function setCarouselPosition(index) {
            cardWidth = getCardTotalWidth(); // Recalculate in case of resize or dynamic changes

            // Adjust index for infinite loop effect
            if (index >= tours.length) {
                currentIndex = index; // Keep track of the "logical" index for smooth transition
                const translateX = -(currentIndex * cardWidth);
                carousel.style.transform = `translateX(${translateX}px)`;

                // After the transition, instantly reset to the beginning of the first set
                setTimeout(() => {
                    carousel.style.transition = 'none';
                    currentIndex = 0; // Reset index to the start of the first set
                    carousel.style.transform = `translateX(0px)`;
                    // Re-enable transition after a very short delay to avoid flicker
                    setTimeout(() => {
                        carousel.style.transition = 'transform 0.8s ease-in-out';
                    }, 50);
                }, 800); // This delay should match the CSS transition duration
            } else if (index < 0) {
                // If swiping right past the beginning, go to the end of the duplicated set
                currentIndex = index; // Keep track of logical index for smooth transition
                const translateX = -(currentIndex * cardWidth);
                carousel.style.transform = `translateX(${translateX}px)`;

                setTimeout(() => {
                    carousel.style.transition = 'none';
                    currentIndex = tours.length - 1; // Go to the last card of the first set
                    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
                    setTimeout(() => {
                        carousel.style.transition = 'transform 0.8s ease-in-out';
                    }, 50);
                }, 800);
            } else {
                currentIndex = index;
                const translateX = -(currentIndex * cardWidth);
                carousel.style.transform = `translateX(${translateX}px)`;
            }
        }

        /**
         * Moves the carousel to the next card for auto-slide.
         */
        function moveCarousel() {
            setCarouselPosition(currentIndex + 1);
        }

        /**
         * Centers the first card in the carousel container on initial load and window resize.
         */
        function centerFirstCard() {
            if (carousel.children.length > 0) {
                cardWidth = getCardTotalWidth();
                const containerWidth = carousel.parentElement.offsetWidth;
                const initialPadding = (containerWidth / 2) - (cardWidth / 2);
                carousel.style.paddingLeft = `${initialPadding}px`;
                // Also set the initial position correctly based on current index
                carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            }
        }

        /**
         * Starts the automatic carousel sliding.
         */
        function startAutoSlide() {
            stopAutoSlide(); // Clear any existing interval first
            slideInterval = setInterval(moveCarousel, 3000); // Move every 3 seconds
        }

        /**
         * Stops the automatic carousel sliding.
         */
        function stopAutoSlide() {
            clearInterval(slideInterval);
        }

        // --- Drag Functionality ---

        /**
         * Handles the start of a touch or mouse drag.
         * @param {Event} e - The touchstart or mousedown event.
         */
        function dragStart(e) {
            stopAutoSlide(); // Pause auto-slide during manual interaction
            isDragging = true;
            startPos = e.touches ? e.touches[0].clientX : e.clientX;
            // Get the current transform X value
            const transformMatrix = getComputedStyle(carousel).transform;
            if (transformMatrix !== 'none') {
                 prevTranslate = parseFloat(transformMatrix.split(/[()]/)[1].split(',')[4]);
            } else {
                 prevTranslate = 0;
            }
            carousel.style.transition = 'none'; // Disable transition during drag
            animationFrameId = requestAnimationFrame(animation);
            carousel.classList.add('grabbing'); // Add a class for styling (e.g., cursor)
        }

        /**
         * Handles the movement during a touch or mouse drag.
         * @param {Event} e - The touchmove or mousemove event.
         */
        function dragMove(e) {
            if (!isDragging) return;
            // Prevent default to avoid scrolling the page while dragging horizontally
            e.preventDefault();

            const currentClientX = e.touches ? e.touches[0].clientX : e.clientX;
            currentTranslate = prevTranslate + (currentClientX - startPos);
        }

        /**
         * Applies the transform to the carousel during dragging.
         */
        function animation() {
            carousel.style.transform = `translateX(${currentTranslate}px)`;
            if (isDragging) {
                animationFrameId = requestAnimationFrame(animation);
            }
        }

        /**
         * Handles the end of a touch or mouse drag.
         * @param {Event} e - The touchend, mouseup, or mouseleave event.
         */
        function dragEnd() {
            if (!isDragging) return;
            isDragging = false;
            cancelAnimationFrame(animationFrameId);
            carousel.style.transition = 'transform 0.8s ease-in-out'; // Re-enable transition

            cardWidth = getCardTotalWidth(); // Ensure cardWidth is up-to-date

            // Calculate the nearest card index based on the final drag position
            let newIndex = Math.round(-currentTranslate / cardWidth);

            // Clamp newIndex to valid logical range (0 to tours.length - 1)
            // The setCarouselPosition function will then handle the infinite loop logic
            newIndex = Math.max(0, Math.min(newIndex, tours.length - 1));

            // Adjust currentIndex to reflect the snapped position
            currentIndex = newIndex;

            setCarouselPosition(currentIndex); // Snap to the calculated card
            carousel.classList.remove('grabbing');
            startAutoSlide(); // Resume auto-slide after manual interaction
        }

        // Add event listeners for drag functionality
        carousel.addEventListener('mousedown', dragStart);
        carousel.addEventListener('mouseup', dragEnd);
        carousel.addEventListener('mouseleave', dragEnd); // End drag if mouse leaves carousel
        carousel.addEventListener('mousemove', dragMove);

        carousel.addEventListener('touchstart', dragStart);
        carousel.addEventListener('touchend', dragEnd);
        carousel.addEventListener('touchmove', dragMove);

        // Initial population of the carousel
        populateCarousel();

        // Event listener for window load to set initial centering and start animation
        window.addEventListener('load', () => {
            centerFirstCard(); // Center the first card
            startAutoSlide(); // Start the automatic movement
        });

        // Event listener for window resize to re-center and reset carousel position
        window.addEventListener('resize', () => {
            stopAutoSlide(); // Stop auto-slide during resize
            centerFirstCard(); // Recenter the first card
            // Reset current index and transform on resize to avoid weird jumps
            currentIndex = 0;
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(0px)`;
            setTimeout(() => {
                carousel.style.transition = 'transform 0.8s ease-in-out';
                startAutoSlide(); // Restart auto-slide after resize
            }, 50);
        });

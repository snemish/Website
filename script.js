$(function() {

// Particle Js Controls
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 2000
      }
    },
    "color": {
      "value": "#74C4AE"
    },
    "shape": {
      "type": "edge",
      "stroke": {
        "width": 0,
        "color": "#74C4AE"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 176.3753266952075,
      "color": "#74C4AE",
      "opacity": 0.0561194221302933,
      "width": 0.4810236182596568
    },
    "move": {
      "enable": true,
      "speed": 1.603412060865523,
      "direction": "top",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 80,
        "rotateY": 481.0236182596568
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 100,
        "line_linked": {
          "opacity": 1
        }
      },
      "repulse": {
        "distance": 700,
        "duration": 0.2
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

  // I can probably write this better 

setTimeout(function(){
  $('#particles-js').addClass('show');
}, 500);

$('.project-one').click(function() {
  setTimeout(function(){
    $('.menu, .project, .project-one').addClass('hide-preview');
  }, 200);
    setTimeout(function(){
    $('.preview-section').addClass('hide-preview');
  }, 600);
  setTimeout(function(){
    window.location = 'bm/index';
  }, 1680);    
});

$('.project-two').click(function() {
  setTimeout(function(){
    $('.menu, .project, .project-one').addClass('hide-preview');
  }, 200);
    setTimeout(function(){
    $('.preview-section').addClass('hide-preview');
  }, 600);
  setTimeout(function(){
    window.location = 'paper/index';
  }, 1680);    
});

$('.project-three').click(function() {
  setTimeout(function(){
    $('.menu, .project, .project-one').addClass('hide-preview');
  }, 200);
  setTimeout(function(){
    $('.preview-section').addClass('hide-preview');
  }, 600);
  setTimeout(function(){
    window.location = 'layer/index';
  }, 1680);    
});

$('.project-four').click(function() {
  setTimeout(function(){
    $('.menu, .project, .project-one').addClass('hide-preview');
  }, 200);
  setTimeout(function(){
    $('.preview-section').addClass('hide-preview');
  }, 600);
  setTimeout(function(){
    window.location = 'together/index';
  }, 1680);    
});

$('.project-five').click(function() {
  setTimeout(function(){
    $('.menu, .project, .project-one').addClass('hide-preview');
  }, 200);
  setTimeout(function(){
    $('.preview-section').addClass('hide-preview');
  }, 600);
  setTimeout(function(){
    window.location = 'haunt/index';
  }, 1680);    
});

$('.project-six').click(function() {
  setTimeout(function(){
    $('.menu, .project, .project-one').addClass('hide-preview');
  }, 200);
  setTimeout(function(){
    $('.preview-section').addClass('hide-preview');
  }, 600);
  setTimeout(function(){
    window.location = 'daily/index';
  }, 1680);    
});

$('.about').click(function() {
  $('.about-page').addClass('show-section');
  $('.menu').addClass('fade-out');
  $('.back-arrow').addClass('fade-in');
  $('.name').addClass('zoom-out');
});

$('.resume').click(function() {
  $('.about-page').removeClass('show-section');
  $('.menu').removeClass('fade-out');
  $('.back-arrow').removeClass('fade-in');
  $('.name').removeClass('zoom-out');
});

$('.back-arrow').click(function() {
	$('.project-section').removeClass('show-project');
	$('.preview-section').removeClass('hide-preview');
	$('.menu').removeClass('fade-out');

  setTimeout(function(){
    $('.back-arrow').removeClass('fade-in');
  }, 200);
});

  // Sidebar Menu Controls

$(".menu-line-one, .work").click(function() {
    $('html, body').animate({
        scrollTop: $(".project-one").offset().top
    }, 1000);
    $('#menu-one').addClass('selected');
    $('#menu-two, #menu-three, #menu-four, #menu-five, #menu-six'). removeClass('selected');
});

$(".menu-line-two").click(function() {
  $('html, body').animate({
      scrollTop: $(".project-two").offset().top
  }, 1000);
  $('#menu-two').addClass('selected');
  $('#menu-one, #menu-three, #menu-four, #menu-five, #menu-six'). removeClass('selected');
});

$(".menu-line-three").click(function() {
  $('html, body').animate({
    scrollTop: $(".project-three").offset().top
  }, 1000);
  $('#menu-three').addClass('selected');
  $('#menu-one, #menu-two, #menu-four, #menu-five, #menu-six'). removeClass('selected');
});

$(".menu-line-four").click(function() {
  $('html, body').animate({
    scrollTop: $(".project-four").offset().top
  }, 1000);
  $('#menu-four').addClass('selected');
  $('#menu-one, #menu-two, #menu-three, #menu-five, #menu-six'). removeClass('selected');
});

$(".menu-line-five").click(function() {
  $('html, body').animate({
    scrollTop: $(".project-five").offset().top
  }, 1000);
  $('#menu-five').addClass('selected');
  $('#menu-one, #menu-two, #menu-three, #menu-four, #menu-six'). removeClass('selected');
});

$(".menu-line-six").click(function() {
  $('html, body').animate({
    scrollTop: $(".project-six").offset().top
  }, 1000);
  $('#menu-six').addClass('selected');
  $('#menu-one, #menu-two, #menu-three, #menu-four, #menu-five'). removeClass('selected');
});

$(".view-arrow").click(function() {
  $('html, body').animate({
    scrollTop: $(".preview-section").offset().top
  }, 1000);
});

  // Scroll magic controllers 

  var scrollMagicController = new ScrollMagic.Controller();

  var projectOneParallax = new ScrollMagic.Scene({
    triggerElement: '.preview-section',
    duration: 2000,
    offset: 180
  });

  projectOneParallax.setClassToggle('.first-thumbnail','move-up');

  var scene = new ScrollMagic.Scene({
    triggerElement: '.preview-section',
    duration: 800,
    offset: 0 
  });

  scene.setClassToggle('#menu-one','selected');

  var projectTwoParallax = new ScrollMagic.Scene({
    triggerElement: '.project-one',
    duration: 3000,
    offset: 550
  });

  projectTwoParallax.setClassToggle('.second-thumbnail','move-up');

  var sceneTwo = new ScrollMagic.Scene({
    triggerElement: '.project-two',
    duration: 800,
    offset: 0
  });

  sceneTwo.setClassToggle('#menu-two','selected');

  var projectThreeParallax = new ScrollMagic.Scene({
    triggerElement: '.project-two',
    duration: 2000,
    offset: 550
  });

  projectThreeParallax.setClassToggle('.third-thumbnail','move-up');

  var sceneThree = new ScrollMagic.Scene({
      triggerElement: '.project-three',
      duration: 800,
      offset: 00 
  });

  sceneThree.setClassToggle('#menu-three','selected');

  var projectFourParallax = new ScrollMagic.Scene({
    triggerElement: '.project-three',
    duration: 2000,
    offset: 550 
  });

  projectFourParallax.setClassToggle('.fourth-thumbnail','move-up');

  var sceneFour = new ScrollMagic.Scene({
    triggerElement: '.project-four',
    duration: 800,
    offset: 0 
  });

  sceneFour.setClassToggle('#menu-four','selected');
 
  var projectFiveParallax = new ScrollMagic.Scene({
    triggerElement: '.project-four',
    duration: 1500,
    offset: 600 
  });

  projectFiveParallax.setClassToggle('.fifth-thumbnail','move-up');

  var sceneFive = new ScrollMagic.Scene({
    triggerElement:'.project-five',
    duration: 800,
    offset: 0
  });

  sceneFive.setClassToggle('#menu-five','selected');

  var projectSixParallax = new ScrollMagic.Scene({
    triggerElement: '.project-five',
    duration: 800,
    offset: 550
  });

  projectSixParallax.setClassToggle('.sixth-thumbnail','move-up');

  var sceneSix = new ScrollMagic.Scene({
    triggerElement: '.project-six',
    duration: 700,
    offset: 0
  });

  sceneSix.setClassToggle('#menu-six','selected');

  scrollMagicController.addScene([
    scene,
    sceneTwo,
    sceneThree,
    sceneFour,
    sceneFive,
    sceneSix,
    projectOneParallax,
    projectTwoParallax,
    projectThreeParallax,
    projectFourParallax,
    projectFiveParallax,
    projectSixParallax
  ]);

});

// Modals

$(document).on("click", "#btn-modal", function() {
  $(this).closest(".modal-wrapper").find("#modal").addClass("visability");
  $(this).closest(".modal-wrapper").find(".overlay").addClass("visability");
})

$(document).on("click", "#close-btn, #close-modal, .overlay, .close-modal", function() {
  $(this).closest(".modal-wrapper").find("#modal").removeClass("visability");
  $(this).closest(".modal-wrapper").find(".overlay").removeClass("visability");
})

// Alerts

$(document).on("click", ".close-btn", function() {
  console.log("Closed alert")
  $(this).closest(".alert").remove();
})

// Navbar

$('.nav-btn-menu').click(function() {
  $(this).closest(".navbar").find(".nav-content").toggleClass('active');
})

// Dropdown Complex

$('.dropdown-complex-item').hover(function() {
  $(this).closest(".dropdown").find(".dropdown-complex").toggleClass('dropdown-complex-active');
  $(this).closest(".dropdown").find(".complex-list").toggleClass('complex-list-active');
  var complexitemid = $('.dropdown-complex-item').attr('id');
})

// Column attribute rendering

$(".col-render").each(function(index) {
  // Single column class render

  breakpoints = $(this).attr('column-conf').split(',')

  if (breakpoints.length > 0){
    for (breakpoint in breakpoints) {
      $(this).addClass(breakpoints[breakpoint] ? 'col-'+breakpoints[breakpoint] : '' )
    }
  } else {
    if ($(this).hasClass('col-render-col-none')) {
      $(this).addClass('col-none')
    } else {
      $(this).addClass('col')
    }
  }
})

// Radio/Checkboxes

$("input.form-radio-button, input.form-check-input").each(function(index) {
  if ($(this).is(':checked')) {
    $(this).closest(".form-check-label").addClass("form-check-active");
  }
})

$(document).on("change", 'input.form-radio-button:radio, input.form-check-input:radio', function() {
  $(this).closest("div").parent().closest("div").find('.form-check-label').removeClass('form-check-active');
  $(this).closest(".form-check-label").addClass("form-check-active");
  console.log("Check Box change")
})

$(document).on("change", 'input.form-check-input:checkbox', function() {
  $(this).closest("div").closest("div").find('.form-check-label').removeClass('form-check-active');
  $(this).closest(".form-check-label").addClass("form-check-active");
  console.log("Check Box change")
})

$(document).on("change", 'input.form-check-input', function() {
  if ($(this).is(':checked')) {
    $(this).closest(".form-check-label").addClass("form-check-active");
    console.log("Check Box on")
  } else {
    $(this).closest(".form-check-label").removeClass("form-check-active");
  }
  console.log("Check Box change")
})

// Progress Bars

$(".progress-update-white").each(function(index) {
  if ((parseInt($(this).closest('.progress-bar').find('.progress-bar-fill').css('width'), 10) / parseInt($(this).closest('.progress-bar').css('width'), 10) * 100) >= 50) {
    $(this).css('color', 'white')
  }
})

$(".progress-echo").each(function(index) {
  if ((parseInt($(this).closest('.progress-bar').find('.progress-bar-fill').css('width'), 10) / parseInt($(this).closest('.progress-bar').css('width'), 10) * 100) >= 50) {
    $(this).append(Math.round((parseInt($(this).closest('.progress-bar').find('.progress-bar-fill').css('width'), 10) / parseInt($(this).closest('.progress-bar').css('width'), 10) * 100)) + '%');
  }
})

// Accordion

var inProgress = false;

$(document).on('click', '.card-accordion-heading', function(index) {
  if (!($(this).closest('.card-accordion').first().hasClass('card-accordion-deactivator'))) {
    var accordionBtn = $(this)
    var accordionContent = $(this).closest('.card-accordion').find('.card-accordion-content').first()
    var accordionDeck = $(this).closest('.card-accordion-content').find('.card-accordion-content').first()

    if (inProgress == false) {
      inProgress = true;
      console.log("Progress True")
      if (!(accordionDeck.hasClass("loading") || accordionDeck.hasClass("unloading") || accordionContent.hasClass("loading") || accordionContent.hasClass("unloading"))) {

        if (accordionContent.hasClass("active")) { // Accordion Closing
          accordionBtn.closest('.deck.card-accordion-radio').find('.active').closest('.card.card-accordion').find('.card-accordion-icon-flip').css('transform', 'translateY(-50%)')
          accordionBtn.find('.card-accordion-icon-flip').css('transform', 'translateY(-50%)')
          accordionContent.removeClass("active");

          var heightCalc = $(this).closest('.card-accordion').find('.card-accordion-content').first().css('height', 'auto').height();

          accordionContent.height(heightCalc);
          accordionContent.innerHeight(0);
          accordionContent.addClass("unloading")

          window.setTimeout(function() {
            accordionContent.removeClass("unloading");
            accordionContent.removeAttr("style");
            inProgress = false;
            console.log("Progress false closing")
          }, 300);

        } else { // Accordion Expanding

          var heightCalc = $(this).closest('.card-accordion').find('.card-accordion-content').first().css('height', 'auto').innerHeight();

          accordionBtn.closest('.deck.card-accordion-radio').find('.active').first().closest('.card.card-accordion').find('.card-accordion-icon-flip').first().css('transform', 'translateY(-50%)')
          accordionBtn.find('.card-accordion-icon-flip').css('transform', 'rotate(180deg) translateY(50%)')

          accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.active').first().addClass("unloading")
          var heightCalcOld = $(this).closest('.card-accordion-radio').find('.card-accordion-content.unloading').first().css('height', 'auto').innerHeight();
          accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.active.unloading').first().innerHeight(heightCalcOld);
          accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.active.unloading').first().removeClass('active')

          window.setTimeout(function() {
            accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.unloading').first().removeAttr("style");
            accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.unloading').first().removeClass("unloading");
          }, 0);

          accordionContent.innerHeight(0);
          if (accordionContent.hasClass('py-none')) {
            accordionContent.innerHeight(heightCalc);
          } else {
            accordionContent.innerHeight(heightCalc + 20);
          }
          accordionContent.addClass("loading")

          window.setTimeout(function() {
            accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.active').first().removeClass('active');
            accordionContent.addClass("active");
            accordionContent.removeClass("loading");
            accordionContent.removeAttr("style");
            inProgress = false;
            console.log("Progress false opeing")
          }, 300);

        }
      }

    }
  }
})

$(document).on('click', '.card-accordion-controller', function(index) {
  var accordionBtn = $(this)
  var accordionContent = $(this).closest('.card-accordion').find('.card-accordion-content').first()
  var accordionDeck = $(this).closest('.card-accordion-content').find('.card-accordion-content').first()

  if (inProgress == false) {
    inProgress = true;
    console.log("Progress True")
    if (!(accordionDeck.hasClass("loading") || accordionDeck.hasClass("unloading") || accordionContent.hasClass("loading") || accordionContent.hasClass("unloading"))) {

      if (accordionContent.hasClass("active")) { // Accordion Closing
        accordionBtn.closest('.deck.card-accordion-radio').find('.active').closest('.card.card-accordion').find('.card-accordion-icon-flip').css('transform', 'translateY(-50%)')
        accordionBtn.find('.card-accordion-icon-flip').css('transform', 'translateY(-50%)')
        accordionContent.removeClass("active");

        var heightCalc = $(this).closest('.card-accordion').find('.card-accordion-content').first().css('height', 'auto').height();

        accordionContent.height(heightCalc);
        accordionContent.innerHeight(0);
        accordionContent.addClass("unloading")

        window.setTimeout(function() {
          accordionContent.removeClass("unloading");
          accordionContent.removeAttr("style");
          inProgress = false;
          console.log("Progress false closing")
        }, 300);

      } else { // Accordion Expanding

        var heightCalc = $(this).closest('.card-accordion').find('.card-accordion-content').first().css('height', 'auto').innerHeight();

        accordionBtn.closest('.deck.card-accordion-radio').find('.active').first().closest('.card.card-accordion').find('.card-accordion-icon-flip').first().css('transform', 'translateY(-50%)')
        accordionBtn.find('.card-accordion-icon-flip').css('transform', 'rotate(180deg) translateY(50%)')

        accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.active').first().addClass("unloading")
        var heightCalcOld = $(this).closest('.card-accordion-radio').find('.card-accordion-content.unloading').first().css('height', 'auto').innerHeight();
        accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.active.unloading').first().innerHeight(heightCalcOld);
        accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.active.unloading').first().removeClass('active')

        window.setTimeout(function() {
          accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.unloading').first().removeAttr("style");
          accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.unloading').first().removeClass("unloading");
        }, 0);

        accordionContent.innerHeight(0);
        if (accordionContent.hasClass('py-none')) {
          accordionContent.innerHeight(heightCalc);
        } else {
          accordionContent.innerHeight(heightCalc + 20);
        }
        accordionContent.addClass("loading")

        window.setTimeout(function() {
          accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.active').first().removeClass('active');
          accordionContent.addClass("active");
          accordionContent.removeClass("loading");
          accordionContent.removeAttr("style");
          inProgress = false;
          console.log("Progress false opeing")
        }, 300);

      }
    }

  }
});

// Navbar

$('.navbar-fixed').each(function(index) {
  if ($(this).hasClass('navbar-extended-hitbox')) {
    var navbarHeight = $(this).outerHeight(true);
  } else {
    var navbarHeight = $(this).outerHeight();
  }

  if (!($(this).hasClass('navbar-nohitbox'))) {
    $('<div class="navbar-hitbox"></div>').insertAfter(this);
    $('.navbar-hitbox').height(navbarHeight);
  }
})

// Scroll distance mod

$('.scroll-class-sdet').each(function(index) {
  var mainMod = $(this)
  var distanceMod = parseInt(mainMod.attr("sdet-dist"))
  var distanceClassesAdd = mainMod.attr("sdet-add")
  var distanceClassesRemove = mainMod.attr("sdet-remove")

  window.onscroll = function() {
    if (window.pageYOffset > distanceMod) {
      mainMod.addClass(distanceClassesAdd)

      mainMod.removeClass(distanceClassesRemove)
    } else {
      mainMod.removeClass(distanceClassesAdd)

      mainMod.addClass(distanceClassesRemove)
    }
  }

})

// Activator panes

$(document).on('click', '.activator', function() {
  var activatorPane = $(this).closest('.activator-pane')
  var tabActive = '.activator.active'

  if (activatorPane.find(tabActive).length == 0) {
    $(this).addClass('active')
  } else {
    activatorPane.find(tabActive).removeClass('active')
    $(this).addClass('active')
  }
})

// Tab panes

$(document).on('click', '.tab-selector', function() {
  var paneActive = $(this).attr('pane')
  var navigation = $(this).closest('.tab-navigation')
  var panes = $(document).find('.tab-pane[tab-name="' + $(this).attr('tab-name') + '"]')

  panes.find('#'+paneActive).closest('.tab-pane').find('.tab-item.active').removeClass('active');
  panes.find('#'+paneActive).addClass('active');
})

$(document).on('mouseover', '.tab-selector.tab-hover', function() {
  var paneActive = $(this).attr('pane')
  var navigation = $(this).closest('.tab-navigation')
  var panes = navigation.parent().find('.tab-pane')

  panes.find('.tab-item.active').removeClass('active');
  panes.find('#'+paneActive).addClass('active');
})

// Button Hover Effects


$('.btn-hoverglow').each(function(index) {
  $(this).append('<div class="btn-glow-object"></div>')
})

$(".btn-hoverglow").hover(
  function () { $(this).addClass('hover'); },
  function () { $(this).removeClass('hover'); }
);


$(document).on('mouseover', '.btn-hoverglow.hover', function() {

  $('.btn-hoverglow').mousemove(function(e) {
    var parentOffset = $(this).parent().offset();
    var glowObject = $(this).find('.btn-glow-object')
    glowObject.offset({
      left: e.pageX - (glowObject.width() / 2),
      top: e.pageY - (glowObject.height() / 2)
    }, "fast");
    /*glowObject.css({
      'left': e.pageX/2 - (glowObject.width() / 2),
      'top': (e.pageY - parentOffset.top - ( $(this).height()) * 2 ) - (glowObject.height() / 2)
    });*/
  })
})

// On hover add active class

$(".active-toggler").hover(
  function () { $(this).addClass('active'); },
  function () { $(this).removeClass('active'); }
);

// slideshow

$.fn.renderSlideshow = function() {
  if ($(this).hasClass('hydro-slideshow') && (!($(this).hasClass('h-slideshow-rendered')))) {
    slides = $(this).find('.h-slides').children();
    slideshow = $(this)
    if (slideshow.hasClass('h-slide-ball-nav')) {
      if (slideshow.hasClass('h-slide-custom-nodetag')) {
        $(this).append('<slide-navigation class="navigation"></slide-navigation>');
      } else {
        $(this).append('<div class="navigation"></div>');
      }
      slides.each(function(index) {
        activeClass = ""
        if ($(this).hasClass('active')) {
          activeClass = " active"
        }
        if (slideshow.hasClass('h-slide-custom-nodetag')) {
          slideshow.find('.navigation').append('<slide-nav-orb class="h-slide-nav-orb'+activeClass+'"></slide-nav-orb>');
        } else {
          slideshow.find('.navigation').append('<div class="h-slide-nav-orb'+activeClass+'"></div>');
        }
      })
    }
    if (slideshow.find('.h-slide.active').length <= 0) {
      slideshow.find('.h-slide').first().addClass('active')
      slideshow.find('.h-slide-nav-orb').first().addClass('active')
    }
    slideshow.addClass('h-slideshow-rendered')
  } else {
    try {
      throw new Error('This element is not a .hydro-slideshow, you can only render a slideshow with a .hydro-slideshow element!')
    } catch (e) {
      console.error(e.name + ': ' + e.message)
    }
  }

  return false;

}

$(document).on('click', '.hydro-slideshow', function() {
  activeSlide = $(this).find('.h-slide.active').first();
  activeBall = $(this).find('.h-slide-nav-orb.active').first();


  if ($(this).hasClass('h-slide-ball-nav')) {
    nextOrb = activeBall.next()
    if (nextOrb.length <= 0) {
      nextOrb = $(this).find('.h-slide-nav-orb').first();
    }

    activeBall.removeClass('active')
    nextOrb.addClass('active')
  }

  nextSlide = activeSlide.next()
  if (nextSlide.length <= 0) {
    nextSlide = $(this).find('.h-slide').first();
  }

  activeSlide.removeClass('active')
  nextSlide.addClass('active')
});

$(document).on('click', '.h-slide-nav-orb', function() {
  event.stopPropagation();

  activeSlide = $(this).closest('.hydro-slideshow').find('.h-slide.active');
  activeBall = $(this).closest('.navigation').find('.h-slide-nav-orb.active').first();

  activeSlide.removeClass('active');
  activeBall.removeClass('active');

  newIndex = $(this).index() - 1;

  newBall = $('.h-slide-nav-orb').eq(newIndex);
  newSlide = $('.h-slide').eq(newIndex);

  newBall.addClass('active');
  newSlide.addClass('active');
});

$('.hydro-slideshow').each(function(index) {
  $(this).renderSlideshow();
})

// Table

$(document).on("click", ".render-table th", function() {
  indexVal = $(this).index() + 1
  console.log(indexVal)

  $(".render-table th").removeClass('active')
  $('.render-table tr td').removeClass('active')

  $(this).addClass('active')
  $('.render-table tr td:nth-of-type('+indexVal+')').addClass('active')

  n = $(this).index()

  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
});

$("#table1searcher").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $("table[table-search-id='"+$(this).attr('id')+"'] tr").filter(function() {
    if ($(this).find('th').length <= 0) {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    }
  })
})


// Tag manager

$.fn.getTags = function() {
  dataSet = {}
  if ($(this).hasClass('tag-manager')) {
    $(this).children('.tag').each(function(index) {
      dataSet[index] = [
        value = $.trim($(this).attr('value')),
        text = $.trim($(this).text())
      ]
      if (!($.trim($(this).attr('value')) == undefined)) {
        dataSet[index] = [
          value = $.trim($(this).attr('value'))
        ]
      }
    })
  } else {
    try {
      throw new Error('This element is not a .tag-manager, you can only return tags from a tag manager!')
    } catch (e) {
      console.error(e.name + ': ' + e.message)
    }
  }

  return dataSet;

}

$.fn.clearTagDuplicates = function() {
  var duplicate = {};
  $(this).children('.tag').each(function() {
    var txt = $.trim($(this).text());
    if (duplicate[txt]) {
      $(this).remove();
    } else{
      duplicate[txt] = true;
    }
  });
}

$('.tag-manager').clearTagDuplicates();

$('.tag-manager').on('keydown', '.new-tag', function(e) {
  if(e.keyCode == 13) {
    e.preventDefault();
    $(this).addClass('tag');
    $(this).removeClass('new-tag');
    $(this).append('<i data-feather="x" class="f-icon f-xsm close f-stroke-2"></i>');
    $(this).closest('.tag-manager').getTags();
    $(this).closest('.tag-manager').append('<span class="new-tag"></span>');
    $('.new-tag').attr('contenteditable', 'true')
    $('.new-tag').focus()
    $(this).closest('.tag-manager').clearTagDuplicates();
  }
	feather.replace()
})

$('.tag-manager').on('keydown', '.tag', function(e) {
  if(e.keyCode == 13) {
    e.preventDefault();
  }
})

$('.tag-manager').on('click', '.close', function() {
  $(this).closest('.tag').remove();
})

$('.tag-manager .new-tag, .tag-manager .tag').each(function() {
  $(this).attr('contenteditable', 'true')
})

$('.tag-manager').on('click', function() {
  $(this).clearTagDuplicates();
})

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

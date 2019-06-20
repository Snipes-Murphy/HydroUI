// Modals

$(document).on("click", "#btn-modal", function() {
  $(this).closest(".modal-wrapper").find("#modal").addClass("visability");
  $(this).closest(".modal-wrapper").find(".overlay").addClass("visability");
})

$(document).on("click", ".overlay", function() {
  $(this).closest(".modal-wrapper").find("#modal").removeClass("visability");
  $(this).closest(".modal-wrapper").find(".overlay").removeClass("visability");
})

$(document).on("click", "#close-btn", function() {
  $(this).closest(".modal-wrapper").find("#modal").removeClass("visability");
  $(this).closest(".modal-wrapper").find(".overlay").removeClass("visability");
})

$(document).on("click", "#close-modal", function() {
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

// Radio/Checkboxes

$("input.form-radio-button, input.form-check-input").each(function(index) {
  if ($(this).is(':checked')) {
    $(this).closest(".form-check-label").addClass("form-check-active");
    console.log("Check Box change")
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
console.log("Accordion Progress False")

$(document).on('click', '.card-accordion-heading', function(index) {
  var accordionBtn = $(this)
  var accordionContent = $(this).closest('.card-accordion').find('.card-accordion-content')
  var accordionDeck = $(this).closest('.card-accordion-content').find('.card-accordion-content')

  if (inProgress == false) {
    inProgress = true;
    console.log("Progress True")
    if (!(accordionDeck.hasClass("loading") || accordionDeck.hasClass("unloading") || accordionContent.hasClass("loading") || accordionContent.hasClass("unloading"))) {

      if (accordionContent.hasClass("active")) { // Accordion Closing
        accordionBtn.closest('.deck.card-accordion-radio').find('.active').closest('.card.card-accordion').find('.card-accordion-icon-flip').css('transform', 'translateY(-50%)')
        accordionBtn.find('.card-accordion-icon-flip').css('transform', 'translateY(-50%)')
        accordionContent.removeClass("active");

        var heightCalc = $(this).closest('.card-accordion').find('.card-accordion-content').css('height', 'auto').height();

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

        var heightCalc = $(this).closest('.card-accordion').find('.card-accordion-content').css('height', 'auto').innerHeight();

        accordionBtn.closest('.deck.card-accordion-radio').find('.active').closest('.card.card-accordion').find('.card-accordion-icon-flip').css('transform', 'translateY(-50%)')
        accordionBtn.find('.card-accordion-icon-flip').css('transform', 'rotate(180deg) translateY(50%)')

        accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.active').addClass("unloading")
        accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.active.unloading').height(heightCalc);
        accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.active.unloading').removeClass('active')

        window.setTimeout(function() {
          accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.unloading').removeAttr("style");
          accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.unloading').removeClass("unloading");
        }, 0);

        accordionContent.innerHeight(0);
        accordionContent.innerHeight(heightCalc + 20);
        accordionContent.addClass("loading")

        window.setTimeout(function() {
          accordionBtn.closest('.deck.card-accordion-radio').find('.card-accordion-content.active').removeClass('active');
          accordionContent.addClass("active");
          accordionContent.removeClass("loading");
          accordionContent.removeAttr("style");
          inProgress = false;
          console.log("Progress false opeing")
        }, 300);

      }
    }

  }
})

// Navbar

$('.navbar-fixed').each(function(index) {
  var navbarHeight = $(this).height()

  if (!($(this).hasClass('navbar-nohitbox'))) {
    $('<div class="navbar-hitbox"></div>').insertAfter(this);
    $('.navbar-hitbox').height(navbarHeight);
  }
})

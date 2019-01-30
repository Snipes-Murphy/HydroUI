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

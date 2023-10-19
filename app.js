$("#rating-input").on("change", function (e) {
  let val = $("#rating-input").val();
  let min = 0;
  let max = 10;
  if (!isNaN(val)) {
    if (val > max) {
      $("#rating-input").val("10");
    }
    if (val < min) {
      $("#rating-input").val("0");
    }
  }
});

$("#add-movie").on("click", function (e) {
  e.preventDefault();
  if ($("#title-input").val().length > 2 && !isNaN($("#rating-input").val())) {
    let $newMovie = $("<li id='newMovie'>").text(
      `Movie: ${$("#title-input").val()}, Rating: ${$("#rating-input").val()}, `
    );
    if ($("#rating-input").val() === "2" || $("#rating-input").val() === "1") {
      $newMovie.append($("<span>").text("⭐ "));
    } else if (
      $("#rating-input").val() === "3" ||
      $("#rating-input").val() === "4"
    ) {
      $newMovie.append($("<span>").text("⭐⭐ "));
    } else if (
      $("#rating-input").val() === "5" ||
      $("#rating-input").val() === "6"
    ) {
      $newMovie.append($("<span>").text("⭐⭐⭐ "));
    } else if (
      $("#rating-input").val() === "7" ||
      $("#rating-input").val() === "8"
    ) {
      $newMovie.append($("<span>").text("⭐⭐⭐⭐ "));
    } else if (
      $("#rating-input").val() === "9" ||
      $("#rating-input").val() === "10"
    ) {
      $newMovie.append($("<span>").text("⭐⭐⭐⭐⭐ "));
    } else {
      $newMovie.append($("<span>").text("💩💩💩💩💩 "));
    }
    $newMovie.append($("<button id='remove'>").text("Remove Movie"));
    $("#rating-list").append($newMovie);
    $("#title-input").val("");
    $("#rating-input").val("");
  }
});

$("#rating-list").on("click", "#remove", function (e) {
  e.preventDefault();
  $(this).parent().remove();
});

$(".click-image").on("click", function () {
  $(".card-outer").toggleClass("d-none");
});
$("#myBtn").click(function () {
  var inp = $(".card-main-number");
  var err = $(".error-msg");
  const inpVal = inp.val();
  console.log(inpVal.length);
  if (inpVal.length > 12 && inpVal.length < 19) {
    console.log("valid");
  } else {
    inp.addClass("error");
    err.toggleClass("d-none");
  }
});

$(".card-main-number").change(function (e) {
  console.log(e);
});

$(document).ready(function () {
  $(".popover-btn").hover(function () {
    $(".tooltip-custom").toggleClass("d-none");
  });
});

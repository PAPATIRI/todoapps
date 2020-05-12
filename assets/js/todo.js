$("li").click(function () {
  // !EASY WAY
  $(this).toggleClass("completed");

  //   !REPOT WAY
  //   if ($(this).css("color") === "rgb(255, 0, 0)") {
  //     $(this).css({
  //       color: "black",
  //       textDecoration: "none",
  //     });
  //   } else {
  //     //   todo ubah ke warna merah
  //     $(this).css({
  //       color: "red",
  //       textDecoration: "line-through",
  //     });
  //   }
});

//todo CLICK ON SYMBOL
$("span").click(function (event) {
  // todo membuat hilangnya daftar todo dari tampilan dengan jeda 0.5s
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  // todo agar yang di klik hanya objek tersrbut, tidak parent nya juga
  event.stopPropagation();
});

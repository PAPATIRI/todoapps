// todo memberikan class dari css ke element html
// todo menggunakan on agar semua efek kode diberikan pada li yang sudah ada atau li yang baru ditambahkan
$("li").on("click", "li", function () {
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
$("ul").on("click", "span", function (event) {
  // todo membuat hilangnya daftar todo dari tampilan dengan jeda 0.5s
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  // todo agar yang di klik hanya objek tersrbut, tidak parent nya juga
  event.stopPropagation();
});

// todo menambah daftar list
$("input[type = 'text']").keypress(function (event) {
  // kondisi ketika menekan enter
  if (event.which === 13) {
    //   menangkap new todo ke list
    let todoText = $(this).val();
    //  membuak kolom form kosong lagi
    $(this).val("");
    // membuat li baru pada html dan tambahkan ke ul
    $("ul").append("<li><span>X</span> " + todoText + "</li>");
  }
});

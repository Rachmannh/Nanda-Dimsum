function init() {
  var count = 5;
  var counter = setInterval(timer, 500);
  function timer() {
    count = count - 1;
    if (count == 0) {
      Swal.fire({
        title: "Selamat Datang di Website Nanda Dimsum",
        confirmButtonText: "Okay",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Jika ada pertanyaan lebih lanjut harap chat admin");
        }
      });
      return;
    }
  }
}
window.onload = init;

function init() {
  var count = 5;
  var counter = setInterval(timer, 700);
  function timer() {
    count = count - 1;
    if (count == 0) {
      Swal.fire({
        title: "Selamat datang di website Nanda Dimsum",
        confirmButtonText: "Okay",
      });
      return;
    }
  }
}
window.onload = init;

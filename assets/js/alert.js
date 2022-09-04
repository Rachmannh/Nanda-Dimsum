function init() {
  var count = 5;
  var counter = setInterval(timer, 700);
  function timer() {
    count = count - 1;
    if (count == 0) {
      Swal.fire({
        title:
          "Mohon maaf atas ketidaknyamanan nya, saat ini website sedang dalam masa pengembangan.",
        confirmButtonText: "Baiklah",
      });
      return;
    }
  }
}
window.onload = init;

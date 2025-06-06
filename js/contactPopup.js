document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.getElementById("contact-button");
  const closeButton = document.getElementById("close-popup");
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("contact-popup");

  contactButton.addEventListener("click", function (e) {
    e.preventDefault();
    overlay.style.display = "block";
    popup.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    overlay.style.display = "none";
    popup.style.display = "none";
  });

  overlay.addEventListener("click", function () {
    overlay.style.display = "none";
    popup.style.display = "none";
  });
});

function scroll(direction, element) {
  const scrollAmount = 200;

  if (element) {
    if (direction === "left") {
      element.scrollLeft -= scrollAmount;
    } else if (direction === "right") {
      element.scrollLeft += scrollAmount;
    }
  }
}

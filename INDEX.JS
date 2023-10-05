const details = document.querySelectorAll("details");
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

const controls = document.querySelectorAll(".tab-control");
let faqImg = document.querySelector(".imgs");

// start first img
faqImg.style.background = `url(${imgs[0]}) no-repeat center center`;

// add event listener for all controls
for (let i = 0; i < controls.length; i++) {
  controls[i].addEventListener("click", () => {
    faqImg.style.background = `url(${imgs[i]}) no-repeat center center`;
  });
}
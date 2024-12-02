const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// testimonials variables
const testimonialsItem = $("div[data-testimonials-item]");
const modalContainer = $('div[data-modal-container]');
const modalCloseBtn = $("button[data-modal-close-btn]");
const overlay = $("div[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
function testimonialsModalShowFunc() {
  modalContainer.addClass("active");
  overlay.addClass("active");
}

function testimonialsModalHideFunc() {
    modalContainer.removeClass("active");
    overlay.removeClass("active");
  }

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalShowFunc();

  });

}
modalCloseBtn[0].addEventListener("click", testimonialsModalHideFunc);
overlay[0].addEventListener("click", testimonialsModalHideFunc);
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



// Onclick event for portfolio filter (large screen)

let lastClickedBtn = $(".portfolio-filter-btn.active"); 
// when we back in portfolio last tab should be open 
//ex: if last we open web design page from portfolio and go to the resume and again click on portfolio its show web development on all.

function PortfolioFilter($this){
    let selectedValue = $this.innerText.toLowerCase();
    selectedValue.innerText=$this.innerText;
    filterFunc(selectedValue);

    $(".portfolio-filter-btn.active").removeClass("active");
    $($this).addClass("active");
    //lastClickedBtn.removeClass("active");
    //$($this).classList.add("active");
    lastClickedBtn = $(".portfolio-filter-btn.active")

}

// portfolio filter (mobile screen)
const select = document.querySelector("[data-select]");
select.addEventListener("click", function () { elementToggleFunc(this); });
const selectValue = $(".filter-select-box .select-value");

function PortfolioFilter1($this){
    let selectedValue = $this.innerText.toLowerCase();
    selectValue.innerText=$this.innerText;
    filterFunc(selectedValue);
    elementToggleFunc(select);
}




// filter variables
function filterFunc(selectedValue) {
  $(".project-item").each(function(){
    if (selectedValue === "all") {
        $(this).addClass("active");
      } 
      else if (selectedValue === $(this).attr("data-category")) {
        $(this).addClass("active");
      } 
      else {
        $(this).removeClass("active");
      }
  })
}


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

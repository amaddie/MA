(function () {


  var menuButton = document.querySelector(".menu-btn");
  var nav = document.getElementById("site-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      var isOpen = menuButton.getAttribute("aria-expanded") === "true";

      menuButton.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("nav--closed");
      nav.setAttribute("aria-hidden", String(isOpen));
    });
  }


  var navLinks = document.querySelectorAll(".nav__link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach(function (l) {
        l.classList.remove("nav__link--active");
      });
      link.classList.add("nav__link--active");
    });
  });


  function togglePanel(button, panel) {
    var isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    panel.classList.toggle("panel--closed", isOpen);
    panel.setAttribute("aria-hidden", String(isOpen));
  }

 
  var detailButtons = document.querySelectorAll(".js-details");

  detailButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var card = button.closest(".card");
      if (!card) return;

      var panel = card.querySelector(".panel");
      if (!panel) return;

      togglePanel(button, panel);
    });
  });


  var flipButtons = document.querySelectorAll(".js-flip");

  flipButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var card = button.closest(".card");
      if (!card) return;

      var back = card.querySelector(".flip--back");
      if (!back) return;

      var isHidden = back.classList.contains("flip--visible");

      back.classList.toggle("flip--visible");
      back.setAttribute("aria-hidden", String(isHidden));
      button.setAttribute("aria-expanded", String(!isHidden));
    });
  });


  var faqButtons = document.querySelectorAll(".js-faq");

  faqButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var answer = button.nextElementSibling;
      if (!answer) return;

      togglePanel(button, answer);
    });
  });


  var form = document.querySelector(".form");

  if (form) {
    var status = form.querySelector(".form__status");
    var emailInput = form.querySelector("#email");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!emailInput || !status) return;

      if (emailInput.value.trim() === "") {
        status.textContent = "Please enter an email.";
        status.classList.remove("is-success");
        status.classList.add("is-error");
        emailInput.focus();
        return;
      }

      status.textContent = "Message sent (demo).";
      status.classList.remove("is-error");
      status.classList.add("is-success");

      form.reset();
    });
  }


  var filterButtons = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".card");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {

      
      filterButtons.forEach(function (btn) {
        btn.classList.remove("filter-btn--active");
      });
      button.classList.add("filter-btn--active");

     
      var filterValue = button.getAttribute("data-filter");

      
      cards.forEach(function (card) {
        if (filterValue === "all") {
          card.style.display = "";
        } else {
          var category = card.getAttribute("data-category");
          card.style.display = category === filterValue ? "" : "none";
        }
      });
    });
  });

})();
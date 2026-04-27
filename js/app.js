(function () {
  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.getElementById("site-nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var isOpen = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("nav--closed"); 
    });
  }
let links = document.querySelectorAll(".nav__link");
links.forEach(function (link) {
link.addEventListener("click", () => {
links.forEach(function (l) { l.classList.remove("nav__link--active"); });
link.classList.add("nav__link--active");
});
});

  var detailButtons = document.querySelectorAll(".js-details");
detailButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var card = btn.closest(".card");
    if (!card) return;

    var panel = card.querySelector(".panel");
    var isOpen = btn.getAttribute("aria-expanded") === "true";

    btn.setAttribute("aria-expanded", String(!isOpen));

    panel.classList.toggle("panel--closed", isOpen);
    panel.setAttribute("aria-hidden", String(isOpen));
  });
});

  var flipButtons = document.querySelectorAll(".js-flip");
  flipButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".card");
      if (!card) return;

      var back = card.querySelector(".flip--back");
     
      var isHidden = back.style.display === "" || back.style.display === "none";
      back.style.display = isHidden ? "block" : "none";
      back.setAttribute("aria-hidden", isHidden ? "false" : "true");
      btn.setAttribute("aria-expanded", isHidden ? "true" : "false");
    });
  });

 
  var faqButtons = document.querySelectorAll(".js-faq");
  faqButtons.forEach(function (faqBtn) {
    qBtn.addEventListener("click", function () {
      var answer = qBtn.nextElementSibling;
      if (!answer) return;

      var open = qBtn.getAttribute("aria-expanded") === "true";
      qBtn.setAttribute("aria-expanded", String(!open));
      answer.classList.toggle("panel--closed");
      answer.setAttribute("aria-hidden", open ? "true" : "false");
    });
  });

  
  var form = document.querySelector(".form");
  if (form) {
    var status = form.querySelector(".form__status");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var email = form.querySelector("#email");
      if (!email || !status) return;

      if (email.value.trim() === "") {
        status.textContent = "Please enter an email.";
        status.classList.remove("is-success");
        status.classList.add("is-error"); 
        email.focus();
        return;
      }

      status.textContent = "Message sent (demo).";
      status.classList.remove("is-error");
      status.classList.add("is-success"); 
      form.reset();
    });
  }

  var filterBtns = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".card");
  filterBtns.forEach(function (filterBtn) {
    b.addEventListener("click", function () {
     
      filterBtns.forEach(function (x) {
        x.classList.remove("filter-btn--active");
      });
      b.classList.add("filter-btn--active");

      var value = b.getAttribute("data-filter");
     
      cards.forEach(function (card) {
        if (value === "all") {
          c.style.display = "";
        } else {
        
          c.style.display =
            c.getAttribute("data-category") === value ? "" : "none";
        }
      });
    });
  });
})();

/* Project 3 starter: intentionally imperfect, but functional.
   Your job is to improve clarity, state handling, and accessibility. */

(function () {
  // MENU TOGGLE
  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.getElementById("site-nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var isOpen = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("nav--closed"); // note: toggles regardless of isOpen
    });
  }
let links = document.querySelectorAll(".nav__link");
links.forEach(function (link) {
link.addEventListener("click", () => {
links.forEach(function (l) { l.classList.remove("nav__link--active"); });
link.classList.add("nav__link--active");
});
});

  // CARD DETAILS PANELS
  var detailButtons = document.querySelectorAll(".js-details");
detailButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var card = btn.closest(".card");
    if (!card) return;

    var panel = card.querySelector(".panel");
    var isOpen = btn.getAttribute("aria-expanded") === "true";

    // toggle aria state
    btn.setAttribute("aria-expanded", String(!isOpen));

    // toggle panel state
    panel.classList.toggle("panel--closed", isOpen);
    panel.setAttribute("aria-hidden", String(isOpen));
  });
});

  // FLIP CARD (back view)
  var flipButtons = document.querySelectorAll(".js-flip");
  flipButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".card");
      if (!card) return;

      var back = card.querySelector(".flip--back");
      // intentionally simple: doesn't hide panel if open
      var isHidden = back.style.display === "" || back.style.display === "none";
      back.style.display = isHidden ? "block" : "none";
      back.setAttribute("aria-hidden", isHidden ? "false" : "true");
      btn.setAttribute("aria-expanded", isHidden ? "true" : "false");
    });
  });

  // FAQ TOGGLES (reuses panel class, but not DRY)
  var faqButtons = document.querySelectorAll(".js-faq");
  faqButtons.forEach(function (qBtn) {
    qBtn.addEventListener("click", function () {
      var answer = qBtn.nextElementSibling;
      if (!answer) return;

      var open = qBtn.getAttribute("aria-expanded") === "true";
      qBtn.setAttribute("aria-expanded", String(!open));
      answer.classList.toggle("panel--closed");
      answer.setAttribute("aria-hidden", open ? "true" : "false");
    });
  });

  // FORM FEEDBACK (intentionally naive)
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
        status.classList.add("is-error"); // style not defined on purpose
        email.focus();
        return;
      }

      status.textContent = "Message sent (demo).";
      status.classList.remove("is-error");
      status.classList.add("is-success"); // style not defined on purpose
      form.reset();
    });
  }

  // OPTIONAL FILTERS (present but incomplete on purpose)
  // Students may finish this as an intervention or extension
  var filterBtns = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".card");
  filterBtns.forEach(function (b) {
    b.addEventListener("click", function () {
      // set active state
      filterBtns.forEach(function (x) {
        x.classList.remove("filter-btn--active");
      });
      b.classList.add("filter-btn--active");

      var value = b.getAttribute("data-filter");
      // TODO: filtering logic intentionally left minimal/buggy
      cards.forEach(function (c) {
        if (value === "all") {
          c.style.display = "";
        } else {
          // BUG: mismatch between data-category values and filter values could occur
          c.style.display =
            c.getAttribute("data-category") === value ? "" : "none";
        }
      });
    });
  });
})();

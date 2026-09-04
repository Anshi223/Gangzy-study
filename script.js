/* =================================
   GANGZY STUDY V2
   Main JavaScript
================================= */


/* ================================
   MOBILE MENU
================================ */

function toggleMenu() {

  const navbar = document.getElementById("navbar");

  navbar.classList.toggle("active");

}


/* ================================
   CLOSE MOBILE MENU AFTER CLICK
================================ */

document.addEventListener("DOMContentLoaded", function () {

  const navLinks = document.querySelectorAll(".navbar a");
  const navbar = document.getElementById("navbar");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      navbar.classList.remove("active");

    });

  });

});


/* ================================
   SEARCH SYSTEM
================================ */

function searchContent() {

  const input =
    document
      .getElementById("searchInput")
      .value
      .toLowerCase()
      .trim();

  const items =
    document.querySelectorAll(".searchable");

  const message =
    document.getElementById("searchMessage");


  /* Show everything when search is empty */

  if (input === "") {

    items.forEach(function (item) {

      item.classList.remove("search-hidden");

    });

    message.textContent = "";

    return;

  }


  let found = 0;


  /* Search through cards */

  items.forEach(function (item) {

    const text =
      item.textContent.toLowerCase();


    if (text.includes(input)) {

      item.classList.remove("search-hidden");

      found++;

    } else {

      item.classList.add("search-hidden");

    }

  });


  /* Search result message */

  if (found === 0) {

    message.textContent =
      "No matching resources found.";

  } else {

    message.textContent =
      found + " resource(s) found.";

  }

}

function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("show");
}


function searchContent() {

  const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase()
    .trim();

  const cards = document.querySelectorAll(".searchable");
  const message = document.getElementById("searchMessage");

  if (input === "") {

    cards.forEach(card => {
      card.style.display = "";
    });

    message.textContent = "";
    return;
  }

  let found = 0;

  cards.forEach(card => {

    const text = card.textContent.toLowerCase();

    if (text.includes(input)) {
      card.style.display = "";
      found++;
    } else {
      card.style.display = "none";
    }

  });


  if (found === 0) {

    message.textContent =
      "No matching notes found yet.";

  } else {

    message.textContent =
      found + " resource(s) found.";

  }
}

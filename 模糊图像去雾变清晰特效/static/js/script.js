const covers = document.querySelectorAll(".cover");

covers.forEach((cover, i) => {
  cover.addEventListener("mouseover", function (e) {
    e.preventDefault();
    document
      .querySelectorAll(".cover")
      .forEach((c) => c.setAttribute("class", `cover`));
    cover.classList.add("active");
  });
});
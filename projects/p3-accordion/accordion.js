const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {

    const spanEl = header.querySelector("span");
    if (spanEl.innerText === "+") 
        spanEl.innerText = "-";
    else 
        spanEl.innerText = "+";

    const content = header.nextElementSibling;

    content.classList.toggle("show");
  });
});

// Select both divs
const div_click = document.querySelector(".container_click");
const div_hover = document.querySelector(".container_hover");

// --- LEFT BOX (GIT) ---
div_click.innerText = "😺GIT";
div_click.style.backgroundColor = "black";
div_click.style.color = "white";
div_click.style.fontSize = "80px";
div_click.style.fontWeight = "bold";
div_click.style.letterSpacing = "2px";
div_click.style.textTransform = "uppercase";
div_click.style.fontFamily = "Arial, Helvetica, sans-serif";
div_click.style.cursor = "pointer";

// --- RIGHT BOX (HUB) ---
div_hover.innerText = "HUB";
div_hover.style.backgroundColor = "tomato";
div_hover.style.color = "white";
div_hover.style.fontSize = "80px";
div_hover.style.fontWeight = "bold";
div_hover.style.letterSpacing = "0px";
div_hover.style.textTransform = "uppercase";
div_hover.style.fontFamily = "Arial, Helvetica, sans-serif";
div_hover.style.cursor = "pointer";


div_click.addEventListener("click", () => {
  console.log("div is clicked");

  const currentBg = div_click.style.backgroundColor;
  const currentColor = div_click.style.color;

  div_click.style.backgroundColor = currentColor;
  div_click.style.color = currentBg;
});

div_hover.addEventListener("mouseenter", () => {
  console.log("div is hovered");

  const currentBg = div_hover.style.backgroundColor;
  const currentColor = div_hover.style.color;

  div_hover.style.backgroundColor = currentColor;
  div_hover.style.color = currentBg;
});

div_hover.addEventListener("mouseout", () => {
  console.log("div is reset");

  div_hover.style.backgroundColor = "tomato";
  div_hover.style.color = "white";
});

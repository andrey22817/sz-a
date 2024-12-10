const columns = document.querySelectorAll(".column-startup-tips");
let currentIndex = 0;

columns[currentIndex].classList.add("active");

const updateActiveBlock = () => {
  columns.forEach((col, index) => {
    col.classList.remove("active");
    if (index === currentIndex) {
      col.classList.add("active");
    }
  });

  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  prevButton.classList.remove("active");
  nextButton.classList.remove("active");

  if (currentIndex === 0) {
    nextButton.classList.add("active");
  } else if (currentIndex === columns.length - 1) {
    prevButton.classList.add("active");
  }
};

document.getElementById("prev-button").addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? columns.length - 1 : currentIndex - 1;
  updateActiveBlock();
});

document.getElementById("next-button").addEventListener("click", () => {
  currentIndex = currentIndex === columns.length - 1 ? 0 : currentIndex + 1;
  updateActiveBlock();
});

document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.classList.add("hover");
  });

  button.addEventListener("mouseout", () => {
    button.classList.remove("hover");
  });

  button.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-button")
      .forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

const blocks = document.querySelectorAll(".category1-business");

let activeColor = "rgba(255, 208, 80, 1)";

blocks.forEach((block) => {
  block.addEventListener("mouseenter", () => {
    block.style.backgroundColor = activeColor;
  });

  block.addEventListener("mouseleave", () => {
    if (!block.classList.contains("active")) {
      block.style.backgroundColor = "";
    }
  });

  block.addEventListener("click", () => {
    blocks.forEach((b) => b.classList.remove("active"));
    blocks.forEach((b) => (b.style.backgroundColor = ""));

    block.classList.add("active");
    block.style.backgroundColor = activeColor;
  });
});

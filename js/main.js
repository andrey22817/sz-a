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

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe",
    location: "New York, USA",
    photo: "img/icon (1).png",
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, pariatur ipsum iste excepturi facilis vero praesentium.",
    name: "Jane Smith",
    location: "Los Angeles, USA",
    photo: "img/Profile picture.png",
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, eveniet eos delectus natus maiores ex soluta pariatur!.",
    name: "Michael Johnson",
    location: "Toronto, Canada",
    photo: "img/business-and-trade 1.png",
  },
];

let currentIndex = 0;

const updateTestimonial = () => {
  const testimonialText = document.getElementById("testimonial-text");
  const authorName = document.getElementById("author-name");
  const authorLocation = document.getElementById("author-location");
  const testimonialPhoto = document.getElementById("testimonial-photo");

  testimonialText.textContent = testimonials[currentIndex].text;
  authorName.textContent = testimonials[currentIndex].name;
  authorLocation.textContent = testimonials[currentIndex].location;
  testimonialPhoto.src = testimonials[currentIndex].photo;
};

document.getElementById("prev-button").addEventListener("click", () => {
  currentIndex =
    currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  updateTestimonial();
});

document.getElementById("next-button").addEventListener("click", () => {
  currentIndex =
    currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
  updateTestimonial();
});

updateTestimonial();

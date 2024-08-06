// const swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn3");
const btn3 = document.querySelector(".btn4");

const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");

const userWrapper = document.querySelector(".users-wrapper");

btn1.addEventListener("click", () => {
  const div = document.createElement("div");
  const div2 = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("h2");
  const description = document.createElement("p");

  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwo8eJYb8h6_V7THlADVmoSbVkJQw6k08Liw&s";

  description.textContent = input.value;
  name.textContent = "Guest";
  div2.append(img, name);
  img.classList.add("w-[30px]");
  div2.classList.add("flex", "items-center", "gap-5");
  userWrapper.appendChild(div);
  div.append(div2, description);
  div.classList.add(
    "bg-white",
    "w-[200px]",
    "min-h-[100px]",
    "rounded-lg",
    "px-5"
  );
  description.classList.add("w-full");
});

// AOS
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

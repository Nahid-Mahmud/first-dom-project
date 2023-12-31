"use strict";

document.getElementById("heading").style.cssText =
  " text-transform: uppercase;";
const h1CustomCssClass = document.getElementById("heading");
h1CustomCssClass.classList.add(
  "sm:text-sm",
  "lg:text-5xl",
  "md:text-4xl",
  "text-center",
  "md:my-8",
  "my-10",
  "mx-2",
  "text-white",
  "leading-8",
  "md:leading-[5rem]",
  "lg:leading-[5rem]"
);

// Function for Yellow color

document.getElementById("yellow-btn").onclick = function () {
  document.getElementById("yellow").classList.remove("bg-primary");
  document.getElementById("yellow").classList.remove("text-primary-content");
  document.getElementById("yellow").style.backgroundColor = "yellow";
  document.getElementById("yellow").classList.add("text-black");
};

// Function For Green Color

document.getElementById("green-btn").onclick = function () {
  document.getElementById("green").classList.remove("bg-primary");
  document.getElementById("green").classList.remove("text-primary-content");
  document.getElementById("green").style.backgroundColor = "green";
  document.getElementById("green").classList.add("text-black");
};

//Function for Red Color

document.getElementById("red-btn").onclick = function () {
  document.getElementById("red").classList.remove("bg-primary");
  document.getElementById("red").classList.remove("text-primary-content");
  document.getElementById("red").style.backgroundColor = "red";
  document.getElementById("red").classList.add("text-black");
};

//Function for Blue Color

document.getElementById("blue-btn").onclick = function () {
  document.getElementById("blue").classList.remove("bg-primary");
  document.getElementById("blue").classList.remove("text-primary-content");
  document.getElementById("blue").style.backgroundColor = "blue";
  document.getElementById("blue").classList.add("text-white");
};

document
  .querySelector("#dark-white-mode")
  .addEventListener("click", function () {
    document.getElementById("html").removeAttribute("data-theme");
    document.getElementById("html").setAttribute("data-theme", "synthwave");
    document.querySelector("#dark-white-mode").innerText = "SYNTHAVE MODE";
    document.querySelector("#dark-white-mode").classList.add("white-mode");
  });

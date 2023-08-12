"use strict";

document.getElementById("heading").style.cssText =
  " text-transform: uppercase;";
const h1CustomCssClass = document.getElementById("heading");
h1CustomCssClass.classList.add(
  "sm:text-sm",
  "lg:text-5xl",
  "md:text-4xl",
  "text-center",
  "md:my-20",
  "my-10",
  "mx-2",
  "text-white"
);

document.getElementById("yellow-btn").onclick = function () {
  document.getElementById("yellow").classList.remove("bg-primary");
  document.getElementById("yellow").classList.remove("text-primary-content");
  document.getElementById("yellow").style.backgroundColor = "yellow";
  document.getElementById("yellow").classList.add("text-black");
};

document.getElementById("green-btn").onclick = function () {
  document.getElementById("green").classList.remove("bg-primary");
  document.getElementById("green").classList.remove("text-primary-content");
  document.getElementById("green").style.backgroundColor = "green";
  document.getElementById("green").classList.add("text-black");
};

document.getElementById("red-btn").onclick = function () {
  document.getElementById("red").classList.remove("bg-primary");
  document.getElementById("red").classList.remove("text-primary-content");
  document.getElementById("red").style.backgroundColor = "red";
  document.getElementById("red").classList.add("text-black");
};

document.getElementById("blue-btn").onclick = function () {
    document.getElementById("blue").classList.remove("bg-primary");
    document.getElementById("blue").classList.remove("text-primary-content");
    document.getElementById("blue").style.backgroundColor = "blue";
    document.getElementById("blue").classList.add("text-white");
  };

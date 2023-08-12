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
  "mx-2"

);

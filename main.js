import "./style.scss";
import gsap from "gsap";

// #D04D3D - F59580 - C1BB59
const wines = document.querySelectorAll(".wine");
const wine1 = document.querySelector(".wine-1");
const wine2 = document.querySelector(".wine-2");
const wine3 = document.querySelector(".wine-3");
const circle = document.querySelector(".circle");
const glass = document.querySelector(".glass");

const duration = 0.5;

wine1.addEventListener("click", () => {
  if (wine1.classList.contains("active")) {
    activeWineClick();
    return;
  }
  gsap.to(wine1, {
    duration: duration,
    width: 125,
    left: 135,
    rotate: 0,
    marginBottom: 0,
  });
  gsap.to(wine2, {
    duration: duration,
    width: 120,
    left: 288,
    rotate: 0,
  });
  gsap.to(wine3, {
    duration: duration,
    width: 130,
    left: -20,
    rotate: 0,
  });
  gsap.to(".svg-2, .svg-3", {
    duration: duration,
    opacity: 0,
  });
  gsap.to(".svg-1", {
    duration: duration,
    opacity: 1,
  });
  gsap.to(circle, {
    duration: duration,
    backgroundColor: "#D04D3D",
  });
  wines.forEach((wine) => {
    wine.classList.remove("active");
  });
  wine1.classList.add("active");
});

wine2.addEventListener("click", () => {
  if (wine2.classList.contains("active")) {
    activeWineClick();
    return;
  }
  gsap.to(wine1, {
    duration: duration,
    width: 90,
    left: 0,
    rotate: -10,
    marginBottom: 20,
  });
  gsap.to(wine2, {
    duration: duration,
    width: 162,
    left: 110,
    rotate: -10,
  });
  gsap.to(wine3, {
    duration: duration,
    width: 130,
    left: 288,
    rotate: 20,
  });
  gsap.to(".svg-1, .svg-3", {
    duration: duration,
    opacity: 0,
  });
  gsap.to(".svg-2", {
    duration: duration,
    opacity: 1,
  });
  gsap.to(circle, {
    duration: duration,
    backgroundColor: "#F59580",
  });
  wines.forEach((wine) => {
    wine.classList.remove("active");
  });
  wine2.classList.add("active");
});

wine3.addEventListener("click", () => {
  if (wine3.classList.contains("active")) {
    activeWineClick();
    return;
  }
  gsap.to(wine1, {
    duration: duration,
    width: 90,
    left: 310,
    rotate: 10,
    marginBottom: 20,
  });
  gsap.to(wine2, {
    duration: duration,
    width: 120,
    left: -20,
    rotate: -20,
  });
  gsap.to(wine3, {
    duration: duration,
    width: 162,
    left: 125,
    rotate: 10,
  });
  gsap.to(".svg-1, .svg-2", {
    duration: duration,
    opacity: 0,
  });
  gsap.to(".svg-3", {
    duration: duration,
    opacity: 1,
  });
  gsap.to(circle, {
    duration: duration,
    backgroundColor: "#C1BB59",
  });
  wines.forEach((wine) => {
    wine.classList.remove("active");
  });
  wine3.classList.add("active");
});

function activeWineClick() {
  const activeWine = document.querySelector(".wine.active");
  const notActiveWine = document.querySelectorAll(".wine:not(.active)");
  gsap.to(glass, {
    y: -300,
    opacity: 1,
    duration: duration,
  });

  gsap.to(activeWine, {
    rotate: 110,
    x: -160,
    y: -180,
    opacity: 1,
    duration: duration,
  });

  notActiveWine.forEach((wine) => {
    gsap.to(wine, {
      opacity: 0,
      display: "none",
      duration: duration,
    });
  });
}

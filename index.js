gsap.to(".circle", {
  x: -300,
  duration: 1,
  repeat: -1,
  yoyo: true,
});

const btnLumos = document.querySelector(".sorts2");
const btnStop = document.querySelector(".sorts3");
btnStop.addEventListener("click", stopAnimation);

const stopAnimation = () => {
  gsap.pause();
};

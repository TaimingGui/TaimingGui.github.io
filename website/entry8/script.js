gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.text');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const firstImage = document.getElementById("first-image");
  const secondImage = document.getElementById("second-image");

  // 切换图片的可见性
  function toggleImages() {
    firstImage.classList.toggle("hidden");
    secondImage.classList.toggle("hidden");
  }
});

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'top 80%', // 调整触发的起始位置
      end: 'bottom 20%', // 调整触发的结束位置
      scrub: true,
    },
  });
});

import gsap from 'gsap';

export const toggleAnimation = (isOpen) => {
  const nav = document.querySelector("header nav");
  const toggleArms = document.querySelectorAll(".toggle_arm");

  const tlToggle = gsap.timeline({ defaults: { ease: "Expo.easeOut" } });

  if (isOpen) {
    tlToggle
      .to(toggleArms[0], { rotate: '35deg',backgroundColor: '#8F7DCC', duration: 0 })
      .to(toggleArms[1], { rotate: '-35deg',backgroundColor: '#8F7DCC', duration: 0 }, "<")

    for (let i = 1; i <= 12; i++) {
      tlToggle.to(nav, {
        [`--panel-bottom-${i}`]: 100,
        duration: 1.25,
      }, `<${i === 1 ? "" : 0.075}`);
    }
  } else {
    // Animation pour fermer la navigation
    tlToggle
      .to(toggleArms[1], { rotate: '0deg',backgroundColor: '#70802B', duration: 0 })
      .to(toggleArms[0], { rotate: '0deg', backgroundColor: '#70802B', duration: 0 }, "<")
      

    for (let i = 12; i >= 1; i--) {
      tlToggle.to(nav, {
        [`--panel-bottom-${i}`]: 0,
        duration: 1.25,
      }, `<${12 - i === 0 ? "" : 0.075}`);
    }
  }

  tlToggle.play();
};


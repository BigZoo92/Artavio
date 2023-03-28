import gsap from 'gsap';

export const toggleAnimation = (isOpen) => {
  const nav = document.querySelector("header nav");
  const titreHeader = document.querySelector("header h4");
  const toggleArms = document.querySelectorAll(".toggle_arm");

  const tlToggle = gsap.timeline({ defaults: { ease: "Expo.easeOut" } });

  if (isOpen) {
    tlToggle
      .to(toggleArms[0], { rotate: '35deg', duration: 0 })
      .to(toggleArms[1], { rotate: '-35deg', duration: 0 }, "<")

    for (let i = 1; i <= 12; i++) {
      tlToggle.to(nav, {
        [`--panel-bottom-${i}`]: 100,
        duration: 1.25,
      }, `<${i === 1 ? "" : 0.075}`);
    }
    tlToggle
        .to(titreHeader, { color: 'white', duration: .75 }, "<-0.5");
  } else {
    // Animation pour fermer la navigation
    tlToggle
      .to(toggleArms[1], { rotate: '0deg', duration: 0 })
      .to(toggleArms[0], { rotate: '0deg', duration: 0 }, "<")
      

    for (let i = 12; i >= 1; i--) {
      tlToggle.to(nav, {
        [`--panel-bottom-${i}`]: 0,
        duration: 1.25,
      }, `<${12 - i === 0 ? "" : 0.075}`);
    }
    tlToggle
        .to(titreHeader, { color: 'black', duration: .75 }, "<-0.2");
  }

  tlToggle.play();
};


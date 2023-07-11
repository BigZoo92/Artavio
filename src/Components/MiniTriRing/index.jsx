import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const MiniTriRing = () => {
  const CanvasRef = useRef(null);
  const arc = Math.PI * 2;

  useEffect(() => {
    let rings = [];
    let renderer = null;
    let scene = null;
    const positions = [
      { x: -5, y: -2 },
      { x: 5, y: -2 },
      { x: 5, y: 2 },
      { x: -5, y: 2 },
      { x: -4, y: -1.15 },
      { x: 4, y: -1.15 },
      { x: -4, y: 1.15 },
      { x: 4, y: 1.15 },
    ];

    const init = () => {
      // Crée la scène
      scene = new THREE.Scene();

      // Crée la caméra
      const camera = new THREE.PerspectiveCamera(
        75,
        CanvasRef.current.clientWidth / CanvasRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // Crée le rendu
      renderer = new THREE.WebGLRenderer({ canvas: CanvasRef.current, alpha: true, antialias: true });
      renderer.setSize(
        CanvasRef.current.clientWidth,
        CanvasRef.current.clientHeight
      );
      renderer.setClearColor(0x000000, 0); // Définit la couleur de fond du canvas comme transparent
      

      const material = new THREE.MeshPhysicalMaterial({
        color: 0xB65DFF,
        emissive: 0x509C95,
        side: THREE.DoubleSide,
        metalness: 1,
        roughness: 0,
        flatShading: true,
        vertexColors: true,
        envMap: 'reflection',
        transparent: true, // Rend le matériau transparent
        opacity: 0.65, // Contrôle l'opacité du matériau
        envMapIntensity: 50, // Contrôle l'intensité de réflexion de l'environnement
        clearcoat: 50, // Contrôle la quantité de vernis
        clearcoatRoughness: 0.075, // Contrôle la rugosité du vernis
      });

      const light = new THREE.DirectionalLight(0xffffff, 5000); // Couleur blanche, intensité 1
      scene.add(light);

      const secondlight = new THREE.DirectionalLight(0x00FFE5, 5000); // Couleur blanche, intensité 1
      scene.add(secondlight);

      const thirdlight = new THREE.DirectionalLight(0xFFEA00, 5000); // Couleur blanche, intensité 1
      scene.add(thirdlight);

      // Variables pour le mouvement de translation
      let time = 0;
      const amplitude = 0.025;
      const frequency = 1.15;

      const generateRandomPosition = () => {
        const size = Math.random() * 1; // Taille aléatoire entre 0.1 et 1
        const weight = size / 3.5;
        const posZ  = Math.random() * (1.15 - (-0.75)) + (-0.75);
        return {
          size,
          weight,
          posZ,
        };
      };

      for (let index = 0; index < 8; index++) {
        const { size, weight, posZ } = generateRandomPosition();

        const geometry = new THREE.TorusGeometry(size, weight, 15, 3, arc);
        const ring = new THREE.Mesh(geometry, material);
        ring.rotation.z = 0.5;
        ring.position.set(
          positions[index].x,
          positions[index].y,
          -2
        ); // Définit la position aléatoire
        scene.add(ring);
        rings.push(ring); // Ajoute le ring au tableau
      }

      // Animation de rotation
      const animate = () => {
        requestAnimationFrame(animate);

        // Parcourt tous les rings et applique la parallaxe
        rings.forEach((ring, index) => {
          ring.position.y = Math.sin(time * frequency) * amplitude + positions[index].y;
        });

        time += 0.01;

        renderer.render(scene, camera);
      };

      // Lance l'animation
      animate();
      window.addEventListener("scroll", () => {
        gsap.to(camera.position, {
          duration: 1.25,
          y: window.scrollY / 500,
          ease: 'power2.out', // Utilise un easing agréable (à ajuster selon vos préférences)
        });
      });
   

    // Définir la position des lumières en fonction de la souris
      const onMouseMove = (event) => {
        const mouseX = event.clientX / window.innerWidth;
        const mouseY = event.clientY / window.innerHeight;

        light.position.set(
          (mouseX - 0.5) * 10,
          (mouseY - 0.5) * 10,
          2
        );

        secondlight.position.set(
          (mouseX - 0.3) * 10 + 50,
          (mouseY - 0.5) * 10 + 50,
          2
        );

        thirdlight.position.set(
          (mouseX - 0.5) * 10 - 50,
          (mouseY - 0.5) * 10 - 50,
          2
        );
      };

      window.addEventListener('mousemove', onMouseMove);
     };

    // Appelle la fonction d'initialisation
    init();

    // Nettoie la scène lors du démontage du composant
    return () => {
      rings.forEach((ring) => {
        scene.remove(ring);
      });
      renderer.dispose();
    };
  }, []);


  return <canvas ref={CanvasRef} className="container_three"></canvas>;
};

export default MiniTriRing;

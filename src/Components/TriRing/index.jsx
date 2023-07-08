import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const TriRing = () => {
  const canvasRef = useRef(null);
  const arc = Math.PI * 2

  useEffect(() => {
    // Crée la scène
    const scene = new THREE.Scene();

    // Crée la caméra
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    camera.position.y = -0.5;
    camera.position.x = -2.75;

    // Crée le rendu
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(
      canvasRef.current.clientWidth,
      canvasRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0); // Définit la couleur de fond du canvas comme transparent
    canvasRef.current.appendChild(renderer.domElement);
    
        
    const geometry = new THREE.TorusGeometry( 1.75, 0.5, 15, 3,  arc); 
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xB65DFF,
      emissive: 0x509C95,
      side: THREE.DoubleSide,
      metalness: 1, 
      roughness: 0, 
      flatShading: true,
      vertexColors: true,
      envMap: "reflection",
      transparent: true, // Rend le matériau transparent
      opacity: 0.65, // Contrôle l'opacité du matériau
      envMapIntensity: 50, // Contrôle l'intensité de réflexion de l'environnement
      clearcoat: 50, // Contrôle la quantité de vernis
      clearcoatRoughness: 0.075, // Contrôle la rugosité du vernis
    });
    const ring = new THREE.Mesh(geometry, material);
        ring.rotation.z = 0.5;
    scene.add(ring);
    
    
    
    const light = new THREE.DirectionalLight(0xB65DFF, 5000); // Couleur blanche, intensité 1
    light.position.set(0, 0, 5); // Positionne la lumière en face de l'objet
    scene.add(light);

    const secondlight = new THREE.DirectionalLight(0x00FFE5, 5000); // Couleur blanche, intensité 1
    secondlight.position.set(50, 50, 5); // Positionne la lumière en face de l'objet
    scene.add(secondlight);

    const thirdlight = new THREE.DirectionalLight(0xFFEA00, 5000); // Couleur blanche, intensité 1
    thirdlight.position.set(-50, -50, 5); // Positionne la lumière en face de l'objet
    scene.add(thirdlight);

     // Variables pour le mouvement de translation
    let time = 0;
    const amplitude = 0.1;
    const frequency = 1.15;

      // Variables pour l'effet de penchement
    const rotationSpeed = 0.005;
    const maxRotation = Math.PI / 4; // Angle maximal de penchement
    let targetRotationX = 0;
    let targetRotationY = 0;

     const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      const windowCenterX = window.innerWidth / 2;
      const windowCenterY = window.innerHeight / 2;

      // Calcul de la différence entre la position actuelle de la souris et la position centrale
      const diffX = clientX - windowCenterX;
      const diffY = clientY - windowCenterY;

      // Conversion de la différence en valeurs de rotation
      targetRotationX = (diffY / windowCenterY) * maxRotation;
      targetRotationY = (diffX / windowCenterX) * maxRotation;
    };

    // Ajoute l'événement de mouvement de la souris
    window.addEventListener('mousemove', handleMouseMove);

    // Animation de rotation
    const animate = () => {
      requestAnimationFrame(animate);

      // Lissage de la rotation en utilisant une interpolation linéaire
      ring.rotation.x += (targetRotationX - ring.rotation.x) * rotationSpeed;
      ring.rotation.y += (targetRotationY - ring.rotation.y) * rotationSpeed;
    
    ring.position.y = Math.sin(time * frequency) * amplitude;


      time += 0.01;

      renderer.render(scene, camera);
    };

    // Lance l'animation
    animate();

    // Nettoie la scène lors du démontage du composant
    return () => {
      // Supprime l'événement de mouvement de la souris
      window.removeEventListener('mousemove', handleMouseMove);

      scene.remove(ring);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={canvasRef} className="container_three" />
  );
};

export default TriRing;

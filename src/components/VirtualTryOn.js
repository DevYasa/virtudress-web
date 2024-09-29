import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const VirtualTryOn = ({ modelUrl, videoRef }) => {
  const mountRef = useRef(null);
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  
  const models = useMemo(() => [modelUrl], [modelUrl]);

  useEffect(() => {
    const currentMount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 9 / 16, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    currentMount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);

    let model;

    const loadModel = (url) => {
      setIsModelLoaded(false);
      const loader = new GLTFLoader();
      loader.load(url, (gltf) => {
        if (model) scene.remove(model);
        model = gltf.scene;
        model.position.set(0, -0.5, 0);
        model.scale.set(1, 1, 1);
        scene.add(model);
        setIsModelLoaded(true);
      }, undefined, (error) => {
        console.error('An error happened', error);
        setIsModelLoaded(true);
      });
    };

    loadModel(models[currentModelIndex]);

    camera.position.z = 2;

    const animate = () => {
      requestAnimationFrame(animate);
      if (model) model.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = 9 / 16;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [modelUrl, currentModelIndex, models]);

  const nextModel = () => {
    setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);
  };

  const prevModel = () => {
    setCurrentModelIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length);
  };

  return (
    <div className="relative w-full h-full">
      <video ref={videoRef} autoPlay playsInline muted className="absolute inset-0 w-full h-full object-cover" />
      <div ref={mountRef} className="absolute inset-0" />
      {!isModelLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <div className="text-white text-2xl">Loading 3D model...</div>
        </div>
      )}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        <button onClick={prevModel} className="bg-white text-black px-4 py-2 rounded-full">&lt;</button>
        <button onClick={nextModel} className="bg-white text-black px-4 py-2 rounded-full">&gt;</button>
      </div>
    </div>
  );
};

export default VirtualTryOn;
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground = () => {
  const containerRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    const { clientWidth, clientHeight } = containerRef.current;
    renderer.setSize(clientWidth, clientHeight);
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const intersectPoint = new THREE.Vector3();

    const group = new THREE.Group();
    scene.add(group);

    const items = [];
    const itemCount = 180; // Increased count for a fuller "background only" look
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/[]{}*&$#@!".split("");

    const createTextTexture = (char) => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.font = 'bold 48px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(char, 32, 32);
      return new THREE.CanvasTexture(canvas);
    };

    const boxGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const tetraGeo = new THREE.TetrahedronGeometry(0.4);
    const planeGeo = new THREE.PlaneGeometry(0.6, 0.6);

    for (let i = 0; i < itemCount; i++) {
      let mesh;
      const type = Math.random();
      const color = new THREE.Color();
      const randColor = Math.random();
      
      if (randColor > 0.6) color.setHex(0x3b82f6); 
      else if (randColor > 0.3) color.setHex(0x10b981); 
      else color.setHex(0x8b5cf6); 

      if (type > 0.4) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const material = new THREE.MeshBasicMaterial({ 
          map: createTextTexture(char), 
          transparent: true, 
          opacity: 0.2 + Math.random() * 0.4,
          color: color,
          side: THREE.DoubleSide
        });
        mesh = new THREE.Mesh(planeGeo, material);
      } else {
        const material = new THREE.MeshBasicMaterial({ 
          color: color, 
          transparent: true, 
          opacity: 0.1 + Math.random() * 0.3,
          wireframe: true 
        });
        mesh = new THREE.Mesh(type > 0.2 ? boxGeo : tetraGeo, material);
      }

      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 45;
      const z = (Math.random() - 0.5) * 25;
      mesh.position.set(x, y, z);
      
      mesh.userData = {
        originalPos: mesh.position.clone(),
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.03,
          y: (Math.random() - 0.5) * 0.03,
          z: (Math.random() - 0.5) * 0.03
        },
        driftPhase: Math.random() * Math.PI * 2,
        driftSpeed: 0.002 + Math.random() * 0.006
      };

      group.add(mesh);
      items.push(mesh);
    }

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      raycaster.setFromCamera(mouse.current, camera);
      raycaster.ray.intersectPlane(plane, intersectPoint);

      items.forEach((item) => {
        item.userData.driftPhase += item.userData.driftSpeed;
        const driftX = Math.sin(item.userData.driftPhase) * 0.8;
        const driftY = Math.cos(item.userData.driftPhase) * 0.8;

        let targetX = item.userData.originalPos.x + driftX;
        let targetY = item.userData.originalPos.y + driftY;
        let targetZ = item.userData.originalPos.z;

        const dist = item.position.distanceTo(intersectPoint);
        const forceLimit = 10;
        
        if (dist < forceLimit) {
          const force = (1 - dist / forceLimit) * 6;
          const dir = new THREE.Vector3().subVectors(item.position, intersectPoint).normalize();
          targetX += dir.x * force;
          targetY += dir.y * force;
          targetZ += dir.z * force;
        }

        item.position.x += (targetX - item.position.x) * 0.05;
        item.position.y += (targetY - item.position.y) * 0.05;
        item.position.z += (targetZ - item.position.z) * 0.05;

        item.rotation.x += item.userData.rotSpeed.x;
        item.rotation.y += item.userData.rotSpeed.y;
        item.rotation.z += item.userData.rotSpeed.z;
      });

      renderer.render(scene, camera);
    };

    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      if (!containerRef.current) return;

      const { clientWidth, clientHeight } = containerRef.current;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };


    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      items.forEach(item => {
        item.geometry?.dispose();
        if (Array.isArray(item.material)) {
          item.material.forEach(mat => mat.dispose());
        } else {
          item.material?.dispose();
        }
      });

      renderer.dispose();

      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none bg-[#020617]" />;
};


export default ThreeBackground;
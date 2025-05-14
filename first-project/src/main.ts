import "./style.css";
import * as THREE from "three";

console.log(THREE.Scene);

// Create a scene
const scene = new THREE.Scene();

// Create a geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
// Create a material
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// Create a mesh
const cube = new THREE.Mesh(geometry, material);
// Add the mesh to the scene
scene.add(cube);

// Create a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// Set the camera position
camera.position.z = 5;
// Create a renderer

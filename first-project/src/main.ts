import "./style.css";
import * as THREE from "three";

const canvas = document.querySelector("#webgl") as HTMLCanvasElement;

// Create a scene
const scene = new THREE.Scene();

// objects
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  // wireframe: true,
});
const cubeMesh = new THREE.Mesh(geometry, material);
scene.add(cubeMesh);

// Create a camera
const sizes = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height
  // 0.1,
  // 100
);
camera.position.z = 3;
scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  // alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setClearColor(0x000000, 0); // Set the background color to transparent

renderer.render(scene, camera);

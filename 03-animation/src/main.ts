import "./style.css";
import * as THREE from "three";

const canvas = document.querySelector("#webgl") as HTMLCanvasElement;

// Create a scene
const scene = new THREE.Scene();

// AxesHelper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);
// Create a grid helper
const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);

// objects
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(cube);

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
// camera.position.z = 4; // set the position of the camera
camera.position.set(0, 0, 4); // set the position of the camera
// camera.lookAt(0, 0, 0); // 相机朝向原点
// camera.lookAt(cubeMesh.position); // 相机朝向立方体
scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  // alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setClearColor(0x000000, 0); // Set the background color to transparent

// renderer.render(scene, camera);

const clock = new THREE.Clock();
// const deltaTime = clock.getDelta(); // seconds.
// const elapsedTime = clock.getElapsedTime(); // seconds.
// console.log(deltaTime, elapsedTime);

function animate() {
  const elapsedTime = clock.getElapsedTime(); // seconds.
  cube.position.x = Math.sin(elapsedTime);
  cube.position.y = Math.cos(elapsedTime);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

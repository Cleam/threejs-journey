import "./style.css";
import * as THREE from "three";

const canvas = document.querySelector("#webgl") as HTMLCanvasElement;

// Create a scene
const scene = new THREE.Scene();

// objects
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({
//   color: 0xff0000,
//   // wireframe: true,
// });
// const cubeMesh = new THREE.Mesh(geometry, material);
// scene.add(cubeMesh);

// // 辅助坐标线
// const axesHelper = new THREE.AxesHelper(2);
// scene.add(axesHelper);

// // position the cube
// // cubeMesh.position.x = 0.7;
// // cubeMesh.position.y = -0.5;
// // cubeMesh.position.z = 1;
// cubeMesh.position.set(0.7, -0.5, 1); // set the position of the cube

// // scale the cube
// // cubeMesh.scale.x = 2;
// // cubeMesh.scale.y = 0.5;
// // cubeMesh.scale.z = 0.5;
// cubeMesh.scale.set(2, 0.5, 0.5); // set the scale of the cube

// // rotate the cube
// cubeMesh.rotation.reorder("YXZ"); // 设置旋转顺序
// // cubeMesh.rotation.x = Math.PI / 4;
// // cubeMesh.rotation.y = Math.PI / 4;
// // cubeMesh.rotation.z = Math.PI / 4;
// cubeMesh.rotation.set(Math.PI / 4, Math.PI / 4, Math.PI / 4); // set the rotation of the cube

// 按组创建对象
const group = new THREE.Group();
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube1.position.set(0, 0, 0);
cube2.position.set(1.5, 0, 0);
cube3.position.set(0, 1.5, 0);
group.add(cube1);
group.add(cube2);
group.add(cube3);
scene.add(group);
// group.position.set(0, 0, 0); // set the position of the group
// group.scale.set(1, 1, 1); // set the scale of the group
// group.rotation.set(0, 0, 0); // set the rotation of the group
// group.rotation.reorder("YXZ"); // 设置旋转顺序
// group.rotation.set(Math.PI / 4, Math.PI / 4, Math.PI / 4); // set the rotation of the group
group.rotation.set(0, Math.PI / 4, 0); // set the rotation of the group
// group.rotation.set(0, 0, Math.PI / 4); // set the rotation of the group
// group.rotation.set(Math.PI / 4, 0, 0); // set the rotation of the group

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

renderer.render(scene, camera);

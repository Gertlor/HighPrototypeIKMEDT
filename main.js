let cameraRig = document.getElementById("js--rig");
let initialCircle = document.getElementById("js--initialCircle");
let leftCircle = document.getElementById("js--leftCircle");
let rightCircle = document.getElementById("js--rightCircle");
let middleCircle = document.getElementById("js--middleCircle");

initialCircle.onmouseenter = () => {
    cameraRig.setAttribute("position", "0 0 0")
};

leftCircle.onmouseenter = () => {
    cameraRig.setAttribute("position", "-3.5 0 0")
};

rightCircle.onmouseenter = () => {
    cameraRig.setAttribute("position", "3.5 0 0")
};

middleCircle.onmouseenter = () => {
    cameraRig.setAttribute("position", "0 0 -3.5")
};


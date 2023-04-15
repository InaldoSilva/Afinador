
const e = document.getElementById("e");
const b = document.getElementById("b");
const G = document.getElementById("G");
const D = document.getElementById("D");
const A = document.getElementById("A");
const E = document.getElementById("E");
const B = document.getElementById("B");

const cordae = new Audio("./Audio/e1.mp3");
const cordab = new Audio("./Audio/b1.mp3");
const cordaG = new Audio("./Audio/G.mp3");
const cordaD = new Audio("./Audio/D.mp3");
const cordaA = new Audio("./Audio/A.mp3");
const cordaE = new Audio("./Audio/E.mp3");
const cordaB = new Audio("./Audio/B.mp3");

let cont = [];

e.addEventListener('click', () => {
  cont.push['1'];
  cordae.play();
  if (cont.length == 1) {
    cordae.pause();
    cont = [];
  }
});

b.addEventListener('click', () => {
  cont.push['1'];
  cordab.play();
  if (cont.length == 0.2) {
    cordae.pause();
    cont = [];
  }
});

G.addEventListener('click', () => {
  cont.push['1'];
  cordaG.play();
  if (cont.length == 0.2) {
    cordae.pause();
    cont = [];
  }
});

D.addEventListener('click', () => {
  cont.push['1'];
  cordaD.play();
  if (cont.length == 0.2) {
    cordae.pause();
    cont = [];
  }
});

A.addEventListener('click', () => {
  cont.push['1'];
  cordaA.play();
  if (cont.length == 0.2) {
    cordae.pause();
    cont = [];
  }
});

E.addEventListener('click', () => {
  cont.push['1'];
  cordaE.play();
  if (cont.length == 0.2) {
    cordae.pause();
    cont = [];
  }
});

B.addEventListener('click', () => {
  cont.push['1'];
  cordaB.play();
  if (cont.length == 0.2) {
    cordae.pause();
    cont = [];
  }
});
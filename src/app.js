/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// ♦ ♥ ♠ ♣
window.onload = function() {
  //write your code here
  let suit = 1 + Math.floor(Math.random() * 4);
  let numero = 1 + Math.floor(Math.random() * 12);
  let fondo = document.getElementsByClassName("container");
  fondo[0].style.background = "green";
  let carta = document.getElementById("card");
  carta.style.background = "white";
  let pintaArriba = document.getElementById("pinta-arriba");
  let pintaAbajo = document.getElementById("pinta-abajo");
  let numeroPinta = document.getElementById("numero-pinta");
  numeroPinta.innerHTML = `<h1>${numero}</h1>`;

  if (suit == 1) {
    pintaArriba.innerHTML = "<h1>♦</h1>";
    pintaAbajo.innerHTML = "<h1>♦</h1>";
    pintaArriba.style.color = "red";
    pintaAbajo.style.color = "red";
    numeroPinta.style.color = "red";
  } else if (suit == 2) {
    pintaArriba.innerHTML = "<h1>♥</h1>";
    pintaAbajo.innerHTML = "<h1>♥</h1>";
    pintaArriba.style.color = "red";
    pintaAbajo.style.color = "red";
    numeroPinta.style.color = "red";
  } else if (suit == 3) {
    pintaArriba.innerHTML = "<h1>♠</h1>";
    pintaAbajo.innerHTML = "<h1>♠</h1>";
  } else if (suit == 4) {
    pintaArriba.innerHTML = "<h1>♣</h1>";
    pintaAbajo.innerHTML = "<h1>♣</h1>";
  }
};

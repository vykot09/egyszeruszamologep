"use strict";



function osszead(){
    let elso = document.getElementById("elso");
    let masodik = document.getElementById("masodik");
    let kiir = +elso.value + +masodik.value;
    document.getElementById("eredmeny").value = kiir;

}

function kivonas(adat) {
    let elso = document.getElementById("elso");
    let masodik = document.getElementById("masodik");
    let kiir = adat * (elso.value - masodik.value);
    document.getElementById("eredmeny").value = kiir;

}

function szorzas(){
    let elso = document.getElementById("elso");
    let masodik = document.getElementById("masodik");
    let kiir = +elso.value * +masodik.value;
    document.getElementById("eredmeny").value = kiir;

}

function osztas(){
    let elso = document.getElementById("elso");
    let masodik = document.getElementById("masodik");
    let kiir = 0;
    if(masodik == 0){
        let kiir = Infinity;
    }

      else {
          let kiir = +elso.value / +masodik.value;
      }
    let kiir = +elso.value / +masodik.value;
    document.getElementById("eredmeny").value = kiir;

}
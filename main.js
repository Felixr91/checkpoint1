var vilhealth = 100;
var gokuhealth = 100;
var gokuhitcount = 0;
var vilhitcount = 0;
var villiantransformations = 0;
var gokutransformations = 0;
var gokupunch = document.querySelector("#gokupunch");
var gokukick = document.querySelector("#gokukick");
var gokublast = document.querySelector("#gokublast");
var gokuimage = document.querySelector("#goku-image");
var gokutransform = document.getElementById("gokutransformbtn");
var vilpunch = document.querySelector("#vilpunch");
var vilkick = document.querySelector("#vilkick");
var vilblast = document.querySelector("#vilblast");
var vilimage = document.querySelector(".vil-image");
var viltransform = document.getElementById("viltransformbtn");
var gokudragonball = document.getElementById("gokudragonball");
var gokusenzubean = document.getElementById("gokusenzubean");

gokupunch.addEventListener("click", gpunch);
gokukick.addEventListener("click", gkick);
gokublast.addEventListener("click", gblast);
gokutransform.addEventListener("click", gtransform);

vilpunch.addEventListener("click", vpunch);
vilkick.addEventListener("click", vkick);
vilblast.addEventListener("click", vblast);
viltransform.addEventListener("click", vtransform);

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
  if (evt.which == "65") {
    gpunch();
  } else if (evt.which == "83") {
    gkick();
  } else if (evt.which == "68") {
    return gblast();
  } else if (evt.which == "87") {
    return gtransform();
  } else if (evt.which == "74") {
    return vpunch();
  } else if (evt.which == "75") {
    return vkick();
  } else if (evt.which == "76") {
    return vblast();
  } else if (evt.which == "73") {
    return vtransform();
  } else if (evt.which == "69") {
    return gokuwish();
  }
}

function gpunch() {
  vilhealth -= 10;
  vilprogressbar();
  gokuhitcount += 1;
}

function vpunch() {
  gokuhealth -= 10;
  gokuprogressbar();
  vilhitcount += 1;
}

function gkick() {
  vilhealth -= 20;
  vilprogressbar();
  gokuhitcount += 1;
}

function vkick() {
  gokuhealth -= 20;
  gokuprogressbar();
  vilhitcount += 1;
}


function gblast() {
  vilhealth -= Math.floor((Math.random() * 25));
  vilprogressbar();
  gokuhitcount += 1;
}

function vblast() {
  gokuhealth -= Math.floor((Math.random() * 25));
  gokuprogressbar();
  vilhitcount += 1;
}

function vilprogressbar() {
  document.getElementById("vilprogress").innerHTML = `
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar"
    style="width: ${vilhealth}%" aria-valuenow="${vilhealth}%" aria-valuemin="0" aria-valuemax="100"></div>`
  checkpowerupvil();
}

function gokuprogressbar() {
  document.getElementById("gokuprogress").innerHTML = `
  <div class="gokuprogress progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar"
  style="width: ${gokuhealth}%" aria-valuenow="${gokuhealth}" aria-valuemin="0" aria-valuemax="100"></div>`
  checkpowerupgoku();
}
/*
gokucheckdead();
function gokucheckdead() {
  if (gokuhealth = 0) {
    alert("goku died");
  }
}
*/
/*
function gokuwish() {
  gokuhealth += 50;
  document.getElementById("gokuprogress").innerHTML = `
  <div class="gokuprogress progress-bar progress-bar-striped progress-bar-animated bg-${"info"} role="progressbar"
  style="width: ${gokuhealth}%" aria-valuenow="${gokuhealth}" aria-valuemin="0" aria-valuemax="100"></div>`
}
*/
/*
function gokuballappear() {
  if (gokutransformations = 3) {
    document.getElementById("gokudragonball").innerHTML = `
    <img class="dragonball-sizing" src="images/dragonball.png" alt="">
    `
  }
}
*/
function gokusenzu() {
  gokuhealth = 100;
  document.getElementById("gokuprogress").innerHTML = `
  <div class="gokuprogress progress-bar progress-bar-striped progress-bar-animated bg-${"info"} role="progressbar"
  style="width: ${gokuhealth}%" aria-valuenow="${gokuhealth}" aria-valuemin="0" aria-valuemax="100"></div>`
}

function checkpowerupvil() {
  if (vilhealth <= 40) {
    viltransform.classList.remove("vilbuttonhide");
  }
}

function checkpowerupgoku() {
  if (gokuhealth <= 40) {
    gokutransform.classList.remove("gokubuttonhide");
  }
}

function vtransform() {
  var charimages = ["images/cell.gif", "images/buu.gif", "images/freiza.gif", "images/goldenfreiza.gif", "images/jiren.gif"];
  var displaycaricon = ["images/cell-icon.png", "images/buu-icon.png", "images/freiza-icon.png", "images/goldenfreiza-icon.png", "images/jiren-icon.png"];
  var cssdisplay = ["vil-image", "buu-sizing", "freiza-sizing", "goldenfreiza-sizing", "jiren-sizing"]

  viltransformplusone();

  document.getElementById("vimage").innerHTML = `
    <img class=${cssdisplay[villiantransformations]} src=${charimages[villiantransformations]} alt="">
    `
  document.getElementById("vil-icon").innerHTML = `
    <img class="vil-icon" src=${displaycaricon[villiantransformations]} alt="">
    `
  vilnametext();
  vilhealthboost(25);
  vilhealth += 25;
  viltransform.classList.add("vilbuttonhide");
}

function gtransform() {
  var charimages = ["images/goku.gif", "images/gokussj.gif", "images/gokussj2.gif", "images/gokussj3.gif", "images/gokublue.gif"];
  var displaycaricon = ["images/goku-icon.png", "images/gokussj-icon.png", "images/gokussj2-icon.png", "images/gokussj3-icon.png", "images/gokublue-icon.png"];
  var cssdisplay = ["goku-image", "gokussj-sizing", "gokussj2-sizing", "gokussj3-sizing", "gokublue-sizing"];

  gokutransformplusone();

  document.getElementById("gokuimage").innerHTML = `
  <img class=${cssdisplay[gokutransformations]} src=${charimages[gokutransformations]} alt="">
  `
  document.getElementById("goku-icon").innerHTML = `
    <img class="goku-icon" src=${displaycaricon[gokutransformations]} alt=""></img>
    `
  gokunametext();
  gokuhealthboost(25);
  gokuhealth += 25;
  gokutransform.classList.add("gokubuttonhide");
}

function viltransformplusone() {
  villiantransformations = villiantransformations + 1;
}

function gokutransformplusone() {
  gokutransformations = gokutransformations + 1;
}

function vilnametext() {
  var select = ["Cell", "Majin Buu", "Freiza", "Golden Freiza", "Jiren"];
  document.getElementById("viltextname").innerHTML = `
    <h1>${select[villiantransformations]}</h1 >
    `
}

function gokunametext() {
  var select = ["Goku", "Super Saiyan Goku", "Super Saiyan 2 Goku", "Super Saiyan 3 Goku", "SSJ God Blue Goku"];
  document.getElementById("gokutextname").innerHTML = `
    <h1>${select[gokutransformations]}</h1 >
  `
}

function vilhealthboost(num) {
  document.getElementById("vilprogress").innerHTML = `
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar"
    style="width: ${vilhealth + num}%" aria-valuenow="${vilhealth + num}%" aria-valuemin="0" aria-valuemax="100"></div>`
}

function gokuhealthboost(num) {
  document.getElementById("gokuprogress").innerHTML = `
    <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar"
    style="width: ${gokuhealth + num}%" aria-valuenow="${gokuhealth + num}%" aria-valuemin="0" aria-valuemax="100"></div>
  `
}
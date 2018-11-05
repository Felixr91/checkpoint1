var goku = {
  health: 100,
  attacks: {
    punch: 5,
    kick: 15,
    blast: Math.floor((Math.random() * 25)),
  },
  hitcount: 0,
  powerup: 0,
  transformations: 0
}

var villian = {
  health: 100,
  attacks: {
    punch: 10,
    kick: 15,
    blast: Math.floor((Math.random() * 25)),
  },
  hitcount: 0,
  powerup: 0,
  transformations: 0
}

var modify = {
  attacks: {
    punch: 5,
    kick: 5,
    blast: Math.floor((Math.random() * 30)),
  }
}

setInterval(function () {
  goku.health -= Math.floor((Math.random() * 30));
  gokuprogressbar();
}, 1500);

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
  } else if (evt.which == "90") {
    gokuwish();
  } else if (evt.which == "78") {
    return vilwish();
  } else if (evt.which == "88") {
    return gokusenzu();
  } else if (evt.which == "77") {
    return vilsenzu();
  } else if (evt.which == "67") {
    return gokucapsule();
  } else if (evt.which == "188") {
    return villiancapsule();
  }
}
/*
function gpunch() {
  villian.health -= goku.attacks.punch;
  goku.hitcount += 1;
  vilprogressbar();
}
*/

function gpunch() {
  if (goku.transformations < 3) {
    villian.health -= 5;
  } else {
    villian.health -= 10;
  }
  goku.hitcount += 1;
  vilprogressbar();
}


function vpunch() {
  goku.health -= villian.attacks.punch;
  villian.hitcount += 1;
  gokuprogressbar();
}

function gkick() {
  if (goku.transformations < 3) {
    villian.health -= 15;
  } else {
    villian.health -= 20;
  }
  goku.hitcount += 1;
  vilprogressbar();
}

function vkick() {
  goku.health -= villian.attacks.kick;
  villian.hitcount += 1;
  gokuprogressbar();
}

function gblast() {
  villian.health -= goku.attacks.blast;
  goku.hitcount += 1;
  vilprogressbar();
}

function vblast() {
  goku.health -= Math.floor((Math.random() * 25));
  villian.hitcount += 1;
  gokuprogressbar();
}

function gokuwish() {
  villian.health -= 30;
  vilprogressbar();
  document.getElementById("gokudragonball").innerHTML = `
    `
}

function vilwish() {
  goku.health -= 30;
  gokuprogressbar();
  document.getElementById("vildragonball").innerHTML = `
  `
}

function gokuprogressbar() {
  document.getElementById("gokuprogress").innerHTML = `
  <div class="gokuprogress progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar"
  style="width: ${goku.health}%" aria-valuenow="${goku.health}" aria-valuemin="0" aria-valuemax="100"></div>`
  checkpowerupgoku();
  gokusenzubean();
  gokucapsuleappear();
}

function checkpowerupgoku() {
  if (goku.health <= 40) {
    document.getElementById("gokubuttoncontrol").innerHTML = `
    <button id="gokutransformbtn" class="btn btn-danger viltransformbtn">TRANSFORM</button>
    `
  }
}

function gokucapsuleappear() {
  if (goku.health < 50 && villian.health < 50) {
    document.getElementById("gokucapsule").innerHTML = `
    <img class="item-sizing" src="images/capsule.png" alt=""></img>
    `
  }
}

function gokucapsule() {
  villian.health -= 50;
  vilprogressbar();
  document.getElementById("gokucapsule").innerHTML = `
  `
}

function vilprogressbar() {
  document.getElementById("vilprogress").innerHTML = `
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar"
    style="width: ${villian.health}%" aria-valuenow="${villian.health}%" aria-valuemin="0" aria-valuemax="100"></div>`
  checkpowerupvil();
  villiansenzubean();
  villiancapsuleappear();
}

function villiancapsuleappear() {
  if (goku.health < 50 && villian.health < 50) {
    document.getElementById("villiancapsule").innerHTML = `
    <img class="item-sizing" src="images/capsule.png" alt=""></img>
    `
  }
}

function villiancapsule() {
  goku.health -= 50;
  gokuprogressbar();
  document.getElementById("villiancapsule").innerHTML = `
  `
}

function checkpowerupvil() {
  if (villian.health <= 40) {
    document.getElementById("vilbuttoncontrol").innerHTML = `
    <button id="viltransformbtn" class="btn btn-danger viltransformbtn">TRANSFORM</button>
    `
  }
}

function gtransform() {
  var charimages = ["images/goku.gif", "images/gokussj.gif", "images/gokussj2.gif", "images/gokussj3.gif", "images/gokublue.gif"];
  var displaycaricon = ["images/goku-icon.png", "images/gokussj-icon.png", "images/gokussj2-icon.png", "images/gokussj3-icon.png", "images/gokublue-icon.png"];
  var cssdisplay = ["goku-image", "gokussj-sizing", "gokussj2-sizing", "gokussj3-sizing", "gokublue-sizing"];
  var select = ["Goku", "Super Saiyan Goku", "Super Saiyan 2 Goku", "Super Saiyan 3 Goku", "SSJ God Blue Goku"];

  if (goku.transformations <= 4) {
    gokutransformplusone();
  }


  document.getElementById("gokuimage").innerHTML = `
  <img class=${cssdisplay[goku.transformations]} src=${charimages[goku.transformations]} alt="">
  `
  document.getElementById("goku-icon").innerHTML = `
    <img class="goku-icon" src=${displaycaricon[goku.transformations]} alt=""></img>
    `
  document.getElementById("gokutextname").innerHTML = `
    <h1>${select[goku.transformations]}</h1 >
  `
  //make button disappear
  document.getElementById("gokubuttoncontrol").innerHTML = `

    `
  goku.health += 25;
  gokuprogressbar();
}

function gokutransformplusone() {
  goku.transformations = goku.transformations + 1;
  if (goku.transformations === 3) {
    gokuballappear();
  }
}

function gokuballappear() {
  document.getElementById("gokudragonball").innerHTML = `
    <img class="item-sizing" src="images/dragonball.png" alt="">
    `
}

function vtransform() {
  var charimages = ["images/cell.gif", "images/buu.gif", "images/freiza.gif", "images/goldenfreiza.gif", "images/jiren.gif"];
  var displaycaricon = ["images/cell-icon.png", "images/buu-icon.png", "images/freiza-icon.png", "images/goldenfreiza-icon.png", "images/jiren-icon.png"];
  var cssdisplay = ["vil-image", "buu-sizing", "freiza-sizing", "goldenfreiza-sizing", "jiren-sizing"]
  var select = ["Cell", "Majin Buu", "Freiza", "Golden Freiza", "Jiren"];

  viltransformplusone();

  document.getElementById("vimage").innerHTML = `
    <img class=${cssdisplay[villian.transformations]} src=${charimages[villian.transformations]} alt="">
    `
  document.getElementById("vil-icon").innerHTML = `
    <img class="vil-icon" src=${displaycaricon[villian.transformations]} alt="">
    `
  document.getElementById("viltextname").innerHTML = `
    <h1>${select[villian.transformations]}</h1 >
    `

  villian.health += 25;
  vilprogressbar();
  //make button disappear
  document.getElementById("vilbuttoncontrol").innerHTML = `

    `
}

function viltransformplusone() {
  villian.transformations = villian.transformations + 1;
  if (villian.transformations === 3) {
    villianballappear();
  }
}

function villiansenzubean() {
  if (villian.health < 20 && villian.transformations == 4) {
    document.getElementById("villian-senzubean").innerHTML = `
      <img class="item-sizing" src="images/senzu-bean.png" alt=""></img>
      `
  }
}

function gokusenzubean() {
  if (goku.health < 20 && goku.transformations == 4) {
    document.getElementById("goku-senzubean").innerHTML = `
      <img class="item-sizing" src="images/senzu-bean.png" alt=""></img>
      `
  }
}

function vilsenzu() {
  villian.health += 100;
  vilprogressbar();
  document.getElementById("villian-senzubean").innerHTML = `
      `
}

function gokusenzu() {
  goku.health += 100;
  gokuprogressbar();
  document.getElementById("goku-senzubean").innerHTML = `
      `
}

function villianballappear() {
  document.getElementById("vildragonball").innerHTML = `
    <img class="item-sizing" src="images/dragonball.png" alt="">
    `
}

var score = 0;
var clickingPower = 1;
var cursorCost = 15;
var cursors = 0;
var grandmaCost = 100;
var grandmas = 0;
var shopCost = 500;
var shops = 0;
var factoryCost = 1500;
var factory = 0;

function give9999() {
  score = score + 9999;
}

function buyCursor() {
  if (score >= cursorCost) {
    score = score - cursorCost;
    cursors = cursors + 1;
    cursorCost = Math.round(cursorCost * 1.15);

    document.getElementById("score").innerHTML = score;
    document.getElementById("cursorcost").innerHTML = cursorCost;
    document.getElementById("cursors").innerHTML = cursors;
    updateTacosPerSecond();
  }
}

function buyGrandma() {
  if (score >= cursorCost) {
    score = score - cursorCost;
    grandmas = grandmas + 1;
    grandmaCost = Math.round(grandmaCost * 1.15);

    document.getElementById("score").innerHTML = score;
    document.getElementById("grandmacost").innerHTML = grandmaCost;
    document.getElementById("grandmas").innerHTML = grandmas;
    updateTacosPerSecond();
  }
}

function buyShop() {
  if (score >= shopCost) {
    score = score - shopCost;
    shops = shops + 1;
    shopCost = Math.round(shopCost * 1.15);

    document.getElementById("score").innerHTML = score;
    document.getElementById("shopcost").innerHTML = shopCost;
    document.getElementById("shops").innerHTML = shops;
    updateTacosPerSecond();
  }
}

function buyFactory() {
  if (score >= factoryCost) {
    score = score - factoryCost;
    factory = factory + 1;
    factoryCost = Math.round(factoryCost * 1.15);

    document.getElementById("score").innerHTML = score;
    document.getElementById("factorycost").innerHTML = factoryCost;
    document.getElementById("factory").innerHTML = factory;
    updateTacosPerSecond();
  }
}

function addToScore(amount) {
  score = score + amount;
  document.getElementById("score").innerHTML = score;
}

function updateTacosPerSecond() {
  tacosPerSecond = cursors + grandmas * 5 + shops * 25 + factory * 100;
  document.getElementById("tacospersecond").innerHTML = tacosPerSecond;
}

setInterval(function () {
  score = score + cursors;
  score = score + grandmas * 5;
  score = score + shops * 25;
  score = score + factory * 50;
  document.getElementById("score").innerHTML = score;

  document.title = score + "  tacos - Taco Tapper";
}, 1000); // 1000ms = 1second//

var game = {
  score: 0,
};

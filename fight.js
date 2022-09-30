// jamie lannister declarations//

let jamieLannisterHealth = 200;
let jamieLannisterAttack = 25;
let jamieLannisterDefense = 0;

let jamieHp =   document.querySelector(".jamieHp");

let jamieAttackStat = document.querySelector(".jamieAttackStat");

let jamieDefenseStat = document.querySelector(".jamieDefenseStat");

let jamieAttackButton = document.querySelector(".jamieAttackButton");

let jamiePotionButton = document.querySelector(".jamiePotionButton");

let jamieUpgradeButton = document.querySelector(".jamieUpgradeButton");

let jamieDefenseButton = document.querySelector(".jamieDefenseButton");
// end of jamie lannister declarations//


// jon snow declarations//
let jonSnowHealth = 200;
let jonSnowAttack = 25;
let jonSnowDefense = 0;

let jonHp =   document.querySelector(".jonHp");


let jonAttackStat = document.querySelector(".jonAttackStat");

let jonDefenseStat = document.querySelector(".jonDefenseStat");

let jonAttackButton = document.querySelector(".jonAttackButton");

let jonPotionButton = document.querySelector(".jonPotionButton");

let jonUpgradeButton = document.querySelector(".jonUpgradeButton");

let jonDefenseButton = document.querySelector(".jonDefenseButton");
//end of jon snow declarations//


//function to fill html displays//
let fightButton = document.querySelector(".fightButton");

function fillDisplays () {
  jamieHp.textContent = "HP: " + jamieLannisterHealth;
  jamieAttackStat.textContent = "Attack power: " + jamieLannisterAttack;
  jamieDefenseStat.textContent = "Defense: " + jamieLannisterDefense;
  jonHp.textContent = "HP: " + jonSnowHealth;
  jonAttackStat.textContent = "Attack power: " + jonSnowAttack;
  jonDefenseStat.textContent = "Defense: " + jonSnowDefense;
}

fightButton.addEventListener("click", fillDisplays);
// end of function //


//function to add "disappear" css if a character dies//
let jamiePic = document.querySelector(".jamiePic");

let jonPic = document.querySelector(".jonPic");

function deathFunction() {
  if (jamieLannisterHealth <= 0) {
    jamiePic.classList.add("disappear");
    console.log("Jamie Lannister has been slain")
  }
  if (jonSnowHealth <= 0) {
    jonPic.classList.add("disappear");
    console.log("Jon Snow has been slain");
  }
}
// end of function//


// functions to add health when potion button is clicked//
function jamieAddHealth() {
  jamieLannisterHealth += 50;
  fillDisplays();
  console.log("Jamie healed for 50");
  console.log("Jamie's health is now " + jamieLannisterHealth);
}

jamiePotionButton.addEventListener("click", jamieAddHealth);

function jonAddHealth() {
  jonSnowHealth += 50;
  fillDisplays();
  console.log("Jon healed for 50");
  console.log("Jon's health is now " + jonSnowHealth);
}

jonPotionButton.addEventListener("click", jonAddHealth);
// end of function //


// function to attack opponent //
function jamieAttackFunction() {
  jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
  console.log("Jamie attacks Jon for " + (jamieLannisterAttack - jonSnowDefense) + " damage");
  console.log("Jon's health is now " + jonSnowHealth);
  fillDisplays();
  deathFunction();
}

jamieAttackButton.addEventListener("click", jamieAttackFunction);

function johnAttackFunction() {
  jamieLannisterHealth -= jonSnowAttack - jamieLannisterDefense;
  console.log("Jon attacks Jamie for " + (jonSnowAttack - jamieLannisterDefense) + " damage");
  console.log("Jamie's health is now " + jamieLannisterHealth);
  fillDisplays();
  deathFunction();
}

jonAttackButton.addEventListener("click", johnAttackFunction);
// end of function //


// function to upgrade damage output //
function jamieUpgradeDamageFunction() {
  jamieLannisterAttack += 5;
  console.log("Jamie increases attack power by 5");
  console.log("Jamie's attack is now " + jamieLannisterAttack);
  fillDisplays();
}

jamieUpgradeButton.addEventListener("click", jamieUpgradeDamageFunction);

function jonUpgradeDamageFunction() {
  jonSnowAttack += 5;
  console.log("Jon increases attack power by 5");
  console.log("Jon's attack is now " + jonSnowAttack);
  fillDisplays();
}

jonUpgradeButton.addEventListener("click", jonUpgradeDamageFunction);
// end of function //


// function to upgrade defense //
function jamieUpgradeDefense() {
  jamieLannisterDefense += 6;
  console.log("Jamie increased his defense by 6");
  console.log("Jamie's defense is now " + jamieLannisterDefense);
  fillDisplays();
}

jamieDefenseButton.addEventListener("click", jamieUpgradeDefense);

function jonUpgradeDefense() {
  jonSnowDefense += 6;
  console.log("Jon increased his defense by 6");
  console.log("Jon's defense is now " + jonSnowDefense);
  fillDisplays();
}

jonDefenseButton.addEventListener("click", jonUpgradeDefense);

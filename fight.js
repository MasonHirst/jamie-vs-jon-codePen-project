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

let jamiePicDiv = document.querySelector('#jamiePicDiv')
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

let jamiePic = document.querySelector(".jamiePic");

let jonPic = document.querySelector(".jonPic");

let jamieGrave = document.querySelector('#jamie-gravestone')
let jonGrave = document.querySelector('#jon-gravestone')

let jonPicDiv = document.querySelector('#jonPicDiv')

//function to fill html displays//
let fightButton = document.querySelector(".fightButton");

let resetButton = document.querySelector(".resetButton");

function fillDisplays () {
  jamieHp.textContent = "HP: " + jamieLannisterHealth;
  jamieAttackStat.textContent = "Attack power: " + jamieLannisterAttack;
  jamieDefenseStat.textContent = "Defense: " + jamieLannisterDefense; 
  jonHp.textContent = "HP: " + jonSnowHealth;
  jonAttackStat.textContent = "Attack power: " + jonSnowAttack;
  jonDefenseStat.textContent = "Defense: " + jonSnowDefense;
  fightButton.classList.add("vanish");
  resetButton.classList.add("appear");
  makeGrave()
}

fightButton.addEventListener("click", fillDisplays);
// end of function //


//function to cover section with gravestone if character dies
function makeGrave() {
  if (jamieLannisterHealth <= 0) {
    jamieGrave.innerHTML = '<img src="gravestone.png" height=300px class="gravestone-pic">'

    jonPicDiv.innerHTML = '<img class="jamiePic" src="jon-happy-gif.gif" height=240px>'
  }
  if (jonSnowHealth <= 0) {
    jonGrave.innerHTML = '<img src="gravestone.png" height=300px class="gravestone-pic">'

    jamiePicDiv.innerHTML = '<img class="jonPic" src="jamie-happy-gif.gif" height=170px>'
  }
}

//function to remove gravestones on reset
function removeGrave() {
  jamieGrave.innerHTML = ''
  jonGrave.innerHTML = ''

  jamiePicDiv.innerHTML = '<img class="jamiePic" src="https://www.totallytimelines.com/wp-content/uploads/2019/02/Jaime-Lannister.jpg" height=200px>'

  jonPicDiv.innerHTML = '<img class="jonPic" src="https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png" height=240px>'
}
//end of gravestone function



// function to reset fight //
function resetFightFunction() {
  jonSnowHealth = 200;
  jonSnowAttack = 25;
  jonSnowDefense = 0;
  jamieLannisterHealth = 200;
  jamieLannisterAttack = 25;
  jamieLannisterDefense = 0;
  fillDisplays();
  jamiePic.classList.remove("disappear"); 
  jonPic.classList.remove("disappear"); fightButton.classList.remove("vanish")

  removeGrave()
}

resetButton.addEventListener("click", resetFightFunction);
// end of reset function //

//function to add "disappear" css if a character dies//

function deathFunction() {
  if (jamieLannisterHealth <= 0) {  jamiePic.classList.add("disappear");
    console.log("Jamie Lannister has been slain")
    jamieLannisterHealth = 0;
    fillDisplays();
  }
  if (jonSnowHealth <= 0) {
    jonPic.classList.add("disappear");
    console.log("Jon Snow has been slain");
    jonSnowHealth = 0;
    fillDisplays();
  }
}
// end of function//


// functions to add health when potion button is clicked//
function jamieAddHealth() {
  if (jamieLannisterHealth < 150) {
  jamieLannisterHealth += 50;
  fillDisplays();
  console.log("Jamie healed for 50");
  console.log("Jamie's health is now " + jamieLannisterHealth);
  } else {
    jamieLannisterHealth = 200;
    console.log("Jamie is at max health");
    fillDisplays();
  }
}

jamiePotionButton.addEventListener("click", jamieAddHealth);

function jonAddHealth() {
  if (jonSnowHealth < 150) {
    jonSnowHealth += 50;
    fillDisplays();
    console.log("Jon healed for 50");
    console.log("Jon's health is now " + jonSnowHealth);
  } else { 
      jonSnowHealth = 200;
      console.log("Jon is at max health");
      fillDisplays();
  }
}

jonPotionButton.addEventListener("click", jonAddHealth);
// end of function //


// functions to attack opponent //
function jamieAttackFunction() {
  jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
  console.log("Jamie attacks Jon for " + (jamieLannisterAttack - jonSnowDefense) + " damage");
  console.log("Jon's health is now " + jonSnowHealth);
  fillDisplays();
  deathFunction();
  stopJonbuttons();
}


jamieAttackButton.addEventListener("click", jamieAttackFunction);

function jonAttackFunction() {
  jamieLannisterHealth -= jonSnowAttack - jamieLannisterDefense;
  console.log("Jon attacks Jamie for " + (jonSnowAttack - jamieLannisterDefense) + " damage");
  console.log("Jamie's health is now " + jamieLannisterHealth);
  fillDisplays();
  deathFunction();
  stopJamieButtons();
}

jonAttackButton.addEventListener("click", jonAttackFunction);
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
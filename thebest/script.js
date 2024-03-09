const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
let text = document.querySelector('#text');
let health = document.querySelector('#health');
let gold = document.querySelector('#gold');
let exp = document.querySelector('#experiance');
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You find yourself in the bustling Town Square, surrounded by lively villagers and various stalls. The air is filled with the aroma of freshly baked bread and the sounds of merchants haggling. Before you stretches three paths:"
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "As you step into the quaint store, the scent of aged wood and the glow of flickering candles greet you. Wooden shelves line the walls, showcasing an assortment of wares. Behind a worn counter stands the elderly shopkeeper, a wise and weathered figure with a twinkle in their eye. He offers you a warm smile and a friendly nod, as if he's waiting for your next move."
  }
];
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;



function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;

}


function goStore() {
  update(locations[1]);
}

function buyHealth() {
 if (gold >= 10){
   gold -= 10;
   health += 10;
   gold.innerText = gold;
   health.innerText = health;
 }
}

function buyWeapon() {
  console.log("Buying weapon.");
}

function goTown() {
  update(locations[0]);
}

function goCave() {
  console.log("Going to cave.");
}

function fightDragon() {
  console.log("Fighting dragon.");
}

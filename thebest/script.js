//STATS
let xp = 0;
let Maxhealth = 100;
let currentHealth = Maxhealth;
let gold = 3000;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
const weapons = [
  {
    name: "stick",
    power: 5
  },
  {
    name: "dagger",
    power: 15
  },
  {
    name: "straight sword",
    power: 30
  },
  {
    name: "broad sword",
    power: 50
  },
  {
    name: "meteor hammer",
    power: 60
  },
  {
    name: "obsidian cleaver",
    power: 100
  }
];

//AUDIO
var goldAudio = new Audio('gold.wav');
var shopAudio = new Audio('shop.wav');
shopAudio.loop = true;


//HTML RETRIEVAL
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
let text = document.querySelector('#text');
let healthText = document.querySelector('#health');
healthText.innerText = currentHealth;
let goldText = document.querySelector('#gold');
goldText.innerText = gold;
let expText = document.querySelector('#experience');
expText.innerText = xp;
let inventoryText = document.querySelector('#inventoryList');
inventoryText.innerText = inventory;
let currentWeaponText = document.querySelector('#currentWeapon');
currentWeaponText.innerText = inventory[currentWeapon];
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

//LOCATIONS
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You find yourself in the bustling Town Square, surrounded by lively villagers and various stalls. The air is filled with the aroma of freshly baked bread and the sounds of merchants haggling. Before you stretches three paths:"
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "As you step into the quaint store, the scent of aged wood and the glow of flickering candles greet you. Wooden shelves line the walls, showcasing an assortment of wares. Behind a worn counter stands the elderly shopkeeper, a wise and weathered figure with a twinkle in their eye. He offers you a warm smile and a friendly nod, as if he's waiting for your next move."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the dark and ominous cave, its entrance audible only by the eerie whisper of danger. The air is thick with the musty odor of decay, and the sound of dripping water echoes through the tunnel. Ahead, you see a glowing object, its glow dimming as it approaches. The cave splits into two paths, one leading deeper into the darkness, and the other leading to a dimly lit room."
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
  shopAudio.play();
}

function buyHealth() {
  if (currentHealth == Maxhealth) {
    text.innerText = "The shopkeeper smiles warmly as you express your desire for a health potion. \"My dear friend,\" he says kindly, \"it warms my heart to see you hale and hearty. However, your health is already at its zenith, and purchasing more would be a meaningless endeavor. May your vitality endure, and your adventures be ever thrilling!\"";
  }
  else if (gold >= 10) {
    gold -= 10;
    currentHealth += 10;
    if (currentHealth > Maxhealth) {
      currentHealth = Maxhealth;
    }
    goldText.innerText = gold;
    healthText.innerText = currentHealth;
    goldAudio.play();

  }
  else if (currentHealth == Maxhealth) {
    text.innerText = "With a gentle shake of their head, the shopkeeper addresses you, \"Ah, a wise adventurer always seeks to bolster their vitality. However, it seems your coin purse echoes with emptiness today. Worry not, for good health is a treasure in itself. Should you find yourself in need in the future, return with a heavier pouch, and I shall be here to assist you.\"";
  }
  else {
    text.innerText = "The shopkeeper's brows furrow slightly, and a sympathetic smile graces their face. \"Ah, a brave soul in need of mending, but it seems your purse is a bit light today, my friend,\" he says in a warm, reassuring tone. \"Fear not, for fortune favors the persistent. Perhaps there are other ways to amass the gold you seek on your journey. Until then, may your steps be swift and your challenges few.\"";
  }

}

function notEnough() {
  return "Approaching the desired weapon with anticipation, you present your coin pouch to the shopkeeper. Regrettably, a somber expression crosses their face as they examine the meager contents within. The shopkeeper's voice, tinged with sympathy, echoes, \"Ah, a valiant heart, but it seems your purse is a bit light for this particular treasure. These weapons are forged with both skill and gold. Perhaps after a few more adventures, you'll return with a heavier pouch and claim your chosen prize. Until then, may your coin purse grow and your quests be prosperous.\"";
}

function buyWeapon() {
  if (!inventory.includes("dagger")) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "As you eagerly select the modest yet deadly dagger from the array of weapons, the shopkeeper nods in approval. \"Ah, the dagger,\" they say, holding the blade delicately. \"A wise choice for the discerning adventurer. Swift, nimble, and perfect for those who value precision over brute force. May it serve you well in your upcoming endeavors.\" You hand over the required gold, and the shopkeeper exchanges a knowing smile. With your new dagger in hand, you feel a sense of readiness for the challenges that lie ahead."
      inventory.push(newWeapon);
      goldAudio.play();
      inventoryText.innerText = inventory;
      currentWeaponText.innerText = inventory[currentWeapon];

    }
    else {
      text.innerText = notEnough();
    }
  }
  else if (!inventory.includes("straight sword")) {
    if (gold >= 50) {
      gold -= 50;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "Selecting the sturdy straight sword from the assortment of weapons, you feel the weight of its balanced design in your hands. The shopkeeper observes your choice and nods with a sagely smile. \"A classic indeed,\" they remark, \"the straight sword. Versatile, reliable, and a true companion for any journey. May its blade be ever true, and may you find strength in its wield.\" As you exchange the required gold, the shopkeeper wishes you well on your path. With the straight sword at your side, you stride out of the shop, ready to face the challenges that await. "
      inventory.push(newWeapon);
      goldAudio.play();
      inventoryText.innerText = inventory;
      currentWeaponText.innerText = inventory[currentWeapon];

    }
    else {
      text.innerText = notEnough();

    }

  }
  else if (!inventory.includes("broad sword")) {
    if (gold >= 100) {
      gold -= 100;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "With a sense of adventure in your heart, you select the broad sword from the array of weapons. The shopkeeper nods in approval, and you feel a sense of confidence in your choice. \"A true masterpiece,\" they say, \"the broad sword. A masterpiece indeed, a weapon that can strike fear into the hearts of those who dare to face it. May its power be unparalleled, and may you find yourself a true hero.\" As you exchange the required gold, the shopkeeper wishes you well on your path. With the broad sword at your side, you stride out of the shop, ready to face the challenges that await. "
      inventory.push(newWeapon);
      goldAudio.play();
      inventoryText.innerText = inventory;
      currentWeaponText.innerText = inventory[currentWeapon];

    }
    else {
      text.innerText = notEnough();

    }
  }
  else if (!inventory.includes("meteor hammer")) {
    if (gold >= 500) {
      gold -= 500;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "With a mixture of excitement and regret, you select the meteor hammer from the array of weapons. The shopkeeper nods in approval, and you feel a sense of excitement in your choice. \"A legendary weapon,\" they say, \"the meteor hammer. A weapon that can wreak havoc on the world with its mighty power. May its power be unmatched, and may you find yourself a true hero.\" As you exchange the required gold, the shopkeeper wishes you well on your path. With the meteor hammer at your side, you stride out of the shop, ready to face the challenges that await. "
      inventory.push(newWeapon);
      goldAudio.play();
      inventoryText.innerText = inventory;
      currentWeaponText.innerText = inventory[currentWeapon];

    }
    else {
      text.innerText = notEnough();
    }
  }
  else if (!inventory.includes("obsidian cleaver")) {
    if (gold >= 2000) {
      gold -= 2000;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "Your eyes lock onto the majestic Obsidian Cleaver, a legendary weapon of unparalleled might. The shopkeeper's expression shifts to one of deep respect as they carefully retrieve the weapon. \"Ah, the Obsidian Cleaver,\" they intone, \"a rare and formidable choice. Forged in the fires of ancient craftsmanship, its obsidian blade can cleave through the darkest adversaries. May it become an extension of your will, a beacon of your strength.\" As you part with a considerable sum of gold, the shopkeeper's parting words echo, \"May the Obsidian Cleaver guide you to glory, brave adventurer. With such a weapon, you are destined for legendary feats and epic tales.\" Armed with this extraordinary blade, you leave the shop, ready to carve your name into the annals of history. May your path be glorious and your foes tremble before you!"
      inventory.push(newWeapon);
      goldAudio.play();
      inventoryText.innerText = inventory;
      currentWeaponText.innerText = inventory[currentWeapon];

    }
    else {
      text.innerText = notEnough();
    }
  }
  else {
    text.innerText = "As you approach the counter, your hands laden with the spoils of your shopping spree, the shopkeeper eyes your purchases with a mix of approval and amusement. \"Well, well! It seems you've cleaned out my humble emporium,\" he chuckles warmly. \"Your taste in weaponry is as diverse as your adventures, my friend. Unfortunately, the stock has been depleted. Perhaps it's time to venture forth and let your new acquisitions shine in the crucible of battle. Farewell, valiant adventurer, and may your victories be as plentiful as your purchases!\"";
    inventoryText.innerText = inventory;
    currentWeaponText.innerText = inventory[currentWeapon];
  }
}

function goTown() {
  shopAudio.pause();
  shopAudio.currentTime = 0;
  update(locations[0]);
  console.log("Going to town.");
}

function goCave() {
  console.log("Going to cave.");
}

function fightDragon() {
  console.log("Fighting dragon.");
}

function fightSlime() {

}

function fightBeast() {

}


// GAME FUNCTIONS //

// function to generate random numeric value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

// function to check if player wants to fight or skip
var fightOrSkip = function () {
  // ask player if they like to fight or skip using fightOrSkip function
  var promptFight = window.prompt('Would you like to fight or skip this battle? Enter "FIGHT" or "SKIP" to choose.');

  //  conditional recursive function call
  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }

  promptFight = promptFight.toLocaleLowerCase();
  //if player chooses to "skip" confirm and then stop loop
  if (promptFight === "skip") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + "has decided to skip this fight. Goodbye!");
      //subtract money from playerInfo.money for skipping
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      // return true if player wants to leave
      return true;
    }
  }
  return false;
};

//fight function (now with paramater for enemy's name)
var fight = function (enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they like to fight or skip using fightOrSkip function
    if (fightOrSkip()) {
      // if true, leave fight by breaking loop
      break;
    }

    //remove enemy health by subtracting the amount set in playerInfo.attack variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining. '
    );

    //check enemy health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');
      //award player money for winning
      playerInfo.money = playerInfo.money + 20;
      //leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has' + enemy.health + ' health left.');
    }


    //remove players health by subtracting the amount set in enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + ' . ' + playerInfo.name + ' now has ' + playerInfo.health + ' now remaining. '
    );

    //check players health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      //leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left. ');
    }
  }
};

// fight each enemy robot by looping them over aqnd fighting them at one time
var startGame = function () {
  // reset player stats
  playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive keep fighting
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

      //pick new enemy to fight based on index of the enemy.names array
      var pickedEnemyObj = enemyInfo[i];
      // reset enemy health before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);

      // pass the pickedenemy.name variables value into the fight function, where it will assume the value of the enemy.name paramater
      fight(pickedEnemyObj);

      // if player is still alive and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    }
    // if player isnt alive, stop the game
    else {
      window.alert('You have lost your robot in battle! Game Over!');
      break;
    }
  }

  // after loop ends, we are either out of playerInfo.health or enemies to fight, so run the endGame function
  endGame();
};

var endGame = function () {
  // if player is still alove player wions
  if (playerInfo.health > 0) {
    window.alert("Great job, youve survived the game! You now have a score of " + playerInfo.money + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }
  // ask player if theyd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    // restart the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

// go to the shop between battles function
var shop = function () {
  // ask player what theyd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to refill your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  // use switch to carry out action
  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
      playerInfo.refillHealth();
      break;
    case "upgrade":
    case "UPGRADE":
      playerInfo.upgradeAttack();
      break;
    case "leave":
    case "LEAVE":
      window.alert("Leaving the store.");
      //do nothing so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      //call shop() again to force player to pick a valid option
      shop();
      break;
  }
};
// END OF GAME FUNCTIONS

// GAME INFO AND VARIABLES //*

// function to set name
var getPlayerName = function () {
  var name = "";
  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  console.log("Your robot's name is " + name);
  return name;
};

//  player information
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert("Refilling players health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You dont have enough money!")
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert("Upgrading players attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You dont have enough money!");
    }
  }
};

// enemy information
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];


// RUN GAME
startGame();
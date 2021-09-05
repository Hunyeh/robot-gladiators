var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
// enemyNames[0] //value would be Roberto
// enemyNames[1]//Amy Android

var enemyHealth = 50;
var enemyAttack = 12;

//fight function
var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    //ask if they would like to fight or run
    var promptFight = window.prompt('Would you like to fight or skip this battle? Enter "FIGHT" or "SKIP" to choose.');

    //if player chooses to "skip" confirm and then stop loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      //if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + "has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    //remove enemy health by subtracting the amount set in playerAttack variable
    enemyHealth = enemyHealth - playerAttack
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining. '
    );

    //check enemy health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');
      //award player money for winning
      playerMoney = playerMoney + 20;
      //leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has' + enemyHealth + ' health left.');
    }

    //remove players health by subtracting the amount set in enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + ' . ' + playerName + ' now has ' + playerHealth + ' now remaining. '
    );

    //check players health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      //leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left. ');
    }
  }
}


//run fight function to start game

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}
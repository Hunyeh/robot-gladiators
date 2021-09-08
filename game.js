var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//fight function (now with paramater for enemy's name)
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
};

// fight each enemy robot by looping them over aqnd fighting them at one time
var startGame = function () {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
      //pick new enemy to fight based on index of the enemyNames array
      var pickedEnemyName = enemyNames[i];
      // reset enemy health before starting new fight
      enemyHealth = 50;

      // pass the pickedEnemyName variables value into the fight function, where it will assume the value of the enemyName paramater
      fight(pickedEnemyName);
    }
    // if player isnt alive, stop the game
    else {
      window.alert('You have lost your robot in battle! Game Over!');
      break;
    }
  }

  // after loop ends, we are either out of playerHealth or enemies to fight, so run the endGame function
  endGame();
};

var endGame = function () {
  // if player is still alove player wions
  if (playerHealth > 0) {
    window.alert("Great job, youve survived the game! You now have a score of " + playerMoney + ".");
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


// play again 
startGame();
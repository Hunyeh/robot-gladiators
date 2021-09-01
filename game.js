var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10
var playerMoney = 10;

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

//fight function
var fight = function() {
    // Alert player that they are starting the round
  window.alert("Welcome to Robot Gladiators!"); 

  //ask player if they'd like to fight or run
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."); 
   
   // if player chooses to fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + "attacked" + enemyName + "now has" + enemyHealth + "now ramaining."
    );

   //check enemy health
    if (enemyHealth <=0) {
      window.alert(enemyName + "has died!");
    } else {
      window.alert(enemyName + "still has" + enemyHealth + "health left.");
    }

    //remove players health by subtracting the amount set in the enemyAttack variable  
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health left."
    );
      
    //check players health
    if (playerHealth <=0) {
      window.alert(playerName + "has dided!");
    } else {
      window.alert(playerName + "still has" + playerHealth + "health left");
    }
  
      //if player chooses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
   if (confirmSkip) {
     window.alert(playerName + "has decided to skip this fight. Goodbye!");
     //subtract money from playerMoney for skipping
     playerMoney = playerMoney - 2;
  }
     // if no (false), ask question again by running "fight()" again
   else {
    fight();
    }
    //if player did not choose option 1 or 2
  } else {
  window.alert("You need to pick a valid option. Try again!");
  }
};

//run fight function to start game
//fight()
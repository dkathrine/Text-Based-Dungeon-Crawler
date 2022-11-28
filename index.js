// Add colors theme to the console
var colors = require("colors");

// Battle gameplay function
const gameplayBattle = (player, enemy) => {
  console.log(
    `    
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣉⡥⠶⢶⣿⣿⣿⣿⣷⣆⠉⠛⠿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⢡⡞⠁⠀⠀⠤⠈⠿⠿⠿⠿⣿⠀⢻⣦⡈⠻⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡇⠘⡁⠀⢀⣀⣀⣀⣈⣁⣐⡒⠢⢤⡈⠛⢿⡄⠻⣿⣿⣿⣿            ––––––––––––––––––
⣿⣿⣿⣿⣿⣿⣿⡇⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠉⠐⠄⡈⢀⣿⣿⣿⣿            "${player.name}"
⣿⣿⣿⣿⣿⣿⣿⠇⢠⣿⣿⣿⣿⡿⢿⣿⣿⣿⠁⢈⣿⡄⠀⢀⣀⠸⣿⣿⣿⣿            HP: ${player.hp}
⣿⣿⣿⣿⡿⠟⣡⣶⣶⣬⣭⣥⣴⠀⣾⣿⣿⣿⣶⣾⣿⣧⠀⣼⣿⣷⣌⡻⢿⣿            MP: ${player.mp}
⡏⠰⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢂⣭⣿⣿⣿⣿⣿⠇⠘⠛⠛⢉⣉⣠⣴⣾            ––––––––––––––––––
⣿⣷⣦⣬⣍⣉⣉⣛⣛⣉⠉⣤⣶⣾⣿⣿⣿⣿⣿⣿⡿⢰⣿⣿⣿⣿⣿⣿⣿⣿                  
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡘⣿⣿⣿⣿⣿⣿⣿⣿⡇⣼⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢸⣿⣿⣿⣿⣿⣿⣿⠁⣿⣿⣿⣿⣿⣿⣿⣿⣿
 `.bold.green
  );

  console.log(
    `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⣲⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠖⠋⢀⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠜⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠊⠀⠀⡠⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠊⡰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠁⠀⠀⡜⠁⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠚⠁⡜⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⢸⠀⠀⠀⠀⢀⣀⣀⠤⠖⠈⠀⠀⢀⡜⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⠔⠓⠲⢤⣸⠒⣊⣭⠛⠉⠀⠀⠀⠀⠀⢀⣠⢿⡶⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⠇⠀⠀⠀⠀⣹⠎⠀⠀⠑⡄⠀⢀⡠⠔⢊⡥⢺⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣠⠎⠀⠀⠀⣠⠞⠁⠀⠀⠀⢀⣾⠋⠁⣠⠞⠁⠀⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀–––––––––––––––––
⠀⠀⠀⠀⢰⠃⠀⡠⠊⡜⠁⠀⠀⠀⢀⡊⠁⠁⠀⢊⡀⠀⠀⠀⣀⣉⣓⣦⡤⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"${enemy.name}"
⠀⠀⠀⠀⠘⡤⠊⠁⠸⠀⠀⠀⡠⡖⡝⠀⠀⠀⠀⠀⠈⢉⡩⠭⠒⢋⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ HP: ${enemy.hp}
⠀⠀⠀⠀⡸⠁⠀⠀⠀⠑⠒⠛⠒⠋⠁⠀⠀⠀⠀⠀⠀⠘⠤⣀⡀⠈⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀–––––––––––––––––
⠀⠀⣀⠜⠁⠀⠀⠀⠀⠀⠀⢀⣀⠤⠄⠀⠀⠀⡰⠚⢧⠉⠒⠒⠮⠽⣾⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢠⠋⠁⡠⣖⠂⠀⠀⠀⡠⠋⠉⠀⡀⠀⠀⢀⡴⠁⠀⠸⡄⠀⠀⠀⠀⡇⠙⢌⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⠀⠘⠐⠁⣀⡠⠔⠋⣀⣀⡴⠚⠓⡶⣞⣉⣀⣀⡠⢤⠇⠀⠀⠀⢰⣃⡀⠈⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⢧⣀⣠⡊⠁⡀⣠⠞⠁⠀⠀⠀⡜⠁⠀⠀⠀⠀⠀⡜⠀⠀⠀⠀⣿⠀⠈⠑⢄⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠰⣽⢻⡏⠁⠀⠀⠀⢀⠞⠑⠦⠤⠤⠤⠄⡸⠁⠀⠀⠀⢸⠉⣆⠀⠀⠘⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠹⠀⠃⠀⠀⠀⢀⢏⠀⠀⠀⠀⠀⠀⡰⠁⠀⠀⠀⠀⢸⠀⠘⡄⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠑⠦⠤⠤⠄⢲⠁⠀⠀⠀⠀⠀⠘⣆⣀⣹                
  `.bold.red
  );
  if (player.hp > 0) {
    var battle = require("readline-sync"),
      skills = player.skills.map((el) => el.name),
      index = battle.keyInSelect(skills, "Choose a skill to attack");
    player1.attack(index, enemy);
    console.log(`You attacked with ${skills[index]}`);
    if (enemy.hp > 0) {
      enemy.attack(0, player);
      console.log(`The enemy attacked you with ${enemy.skills[0].name}`);
      gameplayBattle(player, enemy);
    } else if (enemy.hp <= 0) {
      console.log(`Victory ${enemy.name} was killed`.bold.underline.green);
      player.level.exp = player.level.exp + enemy.exp;
      // If experience exceeds 50, it levels up
      if (player.level.exp >= 50) {
        player.level.level++;
        player.level.exp = player.level.exp - 50;
      }
      player.gold = player.gold + enemy.gold;
      player.hp = 100 * player.level.level;
      player.mp = 100 * player.level.level;
      enemy.hp = randomLevel * 30;
      player.score++;
      console.log(`Score: ${player.score}`);
      if (!player.skills.includes(atomic)) {
        if (player.level.level === 3) {
          var newSkill = require(`readline-sync`);
          if (
            newSkill.keyInYN(`You can learn a new skill!! Wanna learn it?`.cyan)
          ) {
            //Y
            console.log(`You've learned the new skill "I AM ATOMIC"`);
            player.learnAttackSkill(atomic);
          } else {
            //N
            console.log(`You've not learned the new skill.`);
          }
        }
      }

      return player.listStatus(), startRoom();
    }
  } else if (player.hp <= 0) {
    console.log(
      `
            *********
          *************
         *****     *****
        ***           ***
       ***             ***
       **    0     0    **
       **               **                  ____
       ***             ***             //////////
       ****           ****        ///////////////  
       *****         *****    ///////////////////
       ******       ******/////////         |  |
     *********     ****//////               |  |
  *************   **/////*****              |  |
 *************** **///***********          *|  |*
************************************    ****| <=>*
*********************************************|<===>* 
*********************************************| <==>*
***************************** ***************| <=>*
******************************* *************|  |*
********************************** **********|  |*
*********************************** *********|  |`.bold.red
    );
    console.log(`                You lose.                   `.bold.red);
  }
};

// Classes and variable declarations

class Level {
  constructor(level) {
    this.level = level;
    this.exp = 0;
  }
}

class Skills {
  constructor(name, dmg, mpCost) {
    this.name = name;
    this.dmg = dmg;
    this.mpCost = mpCost;
  }
}

class Player {
  constructor(name, hp, mp, location) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;

    this.location = location;

    // "Static values" of our player

    this.level = new Level(1); // levels up with constant exp
    this.gold = 0;
    this.skills = [];
    this.score = 0;
  }

  learnAttackSkill(skill) {
    this.skills.push(skill);
    return `You learned ${skill.name}.`;
  }

  listSkills() {
    return this.skills;
  }

  listStatus() {
    console.log(
      `Status:
        Name: ${this.name}
        HP: ${this.hp}
        MP: ${this.mp}
        Level: ${this.level.level}
        Skills: ${this.skills.map(
          (skill) => `
            Name: ${skill.name} 
            Damage: ${skill.dmg} 
            Mana Cost: ${skill.mpCost}
            <><><><><><><><><><><><><><>`
        )}`.bold.yellow
    );
  }

  attack(skillIndex, target) {
    if (target.hp <= 0) {
      console.log(`${target.name} was killed`);
    } else if (this.mp - this.skills[skillIndex].mpCost <= 0) {
      console.log("Not enough mana, cannot launch that skill!");
    } else {
      target.hp = target.hp - this.skills[skillIndex].dmg * this.level.level;
      this.mp = this.mp - this.skills[skillIndex].mpCost;
      console.log(
        `${target.name} took ${
          this.skills[skillIndex].dmg * this.level.level
        } damage`.magenta
      );
    }
  }
}

let randomLevel = Math.floor(Math.random().toFixed(1) * 5) + 1;

class Enemy extends Player {
  constructor(name) {
    super(name);
    this.hp = randomLevel * 35;
    this.exp = randomLevel * 10;
    this.gold = randomLevel * 5;
    this.level = new Level(randomLevel);
  }

  showEnemy() {
    return `A Level ${this.level} ${this.name} appeared!`;
  }

  attack(skillIndex, target) {
    target.hp =
      target.hp -
      (this.skills[skillIndex].dmg / 3 + this.level.level).toFixed();
    console.log(
      `${target.name} took ${(
        this.skills[skillIndex].dmg / 3 +
        this.level.level
      ).toFixed()} damage`.red
    );
    if (target.hp <= 0) {
      console.log(`${target.name} was killed`);
    }
  }
}

class Location {
  constructor(name, locations, enemy) {
    this.name = name;
    this.locations = locations;
    this.enemy = enemy;
  }
}

// Skills
let scream = new Skills("Scream of Fear", 5, 1);
let thunderbolt = new Skills("Thunder Bolt", 20, 10);
let tsunami = new Skills("Tsunami", 20, 10);
let atomic = new Skills("I AM ATOMIC", 999999, 100);
// ------Player Skills above-----------Enemy Skills beneath------
let sliming = new Skills("Sliming", 5, 5);
let webs = new Skills("Shoot Webs", 5, 5);
let boneDart = new Skills("Bone Dart", 20, 10);
let slash = new Skills("Slash", 15, 10);
let fireBreath = new Skills("Fire Breath", 20, 10);
let tailSwing = new Skills("Tail Swing", 10, 7);
let wingSlap = new Skills("Wing Slap", 15, 10);
let iceCicle = new Skills("Ice Cicle", 20, 10);
let shieldCharge = new Skills("Shield Charge", 20, 10);
let maceSwing = new Skills("Swings Mace", 15, 10);
let sonar = new Skills("Sonar", 5, 5);

// Enemies declarations
let slime = new Enemy("Slime");
slime.learnAttackSkill(sliming);
let spider = new Enemy("Spider");
spider.learnAttackSkill(webs);
let skeleton = new Enemy("Skeleton");
skeleton.learnAttackSkill(boneDart);
let minotaur = new Enemy("Minotaur");
minotaur.learnAttackSkill(slash);
let dragon = new Enemy("Dragon");
dragon.learnAttackSkill(fireBreath);
let lizard = new Enemy("Lizard");
lizard.learnAttackSkill(tailSwing);
let crusader = new Enemy("Crusader");
crusader.learnAttackSkill(shieldCharge);
let orc = new Enemy("Orc");
orc.learnAttackSkill(maceSwing);
let bat = new Enemy("Bat");
bat.learnAttackSkill(sonar);
let frozenSpirit = new Enemy("Frozen Spirit");
frozenSpirit.learnAttackSkill(iceCicle);
let ghost = new Enemy("Ghost");
ghost.learnAttackSkill(scream);
let harpy = new Enemy("Harpy");
harpy.learnAttackSkill(wingSlap);
let enemies = [
  slime,
  spider,
  skeleton,
  minotaur,
  dragon,
  lizard,
  crusader,
  orc,
  bat,
  frozenSpirit,
  ghost,
  harpy,
];
const randomEnemy = () => {
  let random = Math.floor(Math.random() * 12);
  return enemies[random];
};

// Location declarations
let dungeonStart = new Location("Start");
let jail = new Location("Jail", dungeonStart, randomEnemy());
let library = new Location("Library", dungeonStart, randomEnemy());
let tomb = new Location("Tomb", dungeonStart, randomEnemy());
let kitchen = new Location("Kitchen", dungeonStart, randomEnemy());
let shrine = new Location("Shrine", dungeonStart, randomEnemy());
let eatingHall = new Location("Eating Hall", dungeonStart, randomEnemy());
let armory = new Location("Armory", dungeonStart, randomEnemy());
let garden = new Location("Garden", dungeonStart, randomEnemy());
let courtHall = new Location("Courthall", dungeonStart, randomEnemy());
let summoningRoom = new Location("Summoning Room", dungeonStart, randomEnemy());
dungeonStart.locations = [
  jail,
  library,
  tomb,
  kitchen,
  shrine,
  eatingHall,
  armory,
  garden,
  courtHall,
  summoningRoom,
];

// Add syncronous redline
let rl = require(`readline-sync`);

// Game start
let playername = rl.question("What is your name? ".bold, (answer) => {});
let player1 = new Player(playername, 100, 100, dungeonStart.name);
player1.learnAttackSkill(scream);
player1.learnAttackSkill(thunderbolt);
player1.learnAttackSkill(tsunami);
console.log(
  `<><><><><><><><><><><><><><><><><>
        ,     \\    /      ,        
       / \\    )\\__/(     / \\       
      /   \\  (_\\  /_)   /   \\      
 ____/_____\\__\\@  @/___/_____\\____ 
|             |\\../|              |
|              \\VV/               |
|            (Welcome)            |
|_________________________________|
 |    /\\ /      \\\\       \\ /\\    | 
 |  /   V        ))       V   \\  | 
 |/     \`        //       \`     \\|
 \`               V               '
Oh, so your name is ${playername}.
A trial from god was stowed upon you!
You have to overcome 10 fights in order to end this challenge.
Good Luck and let the force be with you.
<><><><><><><><><><><><><><><><><>`.blue
);

console.log(`

`);

const startRoom = () => {
  if (player1.score === 10) {
    console.log(`Congratulations! You've won the game!!!`.rainbow);
    console.log(`
⣯⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡿⠉⠈⠛⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿⣿⡿⠿⠟⠛⠋⠛⡿⣿⣿⣿⣿
⠇⠀⢀⣀⣀⠀⠀⠀ ⠈⣿⣿⣿⣿⣿⣾⣇⠀⡀⠀⢀⣀⣀⣀⣀⠻⣿⣿⣿⣿
⠀⠀⠙⠛⠻⣽⠻⢦⣄⠘⢿⣿⣿⣿⣿⣿⠿⠿⠿⠛⠻⣿⣿⣿⣿⣌⡉⠉⢿⣿
⣶⠀⠐⠆⠀⠀⡾⢦⣬⠓⢼⣿⣿⣿⣿⣿⣶⣦⡀⠄⠀⢀⠠⡤⠁⢀⣀⣿⣿⣿
⣿⣷⡀⠀⠈⣶⣶⣾⣿⡀⣿⣿⣿⣿⣿⣿⣿⣿⣄⡐⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣶⣶⣿⣿⣿⠋⢁⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡟⢰⣿⣿⣿⣿⣿⣩⣿⡍⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡷⠚⠻⢿⡿⠿⠛⠻⢿⠇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⢻⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠐⠀⠀ ⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠈⢿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠈⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠸⣿⡇⠀⠀⠀⠀⠀⠒⠺⠷⠶⠤⠤⢤⣤⣀⠀⠀⠀ ⠈⢿⣿⣿⣿⣿⣿⣿
⠀⠀⢹⣇⠀⠀⣠⣤⣴⣶⣤⣤⣤⣤⣤⣤⣄⣉⣙⣠⣤⣄⣸⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⢿⡆⠰⣿⣿⣿⣯⣭⣉⣙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠘⣧⣀⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣸
`);
  } else {
    var readlineSync = require("readline-sync"),
      locations = dungeonStart.locations.map((loc) => loc.name),
      index = readlineSync.keyInSelect(
        locations,
        "Where do you want to go?".bold.yellow
      );
    player1.location = locations[index];
    console.log("You moved to " + locations[index]);

    switch (player1.location) {
      case jail.name:
        console.log(`The clinking of chains can be heard as you enter an outlandish room, where the polished tile walls show signs of battle. 
You can still see footsteps in the dust of the last person to walk on the clay floor. 
The room is absent of light, but oil lamps line the wall.`);
        if (
          readlineSync.keyInYN(
            `You've encountered a ${jail.enemy.name} wanna fight?`.brightRed
          )
        ) {
          //Y
          console.log("Good Luck".green);
          gameplayBattle(player1, jail.enemy);
        } else {
          //N
          console.log("You cannot run!".underline.red);
          gameplayBattle(player1, jail.enemy);
        }

        break;

      case kitchen.name:
        console.log(`Children's laughter can be heard as you enter a clean circular room with fortified obsidean walls that have deep cracks through to the earth. 
A single deteriorated body lies in the center of the wood floor. 
Torches in the room are already lit. `);
        if (
          readlineSync.keyInYN(
            `You've encountered a ${kitchen.enemy.name} wanna fight?`.brightRed
          )
        ) {
          //Y
          console.log("Good Luck".green);
          gameplayBattle(player1, kitchen.enemy);
        } else {
          //N
          console.log("You cannot run!".underline.red);
          gameplayBattle(player1, kitchen.enemy);
        }

        break;

      case tomb.name:
        console.log(`Beyond the waterfall lies a narrow, ragged room. It's covered in moss, rubble and remains.
Your torch allows you to see rows of vertical tombs, battered and ravaged by time itself.`);
        if (
          readlineSync.keyInYN(
            `You've encountered a ${tomb.enemy.name} wanna fight?`.brightRed
          )
        ) {
          //Y
          console.log("Good Luck".green);
          gameplayBattle(player1, tomb.enemy);
        } else {
          //N
          console.log("You cannot run!".underline.red);
          gameplayBattle(player1, tomb.enemy);
        }
        break;

      case library.name:
        console.log(`Quiet whispers are barely audible as you enter a monumental square room, where the crumbling timber walls have missing portions that show through to the earth.
A thick layer of dust covers the tile floor. 
An unlit chandalier hangs overhead.`);
        if (
          readlineSync.keyInYN(
            `You've encountered a ${library.enemy.name} wanna fight?`.brightRed
          )
        ) {
          //Y
          console.log("Good Luck".green);
          gameplayBattle(player1, library.enemy);
        } else {
          //N
          console.log("You cannot run!".underline.red);
          gameplayBattle(player1, library.enemy);
        }
        break;

      case shrine.name:
        console.log(`Soft, quiet sobs can be heard as you enter a brilliant oval room with immense brick walls. 
Dead vermin cover the battered floor. 
Sunlight trickles into the room.`);
        if (
          readlineSync.keyInYN(
            `You've encountered a ${shrine.enemy.name} wanna fight?`.brightRed
          )
        ) {
          //Y
          console.log("Good Luck".green);
          gameplayBattle(player1, shrine.enemy);
        } else {
          //N
          console.log("You cannot run!".underline.red);
          gameplayBattle(player1, shrine.enemy);
        }
        break;
      case eatingHall.name:
        console.log(`Beyond the kitchen lies a massive, foggy room. It's covered in cobwebs and large bones.
Your torch allows you to see warped and molten metal remnants, pillaged and dismantled by time.`);
        if (
          readlineSync.keyInYN(
            `You've encountered a ${eatingHall.enemy.name} wanna fight?`
              .brightRed
          )
        ) {
          //Y
          console.log("Good Luck".green);
          gameplayBattle(player1, eatingHall.enemy);
        } else {
          //N
          console.log("You cannot run!".underline.red);
          gameplayBattle(player1, eatingHall.enemy);
        }
        break;
      case armory.name:
        console.log(`All sound seems to fade away as you enter a vibrant triangular room, where the ancient timber walls show signs of water damage. 
Insects surry from your sight across the brick floor. 
This room is completely dark, lacking torches or lamps.`);
        if (
          readlineSync.keyInYN(
            `You've encountered a ${armory.enemy.name} wanna fight?`.brightRed
          )
        ) {
          //Y
          console.log("Good Luck".green);
          gameplayBattle(player1, armory.enemy);
        } else {
          //N
          console.log("You cannot run!".underline.red);
          gameplayBattle(player1, armory.enemy);
        }
        break;
      case garden.name:
        console.log(`A path of stone twists around the garden, giving people an elegant way of exploring it and all it has to offer. 
Roots slightly disrupt the pristine look as they hungrily search for even more pieces of land to expand to.`);
        if (
          readlineSync.keyInYN(
            `You've encountered a ${garden.enemy.name} wanna fight?`.brightRed
          )
        ) {
          //Y
          console.log("Good Luck".green);
          gameplayBattle(player1, garden.enemy);
        } else {
          //N
          console.log("You cannot run!".underline.red);
          gameplayBattle(player1, garden.enemy);
        }
        break;
      case courtHall.name:
        console.log(`There is a hard knock from the other side of the door before you enter a tiny septagonal room, where moss covers the dry marble walls. 
The ancient floor is covered by rat droppings. 
An unlit chandalier hangs overhead.`);
        if (
          readlineSync.keyInYN(
            `You've encountered a ${courtHall.enemy.name} wanna fight?`
              .brightRed
          )
        ) {
          //Y
          console.log("Good Luck".green);
          gameplayBattle(player1, courtHall.enemy);
        } else {
          //N
          console.log("You cannot run!".underline.red);
          gameplayBattle(player1, courtHall.enemy);
        }
        break;
      case summoningRoom.name:
        console.log(`The shrieks of a wounded animal pierce the silence as you enter a noteworthy room, where ivy covers the old timber walls. 
Vines and plants grow from the cracks in the timber floor. 
Light seems to be eminating from glowing orbs along the wall.`);
        if (
          readlineSync.keyInYN(
            `You've encountered a ${summoningRoom.enemy.name} wanna fight?`
              .brightRed
          )
        ) {
          //Y
          console.log("Good Luck".green);
          gameplayBattle(player1, summoningRoom.enemy);
        } else {
          //N
          console.log("You cannot run!".underline.red);
          gameplayBattle(player1, summoningRoom.enemy);
        }

        break;
      default:
        break;
    }
  }
  
};


startRoom();

 
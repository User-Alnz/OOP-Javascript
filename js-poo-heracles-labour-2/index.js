const Fighter = require("./src/Fighter.js");
const Shield = require("./src/Shield.js");
const Weapon = require("./src/Weapon.js");

const sword =  new Weapon("sword");
const shield =  new Shield();
const heracles = new Fighter("🧔 Heracles", 20, 6, sword, shield);
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);
let round = 0;


function roundDisplay (fighter1, fighter2)
{
  return `${fighter1.name} 🗡️  ${fighter1.life} 💙 ${fighter2.name} : ${fighter2.life}`;
};

function score (fighter1, fighter2)
{

  if(fighter2.life <= 0)
  {
    return {
      winner: fighter1.name,
      loser: fighter2.name,
    }
  }
  else if(fighter1.life <= 0)
  {
    return {
      winner: fighter2.name,
      loser: fighter1.name,
    }
  }
  return("\n");
};

while(heracles.life > 0 && boar.life > 0 )
{ 
  heracles.fight(boar);
  boar.fight(heracles);

  console.log( 
    roundDisplay( heracles, boar)
  );
  
  round++;
}

const result = score(heracles, boar);
console.log('Winner is = ', result.winner,'. Loser is = ', result.loser);
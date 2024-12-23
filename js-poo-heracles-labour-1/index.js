import { Fighter } from "./src/Fighter.js";

const Heracles = new Fighter("Heracles", 20 , 3 );
const Nemean_lion = new Fighter("Nemean Lion", 11, 7);
let round = 0;

function WhoHasWon()
{
    if(Heracles.life <= 0)
            Nemean_lion.isAlive();
                else if(Nemean_lion.life <= 0)
                    Heracles.isAlive();
} 

while(Heracles.life > 0 && Nemean_lion.life > 0 )
{
    round++;
    console.log("Fight is underway -- ROUND : ", round);
    console.log("\n");

        Heracles.fight(Nemean_lion);
        Nemean_lion.fight(Heracles);

    console.log("\n");
}

WhoHasWon();
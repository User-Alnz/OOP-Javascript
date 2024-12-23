
const MAX_LIFE = 100;

export class Fighter { 


    constructor(name, strength, dexterity)
    {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE; 
    }

    fight(Defender)
    {
    
        let damage = (Math.random() * this.strength) - Defender.dexterity; 
        damage =  Math.round(damage);

        if(damage < 0)
            damage = 0;

        Defender.life -= damage;
  
        if(Defender.life == 0)
           Defender.life = 0;

        console.log( "life of", Defender.name, "is now => ", Defender.life); 
    }

    isAlive()
    {
        console.log("Winner is ", this.name);
        console.log(this.name, "is Alive : ", this.life );
    }
}
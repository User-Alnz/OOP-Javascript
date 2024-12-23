const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity, weapon = null, shield = null) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
        this.weaponPropriety = weapon;
        this.shieldPropriety = shield;
    }

    getdamage(){

        if(this.weaponPropriety == null)
            return this.strength;
        else 
            return this.strength = this.strength + this.weaponPropriety.damages;
    }

    getdefense(defender){
        if(defender.protection == null)
            return defender.dexterity;
        else
            return defender.dexterity = defender.dexterity + defender.protection; 
    }

    fight(defender) {
        const guessDamage = this.getdamage();
        const attackPoints = this.getRandomInt(guessDamage);
        const damages = Math.max(attackPoints - defender.getdefense(defender), 0);
        defender.life = Math.max(defender.life - damages, 0);
    }

    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }

    isAlive() {
        return this.life > 0;
    }
}

module.exports = Fighter;

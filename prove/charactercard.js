const characterCard = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 80,
    image: "images/snortleblat.png", 
    
    attacked: function() {
        if (this.health > 0) {
            this.health -= 20;
            console.log(`${this.name} was attacked! Health: ${this.health}`);
            
            if (this.health <= 0) {
                this.health = 0; 
                console.log(`${this.name} has died!`);
                alert(`${this.name} has died!`);
            }
        } else {
            console.log(`${this.name} is already dead.`);
        }
        this.updateDOM(); 
    },

    levelUp: function() {
        this.level += 1;
        console.log(`${this.name} leveled up! New Level: ${this.level}`);
        this.updateDOM(); 
    },

    
    updateDOM: function() {
        document.getElementById('character-name').textContent = this.name;
        document.getElementById('character-class').textContent = this.class;
        document.getElementById('character-level').textContent = this.level;
        document.getElementById('character-health').textContent = this.health;
        
        const attackButton = document.getElementById('attack-button');
        if (this.health <= 0) {
            attackButton.disabled = true;
            attackButton.textContent = "DECEASED";
        } else {
            attackButton.disabled = false;
            attackButton.textContent = "Attacked";
        }
    }
};


document.getElementById('attack-button').addEventListener('click', () => {
    characterCard.attacked();
});

document.getElementById('level-up-button').addEventListener('click', () => {
    characterCard.levelUp();
});

window.onload = () => {
    characterCard.updateDOM();
};
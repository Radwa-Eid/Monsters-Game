let click;
let btn = document.querySelectorAll('.btn')

btn.forEach(element => {
    element.addEventListener("click", function () {
        click = element.innerHTML
        if (click === "Player") {
            player.hit(monster)
        }
        else {
            monster.hit(player)
        }
        console.log("player", player)
        console.log("monster", monster)
    })
});


class Hit {
    hit(character) {
        if (character.hp <= 0) {
            console.log("Game Over");
            document.getElementById("gameOver").style.display = "block";
            document.getElementById("game").style.display = "none";
            document.getElementById("winner").innerHTML = `${character.name} is The Loser`;

        } else {
            if (character == player) {
                character.hp -= 10;
            } else {
                character.hp -= 20;
            }
        }
    }
}

class Player extends Hit {
    constructor() {
        super();
        this.name = "Guru";
        this.hp = 100;
    }
}

class Monster extends Hit {
    constructor() {
        super();
        this.name = "Gacks";
        this.hp = 100;
    }
}

const player = new Player();
const monster = new Monster();

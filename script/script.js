new Vue({
  el: "#app",
  data: {
    message: "Победа",
    win: false,
    newGame: false,
    player: {
      name: "Sub Zero",
      health: 0
    },
    computer: {
      name: "Ermak",
      health: 0
    }
  },
  methods: {
    runGame() {
      this.player.health = 100;
      this.computer.health = 100;
      this.player.name = "Sub Zero";
      this.computer.name = "Ermak";
      this.newGame = true;
      this.win = false;
    },
    giveUp() {
      this.newGame = false;
      this.player.health = 0;
      this.player.name = "Looser";
    },
    attack() {

      this.computer.health -= this.calculateDamage(3, 10);

      if (this.checkWin()) {
        return;
      }

      this.player.health -= this.calculateDamage(5, 12);

      this.checkWin();

      

    },
    superAttack() {

    },
    heal() {

    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin() {
      if (this.player.health <= 0) {
        this.player.health = 0;
        this.newGame = false;
        this.win = true;
        this.message = "Проиграл";
        this.player.name = "Looser";
        return true;
      }

      if (this.computer.health <= 0) {
        this.computer.health = 0;
        this.newGame = false;
        this.win = true;
        this.computer.name = "Looser";
        this.message = "Победа";
        return true;
      }

      return false;

    }

  }
});
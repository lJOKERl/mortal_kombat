new Vue({
  el: "#app",
  data: {
    message: "Победа",
    win: false,
    newGame: false,
    player: {
      name: "Sub Zero",
      health: 0,
      froze: true,
    },
    computer: {
      name: "Ermak",
      health: 0,
      block: false,
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
      this.player.froze = false;
      this.computer.block = true;


      setTimeout(() => {
        this.player.froze = true;
        
      }, 750);

      
      this.computer.health -= this.calculateDamage(3, 10);

      if (this.checkWin()) {
        return;
      }

      setTimeout(() => {
        this.computer.block = false;
      }, 1200);


      this.player.health -= this.calculateDamage(5, 12);

      this.checkWin();
    },
    superAttack() {
      this.player.froze = false;
      this.computer.block = true;


      setTimeout(() => {
        this.player.froze = true;

      }, 750);


      this.computer.health -= this.calculateDamage(10, 20);

      if (this.checkWin()) {
        return;
      }

      setTimeout(() => {
        this.computer.block = false;
      }, 1200);


      this.player.health -= this.calculateDamage(5, 12);

      this.checkWin();
    },
    heal() {
      this.player.health += 15;
      
      if (this.player.health > 100) {
        this.player.health = 100;
      }

      
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
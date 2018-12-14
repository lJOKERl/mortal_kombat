new Vue({
  el: "#app",
  data: {
    counter: 30,
    message: "Победа",
    subzero: '<img src="images/sub_zero.gif">',
    scorpion: '<img src="images/scorpion.gif">',
    blood: '<img src="images/blood.gif" class="blood">',
    win: false,
    press: false,
    newGame: false,
    player: {
      name: "Sub Zero",
      health: 0,
    },
    computer: {
      name: "Ermak",
      health: 0,
    }
  },
  methods: {
    runGame() {
      this.player.health = 100;
      this.computer.health = 100;
      this.player.name = "Sub Zero";
      this.computer.name = "Ermak";
      this.subzero = '<img src="images/sub_zero.gif">',
        this.scorpion = '<img src="images/scorpion.gif">',
      this.newGame = true;
      this.win = false;

      var count = setInterval(() => {
        this.counter--;
      }, 990);
      
    },
    giveUp() {
      this.newGame = false;
      this.player.health = 0;
      this.player.name = "Looser";

      this.subzero = '<img src="images/sub_zero_loose.gif">';

      setTimeout(() => {
        this.subzero = '<img src="images/sub_zero.gif">';
      }, 3300);

      if (this.checkWin()) {
        return;
      }
    },
    attack() {
      this.subzero = '<img src="images/sub_zero_slide.gif" class="slide">';
      this.scorpion = '<img src="images/scorpion_take_attak.gif">';
      
      setTimeout(() => {
        this.press = false;
        this.press = true;
      }, 300);

      setTimeout(() => {
        this.press = false;
      }, 800);

      setTimeout(() => {
        this.subzero = '<img src="images/sub_zero.gif">';
      }, 750);

      this.computer.health -= this.calculateDamage(3, 10);

      if (this.checkWin()) {
        return;
      }

      setTimeout(() => {
        this.scorpion = '<img src="images/scorpion_knee_attak.gif">';
      }, 450);

      setTimeout(() => {
        this.scorpion = '<img src="images/scorpion.gif">';
      }, 900);

      this.player.health -= this.calculateDamage(5, 12);

      this.checkWin();
    },
    superAttack() {
      this.subzero = '<img src="images/sub_zero_froze.gif">';
      this.scorpion = '<img src="images/scorpion_take_attak.gif">';

      setTimeout(() => {
        this.subzero = '<img src="images/sub_zero.gif">';
        this.press = true;
      }, 750);

      setTimeout(() => {
        this.press = false;
      }, 1200);

      this.computer.health -= this.calculateDamage(10, 20);

      if (this.checkWin()) {
        return;
      }

      setTimeout(() => {
        this.scorpion = '<img src="images/scorpion_arm_attak.gif" class="arm_attak">';
      }, 400);

      if (this.player.health <= 0) {
        this.scorpion = '<img src="images/scorpion.gif">';
      }

      setTimeout(() => {
        this.scorpion = '<img src="images/scorpion.gif">';
      }, 900);

      this.player.health -= this.calculateDamage(5, 12);

      this.checkWin();
    },
    heal() {
      this.player.health += 5;
      this.subzero = '<img src="images/sub_zero_forward.gif">';
      this.scorpion = '<img src="images/scorpion_block.gif">';

      setTimeout(() => {
        this.subzero = '<img src="images/sub_zero.gif">';
      }, 600);

      setTimeout(() => {
        this.scorpion = '<img src="images/scorpion.gif">';
      }, 600);

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
        this.subzero = '<img src="images/sub_zero_loose.gif">';
        this.newGame = false;
        this.win = true;
        this.message = "Проиграл";
        this.scorpion = '<img src="images/scorpion_win.gif" class="scorpion_win">';
        setTimeout(() => {
          this.scorpion = '<img src="images/scorpion.gif">';
        }, 400);

        this.player.name = "Looser";
        return true;
      }

      if (this.computer.health <= 0) {
        this.computer.health = 0;
        this.scorpion = '<img src="images/scorpion_ko.gif">';
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
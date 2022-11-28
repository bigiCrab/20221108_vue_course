function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      mosterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      let dmg = getRandomNumber(5, 12);
      this.mosterHealth -= dmg;
      this.attackPlayer();
    },
    attackPlayer() {
      let dmg = getRandomNumber(8, 15);
      this.playerHealth -= dmg;
    },
  },
}).mount("#game");

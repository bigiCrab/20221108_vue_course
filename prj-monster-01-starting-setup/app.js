function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  computed: {
    monsterHealthStyle() {
      return { width: this.monsterHealth + "%" };
    },
    playerHealthStyle() {
      return { width: this.playerHealth + "%" };
    },
  },
  methods: {
    attackMonster() {
      let dmg = getRandomNumber(5, 12);
      this.monsterHealth -= dmg;
      this.attackPlayer();
    },
    attackPlayer() {
      let dmg = getRandomNumber(8, 15);
      this.playerHealth -= dmg;
    },
  },
}).mount("#game");

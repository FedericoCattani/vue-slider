const { createApp } = Vue;


createApp({


  data() {
    return {
      posters: [
        "01.webp",
        "02.webp",
        "03.webp",
        "04.webp",
        "05.webp"
      ],
      counter: 0,
      goAutoscroll: true

    }
  },

  methods: {
    nextPrev(isNext) {
      isNext ? this.counter++ : this.counter--;

      if (this.counter === this.posters.length) this.counter = 0;
      if (this.counter < 0) this.counter = this.posters.length - 1;
    },

    startAutoscroll() {
      setInterval(() => {
        if (this.goAutoscroll) this.nextPrev(true)
      }, 2600)
    }
  },

  mounted() {
    this.startAutoscroll()
  }

}).mount('#app')
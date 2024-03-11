<script>
export default {
  data() {
    return {
      canvasWidth: 200,
      canvasHeight: 200,
      // initials: null, 
      imageUrl: null,
    }
  },
  props: ['fullName'],
  computed: {
    getInitials() {
      if (!this.fullName || this.fullName.trim() === '') {
        alert('Please enter fullname');
      }
      const words = this.fullName.split(' ');
      if (words.length < 2) {
        alert('Full name must contain at least first name and last name.');
      }
      return words.map(el => el[0]).join('');
    },
  },
  methods: {
    generateImage() {
      // const canvas = document.getElementById('canvas');
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      // const initials = this.getInitials(this.fullName);

      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

      ctx.font = "30px Arial";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.fillText(
        this.getInitials,
        // 10, 50
        this.canvasWidth / 2,
        this.canvasHeight / 2
      );

      const imageDataURL = canvas.toDataURL("image/png");
      this.imageUrl = imageDataURL;

      console.log("imageDataURL", imageDataURL);
    }
  },
  mounted() {
    console.log('props>>', this.$props);
    console.log('props>>', this.$$route);
    // this.getInitials();
    this.generateImage();
  }
}
</script>

<template>
  <div class="wrapper">
    <h2>Generate Image</h2>
    <div>
      <h2>Canvas</h2>
      <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
      <h2>Initials: {{ getInitials }}</h2>
    </div>

    <!-- <button @click="generateImage">Generate Image</button> -->
    <div>
      <h2>Generated Image</h2>
      <img v-if="imageUrl" :src="imageUrl" alt="logo" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-content: center;
  height: 100vh;
}

h2 {
  margin: 0px 0px 5px;
}

canvas {
  border: 1px solid red;
}

button {
  margin-top: 10px;
  margin-bottom: 20px;
  width: 200px;
}
</style>

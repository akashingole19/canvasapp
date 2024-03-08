<script>
export default {
  data() {
    return {
      canvasWidth: 200,
      canvasHeight: 200,
      // initials: this.$route.params.id, 
      imageUrl: ''
    }
  },
  props: ['initials'],
  methods: {
    generateImage() {
      // const canvas = document.getElementById('canvas');
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

      ctx.font = "30px Arial";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.fillText(
        this.initials,
        // 10, 50
        this.canvasWidth / 2,
        this.canvasHeight / 2
      );

      const imageDataURL = canvas.toDataURL("image/png");
      this.imageUrl = imageDataURL;

      console.log("imageDataURL", imageDataURL);
    }
  },
  created() {
    console.log('props>>', this.$props);
    console.log('props>>', this.$$route);
  }
}
</script>

<template>
  <div class="wrapper">
    <h1>Generate Image</h1>
    <div>
      <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>  
      <h1>{{ initials }}</h1>
    </div>
    
    <button @click="generateImage">Generate Image</button>
    <div>
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
canvas {
  border: 1px solid red;
}
button {
  margin-top: 10px;
  margin-bottom: 20px;
  width: 200px;
}
</style>

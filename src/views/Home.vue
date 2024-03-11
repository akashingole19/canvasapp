<script>
export default {
  data() {
    return {
      fullName: ''
    }
  },
  methods: {
    goToNextPage() {
      this.$router.push({
        name: 'Image',
        params: {fullName: this.fullName},
      })
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <input type="text" name="input" placeholder="Enter Fullname" v-model="fullName" />
    <button @click="goToNextPage">Continue</button>
  </div>
</template>

<style scoped>

</style>

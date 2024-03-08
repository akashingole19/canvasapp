<script>
export default {
  data() {
    return {
        initials: ''
    }
  },
  methods: {
    goToNextPage() {
      this.$router.push({
        name: 'Image',
        params: {initials: this.initials},
      })
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <input type="text" name="input" placeholder="Enter Initials" v-model="initials" />
    <button @click="goToNextPage">Continue</button>
  </div>
</template>

<style scoped>

</style>

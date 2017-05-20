<template>
  <div class="test">
    <h1>{{message}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      message: 'Testing!'
    }
  }
}
</script>

<style scoped>
h1 {
  color: #ff00ff;
}
</style>

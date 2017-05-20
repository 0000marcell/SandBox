<template>
  <div class="test2">
    <h1>{{message}}</h1>
  </div>
</template>

<script>
export default {
  name: 'test2',
  data () {
    return {
      message: 'Testing 2!'
    }
  }
}
</script>

<style scoped>
h1{
  color: ffff00;
}
</style>

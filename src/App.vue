<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="./styles/app.scss" lang="sass"></style>


<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  .size{
    width: 100%;
    height: 100%;
  }
  html,body{
    @extend .size;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  #app {
    @extend .size;
  }
  @import "assets/scss/app.scss";
</style>

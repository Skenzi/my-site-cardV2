<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
  overflow: hidden;
}
ul, ol {
  list-style-type: none;
}
button {
  background-color: transparent;
  border: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.container-f {
  display: flex;
  flex-wrap: wrap;
}
.f-between {
  justify-content: space-between;
}
.f-row {
  flex: 1 1 100%;
}
.container-md {
  max-width: 55%;
}
.relitive {
  position: relative;
}
.left-0 {
  left: 0;
}
</style>
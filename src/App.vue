<template>
  <div class="container">
    <h1> App Comentários (isso será um componente no futuro) </h1>
    <hr>
    <Comentarios />
  </div>
</template>

<script>

import Comentarios from './components/Comentarios.vue'

export default {
  name: 'App',
  components: {
    Comentarios
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>

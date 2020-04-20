<template>
  <div id="app" class=".bg-dark">
    <sidebar/>
    <div v-if="breweries">
      <brewer-card  v-for="brewer in breweries" 
                  :key="brewer.id" 
                  :brewer="brewer">
      </brewer-card>
    </div>
    <div v-else>
      <brew-map>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data: function() {
    return {
      breweries: {},
    }
  }
}
</script>

<style>
:root {
  --yellow:"#f7bc13";
  --orange: "#dd5d00";
  --blue: "#293858";
  --light-beige: "#f2f1d3";
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: var(--dark);
    margin: 0 3rem;
    margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <!--<Sidebar/>-->
    <b-btn v-if="breweries" class="float-left" @click="breweries = null">back to map</b-btn>
    <div v-if="breweries">
      <BrewerCard  v-for="brewer in breweries" 
                  :key="brewer.id" 
                  :brewer="brewer">
      </BrewerCard>
    </div>
    <div v-else>
      <BrewMap/>
    </div>
  </div>
</template>

<script>


import EB from "./EB";

export default {
  name: 'App',
  data: function() {
    return {
      breweries: null,
      baseURL: 'https://api.openbrewerydb.org/breweries'
    }
  },
  created() {
    EB.$on('load-breweries-by-state', state_breweries => this.loadBrewsByState(state_breweries));
  },
  methods: {
    loadBrewsByState(stateAbriv){
      fetch(`${this.baseURL}?by_state=${stateAbriv}`, {method:'GET'})
              .then(res => res.json())
              .then(response => this.breweries = response)
              .catch(err=>console.log(err));
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
    margin: 0 3rem;
    margin-top: 60px;
}
</style>

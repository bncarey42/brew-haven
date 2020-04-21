<template>
  <div id="app">
    <loading/>
    <!--<dasy-chain />-->
    <b-btn v-if="breweries.length > 0" class="float-left" @click="reset()">back to map</b-btn>
    <div v-if="breweries.length > 0">
      <BrewerList :breweries="breweries"/>
      <b-btn class="bg-transparent border-2 border-dark rounded text-dark" block @click="loadBrewsByState(state, currentPage+=1)" v-if="more">Load More</b-btn>
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
      breweries: [],
      baseURL: 'https://api.openbrewerydb.org/breweries',
      currentPage: 0,
      state: null,
      more: true,
    }
  },
  created() {
    EB.$on('load-breweries-by-state', state => {
      this.searchType = 'state';
      this.state=state;
      this.loadBrewsByState(state, this.currentPage+=1)});
    EB.$on('load-breweries-by-name', name => {
      this.searchType = 'name';
      this.loadBrewsByName(name, this.currentPage+=1)});
    EB.$on('load-breweries-by-city', city => {
      this.searchType = 'city';
      this.loadBrewsByCity(city, this.currentPage+=1)});
    EB.$on('load-breweries-by-tags', tags => {
      this.searchType = 'tags';
      this.loadBrewsByTags(tags, this.currentPage+=1)});
  },
  methods: {
    reset: function() {
      this.breweries = [];
      this.more = true;
      this.currentPage = 0;
    },
    loadBrewsByState: function (state, page=1, perPage=50) {
      EB.$emit('toggle-loading', `loading breweries for ${state}`);
      fetch(`${this.baseURL}?by_state=${state}&per_page=${perPage}&page=${page}&sort=city`, {method:'GET'})
      .then(res => res.json())
      .then(response => {
        if(response.length > 0) {
          response.forEach(brewery => this.breweries.push(brewery))
        }else {
          this.more = false;
        }
        EB.$emit('toggle-loading')
      })
      .catch(err=> {
        console.log(err);
        EB.$emit('toggle-loading');
      });
    },
    loadBrewsByCity: function (state, page=1, perPage=50) {
      EB.$emit('toggle-loading', `loading breweries for ${state}`);
      fetch(`${this.baseURL}?by_city=${state}&per_page=${perPage}&page=${page}&sort=city`, {method:'GET'})
      .then(res => res.json())
              .then(response => {
                if(response.length > 0) {
                  response.forEach(brewery => this.breweries.push(brewery))
                }else {
                  this.more = false;
                }
                EB.$emit('toggle-loading')
              })
              .catch(err=> {
                console.log(err);
                EB.$emit('toggle-loading');
              });
    },
    loadBrewsByName: function (state, page=1, perPage=50) {
      EB.$emit('toggle-loading', `loading breweries for ${state}`);
      fetch(`${this.baseURL}?by_name=${state}&per_page=${perPage}&page=${page}&sort=city`, {method:'GET'})
              .then(res => res.json())
              .then(response => {
                if(response.length > 0) {
                  response.forEach(brewery => this.breweries.push(brewery))
                }else {
                  this.more = false;
                }
                EB.$emit('toggle-loading')
              })
              .catch(err=> {
                console.log(err);
                EB.$emit('toggle-loading');
              });
    },
    loadBrewsByTags: function (state, page=1, perPage=50) {
      EB.$emit('toggle-loading', `loading breweries for ${state}`);
      fetch(`${this.baseURL}?by_tags=${state}&per_page=${perPage}&page=${page}&sort=city`, {method:'GET'})
              .then(res => res.json())
              .then(response => {
                if(response.length > 0) {
                  response.forEach(brewery => this.breweries.push(brewery))
                }else {
                  this.more = false;
                }
                EB.$emit('toggle-loading')
              })
              .catch(err=> {
                console.log(err);
                EB.$emit('toggle-loading');
              });
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<template>
    <div id="app" class="font-family-main container-fluid">
        <HeaderBar>
            <b-btn v-if="breweries.length > 0"
                   @click="resetList()"
                   class="float-right bg-yellow text-dark-blue font-weight-bold border-0">Reset Brewer List
            </b-btn>
        </HeaderBar>
        <loading/>
        <div class="row">
            <div class="col-10 offset-1">
                <div v-if="breweries.length > 0">
                    <BrewerList :breweries="breweries" :search-type="searchType" :search-val="searchVal" :more="more"/>
                </div>
                <BrewMap v-else/>
            </div>
        </div>


    </div>
</template>

<script>
    import EB from "./EB";

    export default {
        name: 'App',
        data: function () {
            return {
                baseBreweryURL: 'https://api.openbrewerydb.org/breweries',
                breweries: [],
                searchType: null,
                searchVal: null,
                more: true
            }
        },
        created() {
            EB.$on('load-breweries', search => {
                this.searchType = search.type;
                this.searchVal = search.value;
                this.loadBrews(search.page, search.perPage ? search.perPage : 25);
            });

            EB.$on('reset-brewer-list', () => this.reset());
        },
        methods: {
            resetList: function () {
                EB.$emit('reset-brewer-list');
            },
            reset: function () {
                this.breweries = [];
                this.searchType = null;
                this.searchVal = null;
            },
            loadBrews: function (page = 1, perPage = 25) {
                EB.$emit('toggle-loading', `loading breweries for ${this.searchVal}`);
                fetch(`${this.baseBreweryURL}?by_${this.searchType}=${this.searchVal}&per_page=${perPage}&page=${page}&sort=name`, {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'}
                })
                    .then(res => res.json())
                    .then(response => {
                        if (response.length > 0) {
                            response.forEach(brewery => this.breweries.push(brewery))
                        } else {
                            this.more = false;
                        }
                        EB.$emit('toggle-loading')
                    })
                    .catch(err => {
                        console.log(err);
                        EB.$emit('toggle-loading');
                    });
            },
        }
    }
</script>

<style>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
<style scoped>

</style>

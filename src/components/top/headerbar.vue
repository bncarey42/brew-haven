<template>
    <nav class="w-100 p-1 shadow-sm bg-dark-blue mb-4">
        <div class="row">
            <div class="col-3"><h3 class="font-family-header text-yellow">Brew House</h3></div>
            <div class="col-6">
                <div class="row">
                    <div class="col-2">
                        <b-select :options="searchOptions" v-model="search" placeholder="'Search By'"
                                  class="text-dark-blue"/>
                    </div>
                    <div class="col-8">
                        <div class="input-group border-0 h-100 w-100 bg-white rounded">
                            <div class="input-group-prepend border-0">
                                <span class="input-group-text bg-white border-0" id="search-addon">
                                    <i class="fas fa-beer text-muted"></i>
                                </span>
                            </div>
                            <input type="text"
                                   placeholder="Input your search here or click a state below"
                                   class="border-0 rounded-right bg-white float-right w-75"
                                   aria-describedby="search-addon"
                                   v-model="searchTerms"
                                   v-if="search !== 'Locations'"
                            >
                            <input type="number"
                                   placeholder="Input the number of miles from your current location you'd like to search"
                                   class="border-0 rounded-right bg-white float-right w-75"
                                   aria-describedby="search-addon"
                                   v-model="searchTerms"
                                   v-else
                            >
                        </div>
                    </div>
                    <div class="col-2">
                        <b-btn class="search-btn bg-yellow text-dark-blue font-weight-bold border-0"
                               @click="search_by()" block>SEARCH
                        </b-btn>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <slot></slot>
            </div>
        </div>
    </nav>
</template>

<script>
    import EB from "../../EB";

    export default {
        name: "headerbar",
        data: function () {
            return {
                search: 'State',
                searchOptions: ['City', 'State', 'Name', 'Zip', 'Locations', 'Tags'],
                searchTerms: null,
            }
        },
        watch: {
            search: function (search_val) {
                if (search_val === 'Locations') {
                    EB.$emit('set-location');
                }
            }
        },
        methods: {
            search_by: function () {
                this.reset();
                EB.$emit('load-breweries', {
                    type: this.search.toLowerCase(),
                    value: this.searchTerms,
                    page: 0
                })
            },
            reset: function () {
                EB.$emit('reset-brewer-list');
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>
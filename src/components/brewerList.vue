<template>
    <div>
        <BrewerCard v-for="brewer in breweries"
                    :key="brewer.id"
                    :brewer="brewer">
        </BrewerCard>
        <div class="col-10 offset-1">
            <b-btn class="bg-transparent border-2 border-dark rounded text-dark mb-2" block
                   @click="loadMoreBrews()"
                   v-if="more">
                Load More Breweries!
            </b-btn>
            <span v-else class="text-orange font-weight-bold font-family-header">No More Breweries?!</span>
        </div>
    </div>
</template>

<script>
    import EB from "../EB";

    export default {
        name: "brewerList",
        props: {
            breweries: Array,
            searchType: String,
            searchVal: String,
            more: Boolean,
        },
        data: function() {
            return {
                currentPage: 1,
                perPage: 25,
            }
        },
        created() {
            EB.$on('reset-brewer-list',() => this.reset());
        },
        methods: {
            loadMoreBrews: function() {
                this.currentPage += 1;
                EB.$emit('load-breweries', {
                    type: this.searchType,
                    value: this.searchVal,
                    page: this.currentPage,
                    perPage: this.perPage
                });
            },
            reset: function() {
                this.more = true;
                this.currentPage = 1;
                this.searchType = null;
                this.searchVal = null;
            },
        }
    }
</script>

<style scoped>
    .brew-card {
        height: 15rem;
    }
</style>
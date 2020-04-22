<template>
    <b-card

            img-top
            style="max-width: 20rem;"
            class="brew-card border-0 shadow-sm d-inline-block bg-white m-2"
    >
        <b-card-title>
            <a :href="brewer.website_url" target="_blank"><i class="fas fa-beer mr-1 text-yellow"></i><strong class="text-dark-blue">{{brewer.name}}</strong></a>
        </b-card-title>
        <b-card-text>
            <div class="text-left">
                <p class="m-0"><strong>Brewery Type:</strong> {{brewer.brewery_type}}</p>
                <p class="m-0"><strong>Address:</strong> {{brewer.street}}</p>
                <p class="m-0"><strong>City:</strong> {{brewer.city}}</p>
                <p class="m-0"><strong>State:</strong> {{brewer.state}}</p>
            </div>
        </b-card-text>
    </b-card>
</template>

<script>
    export default {
        name: "BrewerCard",
        props: {
            brewer: Object,
        }
    }
</script>

<style scoped>
    .brew-card {
        overflow: hidden;
        max-height: 20rem;
        max-width: 25rem;
    }
</style>

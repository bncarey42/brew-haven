<template>
    <b-card

            img-top
            style="max-width: 20rem;"
            class="brew-card border-0 shadow-sm d-inline-block bg-dark text-light m-2"
    >
        <b-card-title>
            <a :href="brewer.website_url" target="_blank" style="color: #f7bc13;"><i class="fas fa-beer p-1"></i> {{brewer.name}}</a>
        </b-card-title>
        <b-card-text>

            <div class="text-left">
                <p class="m-0">Brewery Type: {{brewer.brewery_type}}</p>
                <p class="m-0">City: {{brewer.city}}</p>
                <p class="m-0">Address: {{brewer.street}}</p>
                <p class="m-0">Website: <a :href="brewer.website_url"></a></p>
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
        width: 25rem;
        height: 15rem;
    }
</style>

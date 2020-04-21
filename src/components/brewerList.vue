<template>
    <div class="">
    <BrewerCard  v-for="brewer in breweries"
                 :key="brewer.id"
                 :brewer="brewer">
    </BrewerCard>
    </div>
</template>

<script>
    export default {
        name: "brewerList",
        props: {
            breweries: Array
        }
    }
</script>

<style scoped>

</style>
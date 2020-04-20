<template>
  <b-card
    :title="brewer.name"
    img-top
    style="max-width: 20rem;"
    class="brew-card rounded shadow-sm d-inline-block m-2 bg-light"
  >
    <b-card-text>
      {{brewer.tags}}
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
}
</style>

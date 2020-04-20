<template>
  <b-card
    :title="brewer.name"
    img-top
    style="max-width: 20rem;"
    class="brew-card rounded shaddow-sm d-inline-block mb-2"
  >
    <b-card-text>
      {{brewer.tags}}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
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

<template>
  <Sample v-bind:user="{firstName: 'Sato', lastName: 123}" />
</template>

<script>
  import Sample from '~/components/Sample.vue'

  export default {
    components: {
      Sample
    }
  }
</script>

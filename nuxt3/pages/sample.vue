<template>
  <Sample />
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator'
  import Sample from "~/components/Sample.vue";

  @Component({ components: { Sample } })
  export default class SamplePage extends Vue {}
</script>

<template>
  <Sample :user="user" />
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import Sample from '~/components/Sample.vue'
  import User from '~/types/user'

  const user: User = {firstName: 'Sato', lastName: 123}

  @Component({ components: { Sample }})
  export default class SamplePage extends Vue {}
</script>

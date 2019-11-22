<template>
  <div>
    <div>Name: {{ fullName }}</div>
    <div>Message: {{ message }}</div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Provide } from 'nuxt-property-decorator'

  interface User {
    readonly firstName: String
    readonly lastName: Number
  }

  @Component
  export default class Sample extends Vue {
    @Provide() user: User = { firstName: 'Sato', lastName: 123 }

    @Provide() message: String = 'This is a message'

    get fullName() {
      return this.user.firstName + " " + this.user.lastName
    }
  }
</script>

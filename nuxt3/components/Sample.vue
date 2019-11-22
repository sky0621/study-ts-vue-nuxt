<template>
  <div>
    <div>Name: {{ fullName }}</div>
    <div>Message: {{ message }}</div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop, Provide } from 'vue-property-decorator'
  import User from '~/types/user'

  @Component
  export default class Sample extends Vue {
    @Prop({ type: Object, required: true }) readonly user!: User

    @Provide() message: String = 'This is a message'

    get fullName() {
      return this.$props.user.firstName + " " + this.$props.user.lastName
    }
  }
</script>

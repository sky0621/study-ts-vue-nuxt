<template>
  <div>
    <div>Name: {{ fullName }}</div>
    <div>Message: {{ message }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
        required: true,
        default: () => ({
          firstName: '',
          lastName: 0
        })
      }
    },

    data() {
      return {
        message: 'This is a message'
      }
    },

    computed: {
      fullName() {
        return this.$props.user.firstName + " " + this.$props.user.lastName
      }
    }
  }
</script>

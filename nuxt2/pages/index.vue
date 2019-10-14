<template>
  <main>
    <h1>{{ greeting }}</h1>
    <h2>{{ res }}</h2>
    <button @click="pBtn">
      BTN
    </button>
    <validation-provider v-slot="{ errors }" rules="required">
      <input v-model="value" name="myinput" type="text">
      <span>{{ errors[0] }}</span>
    </validation-provider>
  </main>
</template>

<script>
import ToMessage from '~/modules/error-message.js'

export default {
  data() {
    return {
      greeting: this.$t(`greeting`, ['たろー', 'じろー']),
      res: 'before'
    }
  },
  methods: {
    pBtn() {
      console.log(this)
      console.log(this.$t)
      this.res = ToMessage(this)
    }
  }
}
</script>

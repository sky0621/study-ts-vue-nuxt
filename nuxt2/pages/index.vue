<template>
  <main>
    <h1>{{ greeting }}</h1>
    <h2>{{ res }}</h2>
    <button @click="pBtn">
      BTN
    </button>
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
      this.res = ToMessage(this)
    }
  }
}
</script>

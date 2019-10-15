import Vue from 'vue'

Vue.mixin({
  methods: {
    ToMessage() {
      if (this.$t) {
        console.log(this.$t(`item_name`))
        const itemName = this.$t(`item_name`)
        return this.$t(`greeting`, [itemName, 'さぶろー'])
      }
      return ''
    }
  }
})

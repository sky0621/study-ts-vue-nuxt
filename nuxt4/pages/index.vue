<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <logo />
        <MyComponent :user="{ firstName: 'taro', lastName: 1234 }" />
        <vuetify-logo />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import MyComponent from '~/components/MyComponent'

export default {
  components: {
    Logo,
    VuetifyLogo,
    MyComponent
  }
}
</script>

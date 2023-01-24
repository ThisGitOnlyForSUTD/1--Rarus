<template>
  <div class="header">
    <div class="header-main" v-if="mobile == true">
      <top-menu />
      <main-menu/>
      <v-navigation/>
    </div>
    <mobile-header v-else/>
  </div>
</template>

<script>
import MainMenu from './MainMenu.vue'
import MobileHeader from './MobileHeader.vue'

import TopMenu from './TopMenu.vue'
import VNavigation from './v-navigation.vue'
export default {
  data () {
    return {
      small: false,
      mobile: false
    }
  },

  created () {
    window.addEventListener('resize', this.onTablet);
    window.addEventListener('resize', this.onMobile);
    this.onTablet();
    this.onMobile()
  },

  components: {
    TopMenu,
    MainMenu,
    VNavigation,
    MobileHeader,
  },
  methods: {
    onTablet () {
      this.small = window.innerWidth > 767;
    },
    onMobile () {
      this.mobile = window.innerWidth > 434;
    }
  }

}
</script>

<style>

</style>
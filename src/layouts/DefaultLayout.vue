<template>
  <section class="layout">
    <the-header/>
    <slot/>
    <mobile-nav v-if="mobile == true"/>
    <the-footer/>
  </section>
</template>

<script>
import TheHeader from '@/components/header/TheHeader.vue'
import MobileNav from '@/components/MobileNav.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  data () {
    return {
      mobile: false
    }
  },
  components: { TheHeader, MobileNav, TheFooter},
  created () {
    window.addEventListener('resize', this.onTablet);
    window.addEventListener('resize', this.onMobile);
    this.onTablet();
    this.onMobile()
  },
  methods: {
    onMobile () {
      this.mobile = window.innerWidth < 434;
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  overflow: hidden;
}
</style>
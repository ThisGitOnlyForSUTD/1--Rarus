<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import PromotionsView from './views/PromotionsView.vue'
export default {
  components: { PromotionsView },
  computed: {
    layout () {
      const layoutName = this.$route.meta.layout || 'DefaultLayout'
      return () => import(`@/layouts/${layoutName}.vue`)
    }
  }
}
</script>

<style>

</style>
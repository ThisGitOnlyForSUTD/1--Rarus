<template>
  <div class="not-found container">
    <img class="not-found-img" src="@/assets/img/notFoundPage.svg" alt="">
    <router-link class="not-found-link" to="/">go back</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.not-found {
  text-align: center;
  width: 100%;
  &-img {
    max-height: 80vh;
  }

  &-link {
    display: block;
    text-decoration: underline;
    font-size: 20px;
    color: #E11C4B;
  }
}
</style>
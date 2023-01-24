<template>
  <div class="promotions container">
    <h2 class="promotions-title">Акции</h2>
    <ul class="promotions-list">
      <li class="promotions-list__item" v-for="item in promoList" :key="item.id">
        <router-link :to='`${item.link}`' class="promotions-list__link">
          <img :src="require(`@/assets/img/cards/card${item.id}.png`)" alt="" class="promotions-list__img">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      promoList: [
        {id: 1, link: '/about', img: "require(`@/assets/img/cards/card1.png`)"},
        {id: 2, link: '/*', img: "require(`@/assets/img/cards/card2.png`)"},
        {id: 3, link: '/*', img: "require(`@/assets/img/cards/card3.png`)"},
        {id: 4, link: '/*', img: "require(`@/assets/img/cards/card4.png`)"},
        {id: 5, link: '/*', img: "require(`@/assets/img/cards/card5.png`)"},
        {id: 6, link: '/*', img: "require(`@/assets/img/cards/card6.png`)"},
        {id: 7, link: '/*', img: "require(`@/assets/img/cards/card7.png`)"},
        {id: 8, link: '/*', img: "require(`@/assets/img/cards/card8.png`)"},
        {id: 9, link: '/*', img: "require(`@/assets/img/cards/card9.png`)"},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.promotions {
  &-title {
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 2px;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    &__item {
      transition: 1s;

      &:hover {
        transform: scale(1.1);
      }
    }

    &__img {
      width: 100%;
      max-width: 361px;
      max-height: 203px;
      box-shadow: 0px 6px 30px 4px rgba(32, 32, 32, 0.1);
      border-radius: 10px;
      margin-top: 22px;

      @media screen and (max-width: 768px) {
        max-width: 345px;
      }
      @media screen and (max-width: 320px) {
        max-width: 290px;
      }
    }
  }
}

</style>
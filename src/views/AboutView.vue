<template>
  <div class="super-sales container">
    <img src="@/assets/img/cards/card1.png" alt="super gaming sales" class="super-sales-img">
    <h3 class="super-sales-title">
      Скидки до 70% на товары для гейминга
    </h3>
    <span class="super-sales-date">
      c 8 октября до 26 октября
    </span>
    <p class="super-sales-text">
      В период с 8 по 26 октября не пропустите скидки до 70% товары для геймеров. Выбирайте товары из акционного списка 
      и при оформлении заказа укажите промокод "GAMER" для активации скидки.
    </p>
    <p class="super-sales-text">
      Цены снижены на компьютеры, ноутбуки, ЖК мониторы, наушники, игровые кресла, геймпады, компьютерные мыши, клавиатуры, коврики для мыши.
    </p>
    <p class="super-sales-text">
      Купите товары для геймеров со скидкой до 70%, гарантией и доставкой в интернет-магазине ЭЛЕКТРОСИТИ. Выгодные цены на товары для геймеров на electrocity.ru!
    </p>
  </div>
</template>

<style lang="scss" scoped>
.super-sales {
  &-img {
    width: 100%;
    max-width: 1150px;
    box-shadow: 0px 6px 30px 4px rgba(32, 32, 32, 0.1);
    border-radius: 10px;
  }

  &-title {
    margin: 36px 0 18px 0;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;

    @media screen and (max-width: 320px) {
      margin: 24px 0 12px 0;
      font-size: 24px;
      line-height: 28px;
    }
  }

  &-date {
    display: block;
    font-size: 22px;
    line-height: 26px;
    color: #939393;
    font-weight: 300;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
      margin-bottom: 16px;
    }

    @media screen and (max-width: 320px) {
      margin-bottom: 20px;
    }
  }

  &-text {
    margin-top: 14px;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    max-width: 1015px;

    @media screen and (max-width: 768px) {
      max-width: 674px;

      &:last-child {
      max-width: 715px;
    }
    }

    &:last-child {
      max-width: 1080px;
    }
  }
}
</style>
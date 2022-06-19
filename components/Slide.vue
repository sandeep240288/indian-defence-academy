<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
</script>

<template>
    <Carousel :autoplay="2000" :wrap-around="false">
        <template #slides>
            <Slide v-for="(slide, index) in 5" :key="index">
                <div v-if="slide<5" class="carousel__item"> <img :src="`assets/image/slides1/${slide}.jpg`" alt=""
                        loading="lazy" /></div>
                <div v-if="slide==5">
                    <Slider></Slider>
                </div>
            </Slide>
        </template>
        <template #addons>
            <navigation />
            <pagination />
        </template>
    </Carousel>
</template>
<style scoped>

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>

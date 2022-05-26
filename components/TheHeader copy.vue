<template>
  <nav class="mb-9">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" aria-label="logo" class="h-12">
        <div class="flex justify-start items-center">
          <img src="~/assets/image/logo.png" class="h-20" alt="brand logo" />
          <!-- <h4 class="text-2xl font-semibold">दि इंडियन डिफेंस एकेडमी</h4> -->
          <h4 class="text-2xl font-semibold">The Indian Defence Academy</h4>
        </div>
      </NuxtLink>
      <div class="block" :class="[x?'':'md:hidden']">
        <button
          class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div :class="[x ? '' : 'lg:block']">
        <ul :class="[x ? 'md:hidden flex-col' : 'inline-flex']">
          <li>
            <NuxtLink to="/" class="px-4 hover:text-gray-800">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/batches" class="px-4 hover:text-gray-800">Batches</NuxtLink>
          </li>
          <!-- <li>
            <NuxtLink to="/facilities" class="px-4 hover:text-gray-800">Facilities</NuxtLink>
          </li>-->
          <li>
            <NuxtLink to="/contact" class="px-4 hover:text-gray-800">Contact Us</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";
let x = ref(false);
const isopen = computed(() => {
  return (x.value = !x.value);
});
</script>
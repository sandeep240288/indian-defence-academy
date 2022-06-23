<template>
  <div class="bg-white shadow-md mb-2 w-full backdrop-blur">
    <nav class="container pl-2 pr-6 py-1 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" aria-label="logo">
          <div class="flex justify-start items-center">
            <img src="~/assets/image/logo.png" class="h-20" alt="brand logo" />

            <h4 class="text-2xl font-semibold">The Indian Defence Academy</h4>
          </div>
        </NuxtLink>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button" class="hover:text-blue-400 focus:outline-none focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="hover:text-red-400">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <!-- <li class="hover:text-red-400">About</li> -->
        <li class="hover:text-red-400">
          <NuxtLink to="/batches">Batches</NuxtLink>
        </li>
        <!-- <li class="hover:text-red-400">
          <NuxtLink to="/articles">Articles</NuxtLink>
        </li>
        <li class="hover:text-red-400">
          <NuxtLink to="/md-articles">blogs</NuxtLink>
        </li>-->
        <li class="hover:text-red-400">
          <NuxtLink to="/contact">Contact Us</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
import { ref } from "vue";
let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
</script>
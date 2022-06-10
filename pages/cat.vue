<template>
    <div class="h-screen px-10 py-4">
        <h3 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Latest Cat Facts</h3>
        <div class="grid md:grid-cols-3 sm:grid-cols-1  gap-4">
            <div v-for="cat in cats" :key="cat._id">
                <div
                    class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {{ cat.text }}
                        </h5>
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
let cats = ref([])

async function catsData(){
    const response = await fetch(`/.netlify/functions/cat`)
    console.log(response);
    cats.value = response
    console.log(cats.value);

    // const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts';

    // let options = {
    //     headers: {
    //         "Accept": "application/json",
    //     }
    // };
    // const response = await fetch(API_ENDPOINT, options);
    // const data = await response.json();
    // cats.value =data; 
}
// }
onMounted(() => {
    catsData()
})
</script>

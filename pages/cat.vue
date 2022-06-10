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
// const options ={ 
//   baseURL: "https://whispering-stream-89457.herokuapp.com" ,
//   headers:{ 
//   token:'ZRfWX6ScXAb69l36Fre7sTNm4FHhZaq5mJX010vP',
//     "Accept": "application/json",
//   } 
// };


const { data: cats, refresh } = useLazyAsyncData('cats', () => $fetch(`/.netlify/functions/cat`))
    
watch(cats, (x) => {
    // Because count starts out null, you won't have access
    // to its contents immediately, but you can watch it.
    console.log(x);
    console.log('I am inside articles vue  watch function');
})


</script>

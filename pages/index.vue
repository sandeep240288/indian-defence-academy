<template>
  <div class="z-30">
    <div class="h-1/3 md:px-20 sm:px-10" style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)">
      <Slide />
    </div>
    <section>
      <p class="p-20">
        THE INDIAN DEFENCE ACADEMY is one of the best coaching institute for the preparation of Army ,Navy and Air
        Force, UP Police Examinations. We mentoring students for Army ,Navy and Air Force, UP Police and other one day
        related examinations. Experienced and updated faculty teaches students how to handle these examination
        specifically we focus on the format and type of questions likely to be asked in the exam. Students can learn
        many formulae and shortcuts to get quick and accurate answers while attempting the examination.
      </p>
    </section>
    <section class="container mx-auto px-6 p-10">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">Facilities Available</h2>
      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">Trainings</h4>
          <p class="text-gray-600 mb-8">Training on Physical, Mental and Written Exams</p>
        </div>
        <div class="w-full md:w-1/2">
          <!-- <img src="assets/health.svg" alt="Monitoring" /> -->
        </div>
      </div>

      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <!-- <img src="assets/report.svg" alt="Reporting" /> -->
        </div>
        <div class="w-full md:w-1/2 pl-10">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">PlayGround</h4>
          <p class="text-gray-600 mb-8">Own PlayGround for Exercise and Games</p>
        </div>
      </div>

      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">Hostel Facility</h4>
          <p class="text-gray-600 mb-8 px-10">We provide you with the best hostel Facility. Our focus is on creating an amicable learning environment for our students & make Defence Exams
            cleared.</p>
        </div>
        <div class="w-full md:w-1/2">
          <!-- <img src="assets/sync.svg" alt="Syncing" /> -->
        </div>
      </div>
      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2"></div>
        <div class="w-full md:w-1/2">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">Library</h4>
          <p class="text-gray-600 mb-8">Library</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>
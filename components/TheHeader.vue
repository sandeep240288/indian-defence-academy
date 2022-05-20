<template>
  <header>
    <nav class="fixed w-full bg-white">
      <div class="container m-auto px-6 md:px-12 lg:px-6">
        <div class="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0">
          <div class="w-full flex justify-between lg:w-auto">
            <a href="#" aria-label="logo">
              <!-- <img src="images/logo.svg" class="w-36" alt="tailus logo" width="144" height="48" /> -->
              <h4 class="text-2xl font-semibold">दि इंडियन डिफेंस एकेडमी</h4>
              <hr />
              <small>खुर्दही बाजार, सुल्तानपुर रोड ,लखनऊ</small>
            </a>

            <button
              aria-label="humburger"
              id="hamburger"
              class="relative w-10 h-10 -mr-2 lg:hidden"
            >
              <div
                aria-hidden="true"
                id="line"
                class="inset-0 w-6 h-0.5 m-auto rounded bg-gray-500 transtion duration-300"
              ></div>
              <div
                aria-hidden="true"
                id="line2"
                class="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-gray-500 transtion duration-300"
              ></div>
              <div
                aria-hidden="true"
                id="line3"
                class="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-gray-500 transtion duration-300"
              ></div>
            </button>
          </div>

          <div
            hidden
            class="w-full bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-auto lg:flex"
          >
            <div class="block w-full lg:items-center lg:flex">
              <ul
                class="space-y-6 pb-6 tracking-wide font-medium text-gray-600 lg:pb-0 lg:pr-6 lg:items-center lg:flex lg:space-y-0"
              >
                <li>
                  <a href="#" class="block md:px-3">
                    <span>Facilities</span>
                  </a>
                </li>

                <li>
                  <a href="#" class="block md:px-3">
                    <span>Batches</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="block md:px-3">
                    <span>Contact Us</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>


<script setup>
import MainLayout from "../layout/MainLayout.vue";
</script>
<template>
  <MainLayout>
    <!-- hero section  -->
    <main
      class="fredoka bg-[url('https://www.kintamani.id/wp-content/uploads/Pantai-Yeh-Gangga-Tabanan-2-1024x682.jpg')] bg-no-repeat bg-cover w-full h-screen">
      <div
        class="bg-linear-to-t from-gray-900/50 to-transparent backdrop-saturate-130 backdrop-blur-xs w-full h-screen text-center">
        <div class="md:py-25 md:px-60 px-5">
          <h1 class="text-shadow-lg text-shadow-gray-800/70 text-[70px] pt-[9rem]">
            Pantai Yeh Gangga
          </h1>
          <p class="text-shadow-lg text-shadow-gray-800/70 mt-2 nunito-bold">
            Melangkah di Atas Pasir Hitam yang Eksotis, Menyusuri Petak Sawah
            yang Hijau, hingga Merenungi Keagungan Pura di Tepi Samudra.
          </p>
          <a href="#theme"><button
              class="mt-8 hover:scale-105 focus:scale-105 transition duration-450 poppins-semibold bg-teal-500 px-3 py-2 rounded-md hover:bg-teal-600 active:bg-teal-800 active:border-teal-200/30 active:border-2">
              Mulai &raquo;
            </button></a>
        </div>
      </div>
    </main>
    <!-- theme -->
    <section id="theme" class="w-auto h-auto mx-[5%] bg-gray-600 my-20 p-2 border-teal-200 border-2 rounded-lg">
      <ul class="grid md:grid-cols-4 md:grid-rows-2">
        <!-- gambar pantai  -->
        <li
          class="relative overflow-hidden group rounded-md mx-1 w-auto md:col-span-4 md:row-span-2 lg:col-span-2 my-1">
          <img class="h-full w-auto object-cover transition-transform duration-550 ease-in-out group-hover:scale-150"
            src="https://sudimara-tabanan.desa.id/desa/upload/artikel/sedang_1579328965_Pantai-Yeh-Gangga-Tabanan-1-1024x683.jpg"
            alt="" />
          <!-- informasi lebih lanjut tentang pantai  -->
          <div
            class="absolute inset-0 bg-slate-800/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-550">
            <h3 class="">Hamparan Pantai</h3>
            <p class="nunito-regular">
              Click untuk informasi lebih lanjut &darr;
            </p>
            <!-- router untuk mengarahkan kelink pantai  -->
            <router-link to="/pantai"><button
                class="size-auto px-5 py-1 rounded-md bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-600 nunito-bold active:scale-120 hover:scale-120 transition-all duration-450 mt-2">
                GO!
              </button></router-link>
          </div>
        </li>
        <!-- gambar pura -->
        <li
          class="relative overflow-hidden group rounded-md object-cover mx-1 w-auto md:col-span-2 md:row-span-2 lg:col-span-1 my-1">
          <img class="h-full w-auto object-cover transition-transform duration-550 ease-in-out group-hover:scale-150"
            src="/images/candi.jpeg" alt="" />
          <!-- informasi lebih lanjut mengenai pura  -->
          <div
            class="absolute inset-0 bg-slate-800/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-all duration-550">
            <h3 class="">Pura Adat</h3>
            <p class="nunito-regular">
              Click untuk informasi lebih lanjut &darr;
            </p>
            <!-- router menuju halaman pura  -->
            <router-link to="/pura"><button
                class="size-auto px-5 py-1 rounded-md bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-600 nunito-bold active:scale-120 hover:scale-120 transition-all duration-450 mt-2">
                GO!
              </button></router-link>
          </div>
        </li>
        <!-- gambar sawah  -->
        <li
          class="relative overflow-hidden group rounded-md object-cover mx-1 w-auto md:col-span-2 md:row-span-2 lg:col-span-1 my-1">
          <img class="h-full w-auto object-cover transition-transform duration-550 ease-in-out group-hover:scale-150"
            src="/images/pengusirSerangga.jpeg" alt="" />
          <!-- informasi lebih lanjut mengenai sawah  -->
          <div
            class="absolute inset-0 bg-slate-800/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-550">
            <h3 class="">Komplek Sawah</h3>
            <p class="nunito-regular">
              Click untuk informasi lebih lanjut &darr;
            </p>
            <!-- router menuju view sawah  -->
            <router-link to="/sawah"><button
                class="size-auto px-5 py-1 rounded-md bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-600 nunito-bold active:scale-120 hover:scale-120 transition-all duration-450 mt-2">
                GO!
              </button></router-link>
          </div>
        </li>
      </ul>
    </section>
    <!-- Overview -->
    <article
      class="grid grid-rows-2 md:grid-cols-7 md:grid-rows-1 w-[80%] mx-auto h-auto bg-[#F29472] text-stone-800 lg:px-32 rounded-lg border-l border-2 border-white/60">
      <figure class="row-span-2 md:col-span-2 self-center py-4 px-2">
        <img src="/images/puraPuseh.jpeg" class="mx-auto h-120 rounded-md shadow-[-35px_-11px_13px_-20px_rgba(0,0,0,0.1)] hover:shadow-[-35px_3px_23px_12px_rgba(0,0,0,0.1)] duration-400" alt="" />
      </figure>
      <div class="h-auto row-span-2 md:col-span-5 px-4 lg:pr-8">
        <h2 class="text-[60px] poppins-semibold">Overview</h2>
        <p class="text-justify nunito-bold leading-7 lg:leading-9 lg:text-lg">
          &nbsp;Pantai Yeh Gangga di Tabanan adalah surga tersembunyi bagi pencinta suasana tenang. Pantai berpasir
          gelap ini menghadirkan ombak besar, panorama luas, serta pemandangan matahari terbenam yang memukau. Di salah
          satu sudutnya, sebuah pura yang berdiri di atas batu karang memberi sentuhan mistis yang membuat tempat ini
          terasa semakin istimewa. Belum ramai turis, Yeh Gangga menawarkan pengalaman Bali yang lebih autentik —
          sempurna untuk berjalan santai, menikmati angin laut, atau sekadar melepas penat jauh dari keramaian.
        </p>
      </div>
    </article>
  </MainLayout>
</template>

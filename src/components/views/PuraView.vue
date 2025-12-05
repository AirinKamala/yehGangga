<script setup>
import MainLayout from "../layout/MainLayout.vue";
</script>
<template>
  <MainLayout>
    <div class="pt-20">
      <main class="text-center mx-[2%] md:mx-[10%] lg:mx-[20%]">
        <!-- hero section  -->
        <div
          class="relative font-bold text-white bg-[url('/images/kulkul.jpeg')] bg-no-repeat bg-cover bg-center w-full h-auto rounded-3xl border-b-2 border-white/40">
          <div class="md:py-25 md:px-60 px-5 inset-0 backdrop-blur-xs py-[5rem] rounded-3xl">
            <h1 class="fredoka text-shadow-lg text-shadow-gray-800/70 text-[70px]">
              Jiwa dan Budaya
            </h1>
            <p class="text-shadow-lg text-shadow-gray-800/70 mt-2 nunito-bold">
              Tak hanya keindahan fisik, spritual dan budaya menjadi pelengkap
              kehidupan.
            </p>
          </div>
        </div>
        <!-- gotong royong  -->
        <section
          class="mt-5 bg-gray-400/30 rounded-lg p-2 self-center columns-1 md:columns-2 show border border-b-2 border-white/60">
          <figure class="object-cover rounded-lg">
            <img src="/images/ngayah.jpg" class="w-full md:w-lg h-full rounded-lg" alt="" />
          </figure>
          <h2 class="nunito-bold text-xl capitalize pt-3 text-[22px] mb-2">
            Melestarikan budaya diiringi dengan teknologi
          </h2>
          <p class="nunito-regular p-3 text-lg text-justify pt-2 md:leading-5">
            Teknologi berkembang sangat cepat, namun nilai-nilai budaya yang
            diwariskan tetap terjaga. Kecepatan penyebaran informasi dari
            teknologi membantu kami dalam berbagi pengetahuan dan memperkuat
            semangat gotong royong di tengah masyarakat.
          </p>
        </section>
        <!-- pura  -->
        <section
          class="mt-5 bg-gray-400/30 flex flex-col md:grid rounded-lg p-2 self-center  md:grid-cols-3 show border border-b-2 border-white/60">
          <div class="md:col-span-2">
            <h2 class="nunito-bold text-xl  capitalize pt-3 text-[22px] mb-2">
              Selain budaya, prasarana pun dijaga
            </h2>
            <p class="nunito-regular p-3 text-lg text-justify pt-2 md:leading-5">
              Meskipun telah berdiri selama lebih dari 50 tahun, pura-pura di desa
              kami memancarkan keagungan abadi. Detail arsitektur tradisional yang
              rumit dan artistik pada sebagian besar pura masih terjaga sempurna.
              Sementara itu, pura yang membutuhkan perbaikan telah melalui proses
              revitalisasi yang cermat. Pembangunan kembali ini memastikan warisan
              spiritual dan budaya kami tetap kokoh dan lestari untuk generasi
              yang akan datang.
            </p>
          </div>
          <figure class="object-cover rounded-lg md:col-span-1">
            <img src="/images/pura.jpeg" class="w-full md:w-lg h-full rounded-lg" alt="" />
          </figure>
        </section>
        <!-- slider  -->
        <article class="mx-auto flex overflow-hidden show">
          <div class="slide">
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/ngayah.jpg" alt="" />
            </div>
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/ngiring.jpeg" alt="" />
            </div>
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/candi.jpeg" alt="" />
            </div>
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/puraPuseh.jpeg" alt="" />
            </div>
          </div>
          <div aria-hidden class="slide">
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/ngayah.jpg" alt="" />
            </div>
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/ngiring.jpeg" alt="" />
            </div>
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/candi.jpeg" alt="" />
            </div>
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/puraPuseh.jpeg" alt="" />
            </div>
          </div>
        </article>
      </main>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "../layout/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <div class="pt-20">
      <main class="text-center mx-[2%] md:mx-[10%] lg:mx-[20%]">
        <!-- hero  -->
        <div
          class="relative font-bold text-white bg-[url('images/ilalang1.jpeg')] bg-no-repeat bg-cover bg-center w-full h-auto rounded-3xl border-b-2 border-white/40">
          <div class="md:py-25 md:px-30 px-5 inset-0 backdrop-blur-xs py-[5rem] rounded-3xl">
            <h1 class="fredoka text-shadow-lg text-shadow-gray-800/70 text-[70px]">
              Komplek Sawah
            </h1>
            <p class="text-shadow-lg text-shadow-gray-800/70 mt-2 nunito-bold">
              Selain pantai, Yeh Gangga juga memiliki kompleks sawah yang masih
              asri dan dikelola oleh masyarakat lokal dan sekitar.
            </p>
          </div>
        </div>
        <!-- subak -->
        <section
          class="mt-5 bg-gray-400/30 rounded-lg p-2 self-center columns-1 md:columns-2 show border border-b-2 border-white/60">
          <figure class="object-cover rounded-lg">
            <img src="/images/subak.jpeg" class="w-full md:w-lg h-full rounded-lg" alt="" />
          </figure>
          <h2 class="nunito-bold text-xl capitalize pt-3 text-[22px]">
            Tidak hanya pantai, namun juga memiliki pesona tersendiri
          </h2>
          <p class="nunito-regular text-lg text-justify pt-2 md:leading-5">
            Walaupun memiliki 2 pantai dengan karakteristik tersendiri, Yeh
            Gangga juga memiliki hamparan komplek sawah yang membentang di
            sebelah barat wilayahnya. Subak, organisasi yang mengatur waktu
            kesepakatan waktu bertani dan irigasi masih lestari
          </p>
        </section>
        <!-- villa  -->
        <section
          class="mt-5 bg-gray-400/30 rounded-lg p-2 self-center columns-1 md:columns-2 show border border-b-2 border-white/60">
          <h2 class="nunito-bold text-xl capitalize pt-3 text-[22px]">
            Villa dengan pemandangan sawah
          </h2>
          <p class="nunito-regular p-3 text-lg text-justify pt-2 md:leading-5">
            Sebelumnya tanah dekat pantai dianggap tidak subur, sehingga tanah
            disekitar pantai memiliki harga murah dan dibeli oleh warga
            setempat. Dan sekarang vila yang dibangun memiliki view sawah bahkan
            langsung di pinggir pantai.
          </p>
          <figure class="object-cover rounded-lg">
            <img src="/images/sawahdgnvila.jpeg" class="w-full md:w-lg h-full rounded-lg" alt="" />
          </figure>
        </section>
        <!-- slider  -->
        <article class="mx-auto flex overflow-hidden show mt-5">
          <div class="slide">
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/pengusirSerangga.jpeg" alt="" />
            </div>
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/senjaJagung.jpeg" alt="" />
            </div>
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/ilalang1.jpeg" alt="" />
            </div>
          </div>
          <div class="m-[0.5em] object-cover h-72 w-max">
            <img class="h-72 w-auto rounded-lg" src="/images/sawahdgnvila.jpeg" alt="" />
          </div>

          <div aria-hidden class="slide">
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/pengusirSerangga.jpeg" alt="" />
            </div>
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/senjaJagung.jpeg" alt="" />
            </div>
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/ilalang1.jpeg" alt="" />
            </div>
          </div>
        </article>
      </main>
    </div>
  </MainLayout>
</template>

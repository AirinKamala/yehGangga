<script setup>
import MainLayout from "../layout/MainLayout.vue";
</script>
<template>
  <MainLayout
    ><div class="pt-20">
      <main class="text-center mx-[5%] md:mx-[10%] lg:mx-[20%]">
        <!-- hero  -->
        <div
          class="relative font-bold text-white bg-[url('images/baleBengong.jpeg')] bg-no-repeat bg-cover bg-center saturate-190 w-full h-auto rounded-3xl"
        >
          <div
            class="md:py-25 md:px-60 px-5 inset-0 backdrop-blur-xs py-[5rem] inset-0 bg-gray-800/30 rounded-3xl shadow-lime-800 shadow-lg"
          >
            <h1 class="fredoka text-shadow-lg text-shadow-gray-800/70 text-[70px]">
              Pesisir Pantai
            </h1>
            <p class="text-shadow-lg text-shadow-gray-800/70 mt-2 nunito-bold">
              Memiliki pantai yang dipisahkan dengan tebing. Setiap pantai memiliki pantai yang
              karakteristik tersendiri.
            </p>
          </div>
        </div>
        <!-- pantai timur -->
        <section
          class="mt-5 bg-gray-400/30 rounded-lg p-2 self-center columns-1 md:columns-2 show border border-b-2 border-white"
        >
          <figure class="object-cover rounded-lg m-3">
            <img
              src="/images/batubolong.jpg"
              class="saturate-120 brightness-120 w-full md:w-lg h-full rounded-md"
              alt=""
            />
          </figure>
          <h2 class="nunito-bold text-xl capitalize pt-3 text-[22px]">
            Rona, pantai timur yang arunika
          </h2>
          <p class="nunito-regular text-lg text-justify pt-2 md:leading-5 pr-2">
            Terletak di Jln. Yeh Gangga I, adalah pantai yang dikenal oleh masyarakat Tabanan.
            Dengan Pura Batu Bolong menjadi ikon utama pantai ini. Pantai ini menjadi pusat upacara
            adat. Selain itu adapun kuliner lobster dan es kuwud yang bisa anda temukan pada warung
            terdekat.
          </p>
        </section>
        <!-- pantai barat  -->
        <section
          class="mt-5 bg-gray-400/30 rounded-lg p-2 self-center columns-1 md:columns-2 show border border-b-2 border-white"
        >
          <h2 class="nunito-bold text-xl capitalize pt-3 text-[22px]">
            Surganya ombak para pelancong
          </h2>
          <p class="nunito-regular text-lg text-justify pt-2 md:leading-5 pl-2">
            Hidden gem untuk para peselancar, pantai barat memiliki ombak yang cendrung tenang.
            Pantai ini lebih sering dikunjungi oleh wisatawan mancanegara dibanding pantai timur. Setiap
            tahun, diadakan Yeh Gangga Kite Festival oleh STT. Tunas Muda karena angin dipantai ini
            dikenal stabil untuk menerbangkan layang-layang.
          </p>
          <figure class="rounded-lg m-3">
            <img
              src="/images/layang2.jpeg"
              class="saturate-200 w-full md:w-lg h-full rounded-md"
              alt=""
            />
          </figure>
        </section>
        <!-- video konsevasi tukik -->
        <section
          class="mt-5 bg-gray-400/30 rounded-lg p-2 self-center columns-1 md:columns-2 show border border-b-2 border-white"
        >
          <div class="">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6C7h0hConno?si=VcDTGLShNvnrMxpR"
              title="YouTube video player"
              frameborder="0"
              class="w-full h-[300px] rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <h2 class="nunito-bold text-xl capitalize pt-3 text-xl">Konservasi Tukik</h2>
          <p class="nunito-regular text-lg text-justify pt-2 md:leading-5 pl-2">
            Konservasi tukik/ anak penyu terletak di pantai timur berdekatan dengan Pura Batu
            Bolong. Saat bulan purnama dan bulan mati, penyu bertelur di tepi pantai. Karena penyu
            termasuk hewan langka, maka dibangunlah konservasi tukik untuk menetaskan telur penyu
            sebelum dilepas ke laut.
          </p>
        </section>
        <!-- keterangan harga parkir -->
        <section
          class="px-10 md:px-25 block mt-5 bg-gray-400/30 rounded-lg p-2 self-center show border border-b-2 border-white"
        >
          <h2 class="text-xl nunito-bold p-2">Parkir</h2>
          <hr />
          <ul class="nunito-regular px-5 columns-1 md:columns-3 flex justify-evenly">
            <li class="hover:underline active:underline p-2">Rp3.000 untuk roda dua</li>
            <li class="hover:underline active:underline p-2">Rp4.000 untuk mobil</li>
            <li class="hover:underline active:underline p-2">Rp5.000 untuk truk</li>
          </ul>
        </section>
        <!-- slider -->
        <article class="mx-auto flex overflow-hidden show mt-3">
          <div class="slide">
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/batubolong.jpg" alt="" />
            </div>
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/baleBengong.jpeg" alt="" />
            </div>
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/pemandanganPantai.jpeg" alt="" />
            </div>
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/layang.jpeg" alt="" />
            </div>
          </div>
          <div aria-hidden class="slide">
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/batubolong.jpg" alt="" />
            </div>
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/baleBengong.jpeg" alt="" />
            </div>
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/pemandanganPantai.jpeg" alt="" />
            </div>
            <div class="m-[0.5em] object-cover h-72 w-max">
              <img class="h-72 w-auto rounded-lg" src="/images/layang.jpeg" alt="" />
            </div>
          </div>
        </article>
      </main></div
  ></MainLayout>
</template>

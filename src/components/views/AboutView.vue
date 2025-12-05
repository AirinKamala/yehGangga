<template>
  <MainLayout>
    <div class="pt-20">
      <main
        class="w-auto h-auto bg-gray-600/30 mx-[5%] md:mx-[15%] lg:mx-[20%] p-4 grid grid-rows-1 md:grid-cols-3 rounded-xl border border-b-3 shadow-white/40 backdrop-blur-md">
        <figure class="row-span-1 md:col-span-1">
          <img src="/images/fotoDiri.png" class="mx-auto w-36 md:h-full md:w-auto rounded-lg" alt="laut" />
        </figure>
        <!-- berisi deskripsi -->
        <div class="row-span-1 ml-2 md:col-span-2 lg:px-5">
          <h1 class="text-[60px] text-center fredoka">About Me</h1>
          <hr>
          <p class="nunito-regular text-justify lg:mt-3">
            Halo kenalin aku Airin dari kelas XI RPL. Ini adalah web yang dikerjakan sebagai tugas sekaligus web
            promosi pariwisata khususnya di daerah Yeh Gangga.Web ini dibuat menggunakan HTML, CSS dan
            <i>library</i> TailwindCSS. Aset gambar digunakan dari diambil dari
            Google Images dan hasil foto pribadi menggunakan handphone. Terima
            kasih sudah membaca &gt;ᴗ&lt;
          </p>
          <!-- berisi social media pembuat -->
          <div id="social" class="p-3 text-sm">
            <h4 class="poppins-medium text-center">Sosial Media</h4>
            <ul class="flex justify-center place-items-center mt-3">
              <!-- tiktok  -->
              <li class="poppins-regular transition-transform duration-150 hover:shadow-md flex hover:scale-150 rounded-lg px-5 py-3">
                <a class="flex" href="https://www.tiktok.com/niriaarin/" target="_blank">
                  <svg class="h-6 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                    <path fill="white" fill-rule="evenodd"
                      d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <!-- instagram  -->
              <li class="poppins-regular transition-transform duration-150 hover:shadow-md flex hover:scale-150 rounded-lg px-5 py-3">
                <a class="flex" href="https://www.instagram.com/kamalaairin/" target="_blank">
                  <svg class="h-6 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                    <path fill="white" fill-rule="evenodd"
                      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <!-- whatsapp  -->
              <li class="poppins-regular transition-transform duration-150 hover:shadow-md flex hover:scale-150 rounded-lg px-5 py-3">
                <a class="flex" href="https://wa.me/6287796730344" target="_blank">
                  <svg class="h-6 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                    <path fill="white" fill-rule="evenodd"
                      d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                      clip-rule="evenodd" />
                    <path fill="white"
                      d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layout/MainLayout.vue';
</script>

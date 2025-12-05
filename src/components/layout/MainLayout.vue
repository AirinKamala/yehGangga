<script setup>
import NavBar from "../NavBar.vue";
import TheFooter from "../TheFooter.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute(); //variabel untuk memanggil route
//untuk menentukan class yg dipakai oleh main sesuai dengan halaman yg ditampilkan
const bgGradient = computed(() => {
  const nameRute = route.name; //mengambil nama rute
  const bgMap = {
    //set nilai class
    Gallery: "bg-linear-[-135deg,#047857_0%,#0f766e_25%,#111827_65%]",
    About: "bg-linear-[15deg,#111827_30%,#60a5fa_75%]",
    Pantai: "bg-linear-[10deg,#111827,#bef264]",
    Sawah: "bg-linear-[10deg,#111827,#3b0764]",
    Pura: "bg-linear-[10deg,#111827,#fb7185]",
  };
  return bgMap[nameRute] || "bg-gray-900"; //mengembalikan nilai dimana nama variabel sesuai dengan nama route yg ditampilkan. bg-gray-900 jika tidak sesuai
});
window.scrollTo(0, 0); //supaya menampilkan konten mulai dari atas
</script>

<template>
  <main :class="bgGradient">
    <NavBar />
    <div>
      <slot></slot>
    </div>
    <TheFooter />
  </main>
</template>


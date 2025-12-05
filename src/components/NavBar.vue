<script>

</script>

<template>
   <navbar
      class="fixed top-0 z-30 poppins-semibold flex w-full text-md text-center bg-linear-to-r from-slate-500/40 to-slate-400/20 backdrop-saturate-130 backdrop-blur-md border-b-2 border-white/40 rounded-b-lg p-2">
      <span class="atma-medium text-md md:text-xl w-30 text-lg">Pantai <br>Yeh Gangga</span>
      <ul class="flex w-[80%] lg:w-full justify-evenly">
        <li class="self-center hover:bg-gray-900/30 items-center p-2 rounded-md">
          <router-link to="/">Home</router-link>
        </li>
        <li class="self-center hover:bg-gray-900/30 items-center p-2 rounded-md">
          <router-link to="/gallery">Gallery</router-link>
        </li>
        <li class="self-center hover:bg-gray-900/30 items-center p-2 rounded-md">
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </navbar>
</template>

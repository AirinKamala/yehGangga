<script></script>
<template>
   <footer class="w-full h-auto bg-white/10 border-t border-white/40 backdrop-blur-md rounded-t-lg mt-5 lg:px-[20%]">
      <h3 class="text-center py-2 font-bold poppins-semibold text-lg">
        Pantai Yeh Gangga
      </h3>
      <div class="block md:grid md:grid-cols-3">
        <div id="head" class="p-3 text-sm md:col-span-1">
          <h4 class="poppins-medium text-center">Contents</h4>
          <ul class="flex justify-center md:flex-col place-items-center">
            <li class="poppins-regular active:bg-gray-600 hover:bg-gray-700 rounded-md p-2 w-24 text-center">
              <a href="home.html">Home</a>
            </li>
            <li class="poppins-regular active:bg-gray-600 hover:bg-gray-700 rounded-md p-2 w-24 text-center">
              <a href="gallery.html">Gallery</a>
            </li>
            <li class="poppins-regular active:bg-gray-600 hover:bg-gray-700 rounded-md p-2 w-24 text-center">
              <a href="about.html">About Us</a>
            </li>
          </ul>
        </div>

        <div id="maps" class="p-3 text-sm md:col-span-1 place-items-center">
          <h4 class="poppins-medium text-center">Maps</h4>
          <iframe class="p-3"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32547.220035865277!2d115.05144255714727!3d-8.58469240342526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23738397832e5%3A0x3825e71b720cf6f5!2sPantai%20Yeh%20Gangga!5e1!3m2!1sen!2sid!4v1760754970718!5m2!1sen!2sid"
            width="100%" height="200" style="border: 0" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div id="social" class="p-3 text-sm md:col-span-1">
          <h4 class="poppins-medium text-center">Sosial Media</h4>
          <ul class="flex justify-center md:flex-col place-items-center">
            <li class="poppins-regular flex active:bg-gray-700 hover:bg-gray-700 rounded-lg p-2 w-28">
              <a class="flex" href="https://www.facebook.com/" target="_blank">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clip-rule="evenodd" />
                </svg>
                Facebook
              </a>
            </li>

            <li class="poppins-regular flex active:bg-gray-700 hover:bg-gray-700 rounded-lg p-2 w-28">
              <a class="flex" href="https://www.instagram.com/kamalaairin/" target="_blank">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path fill="white" fill-rule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clip-rule="evenodd" />
                </svg>
                Instagram
              </a>
            </li>

            <li class="poppins-regular flex active:bg-gray-700 hover:bg-gray-700 rounded-lg p-2 w-28">
              <a class="flex" href="https://wa.me/6287796730344" target="_blank">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path fill="white" fill-rule="evenodd"
                    d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                    clip-rule="evenodd" />
                  <path fill="white"
                    d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                </svg>
                Whatsapp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="border-white/30" />
      <p class="text-center text-sm nunito-regular p-2">
        &copy;2025 Airin Kamala
      </p>
    </footer>
</template>

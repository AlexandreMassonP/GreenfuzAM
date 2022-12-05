<template>
  <footer class="w-full mx-auto py-20 overflow-hidden">
      <nav class="flex flex-wrap justify-center" aria-label="Footer">
        <div class="px-5 py-2.5">
          <nuxt-link to="/" class="text-base text-gray-500 hover:text-gray-900">
            Accueil
          </nuxt-link>
        </div>
        <div class="px-5 py-2.5">
          <nuxt-link to="/conditions-generales-de-vente" class="text-base text-gray-500 hover:text-gray-900">
            C.G.V
          </nuxt-link>
        </div>
        <div class="px-5 py-2.5">
          <nuxt-link to="/mentions-legales" class="text-base text-gray-500 hover:text-gray-900">
            Mentions légales
          </nuxt-link>
        </div>
        <div class="px-5 py-2.5">
          <nuxt-link to="/politique-de-confidentialite" class="text-base text-gray-500 hover:text-gray-900">
            Politique de confidentialité
          </nuxt-link>
        </div>
      </nav>
      <nav class="flex flex-wrap justify-center" aria-label="Footer">
        <div class="px-5 py-2.5">
          <nuxt-link to="/auth" class="text-base font-fat text-indoor hover:text-gray-900">
           Inscription
          </nuxt-link>
        </div>
        <div class="px-5 py-2.5">
          <nuxt-link to="/auth" class="text-base font-fat text-indoor hover:text-gray-900">
           Connexion
          </nuxt-link>
        </div>
      </nav>      
      <div class="mt-5 flex justify-center space-x-10 ">
        <a target="_blank" href="https://www.facebook.com/GreenFuzCBD" class="text-gray-500 transition hover:text-outdoor hover:scale-150">
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
          </svg>
        </a>
        <a target="_blank" href="https://www.instagram.com/greenfuz.cbd/" class="text-gray-500 transition hover:text-outdoor hover:scale-150">
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
          </svg>
        </a>
        <a target="_blank" href="https://twitter.com/greenfuzcbd" class="text-gray-500 transition hover:text-outdoor hover:scale-150">
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
      </div>
      <p class="mt-8 uppercase text-center text-sm font-bold font-simple text-black ">
        &copy; 2021/2022 GreenFuz.fr - All rights reserved
      </p>
      <div v-if="this.$store.state.app.konami" class="z-[60] fixed bottom-0 left-0 opacity-100">   
        <div id="content-kon" class=" text-white mx-auto"> 
          <img class="h-40 w-auto" :src="require('~/assets/img/rick.gif')" alt="" />
        </div>
        <iframe class="" width="0px" height="0px" src="https://www.youtube.com/embed/b1WWpKEPdT4?autoplay=1&origin=http://localhost:3000/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
      </div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" class="fb-customerchat">
      </div>
      <script>
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "102317448602844");
        chatbox.setAttribute("attribution", "biz_inbox");

        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v12.0'
          });
        };

        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/fr_FR/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      </script>
  </footer>
</template>
<script>
  export default {
    name: 'layout-default',
    mounted() {
    },
    methods: {

    },
  }
</script>
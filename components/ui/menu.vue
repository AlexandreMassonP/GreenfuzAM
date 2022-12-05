<template>
    <aside class="bg-white grid ease-linear items-center fond-gray shadow-indoor transform  top-0 fixed h-nn mt-20 scrollbar-thin scrollbar-thumb-indoor scrollbar-track-outdoor w-full md:w-[375px]  transition-all duration-500" 
    :class="{
        'opacity-100 left-0': this.$store.state.app.menu,      //open 
        '-left-full opacity-0': !this.$store.state.app.menu //close
    }" >
        <div class=" overflow-y-auto max-h-full">
            <div class="relative grid gap-y-5 px-5 items-center">
                <div class="group" @click="menu(), playLighterFlick()">
                    <nuxt-link to="/"  class="bg-gradient-to-r from-indoor to-outdoor rounded-xl p-5 flex items-center transition ease-in-out duration-150 select-none group-hover:bg-gray-200 hover:shadow-lg">
                        <!-- Heroicon name: outline/support -->
                        <svg class="group-hover:text-outdoor group-hover:animate-pulse flex-shrink-0 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <div class="mx-5">
                            <p class="text-md uppercase font-elegant text-white group-hover:text-light">
                                Accueil
                            </p>
                        </div>
                    </nuxt-link>
                </div>
                <div class="group cursor-pointer" @click="menu(), playLighterFlick()">
                    <nuxt-link to="/auth/profil" class="bg-gradient-to-r from-gray-200 to-light  ring-1 ring-white rounded-xl p-5 flex items-center transition ease-in-out duration-150 select-none group-hover:bg-white hover:shadow-lg">
                        <svg class="group-hover:text-black group-hover:animate-pulse flex-shrink-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                        <div class="mx-5">
                            <p class="text-sm uppercase font-elegant text-gray-600 group-hover:text-black">
                                Votre profil
                            </p>
                        </div>
                    </nuxt-link>
                </div>
                <div class="grid grid-cols-3 hover:shadow-lg" @click="menu(), playLighterFlick()">
                    <nuxt-link to="/categories/indoor" class="group cursor-pointer bg-indoor rounded-l-xl p-5 items-center text-center transition ease-in-out duration-150 select-none hover:bg-gray-200">
                        <!-- Heroicon name: outline/support -->
                        <img class="" :src="require('~/assets/img/pochon-dark.png')" />
                        <p class="mt-2.5 text-md uppercase font-elegant text-white group-hover:text-black">Indoor</p>
                    </nuxt-link>
                    <nuxt-link to="/categories/resine" class="group cursor-pointer bg-resine p-5 items-center text-center transition ease-in-out duration-150 select-none hover:bg-gray-200">
                        <!-- Heroicon name: outline/support -->
                        <img class="" :src="require('~/assets/img/pochon-gray.png')" />
                        <p class="mt-2.5 text-md uppercase font-elegant text-white group-hover:text-black">Résine</p>
                    </nuxt-link>
                    <nuxt-link to="/categories/outdoor" class="group cursor-pointer bg-outdoor rounded-r-xl p-5 items-center text-center transition ease-in-out duration-150 select-none hover:bg-gray-200">
                        <!-- Heroicon name: outline/support -->
                        <img class="" :src="require('~/assets/img/pochon-light.png')" />
                        <p class="mt-2.5 text-md uppercase font-elegant text-white group-hover:text-black">Outdoor</p> 
                    </nuxt-link>
                </div>
                <div class="group cursor-pointer" @click="menu(), playLighterFlick()">
                    <nuxt-link to="/conditions-generales-de-vente" class="bg-gradient-to-r from-gray-200 to-light  ring-1 ring-white rounded-xl p-5 flex items-center transition ease-in-out duration-150 select-none group-hover:bg-white hover:shadow-lg">
                        <svg class="group-hover:text-black group-hover:animate-pulse flex-shrink-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <div class="mx-5">
                            <p class="text-sm uppercase font-elegant text-gray-600 group-hover:text-black">
                            Conditions générales de vente
                            </p>
                        </div>
                    </nuxt-link>
                </div>
                <div class="group cursor-pointer" @click="menu(), playLighterFlick()">
                    <nuxt-link to="/mentions-legales" class="bg-gradient-to-r from-gray-200 to-light  ring-1 ring-white rounded-xl p-5 flex items-center transition ease-in-out duration-150 select-none group-hover:bg-white hover:shadow-lg">
                        <svg class="group-hover:text-black group-hover:animate-pulse flex-shrink-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        <div class="mx-5">
                            <p class="text-sm uppercase font-elegant text-gray-600 group-hover:text-black">
                            Mentions légales
                            </p>
                        </div>
                    </nuxt-link>
                </div>
                <div class="group cursor-pointer" @click="menu(), playLighterFlick()">
                    <nuxt-link to="/politique-de-confidentialite" class="bg-gradient-to-r from-gray-200 to-light  ring-1 ring-white rounded-xl p-5 flex items-center transition ease-in-out duration-150 select-none group-hover:bg-white hover:shadow-lg">
                        <svg class="group-hover:text-black group-hover:animate-pulse flex-shrink-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div class="mx-5">
                            <p class="text-sm uppercase font-elegant text-gray-600 group-hover:text-black">
                            Politique de confidentialité
                            </p>
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <div class="flex w-max mx-auto p-5" @click="menu(), playLighterFlick()">
                <a target="_blank" href="https://www.facebook.com/GreenFuzCBD" class="text-gray-400 mx-5 transition hover:text-outdoor hover:scale-150">
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                    </svg>
                </a>
                <a target="_blank" href="https://www.instagram.com/greenfuz.cbd/" class="text-gray-400 mx-5 transition hover:text-outdoor hover:scale-150">
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                    </svg>
                </a>
                <a target="_blank" href="https://twitter.com/greenfuzcbd" class="text-gray-400 mx-5 transition hover:text-outdoor hover:scale-150"> 
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                </a>
            </div>
        </div>           
    </aside>  
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    name: "drawer-menu",  
    methods: {
      ...mapActions({ 
        menu: 'menu',
        playLighterFlick: 'playLighterFlick' 
      }),
    }
  };
</script>

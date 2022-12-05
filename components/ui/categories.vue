<template>
    <section class="mm-sm:hidden md:flex md:justify-center h-[500px] overflow-hidden w-full  items-center" :class="{'fond-indoor shadow-indoor': this.$route.params.slug === 'indoor', 'fond-resine shadow-resine': this.$route.params.slug === 'resine', 'fond-outdoor shadow-outdoor': this.$route.params.slug === 'outdoor', 'fond-gray shadow-xl': this.$route.path === '/' }"> 
      <!-- Indoor -->    
      <nuxt-link @mouseenter.native="soundUiHoverImg()" @click.native="playLighterFlick()" to="/categories/indoor" class="group transition-all w-[35%]" :class="{'opacity-50 hover:opacity-100': this.$route.params.slug === 'resine' || this.$route.params.slug === 'outdoor'}">
        <div class="p-6 max-w-[450px] mx-auto w-full text-light text-center relative" ref="test">
          <div  class="group-hover:animate-pulse  mt-6 relative w-[80%] pb-[80%] mx-auto bg-indoor rounded-full  transition-all transform  duration-500"></div>
          <img class="absolute top-10 left-1/2 -translate-x-1/2 group-hover:scale-105 group-hover:rotate-2 mx-auto w-[40%] object-contain object-center transition-all transform  duration-500" :src="require('~/assets/img/pochon-dark.png')" />
          <h4 class="mt-6 text-3xl lg:text-4xl xl:text-5xl font-elegant text-gray-400 group-hover:text-black transition-all transform duration-500">Indoor</h4>          
          <p class="text-xl font-fat opacity-0 text-gray-600 group-hover:opacity-100 transition-all transform duration-500">Voir nos produits</p>          
        </div>
      </nuxt-link>
      <!-- Résine -->        
      <nuxt-link @mouseenter.native="soundUiHoverImg()" @click.native="playLighterFlick()" to="/categories/resine" class="group transition-all w-[30%]" :class="{'opacity-50 hover:opacity-100': this.$route.params.slug === 'indoor' || this.$route.params.slug === 'outdoor'}">
        <div class="p-6 max-w-[350px] mx-auto w-full text-light text-center relative">
          <div class="group-hover:animate-pulse mt-6 relative w-[80%] pb-[80%] mx-auto bg-resine rounded-full  transition-all transform  duration-500"></div>
          <img  class="absolute top-10 left-1/2 -translate-x-1/2 group-hover:scale-105 mx-auto w-[40%] object-contain object-center transition-all transform  duration-500" :src="require('~/assets/img/pochon-gray.png')" />
          <h4 class="mt-6 text-3xl lg:text-4xl xl:text-5xl font-elegant text-gray-400 group-hover:text-black transition-all transform  duration-500">Résine</h4>          
          <p class="text-xl font-fat opacity-0 text-gray-600 group-hover:opacity-100 transition-all transform  duration-500">Voir nos produits</p>          
        </div>
      </nuxt-link>
      <!-- Outdoor -->
      <nuxt-link @mouseenter.native="soundUiHoverImg()" @click.native="playLighterFlick()" to="/categories/outdoor" class="group transition-all w-[35%]" :class="{'opacity-50 hover:opacity-100': this.$route.params.slug === 'resine' || this.$route.params.slug === 'indoor'}">
        <div class="p-6 max-w-[450px] mx-auto w-full text-light text-center relative">
          <div class="group-hover:animate-pulse mt-6 relative w-[80%] pb-[80%] mx-auto bg-outdoor rounded-full  transition-all transform  duration-500"></div>
          <img class="absolute top-10 left-1/2 -translate-x-1/2 group-hover:scale-105 group-hover:-rotate-2 mx-auto w-[40%] object-contain object-center transition-all transform  duration-500" :src="require('~/assets/img/pochon-light.png')" />
          <h4 class="mt-6 text-3xl lg:text-4xl xl:text-5xl font-elegant text-gray-400 group-hover:text-black transition-all transform  duration-500">Outdoor</h4>          
          <p class="text-xl font-fat opacity-0 text-gray-600 group-hover:opacity-100 transition-all transform  duration-500">Voir nos produits</p>          
        </div>
      </nuxt-link>
    </section>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      hoverCat : '',
    }
  },
  methods: {
    ...mapActions({
        soundUiHoverImg: 'soundUiHoverImg', playLighterFlick: 'playLighterFlick'
    }),
  },
};
</script>
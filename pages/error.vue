<template>
    <main class="">
      <!-- 404 -->
      <section class="text-center grid items-center min-h-foot" v-if="error.statusCode === 404">
        <!-- <img src="@/assets/img/unknown-6.png" class=""> -->
        <h1 class="font-fat text-[15em] leading-[1em] text-indoor inline teub transition-all duration-500 pb-0">
          <span class="z-10 inline-block mr-0">4</span><span class="z-20 inline-block -mb-5"><img class="w-auto h-52" :src="require('~/assets/img/linememe-77.png')" /></span><span class="z-10 inline-block ml-0 ">4</span>
        </h1>
        <p class="font-fat text-[2em] text-gray-500">La page <b class="text-indoor">{{this.$route.path}}</b> n'existe pas.</p>
        <p class="font-elegant text-[1em] text-gray-500">Veuillez attendre 5sec avant d'être redirigé vers l'accueil du site !</p>
        <nuxt-link to="/" class="font-fat text-md text-black">Ou cliquer ici pour revenir à l'accueil</nuxt-link>
      </section>
      <!-- 422 -->
      <section class="text-center grid items-center min-h-foot" v-else-if="error.statusCode === 422">
        <h1 class="font-fat text-[15em] leading-[1em] text-indoor inline transition-all duration-500">
          <span class="inline-block transition-all duration-500">4</span><span class="inline-block transition-all duration-500">2</span><span class="inline-block transition-all duration-500">2</span>
        </h1>
        <h1 class="font-fat text-[2em] text-gray-500">Cette page n'existe pas le 100</h1>
      </section>
      <!-- 505 -->
      <section class="text-center grid items-center min-h-foot" v-else-if="error.statusCode === 505">
        <!-- <img src="@/assets/img/unknown-6.png" class=""> -->
        <h1 class="font-fat text-[15em] leading-[1em] text-indoor inline teub transition-all duration-500 pb-0">
          <span class="z-10 inline-block mr-0">5</span><span class="z-20 inline-block -mb-5"><img class="w-auto h-52" :src="require('~/assets/img/linememe-77.png')" /></span><span class="z-10 inline-block ml-0 ">5</span>
        </h1>
        <p class="font-fat text-[2em] text-gray-500">{{error.message}}</p>
        <p class="font-elegant text-[1em] text-gray-500">Veuillez attendre 5sec avant d'être redirigé vers l'accueil du site !</p>
        <nuxt-link to="/" class="font-fat text-md text-black">Ou cliquer ici pour revenir à l'accueil</nuxt-link>
      </section>
      <!-- AUTRES -->
      <section class="text-center grid items-center min-h-foot" v-else >
        <h1 class="font-fat text-[15em] leading-[1em] text-indoor inline transition-all duration-500"><span class="inline-block transition-all duration-500">{{error.statusCode}}</span></h1>
        <h1 class="font-fat text-[2em] text-gray-500">{{error.message}}</h1>
      </section>
      <ui-footer/>
    </main>
</template>
<style>
  html{
    overflow: hidden;
  }
</style>
<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'error',
    props: ['error'],
    mounted() {
      this.redirect404()
    },
    methods: {
      ...mapActions({
          soundUiHoverImg: 'soundUiHoverImg', playLighterFlick: 'playLighterFlick'
      }),
      redirect404() {
        var navigate = this.$router;
        setTimeout(function(){ 
          navigate.push({path:'/'})
        },5000);
      }
    },
  }
</script>


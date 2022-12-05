<template>
<client-only>
  <div class="bg-light" id="color">
    <div class="flex-row transition-all ease-linear duration-500" 
      :class="{
        'w-full': this.$store.state.app.panier, //open
        'w-full md:w-wc': !this.$store.state.app.panier  //close
      }"
    >
        <ui-navbar class=" bg-light top-0"/>
        <Nuxt class="bg-light px-14 scrollbar-thin scrollbar-thumb-outdoor scrollbar-track-indoor overflow-y-scroll h-nn mt-20"  />
    </div>
    <ui-panier class="fixed transition-all ease-linear duration-500 bottom-0 h-nn mt-20 w-full md:w-[375px] right-0" 
      :class="{
        'opacity-0 translate-x-[100%] md:translate-x-[375px]': this.$store.state.app.panier,      //open 
        'translate-x-0 opacity-100': !this.$store.state.app.panier //close
      }"
    />
  </div>
</client-only>
</template>
<style>
  html{
    overflow: hidden;
  }
  #color{
    display: flex; 
  }
  #content-kon {
    width: 500px;
    text-align: left;
    font-family: monospace;
  }
  .headline-kon {
    background-color: #AAAAAA;
    color: #000082;
    padding: 2px 5px 2px 5px;
    font-size: 14px;
    width: 230px;
    min-width: 130px;
    text-align: center;  
  }
  .blink {
    -webkit-animation: blink .75s linear infinite;
    -moz-animation: blink .75s linear infinite;
    -ms-animation: blink .75s linear infinite;
    -o-animation: blink .75s linear infinite;
    animation: blink .75s linear infinite;
  }
  .animCat {
    display: block;
    width: 371px;
    height: 460px;
    position: absolute;
    right: 0px;
    bottom: -440px;
    z-index: 9999;
  }
  @-webkit-keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 1; }
    50.01% { opacity: 0; }
    100% { opacity: 0; }
  }
  @-moz-keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 1; }
    50.01% { opacity: 0; }
    100% { opacity: 0; }
  }
  @-ms-keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 1; }
    50.01% { opacity: 0; }
    100% { opacity: 0; }
  }
  @-o-keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 1; }
    50.01% { opacity: 0; }
    100% { opacity: 0; }
  }
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 1; }
    50.01% { opacity: 0; }
    100% { opacity: 0; }
  }
</style>
<script>
  import Vue from 'vue'
  import { mapActions } from 'vuex'

  export default Vue.extend({
    name: 'layout-default',
    mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => {
          
          this.$nuxt.$loading.finish()
          this.konami()
          this.getProducts()
        }, 1000)
      })


    },
    data() {
        return {
          konamy: false,
      }
    },
    methods: {
      ...mapActions({
          soundUiHoverImg: 'soundUiHoverImg', playLighterFlick: 'playLighterFlick', konami: 'konami', getProducts: 'getProducts'
      }),
    },
  })
</script>


<template>
  <div class="group relative ">
    <div class="flex justify-center items-center ">
      <div :class="{'opacity-50': product.inventory.available === 0 }" class="p-6 w-full bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all transform duration-500 hover:scale-105">
        <div class="flex justify-end">
          <div class="select-none text-gray-400 uppercase text-xs font-semibold tracking-wider" :class="{ 'animate-pulse': product.inventory.available > 0 && product.inventory.available <= 50 }">
            <span v-if="product.inventory.available > 50" :class="'bg-'+cat" class="text-light text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
              Disponible
            </span>
            <span v-if="product.inventory.available > 0 && product.inventory.available <= 50" :class="'bg-'+cat" class="text-light text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
              Bientôt fini
            </span>
            <span v-if="product.inventory.available === 0" :class="'bg-'+cat" class="text-light text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
              Rupture
            </span>
          </div> 
        </div>
        <div @click="openDialog(), soundUiAccordeonUp()" class="select-none">
          <img  loading="lazy" :id="product.id" class="relative left-1/2 transform -translate-x-1/2 img-cursor group-hover:rotate-2 transition-all duration-500 hover:scale-95 w-64 h-64 object-contain hover:opacity-70" :src="require('~/assets/img/produits/'+img)" alt=""  /> 
        </div>
        <!-- OLD -->
        <div class="mt-4">
          <div class="flex justify-between">            
            <div class="">
              <nuxt-link :to="'/categories/'+this.cat" class="block text-gray-400 transition-all text-xs uppercase font-semibold tracking-wider hover:text-black">{{this.cat}}</nuxt-link> 
              <button class="hover:cursor-pointer text-left text-2xl font-bold text-black font-elegant" @click="openDialog(), soundUiAccordeonUp()" >{{product.name}}</button>
            </div>
            <span :class="'text-'+cat" class=" font-fat text-xl grid items-end select-none">{{ optionsId.price * quantity | formatedprice}}€</span> 
          </div>

          <div class="">
            <span class="relative z-0 inline-flex rounded-xl mt-4 ">        
              <div class="first:rounded-l-xl last:rounded-r-xl  overflow-hidden -m-[-2px]">
                <div v-for="option in variants" :key="option.id" :class="'bg-'+cat" class="odd:first:rounded-l-xl odd:last:rounded-r-xl text-black relative inline-flex items-center text-xs font-medium font-simple focus:outline-none">
                  <input :id="option.id" type="radio" v-model="optionsId" :value="{'id':option.id,'price':option.price.formatted}" >
                  <label :for="option.id" @click="soundUiHoverImg()" class="focus:bg-transparent bg-gray-200 px-2 py-2 focus:text-white border border-gray-200 cursor-pointer">{{option.name}}G</label>
                </div>
              </div>
            </span>
            <input type="number" v-model="quantity" max="100" :class="'border-'+cat" class="appearance-none text-center leading-5 text-black outline-none border-2 font-simple font-medium mt-4 px-2 py-1 rounded-lg max-w-[65px] float-right" >
          </div>

          <!-- OLD -->
          <div v-if="product.inventory.available > 0" class="mt-4 mb-2 flex justify-between">
            <button @click="addToCart({ id: product.id, count: quantity, var1: variantsId, opt1: optionsId.id }), lol()" :class="'bg-'+cat" class="hover:shadow-xl hover:bg-white hover:text-black group w-full text-lg flex justify-between font-semibold py-2 px-6 text-light rounded-xl shadow transition duration-300">
              <span class="font-elegant text-xl">Ajouter au panier</span>
              <svg class="h-7 w-7 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
          <div v-if="product.inventory.available === 0" :class="'bg-'+cat" class="mt-4 mb-2 w-full text-lg flex font-semibold py-2 px-6 text-light hover:text-white rounded-xl shadow hover:shadow-md transition duration-300">
            <span class="font-elegant text-xl w-full text-center">Bientôt disponible</span>
          </div>
        </div>
      </div>
    </div>
    <!-- DIALOG -->
    <div v-if="this.dialog" class="fixed z-10 inset-0 scrollbar-thin scrollbar-thumb-indoor scrollbar-track-outdoor overflow-y-scroll h-nn mt-20" role="dialog" aria-modal="true">
      <div class="flex text-center md:block md:px-2 lg:px-4" style="font-size: 0;">
        <div :class="'bg-'+cat" class="hidden fixed inset-0 bg-opacity-75 transition-opacity md:block" aria-hidden="true" @click="openDialog(), soundUiAccordeonBot()"></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden md:inline-block md:align-middle md:h-nn" aria-hidden="true">&#8203;</span>
        <div class="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
          <div :class="{'opacity-100': this.$store.state.app.panier, 'opacity-90': !this.$store.state.app.panier}" class="rounded-xl w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
            <button v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Fermer', classes: 'z-[60]' }" type="button" class="absolute top-5 right-5 text-gray-400 hover:text-gray-500 " @click="openDialog(), soundUiAccordeonBot()">
              <!-- Heroicon name: outline/x -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start md:grid-cols-12 lg:items-center lg:gap-x-8">
              <div class="aspect-w-2 aspect-h-3 overflow-hidden col-span-12 lg:col-span-5 text-center mb-2"> 
                <img  loading="lazy" :src="require('~/assets/img/produits/'+img)" class="relative left-1/2 transform -translate-x-1/2 object-center object-cover">
                <div class="select-none text-gray-400 uppercase text-xs font-fat tracking-wider text-center mb-4" :class="{ 'animate-pulse': product.inventory.available === 50 }">
                  Stock :
                  <span v-if="product.inventory.available > 50" :class="'bg-'+cat" class="font-simple  text-light text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    Disponible
                  </span>
                  <span v-if="product.inventory.available > 0 && product.inventory.available <= 50" :class="'bg-'+cat" class="font-simple text-light text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    Bientôt fini
                  </span>
                  <span v-if="product.inventory.available === 0" :class="'bg-'+cat" class="font-simple text-light text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    Rupture
                  </span>
                </div> 
              </div>
              <div class="col-span-12 lg:col-span-7">
                <h3 class="text-2xl font-bold text-black font-elegant select-none">
                  {{product.name}}
                </h3>
                <section aria-labelledby="information-heading" class="mt-1">
                  <nuxt-link :to="'/categories/'+this.cat"  class="text-gray-400 transition-all  text-xs uppercase font-semibold tracking-wider cursor-pointer">
                    {{this.cat}}
                  </nuxt-link>

                  <!-- Reviews -->
                  <div class="mt-4 flex ">                    
                    <span :class="'text-'+cat" class="font-fat text-xl select-none">{{ optionsId.price * quantity | formatedprice}}€</span> 
                  </div>

                  <div class="">
                    <span class="relative z-0 inline-flex rounded-xl mt-4 ">        
                      <div class="first:rounded-l-xl last:rounded-r-xl  overflow-hidden -m-[-2px]">
                        <div v-for="option in variants" :key="option.id" :class="'bg-'+cat" class="odd:first:rounded-l-xl odd:last:rounded-r-xl text-black relative inline-flex items-center text-xs font-medium font-simple focus:outline-none">
                          <input :id="option.id" type="radio" v-model="optionsId" :value="{'id':option.id,'price':option.price.formatted}" >
                          <label @click="soundUiHoverImg()" :for="option.id" class="focus:bg-transparent bg-gray-200 px-2 py-2 focus:text-white border border-gray-200 cursor-pointer">{{option.name}}G</label>
                        </div>
                      </div>
                    </span>
                    <input type="number" v-model="quantity" max="100" :class="'border-'+cat" class="appearance-none text-center leading-5 text-black outline-none border-2 font-simple font-medium mt-4 px-2 py-1 rounded-lg max-w-[65px] float-right" >
                    

                  </div>
                </section>

                <section aria-labelledby="options-heading" class="mt-4">
                    <!-- Color picker -->
                    <div class="my-2 select-none">
                      <h4 class="text-sm font-medium text-gray-400 text-bold mb-2">Description :</h4>
                      <span class="content-product " v-html="product.description"></span>
                    </div>
                    <!-- OLD -->
                    <div v-if="product.inventory.available > 0" class="mt-4 mb-2 flex justify-between">
                      <button @click="addToCart({ id: product.id, count: quantity, var1: variantsId, opt1: optionsId.id }), lol()" :class="'bg-'+cat" class="hover:shadow-xl hover:bg-white hover:text-black  group w-full text-lg flex justify-between font-semibold py-2 px-6 text-light rounded-xl shadow transition duration-300">
                        <span class="font-elegant text-xl">Ajouter au panier</span>
                        <svg class="h-7 w-7 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </button>
                    </div>
                    <div v-if="product.inventory.available === 0" :class="'bg-'+cat" class="mt-4 mb-2 w-full text-lg flex font-semibold py-2 px-6 text-light hover:text-white rounded-xl shadow hover:shadow-md transition duration-300">
                      <span class="font-elegant text-xl w-full text-center">Bientôt disponible</span>
                    </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scooped>
  .content-product {
    margin:15px 0px;
  }
  .content-product p {
    font-size: 0.875rem;
    font-family: "Roboto";
    color: black;
  }
  .content-product blockquote p{
    margin: 15px 0;
    padding-left: 15px;
    font-family: "DM Serif Text";
    font-size: 1.25rem;
    border-left: 4px solid rgba(107, 114, 128, 1);
    color: rgba(107, 114, 128, 1);
  }
  .content-product li p{
    font-family: "Roboto";
    color: black;
  }
  .content-product li:last-child p{
    margin-bottom: 15px;
  }
  input[type="radio"]{
    display: none; 
  }
  input[type="radio"]:checked + label {
      background: transparent;
      color:#fff;
      border:transparent;
  }
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
</style>
<script lang="ts">
  import Vue from 'vue'
  import { mapActions } from 'vuex'
  export default Vue.extend({
    props: {
      product: {
        type: Object
      }
    },
    data() {
      return {
        quantity: '1',
        dialog: false,
        optionsId: {
          id: this.product.variant_groups[0].options[0].id,
          price: this.product.variant_groups[0].options[0].price.formatted 
        },
        img: this.product.assets[0].filename,
        cat: this.product.categories[0].slug,
        variants: this.product.variant_groups[0].options,
        variantsId: this.product.variant_groups[0].id,
        viewedSelectedOption: this.product.variant_groups[0].options[0].name+'g',
      }
    },
    methods: { 
      openDialog() { 
        this.dialog = !this.dialog 
      },
      lol () {
        this.$toast.global.gfsucces(this.product.name +' ajouté au panier');
        this.soundUiAlertSucces()
      },
      ...mapActions({
        addToCart: 'addProductToCart', 
        soundUiAlertInfo: 'soundUiAlertInfo', soundUiAlertError: 'soundUiAlertError', soundUiAlertSucces: 'soundUiAlertSucces',
        soundUiHoverImg: 'soundUiHoverImg', 
        soundUiAccordeonUp: 'soundUiAccordeonUp', soundUiAccordeonBot: 'soundUiAccordeonBot',
      }),
    }
  })
</script>
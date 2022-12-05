<template>
    <main class="mm-sm:px-5 sm:px-5 lg:px-14">

      <!-- Catégories -->
      <ui-categories />
      <!-- Bandeau livraison -->
      <section class="bg-white md:flex md:justify-center z-40  shadow-indoor">
          <div class="overflow-hidden relative">
            <div class="overflow-hidden inline-block animate-horizontalTextScrolling whitespace-nowrap">
              <h6 class="inline-block text-gray-400 py-5 font-elegant text-2xl">Livraison à vélo express de CBD sur Toulouse en moins de 1h! - </h6>
              <h6 class="inline-block text-gray-500 animate-pulse py-5 font-elegant text-2xl">www.greenfuz.fr - </h6>
              <h6 class="inline-block text-gray-400 py-5 font-elegant text-2xl">De nouveaux produits toutes les semaines! - </h6>
              <h6 class="inline-block text-gray-500 py-5 font-elegant text-2xl">Code Promo du moment : <b v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: '-10% sur tous les produits !', classes: 'z-[60]' }" class="text-indoor">SISILAFAMILLE</b> - </h6>
              <h6 class="inline-block text-gray-400 py-5 font-elegant text-2xl">SAV disponible du Lundi au Vendredi de 10h à 19h - </h6>
              <h6 class="inline-block text-gray-500 py-5 font-elegant text-2xl">Votre nouveau fournisseur de CBD - </h6>
            </div>
          </div>
      </section>
      <!-- Les produits -->
      <section class="">
        <div class="max-w-full mx-auto px-0 sm:px-0 lg:max-w-full lg:px-0">
            <!-- START -->
            <shop-filters />
            <shop-produits />
            <!-- END -->
        </div>
      </section>
      
      <div class="grid shadow-indoor rounded-xl overflow-hidden mt-10"> 
        <!-- Nos services -->
        <section class="bg-white rounded-t-xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:justify-center py-10">
          <!-- S1 -->
          <div class="p-5  transform mx-auto w-full md:mx-0 group">
            <img class="group-hover:scale-110 transition-all mx-auto w-1/2 h-60 object-contain object-center -mb-10" :src="require('~/assets/img/linememe-1.png')" />
            <div class="w-full text-black text-center bg-gray-200 p-5 rounded-xl shadow-xl group-hover:shadow-indoor">
              <h4 class="text-4xl font-elegant leading-8 my-5 transition-all group-hover:-rotate-2 group-hover:scale-105">Assistances <b class="font-fat group-hover:text-indoor text-outdoor">de Qualité</b></h4> 
              <p class="font-simple text-gray-500 group-hover:text-black text-sm mb-5">Nous restons à l’écoute de nos clients et restons disponibles pour toutes questions et ou litiges.</p>         
            </div>
          </div>
          <!-- S2 -->
          <div class="p-5  transform mx-auto w-full md:mx-0 group">
            <img class="group-hover:scale-110 transition-all mx-auto w-1/2 h-60 object-contain object-center -mb-10" :src="require('~/assets/img/linememe-2.png')" />
            <div class="w-full text-black text-center bg-gray-200 p-5 rounded-xl shadow-xl group-hover:shadow-indoor">
              <h4 class="text-4xl font-elegant leading-8 my-5 transition-all group-hover:-rotate-2 group-hover:scale-105">Livraison <b class="font-fat group-hover:text-indoor text-outdoor">Express</b></h4> 
              <p class="font-simple text-gray-500 group-hover:text-black text-sm mb-5">Situé au cœur de Toulouse nous assurons une livraison en 1h sur le centre de Toulouse et sa périphérie.</p>         
            </div>
          </div>
          <!-- S3 -->
          <div class="p-5  transform mx-auto w-full md:mx-0 group">
            <img class="group-hover:scale-110 transition-all mx-auto w-1/2 h-60 object-contain object-center -mb-10" :src="require('~/assets/img/linememe-3.png')" />
            <div class="w-full text-black text-center bg-gray-200 p-5 rounded-xl shadow-xl group-hover:shadow-indoor">
              <h4 class="text-4xl font-elegant leading-8 my-5 transition-all group-hover:-rotate-2 group-hover:scale-105">Produits <b class="font-fat group-hover:text-indoor text-outdoor">Certifiés</b></h4> 
              <p class="font-simple text-gray-500 group-hover:text-black text-sm mb-5">Nos partenaires situés en Suisse vous assureront le meilleur rapport qualité prix sur le marché.</p>         
            </div>
          </div>
          <!-- S4 -->
          <div class="p-5  transform mx-auto w-full md:mx-0 group">
            <img class="group-hover:scale-110 transition-all mx-auto w-1/2 h-60 object-contain object-center -mb-10" :src="require('~/assets/img/linememe-6.png')" />
            <div class="w-full text-black text-center bg-gray-200 p-5 rounded-xl shadow-xl group-hover:shadow-indoor">
              <h4 class="text-4xl font-elegant leading-8 my-5 transition-all group-hover:-rotate-2 group-hover:scale-105">Consommateur <b class="font-fat group-hover:text-indoor text-outdoor">Régulier</b></h4> 
              <p class="font-simple text-gray-500 group-hover:text-black text-sm mb-5">Green Fuz c’est un service de livraison de qualité, des produits choisis et testés par nous même.</p>         
            </div>
          </div>
        </section>
        <section class="p-5 max-w-full overflow-hidden lg:items-center bg-white ">
            <h2 class="text-4xl font-fat text-black md:text-5xl text-center mb-5">
              Ils parlent de nous !
            </h2>
            <div class="py-12 overflow-hidden inline-block whitespace-nowrap animate-horizontalTextScrolling hover:animation-none">

                <div class="inline-block mr-5 hover:scale-105  transition-transform group">
                  <div class="mm-sm:grid flex items-center bg-outdoor w-full rotate-2 rounded-xl group-hover:shadow-xl">
                    <div class="p-5">
                      <h4 class="mm-sm:mx-auto text-center group-hover:shadow-xl text-4xl font-fat rounded-full h-24 w-24 fond-outdoor bg-light leading-20">5<b class="text-outdoor">/5</b></h4>
                    </div>
                    <div class="mm-sm:px-5 mm-sm:pt-0 py-5 pr-5"> 
                      <p class="text-light font-elegant ">
                        <b class="text-indoor font-fat">"</b> Vous n'irez pas en prison aprés avoir fumer leur CBD<b class="text-indoor font-fat">"</b>
                      </p>
                      <h6 class="mb-2 text-indoor font-fat">Éric Dupond-Moretto</h6>
                    </div>
                  </div>
                </div>
                
                <div class="inline-block mr-5 hover:scale-105  transition-transform group">
                  <div class="mm-sm:grid flex items-center bg-resine w-full -rotate-2 rounded-xl group-hover:shadow-xl">
                    <div class="p-5">
                      <h4 class="mm-sm:mx-auto text-center group-hover:shadow-xl text-4xl font-fat rounded-full h-24 w-24 fond-resine bg-light leading-20">5<b class="text-resine">/5</b></h4>
                    </div>
                    <div class="mm-sm:px-5 mm-sm:pt-0 py-5 pr-5">
                      <p class="text-light font-elegant ">
                        <b class="text-black font-fat">"</b> J'ai jamais commandé, sauf une fois au chalet !<b class="text-black font-fat">"</b>
                      </p>
                      <h6 class="mb-2 text-black font-fat">Antoine Banielle</h6>
                    </div>
                  </div>
                </div>

                
                <div class="inline-block mr-5 hover:scale-105  transition-transform group">
                  <div class="mm-sm:grid flex items-center bg-indoor w-full rotate-2 rounded-xl group-hover:shadow-xl">
                    <div class="p-5">
                      <h4 class="mm-sm:mx-auto text-center group-hover:shadow-xl text-4xl font-fat rounded-full h-24 w-24 fond-indoor bg-light leading-20">5<b class="text-indoor">/5</b></h4>
                    </div>
                    <div class="mm-sm:px-5 mm-sm:pt-0 py-5 pr-5">
                      <p class="text-light font-elegant ">
                        <b class="text-outdoor font-fat">"</b> Vous avez pas vu mes chaussures ?<b class="text-outdoor font-fat">"</b>
                      </p>
                      <h6 class="mb-2 text-outdoor font-fat">Yannick Moah</h6>
                    </div>
                  </div>
                </div>

                <div class="inline-block mr-5 hover:scale-105  transition-transform group">
                  <div class="mm-sm:grid flex items-center bg-resine w-full -rotate-2 rounded-xl group-hover:shadow-xl">
                    <div class="p-5">
                      <h4 class="mm-sm:mx-auto text-center group-hover:shadow-xl text-4xl font-fat rounded-full h-24 w-24 fond-resine bg-light leading-20">5<b class="text-resine">/5</b></h4>
                    </div>
                    <div class="mm-sm:px-5 mm-sm:pt-0 py-5 pr-5">
                      <p class="text-light font-elegant ">
                        <b class="text-black font-fat">"</b> C'est tout simplement du CBD provenant de Sagitarius A.<b class="text-black font-fat">"</b>
                      </p>
                      <h6 class="mb-2 text-black font-fat">Sylvain Burif</h6>
                    </div>
                  </div>
                </div>

                <div class="inline-block mr-5 hover:scale-105  transition-transform group">
                  <div class="mm-sm:grid flex items-center bg-outdoor w-full rotate-2 rounded-xl group-hover:shadow-xl">
                    <div class="p-5">
                      <h4 class="mm-sm:mx-auto text-center group-hover:shadow-xl text-4xl font-fat rounded-full h-24 w-24 fond-outdoor bg-light leading-20">5<b class="text-outdoor">/5</b></h4>
                    </div>
                    <div class="mm-sm:px-5 mm-sm:pt-0 py-5 pr-5">
                      <p class="text-light font-elegant ">
                        <b class="text-indoor font-fat">"</b> Sans leur CBD, je pète un cable<b class="text-indoor font-fat">"</b>
                      </p>
                      <h6 class="mb-2 text-indoor font-fat">Alexandre Denalla</h6>
                    </div>
                  </div>
                </div>

                <div class="inline-block mr-5 hover:scale-105  transition-transform group">
                  <div class="mm-sm:grid flex items-center bg-indoor w-full -rotate-2 rounded-xl group-hover:shadow-xl">
                    <div class="p-5">
                      <h4 class="mm-sm:mx-auto text-center group-hover:shadow-xl text-4xl font-fat rounded-full h-24 w-24 fond-indoor bg-light leading-20">5<b class="text-indoor">/5</b></h4>
                    </div>
                    <div class="mm-sm:px-5 mm-sm:pt-0 py-5 pr-5">
                      <p class="text-light font-elegant ">
                        <b class="text-outdoor font-fat">"</b> Nous, on a toujours entre les jambes un peu de CBD Greenfuz, vous savez ?<b class="text-outdoor font-fat">"</b>
                      </p>
                      <h6 class="mb-2 text-outdoor font-fat">Jawad Bendaouide</h6>
                    </div>
                  </div> 
                </div>

            </div>
        </section>
        <ui-newsletter />
      </div>
      
    <ui-footer />
    </main>

</template>
<script>
  import Vue from 'vue'
  import { mapActions } from 'vuex'
export default {
  name: 'accueil',
  head() {
    return {
      title: 'GreenFuz.fr - Votre nouveau fournisseur de CBD',
      meta: [
        {hid: 'apple-mobile-web-app-capable', property: 'apple-mobile-web-app-capable', content: 'yes'},
        {hid: 'robots',name: 'robots',content: 'index, follow'},
        {hid: 'description',name: 'description',content: 'Greenfuz.fr est un service de livraison de CBD sur Toulouse en vélo et en colis sur la France; retrouvez nos gammes Indoor, Outdoor et Résines à des prix bas.'},
        {hid: 'og:type', property: 'og:type', content: 'website'},
        {hid: 'og:site_name', property: 'og:site_name', content: 'GreenFuz.fr'},
        {hid: 'og:title', property: 'og:title', content: 'GreenFuz.fr - Votre nouveau fournisseur de CBD'},
        {hid: 'og:description', property: 'og:description',content: 'Greenfuz.fr est un service de livraison de CBD sur Toulouse en vélo et en colis sur la France; retrouvez nos gammes Indoor, Outdoor et Résines à des prix bas.'},
        {hid: 'og:image', property: 'og:image', content: 'https://www.greenfuz.fr/share.png'},
        {hid: 'og:url', property: 'og:url', content: 'https://www.greenfuz.fr/'},
        {hid: 'facebook-domain-verification', name: 'facebook-domain-verification', content: 'zs3qo05dx3qlhieixy1w3paotyjeqg'},
      ]
    }
  },
  mounted() {
    this.soundUiNavLeft() 
  },
  beforeDestroy() {
    this.soundUiNavRight()
  },
  data() {
    return {
      //loool: ""+this.$store.state.app.commerce.filter, 
      //products : this.$store.state.app.commerce.products.filter(e => {return e.categories[0].slug === this.loool}),
    }
  }, 
  methods: {
    ...mapActions({
        soundUiNavLeft: 'soundUiNavLeft', soundUiNavRight: 'soundUiNavRight'
    })
  }
};
</script>

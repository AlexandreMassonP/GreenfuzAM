<template>
  <main class="mm-sm:px-5 sm:px-5 lg:px-14  fond-outdoor pt-5  lg:pt-10">
    <div class="max-w-5xl mx-auto bg-white rounded-xl shadow-indoor">
      <div class="mm-sm:px-5 px-10 pt-10 text-center">
        <dl class="text-sm font-medium">
          <dt class="text-resine font-elegant leading-10 text-lg">Référence de la commande :</dt>
          <dd class="text-black font-fat leading-10 text-4xl">{{ ord[0].orderREF }}</dd>
          <dd class="text-gray-500 font-simple leading-10 text-sm">Fait le {{ ord[0].dateTime.created }}</dd>
        </dl>
      </div>
      <h3 class="w-full text-center px-5 pt-5 font-elegant text-outdoor">Liste des produits :</h3>
      <section aria-labelledby="order-heading" class="mt-2 border-t border-outdoor">
        <div class="border-b border-outdoor fond-gray ">
          
          <div  class="grid grid-cols-1 gap-y-5 gap-x-5 p-10"
          :class="{
            ' md:grid-cols-2 lg:grid-cols-3 ': this.$store.state.app.panier, 
            ' md:grid-cols-1 lg:grid-cols-2': !this.$store.state.app.panier
          }"
          >
          
              <div v-for="(prod, i) in this.ord[0].order.line_items" :key="i" class="flex justify-center items-center ">
                <div class="group p-5 bg-white rounded-xl shadow-xl hover:shadow-indoor hover:scale-105 transition-all transform duration-500">
                  <img class="group-hover:rotate-2 transition-all transform duration-500 hover:scale-95 w-64 h-64 object-contain" :src="prod.image.url" alt="" />
                  <div class="mt-4">
                    <div class="flex">
                      <div class="flex-auto">
                        <h3 class="text-2xl font-bold text-black font-elegant select-none " >{{prod.product_name}}</h3>
                      </div>                      
                    </div>
                    <div class="mt-5 flex-1 flex items-end">
                      <div class="flex flex-auto text-sm">
                        <div class="flex flex-1">
                          <div name="quantity-0" class="select-none bg-gray-200 px-5 py-2 text-xs font-medium font-simple text-black rounded-xl" v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Grammes', classes: 'z-[60]' }">
                            <span>{{prod.selected_options[0].option_name}}g</span>
                          </div>
                          <div v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Quantité', classes: 'z-[60]' }">
                            <span class="select-none pl-2 grid items-center text-black py-1">x{{prod.quantity}}</span>
                          </div>
                        </div>
                        <div class="flex-1">
                          <span class="font-fat text-xl text-indoor float-right select-none " v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Prix du produit', classes: 'z-[60]' }">
                            {{prod.price.formatted}} €
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>
        <div class="pb-10">
          <dl class="grid grid-cols-2 gap-x-6 text-sm py-10 px-5 text-center">
            <div>
              <dt class="text-gray-500 font-elegant mm-sm:leading-5 mm-sm:pb-5 leading-10 text-lg">Adresse de livraison</dt>
              <dd class="mt-5 text-black font-simple">
                <address class="not-italic">
                  <span class="block"><b>{{ord[0].livraison.name}}</b></span>
                  <span class="block">{{ord[0].livraison.street}}</span>
                  <span class="block">{{ord[0].livraison.postal_zip_code}} {{ord[0].livraison.town_city}}</span>
                </address>
              </dd>
            </div>
            <div>
              <dt class="text-gray-500 font-elegant mm-sm:leading-5 mm-sm:pb-5 leading-10 text-lg">Adresse de facturation</dt>
              <dd class="mt-5 text-black font-simple">
                <address class="not-italic">
                  <span class="block"><b>{{this.$store.state.app.users.profil.firstName}} {{this.$store.state.app.users.profil.lastName}}</b></span>
                  <span class="block">{{this.$store.state.app.users.profil.location.street_number}} {{this.$store.state.app.users.profil.location.rue}}</span>
                  <span class="block">{{this.$store.state.app.users.profil.location.zipcode}} {{this.$store.state.app.users.profil.location.city}}</span>
                </address>
              </dd>
            </div>
          </dl>
          <dl class="grid gap-x-5 border-t border-outdoor text-sm mm-sm:px-5 px-10 py-8 text-center fond-gray">
            <div class="bg-white rounder-lg py-5 px-10 max-w-sm mx-auto shadow-indoor">
              <span class="text-gray-500 font-elegant leading-10 mm-sm:leading-5 text-lg">Méthode de livraison : <b class="mm-sm:block mm-sm:mt-5 text-black text-sm font-simple leading-4">{{ord[0].order.shipping.description}}</b></span>
            </div>
          </dl>

          <dl class="space-y-5 border-t border-outdoor text-sm pt-10 px-10">
            <div class="flex justify-between pb-5">
              <dt class="text-gray-500 font-elegant text-lg">Sous total</dt>
              <dd class="text-black font-simple">{{ord[0].order.subtotal.formatted}} €</dd>
            </div>
            <div v-if="ord[0].order.discount.length != 0" class="flex justify-between pb-5">
              <dt class="flex text-gray-500 font-elegant text-lg leading-8">
                Code Promo
                <span v-if="ord[0].order.discount" class="ml-2.5 leading-8 text-lg text-indoor">- {{ord[0].order.discount.value}} %</span>
              </dt>
              <dd v-if="ord[0].order.discount" class="text-resine font-fat animate-pulse text-lg leading-8">{{ord[0].order.discount.code}}</dd>

              <dd v-if="ord[0].order.discount" class="text-black font-simple leading-8">- {{ord[0].order.discount.amount_saved.formatted}} €</dd>
            </div>
            <div class="flex justify-between pb-5">
              <dt class="text-gray-500 font-elegant text-lg">Frais de livraison</dt>
              <dd class="text-black font-simple">{{ord[0].order.shipping.price.formatted}} €</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-indoor font-elegant text-lg">Total</dt>
              <dd class="text-black font-fat text-xl">{{ord[0].order.total.formatted}} €</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
    <ui-footer />
  </main>
</template>

<script>
import { mapGetters} from 'vuex'
export default {
  head() {
      return {
      title: 'Facture : '+ord[0].orderREF+' - GreenFuz.fr',
      meta: [
          {hid: 'robots',name: 'robots',content: 'index, follow'},
          {hid: 'description',name: 'description',content: 'Greenfuz.fr est un service de livraison de CBD sur Toulouse en vélo et en colis sur la France; retrouvez nos gammes Indoor, Outdoor et Résines à des prix bas.'},
          {hid: 'og:type', property: 'og:type', content: 'website'},
          {hid: 'og:site_name', property: 'og:site_name', content: 'GreenFuz.fr'},
          {hid: 'og:title', property: 'og:title', content: 'GreenFuz.fr - Votre nouveau fournisseur de CBD'},
          {hid: 'og:description', property: 'og:description',content: 'Greenfuz.fr est un service de livraison de CBD sur Toulouse en vélo et en colis sur la France; retrouvez nos gammes Indoor, Outdoor et Résines à des prix bas.'},
          {hid: 'og:image', property: 'og:image', content: 'https://www.greenfuz.fr/share.png'},
          {hid: 'og:url', property: 'og:url', content: 'https://www.greenfuz.fr/'},
      ]
      }
  },
  data() {
    return {

      slug: this.$route.params.slug,
      ord: this.$store.state.app.users.orders.filter(e => {return e.orderREF === this.$route.params.slug})
    }
  },

  middleware({ store, redirect }) {
      // Si l'utilisateur n'est pas authentifié
      if (!store.state.app.users.isLoggedIn) {
          return redirect('/auth')
      } 
  },
}
</script>

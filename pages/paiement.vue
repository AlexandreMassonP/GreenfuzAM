
<template>
  <main class="mm-sm:px-5 sm:px-5 lg:px-14 fond-outdoor pt-5 lg:pt-10"> 
        <shop-formulaire @shippingCost="updateCost" @orderComplete="handleOrderRes" @orderError="handleOrderError"/>
    <ui-footer />
  </main>
</template>
<script>
import Vue from 'vue'
import { mapActions } from 'vuex'
export default {
    name: 'paiement',
    head() {
        return {
        title: 'Paiement - GreenFuz.fr',
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
    mounted() {
      this.soundUiNavLeft() 
    },
    beforeDestroy() {
      this.soundUiNavRight()
    },
    data: () => ({
      shippingCost: '0.00',
      orderNumber: '',
      orderRef: '',
      orderError: ''
    }),
    middleware({ store, redirect }) {
      // Si l'utilisateur n'est pas authentifié
      if (!store.state.app.users.isLoggedIn) {
        return redirect('/auth')
      } 
      if (store.state.app.commerce.cart.line_items === null) {
        return redirect('/')
      } 
    },
    methods: {
      ...mapActions({
          soundUiNavLeft: 'soundUiNavLeft', soundUiNavRight: 'soundUiNavRight'
      }),
      handleOrderRes(r) {
          this.orderNumber = r
          this.orderRef = r
          console.log(r)
      },
      handleOrderError(e) {
          this.orderError = e
          console.log(e)
      },
      updateCost(price) {
          this.shippingCost = price
          console.log(price)
      }
    }
}
</script>

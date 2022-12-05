<template>
  <main class="mm-sm:px-5 sm:px-5 lg:px-14">

    <!-- Catégories -->
    <ui-categories />
    <transition-group name="fade" tag="div"
      class="grid grid-cols-1 gap-y-5 gap-x-5 xl:gap-x-6 mt-20" 
      :class="{
        ' md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5': this.$store.state.app.panier, 
        ' md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-3': !this.$store.state.app.panier
      }" 
    >
      <div v-for="product in this.$store.state.app.commerce.products.filter(e => {return e.categories[0].slug === this.$route.params.slug})" :key="product.id">
          <shop-produit :key="product.id" :product="product"></shop-produit>
      </div>
    </transition-group>
    <ui-footer />
  </main>
</template>
<script>
export default {
  head() {
      return {
      title: this.$route.params.slug+' - GreenFuz.fr',
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
};
</script>

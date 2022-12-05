<template>
  <main class="mm-sm:px-5 sm:px-5 lg:px-14">

    <!-- Catégories -->
    <ui-categories />
    <ui-footer />
  </main>
</template>

<script>
export default {
    head() {
      return {
      title: 'Catégories - GreenFuz.fr',
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

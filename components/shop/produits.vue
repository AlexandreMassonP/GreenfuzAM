<template>
    <section>             
      <div class="max-w-full mx-auto py-16 px-0 sm:py-4 sm:px-0 lg:max-w-full lg:px-0">
        <transition-group name="fade" tag="div"
          class="grid grid-cols-1 gap-y-5 gap-x-5 xl:gap-x-6" 
          :class="{
            ' md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5': this.$store.state.app.panier, 
            ' md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-3': !this.$store.state.app.panier
          }" 
        >
          <div v-for="product in this.$store.state.app.commerce.products.filter(e => {if(this.$store.state.app.commerce.filter !='') { return e.categories[0].slug === this.$store.state.app.commerce.filter} else {return e}}).sort(function (a, b) {  return a.sort_order - b.sort_order;  })" :key="product.id">
              <shop-produit :key="product.id" :product="product"></shop-produit>
          </div>
        </transition-group>
      </div>
    </section>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props: {
  },
};
</script>

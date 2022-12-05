<template>
    <section class="z-40">
        <div class="h-full shadow-outdoor hover:shadow-indoor flex-row items-end justify-between bg-white">
            <div class="h-28 align-middle">
                <div class="flex items-center justify-between h-full relative"> 
                    <h2 ref="applicant-information-title" class="w-full items-center text-center text-2xl leading-6 font-medium font-elegant text-indoor">
                        Votre panier
                    </h2>
                    <div class="mr-10 h-full items-center flex group absolute top-0 right-0">
                        <div class="block" v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Vider le panier', classes: 'z-[60]' }">
                            <button type="button" class="p-2 text-gray-500 hover:text-black" @click="clearCart(), mdr()">
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="relative border-t border-b border-indoor hover:border-outdoor transition-all duration-500 sm:px-0 fond-gray h-cart scrollbar-thin scrollbar-thumb-indoor scrollbar-track-outdoor overflow-y-auto">
                <div v-if="this.$store.state.app.commerce.cart.total_items === 0" class="overflow-hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
                    <img  loading="lazy" src="@/assets/img/linememe-fry.png" class="-mr-5 -mb-5">
                </div>
                <div v-else class=" ">                
                    <div class="p-4 h-auto duration-1000">
                        <transition-group name="fade" tag="ul">
                            <li v-for="product in this.$store.state.app.commerce.cart.line_items" :key="product.id" class="group w-full h-20 px-2 mb-4 m-auto bg-white hover:bg-gray-200 shadow-xl rounded-xl relative transition-transform transform hover:shadow-indoor hover:scale-95 ">
                                <div class="w-full p-2 top-0 flex">
                                        <div class="ml-2 flex-1 flex flex-col ">
                                            <div class="">
                                                <div class="flex justify-between text-base font-elegant py-3">
                                                    <div class="flex justify-between items-center">
                                                        <img loading="lazy" :src="require('~/assets/img/produits/'+product.image.filename)" class="mr-2 w-10 h-10 object-center object-contain">
                                                        <div class="text-left">
                                                            <a href="#" class="text-black text-xl leading-none">
                                                                {{ product.name }}
                                                            </a>
                                                            <p class="text-sm font-simple text-gray-500 leading-none  select-none">
                                                                <span v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Grammes', classes: 'z-[60]' }" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-black">{{ product.selected_options[0].option_name }}G</span> x<b v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Quantité', classes: 'z-[60]' }" class="text-gray-500  font-simple ">{{ product.quantity }}</b>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="flex justify-between items-center">
                                                        <p class="font-fat group-hover:text-black text-gray-500 text-1xl text-right leading-10 select-none">
                                                            <b class="font-light"> {{ product.line_total.formatted || '0.00' }}</b> €
                                                        </p>
                                                        <svg v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Retirer le produit', classes: 'z-[60]' }" @click.stop="removeProduct(product.id), lol(product.name)" class="cursor-pointer ml-2 h-4 w-4 text-gray-400 align-center items-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </li>
                        </transition-group>
                    </div>
                </div>
            </div>
            <div class="h-32 align-middle" v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: '* : Frais de livraison calculés dans la partie paiement', classes: 'z-[60]' }">
                <div class="px-10 w-full flex text-center align-center justify-between">
                    <p v-if="this.$store.state.app.commerce.cart.subtotal" ref="applicant-information-title-if" class="w-full py-3 text-center text-1xl font-fat text-outdoor flex justify-between">
                        <b class="text-gray-500  font-elegant ">Sous total : </b><b class="text-black font-light"> {{ this.$store.state.app.commerce.cart.subtotal.formatted }} €<i class="animate-pulse mr-2">*</i></b>
                    </p>
                    <p v-else ref="applicant-information-title-else" class="w-full py-3 text-center text-1xl font-medium font-fat text-outdoor flex justify-between">
                        <b class="text-gray-500  font-elegant ">Sous total :</b><b class="text-black font-light"> {{ subtotal }} €<i class="animate-pulse mr-2">*</i></b>
                    </p>
                </div>
                <div v-if="this.$store.state.app.commerce.cart.total_items === 0" class="px-10 w-full flex items-center text-center justify-between">
                    <p class="group w-full rounded-xl place-items-center bg-gray-300 text-black py-4 px-6 tracking-wide text-lg font-elegant focus:outline-none select-none text-center transition ease-in duration-300">Panier vide !</p>
                </div>
                <div v-else @click="soundUiNavRight()" class="px-10 w-full flex items-center text-center justify-between">
                    <nuxt-link @click.native="setToken(), panier()" to="/paiement" class="group w-full rounded-xl place-items-center bg-gray-300 text-black py-4 px-6 tracking-wide text-lg font-elegant focus:outline-none hover:bg-indoor hover:text-white cursor-pointer text-center transition ease-in duration-300">Passez au paiement</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
</style>
<script >
import {mapActions} from 'vuex'
export default { 
    name: 'shop-cart',
    data() {
        return {
            subtotal: "0"
        }
    },
    mounted() { 
        //this.retrieveCart(); 
    },
    methods: {
        lol (e) {
            this.$toast.global.gfsucces(e +' supprimer du panier');
            this.soundUiShopDelete()
        },
        mdr () {
            this.$toast.global.gfsucces('Panier vidé avec succés !');
            this.soundUiShopDelete()
        },
        ...mapActions({
            soundUiShopDelete: 'soundUiShopDelete', soundUiNavRight: 'soundUiNavRight',
            //retrieveCart: 'retrieveCart', 
            removeProduct: 'removeProductFromCart', 
            clearCart: 'clearCart',
            setToken: 'setToken',
            panier: 'panier'
        }),
    }
}
</script>
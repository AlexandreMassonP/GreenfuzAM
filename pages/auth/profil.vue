<template>
  <main class="mm-sm:px-5 sm:px-5 lg:px-14 fond-outdoor pt-5 lg:pt-10">
    <div class="grid grid-cols-1 gap-5 max-w-[1024px] mx-auto" 
    :class="{
        'lg:grid-cols-2': this.$store.state.app.panier, //open
        'lg:grid-cols-1 xl:grid-cols-2': !this.$store.state.app.panier  //close
    }">
        <!-- COL1 /> -->
        <section class="">
            <div class="hover:shadow-outdoor shadow-indoor transition group max-w-screen-sm place-items-center m-auto rounded-xl">

                <div class="p-10 bg-white rounded-t-xl">
                    <h2 ref="applicant-information-title" class="text-center text-4xl leading-10 font-medium font-elegant text-black">
                        Mon compte
                    </h2>
                </div>

                <!-- FORMS /> -->
                <div class="bg-white rounded-b-xl">
                    <ValidationObserver ref="observer">
                        <form @submit.prevent="pushModidicationUser()">  
                            <div class="block pb-10 text-center">
                                <div class="border-b border-gray-200">
                                    <!-- INFO PERSO -->
                                    <div class="group p-10 bg-white col-span-6 relative cursor-pointer" @click="drawerPerso()">
                                        <h2 ref="applicant-information-title" :class="{'text-resine': infoPerso, 'text-gray-400': !infoPerso}" class="transition-all select-none hover:text-indoor text-left text-2xl leading-6 font-medium font-elegant  pr-6">
                                            Informations personnelles
                                        </h2>
                                        <div class="absolute top-1/2 right-[2.5rem] transform -translate-y-1/2">
                                            <svg :class="{'rotate-180': infoPerso, 'rotate-0 animate-pulse': !infoPerso}" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <transition-group name="slide-in" tag="div" class="grid gap-x-5 grid-cols-6 border-b border-gray-200 bg-gray-100">
                                        <div v-if="infoPerso" key="prenom" style="transition-delay:0.1s"  class="mm-sm:col-span-6 mm-sm:mx-5 mm-sm:mb-5 col-span-3 ml-10 mb-10 mt-10">
                                            <label for="first-name" class="text-indoor font-elegant leading-3 text-lg">
                                                Prénom
                                            </label>
                                            <ValidationProvider rules="required|alpha" v-slot="{ errors }">
                                                <input type="text" placeholder="ex : Jean" v-model.lazy="userNewData.firstName" name="Prénom" ref="first-name" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor rounded-x leading-10">
                                                <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div v-if="infoPerso" key="last-name" style="transition-delay:0.2s"  class="mm-sm:col-span-6 mm-sm:mx-5 mm-sm:mb-5 mm-sm:mt-0 col-span-3 mr-10 mb-10 mt-10">
                                            <label for="last-name" class="text-indoor font-elegant leading-3 text-lg">
                                                Nom
                                            </label>
                                            <ValidationProvider rules="required|alpha" v-slot="{ errors }">
                                                <input type="text" placeholder="ex : DUPONT" v-model.lazy="userNewData.lastName" name="Nom" ref="last-name" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div v-if="infoPerso" key="email" style="transition-delay:0.3s"  class="mm-sm:col-span-6 mm-sm:mx-5 mm-sm:mb-5 col-span-3 ml-10 mb-10">
                                            <label for="email" class="text-indoor font-elegant leading-3 text-lg">
                                                Adresse email
                                            </label>
                                            <ValidationProvider rules="required|email" v-slot="{ errors }">
                                                <input ref="email" placeholder="ex : jeandupont@gmail.com" name="Email" v-model.lazy="userNewData.email" type="email" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div v-if="infoPerso" key="telephone" style="transition-delay:0.4s"  class="mm-sm:col-span-6 mm-sm:mx-5 col-span-3 mr-10 mb-10">
                                            <label for="mobile" class="text-indoor font-elegant leading-3 text-lg">
                                                Téléphone
                                            </label>
                                            <ValidationProvider rules="required|digits:10" v-slot="{ errors }">
                                                <input ref="mobile" placeholder="ex : 06 36 65 65 65" v-model.lazy="userNewData.mobile" name="Téléphone" type="telephone" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </transition-group>
                                    <!-- INFO LOC -->
                                    <div class="group p-10 bg-white col-span-6 relative cursor-pointer" @click="drawerLoc()">
                                        <h2 ref="applicant-localisation-title" :class="{'text-resine': infoFacturation, 'text-gray-400': !infoFacturation}" class="transition-all select-none hover:text-indoor text-left text-2xl leading-6 font-medium font-elegant text-gray-400">
                                            Adresse de facturation
                                        </h2>
                                        <div class="absolute top-[2.5rem] right-[2.5rem]">
                                            <svg :class="{'rotate-180': infoFacturation, 'rotate-0 animate-pulse': !infoFacturation}" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <transition-group name="slide-in" tag="div" class="grid gap-x-5 grid-cols-6 border-b border-gray-200 bg-gray-100">
                                        <div v-if="infoFacturation" key="map" class="col-span-6 border-b border-gray-200 transition-all duration-500 bg-indoor">
                                            <widget-gmap  @onChangeLocation="updateLocation" />
                                        </div>
                                        <div v-if="infoFacturation" key="info" style="transition-delay:0.2s" class="col-span-6">
                                            <div class="grid grid-cols-1 gap-5 sm:grid-cols-6 m-10 mm-sm:mx-0">
                                                <div class="mm-sm:col-span-6 mm-sm:mx-5 col-span-2 mb-5">
                                                    <label for="number" class="text-indoor font-elegant leading-3 text-lg">
                                                        Numéro
                                                    </label>
                                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                                        <input type="text" v-model.lazy="userNewData.location.street_number" name="number" ref="number"  :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                        <span class="text-sm font-simple animate-pulse text-red-400">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>                            
                                                <div class="mm-sm:col-span-6 mm-sm:mx-5 col-span-4 mb-5">
                                                    <label for="rue" class="text-indoor font-elegant leading-3 text-lg">
                                                        Rue
                                                    </label>
                                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                                        <input type="text" v-model.lazy="userNewData.location.rue" name="rue" ref="rue"  :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                        <span class="text-sm font-simple animate-pulse text-red-400">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                                <div class="mm-sm:col-span-6 mm-sm:mx-5 col-span-2 mb-5">
                                                    <label for="zip" class="text-indoor font-elegant leading-3 text-lg">
                                                        Code postal
                                                    </label>
                                                    <ValidationProvider rules="required|digits:5" v-slot="{ errors }">
                                                        <input type="text" v-model.lazy="userNewData.location.zipcode" name="zip" ref="zip"  :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                        <span class="text-sm font-simple animate-pulse text-red-400">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                                <div class="mm-sm:col-span-6 mm-sm:mx-5 col-span-4 mb-5">
                                                    <label for="city" class="text-indoor font-elegant leading-3 text-lg">
                                                        Ville
                                                    </label>
                                                    <ValidationProvider rules="required|alpha" v-slot="{ errors }">
                                                        <input type="text" v-model.lazy="userNewData.location.city" name="city" ref="city"  :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                        <span class="text-sm font-simple animate-pulse text-red-400">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                                <div class="mm-sm:col-span-6 mm-sm:mx-5 mm-sm:mb-5 col-span-2">
                                                    <label for="country" class="text-indoor font-elegant leading-3 text-lg">
                                                        Pays
                                                    </label>
                                                    <ValidationProvider rules="required|alpha" v-slot="{ errors }">
                                                        <input type="text" v-model.lazy="userNewData.location.country" name="country" ref="country"  :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                        <span class="text-sm font-simple animate-pulse text-red-400">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                                <div class="mm-sm:col-span-6 mm-sm:mx-5 col-span-4">
                                                    <label for="area" class="text-indoor font-elegant leading-3 text-lg">
                                                        Région
                                                    </label>
                                                    <ValidationProvider rules="required|alpha" v-slot="{ errors }">
                                                        <input type="text" v-model.lazy="userNewData.location.area" name="area" ref="area"  :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                        <span class="text-sm font-simple animate-pulse text-red-400">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>                                        
                                            </div>
                                        </div>
                                    </transition-group>
                                    <!-- INFO AUTRES -->
                                    <div class="group p-10 bg-white col-span-6 relative cursor-pointer" @click="drawerAutres()">
                                        <h2 ref="applicant-autres-title" :class="{'text-resine': infoAutres, 'text-gray-400': !infoAutres}" class="transition-all select-none hover:text-indoor  text-left text-2xl leading-6 font-medium font-elegant text-gray-400">
                                            Autres
                                        </h2>
                                        <div class="absolute top-[2.5rem] right-[2.5rem]">
                                            <svg :class="{'rotate-180': infoAutres, 'rotate-0 animate-pulse': !infoAutres}" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <transition name="slide-in" tag="div" class="grid gap-x-5 grid-cols-6  border-b border-gray-200  ">
                                        <div v-if="infoAutres" key="prenom" style="transition-delay:0.1s" class="col-span-6 p-10 flex justify-between items-center bg-gray-100 ">
                                            <p class="text-indoor font-elegant leading-10 text-lg">
                                                Activer le son sur le site ?
                                            </p>
                                            <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                                <input @click="tglsound" type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                                                <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                            </div>                                        
                                        </div>
                                    </transition>   
                                </div>
                                <span @click="pushModidicationUser()" class=" group flex rounded-xl w-max place-items-center mt-10 mx-auto bg-gray-300 text-black p-5 tracking-wide text-lg font-elegant focus:outline-none hover:bg-indoor hover:text-white cursor-pointer text-center transition ease-in duration-300">
                                    Enregistrer
                                    <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:animate-pulse stroke-current w-5 h-5 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </span>
                            </div> 
                        </form>
                    </ValidationObserver>
                </div>
            </div>
        </section>
        <!-- COL2 /> -->
        <section class="">
            <div class="hover:shadow-outdoor shadow-indoor transition group max-w-screen-sm place-items-center m-auto rounded-xl">


                <div class="pt-10 bg-white rounded-b-xl  rounded-t-xl">

                    <!-- CARTE /> -->
                    <div class="transition-all duration-500 px-5 bg-white  rounded-t-xl">
                        <div class="w-96 max-w-full m-auto bg-white rounded-xl relative text-indoor hover:shadow-indoor shadow-lg transition-transform transform hover:scale-110 bg-gradient-to-r from-light to-gray-200  ring-1 ring-white">

                            <div class="relative object-cover w-full h-full rounded-xl p-5 ">
                                <div class="flex justify-between">
                                    <div class="">
                                        <p class="font-fat text-black text-3xl">
                                            {{userNewData.firstName}} <span class="uppercase">{{userNewData.lastName}}</span>
                                        </p>
                                    </div>
                                    <ui-logo :size="'50'"/>
                                </div>
                                <div class="pt-2">
                                    <p class="font-elegant text-indoor">
                                        {{userNewData.email}}
                                    </p>
                                    <p class="font-elegant text-indoor">
                                        {{userNewData.location.street_number}} {{userNewData.location.rue}} {{userNewData.location.zipcode}} {{userNewData.location.city}} 
                                    </p>
                                </div>
                                <div class="pt-5">
                                    <div class="mm-sm:flex mm-sm:justify-between lg:flex lg:justify-between"
                                        :class="{
                                            'md:flex md:justify-between': this.$store.state.app.panier, //open
                                            '': !this.$store.state.app.panier  //close
                                        }"
                                    >
                                        <div class="pr-2">
                                            <p class="text-xs font-simple text-gray-500">
                                                Téléphone :
                                            </p>
                                            <p class="font-elegant tracking-wider text-sm">
                                                {{userNewData.mobile}}
                                            </p>
                                        </div>               
                                        <div class="">
                                            <p class="text-xs font-simple text-gray-500">
                                                Fait en {{userNewData.location.area}} ({{userNewData.location.country}}) :
                                            </p>
                                            <p class="font-elegant tracking-more-wider text-sm">
                                                {{userNewData.dateTime.created}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                
                            </div>
                        </div>
                    </div>
                    <div class="p-5 bg-white">
                        <h2 ref="applicant-information-title" class="text-center text-xl leading-10 font-medium font-elegant text-black">
                            Mes factures
                        </h2>
                    </div>
                    <transition-group appear-active-class="slide-in" name="slide-in" tag="ul"  class="sm:col-span-6 px-5 py-10 bg-indoor rounded-b-xl">
                        <li v-for="facture in this.ordered.slice(0,this.orderedNum)" :key="facture.orderREF"  class=" w-96 max-w-full px-10 mb-5 m-auto rounded-xl relative transition-all text-white shadow-2xl hover:delay-0 hover:scale-110 hover:shadow-outdoor bg-white">
                            <div class="flex justify-between text-base font-elegant py-3">
                                <div class="text-center">
                                    <h3 class="text-black hover:underline">
                                       <nuxt-link :to="'/commande/'+facture.orderREF">{{facture.orderREF}}</nuxt-link>
                                    </h3>
                                    <p class="text-outdoor text-xs font-medium select-none ">{{facture.dateTime.created}}</p>
                                </div>
                                <p class="font-fat text-indoor grid items-center select-none ">
                                    {{facture.order.total.formatted}} €
                                </p>
                                <p class="text-sm font-simple text-gray-500 grid items-center">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-black select-none">Payé</span>
                                </p>
                            </div>
                        </li>
                        <span key="plus" v-if="this.orderedNum <= this.ordered.length" @click="orderedNumGet()" class="group flex rounded-xl w-max place-items-center mt-10 mx-auto bg-gray-300 text-black p-5 tracking-wide text-lg font-elegant focus:outline-none hover:bg-indoor hover:text-white cursor-pointer text-center transition ease-in duration-300">
                            En voir plus
                            <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:animate-pulse stroke-current w-5 h-5 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                            </svg>
                        </span>
                    </transition-group>

                </div>
            </div>
        </section>

    </div>
    <ui-footer />
  </main>
</template>
<script lang="ts">
    import Vue from 'vue'
    import { mapActions } from 'vuex'
    import { ValidationObserver, ValidationProvider } from "vee-validate";
    export default Vue.extend({
        name: "auth-profil",
        head() {
            return {
            title: 'Profil - GreenFuz.fr',
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
        components: {
            ValidationObserver, ValidationProvider
        },
        middleware({ store, redirect }) {
            // Si l'utilisateur n'est pas authentifié
            if (!store.state.app.users.isLoggedIn) {
                return redirect('/auth')
            } 
        },
        data() {
            return {
                ordered: "",
                orderedNum: 5,
                infoPerso: true,
                infoFacturation: false,
                infoAutres: false,
                userNewData: {
                    firstName: this.$store.state.app.users.profil.firstName,
                    lastName: this.$store.state.app.users.profil.lastName,
                    mobile: this.$store.state.app.users.profil.mobile,
                    email: this.$store.state.app.users.profil.email,
                    uid: this.$store.state.app.users.profil.uid,
                    location: {
                        street_number: ""+this.$store.state.app.users.profil.location.street_number,
                        rue: ""+this.$store.state.app.users.profil.location.rue,
                        city: ""+this.$store.state.app.users.profil.location.city,
                        area: ""+this.$store.state.app.users.profil.location.area,
                        zipcode: ""+this.$store.state.app.users.profil.location.zipcode,
                        country: ""+this.$store.state.app.users.profil.location.country,
                    },
                    completed: this.$store.state.app.users.profil.completed,
                    dateTime: {
                        created: ""+this.$store.state.app.users.profil.dateTime.created,
                        lastLogin: ""+this.$store.state.app.users.profil.dateTime.lastLogin,
                        updated: ""+this.$store.state.app.users.profil.dateTime.updated,
                    }
                },
            }
        },
        mounted() {
            this.sortOrder()
        },
        methods: {
            ...mapActions({
                tglsound: 'sounds', soundUiAccordeonUp: 'soundUiAccordeonUp', soundUiAccordeonBot: 'soundUiAccordeonBot', 
                soundUiAlertInfo: 'soundUiAlertInfo', soundUiAlertError: 'soundUiAlertError', soundUiAlertSucces: 'soundUiAlertSucces'
            }),
            orderedNumGet(){
              this.orderedNum += 5
            },
            async sortOrder() {
                this.ordered = this.$store.state.app.users.orders.sort((a: { dateTime: { unix: string|number|Date; }; },b: { dateTime: { unix: string|number|Date; }; }) => {return new Date(b.dateTime.unix).getTime() - new Date(a.dateTime.unix).getTime()});
            },
            async drawerPerso() {
                this.infoPerso = !this.infoPerso
                this.infoAutres = false
                this.infoFacturation = false
                if(this.infoPerso) {
                    this.soundUiAccordeonUp()
                } else {
                    this.soundUiAccordeonBot()
                }
                
            },
            async drawerAutres() {
                this.infoPerso = false
                this.infoAutres = !this.infoAutres
                this.infoFacturation = false
                if(this.infoAutres) {
                    this.soundUiAccordeonUp()
                } else {
                    this.soundUiAccordeonBot()
                }
            },
            async drawerLoc() {
                this.infoPerso = false
                this.infoAutres = false
                this.infoFacturation = !this.infoFacturation
                if(this.infoFacturation) {
                    this.soundUiAccordeonUp()
                } else {
                    this.soundUiAccordeonBot()
                }
            },
            async pushModidicationUser() {
                const isValid = await (this.$refs.observer as Vue & { validate: () => boolean }).validate()
                const profil = await this.$fire.firestore.collection('users').doc(this.$store.state.app.users.authUser.uid) 
                try {
                    if (!isValid) {
                        this.$toast.global.gferror("❌ Veuillez remplir tous les champs du formulaire requis de la bonne facon");
                        this.soundUiAlertError()
                    } else {
                        await profil.set({
                            firstName: this.userNewData.firstName,
                            lastName: this.userNewData.lastName,
                            mobile: this.userNewData.mobile,
                            email: this.userNewData.email,
                            uid: this.$store.state.app.users.authUser.uid,
                            completed: '2',
                            location: {
                                street_number: this.userNewData.location.street_number,
                                rue: this.userNewData.location.rue,
                                city: this.userNewData.location.city,
                                area: this.userNewData.location.area,
                                zipcode: this.userNewData.location.zipcode,
                                country: this.userNewData.location.country,
                            },
                            dateTime: {
                                created: this.userNewData.dateTime.created,
                                lastLogin: this.userNewData.dateTime.lastLogin,
                                updated: this.$moment(new Date()).format('DD MMMM YYYY [à] HH[H]mm'),
                            },
                        }, { merge: true })
                        this.$toast.global.gfsucces("✔️ Modification enregistrer avec succés");
                        this.soundUiAlertSucces()
                    }
                } catch (e) {
                    this.$toast.global.gferror("❌ Erreur sur l'envoie de la modification");
                    this.soundUiAlertError()
                }
            },
            async updateLocation(r: { loc: any; }) {    
                this.userNewData.location.street_number = r.loc.street_number
                this.userNewData.location.rue = r.loc.rue
                this.userNewData.location.city = r.loc.city
                this.userNewData.location.area = r.loc.area
                this.userNewData.location.zipcode = r.loc.zipcode  
                this.userNewData.location.country = r.loc.country
            }
        }
    })
</script>
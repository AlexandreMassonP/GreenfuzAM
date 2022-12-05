<template>
    <div class="grid grid-cols-1 gap-5 max-w-[1024px] mx-auto" 
    :class="{
        'lg:grid-cols-2': this.$store.state.app.panier, //open
        'lg:grid-cols-1 xl:grid-cols-2': !this.$store.state.app.panier  //close
    }">
         
        <!-- COL1 /> -->
        <section>
            <div class="shadow-indoor transition group max-w-screen-sm place-items-center m-auto rounded-xl ">
                <!-- TITRE -->
                <div class="p-10 bg-white rounded-t-xl border-b border-indoor group-hover:border-outdoor">
                    <h2 ref="applicant-information-title" class="text-center text-2xl leading-5 font-medium font-elegant text-indoor">
                        Détails du paiement
                    </h2>
                    <nav class="w-max mt-5 mx-auto">
                        <ol role="list" class="flex items-center">
                            <li class="relative pr-8 lg:pr-16" @click="drawerPerso()">
                                <!-- Completed Step -->
                                <div v-if='validation.perso'>
                                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div class="h-0.5 w-full bg-indoor"></div>
                                    </div>
                                    <a v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Étape 1', classes: 'z-[60]' }" href="#" class="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-black" :class="{'bg-indoor': !etapes.perso, 'bg-black': etapes.perso}">
                                        <!-- Heroicon name: solid/check -->
                                        <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                                <!-- Upcoming Step -->
                                <div v-if='!validation.perso'> 
                                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div class="h-0.5 w-full bg-outdoor " ></div>
                                    </div>
                                    <a v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Étape 1', classes: 'z-[60]' }" :class="{'border-outdoor': !etapes.perso, 'border-indoor': etapes.perso}" href="#" class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 rounded-full hover:border-black">
                                        <span class="h-2.5 w-2.5 rounded-full" :class="{'bg-indoor': !etapes.perso, 'bg-outdoor animate-pulse': etapes.perso}" aria-hidden="true"></span>
                                    </a>
                                </div>
                            </li>
                            <li class="relative pr-8 lg:pr-16" @click="drawerLoc()" >
                                <!-- Completed Step -->
                                <div v-if='validation.livraison'>
                                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div class="h-0.5 w-full bg-indoor"></div>
                                    </div>
                                    <a v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Étape 2', classes: 'z-[60]' }" href="#" class="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-black"  :class="{'bg-indoor': !etapes.livraison, 'bg-black': etapes.livraison}">
                                        <!-- Heroicon name: solid/check -->
                                        <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                                <!-- Upcoming Step -->
                                <div v-if='!validation.livraison'> 
                                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div class="h-0.5 w-full bg-outdoor " ></div>
                                    </div>
                                    <a v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Étape 2', classes: 'z-[60]' }" :class="{'border-outdoor': !etapes.livraison, 'border-indoor': etapes.livraison}" href="#" class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 rounded-full hover:border-black">
                                        <span class="h-2.5 w-2.5 rounded-full" :class="{'bg-indoor': !etapes.livraison, 'bg-outdoor animate-pulse': etapes.livraison}" aria-hidden="true"></span>
                                    </a>
                                </div>
                            </li>
                            <li class="relative pr-8 lg:pr-16" @click="drawerTypeLivraison()"  >
                                <!-- Completed Step -->
                                <div v-if="this.shippingCost != 0.00">
                                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div class="h-0.5 w-full bg-indoor"></div>
                                    </div>
                                    <a v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Étape 3', classes: 'z-[60]' }"  href="#" class="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-black" :class="{'bg-indoor': !etapes.typeLivraison, 'bg-black': etapes.typeLivraison}">
                                        <!-- Heroicon name: solid/check -->
                                        <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                                <!-- Upcoming Step -->
                                <div v-if="this.shippingCost === 0.00"> 
                                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div class="h-0.5 w-full bg-outdoor " ></div>
                                    </div>
                                    <a v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Étape 3', classes: 'z-[60]' }"  :class="{'border-outdoor': !etapes.typeLivraison, 'border-indoor': etapes.typeLivraison}" href="#" class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 rounded-full hover:border-black">
                                        <span class="h-2.5 w-2.5 rounded-full" :class="{'bg-indoor': !etapes.typeLivraison, 'bg-outdoor animate-pulse': etapes.typeLivraison}" aria-hidden="true"></span>
                                    </a>
                                </div>
                            </li>
                            <li class="relative" @click="drawerPaiement()"  v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Étape 4', classes: 'z-[60]' }">
                                <!-- Upcoming Step -->
                                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div class="h-0.5 w-full bg-outdoor"></div>
                                </div>
                                <a href="#" class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-outdoor rounded-full hover:border-indoor">
                                    <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-outdoor" aria-hidden="true"></span>
                                </a>
                            </li>
                        </ol>
                    </nav>
                </div>

                <!-- FORMS /> -->
                <div class="bg-white rounded-b-xl overflow-hidden">
                    <div class="block text-center">
                        <div class="">
                            <!-- INFO PERSO -->
                            <div class="group p-10 bg-white col-span-6 relative cursor-pointer" @click="drawerPerso()">
                                <h2 :class="{'text-resine': etapes.perso, 'text-gray-400': !etapes.perso}" class="transition-all select-none hover:text-indoor text-left text-2xl leading-6 font-medium font-elegant pr-6">
                                    <!-- Heroicon name: solid/check -->
                                    <svg v-if="validation.perso" class="w-8 h-8 text-indoor inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    Informations personnelles
                                </h2>
                                <div class="absolute top-1/2 right-[2.5rem] transform -translate-y-1/2">
                                    <svg :class="{'rotate-180': etapes.perso, 'rotate-0 animate-pulse': !etapes.perso}" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                            </div> 
                            <ValidationObserver ref="observerPerso">
                                <transition-group name="slide-in" tag="div" class="grid gap-x-5 grid-cols-6 border-b border-gray-200 bg-gray-100">
                                        <div v-if="etapes.perso" key="prenom" style="transition-delay:0.1s"  class="mm-sm:col-span-6 mm-sm:mx-5 mm-sm:mb-5 col-span-3 ml-10 mb-10 mt-10">
                                            <label for="first-name" class="text-indoor font-elegant leading-5 text-lg">
                                                Prénom
                                            </label> 
                                            <ValidationProvider rules="required|alpha" v-slot="{ errors }">
                                                <input type="text" placeholder="ex : Jean" v-model.lazy="userData.firstName" name="Prénom" ref="first-name" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div v-if="etapes.perso" key="nom" style="transition-delay:0.2s"  class="mm-sm:col-span-6 mm-sm:mx-5 mm-sm:mb-5 mm-sm:mt-0 col-span-3 mr-10 mb-10 mt-10">
                                            <label for="last-name" class="text-indoor font-elegant leading-5 text-lg">
                                                Nom
                                            </label>
                                            <ValidationProvider rules="required|alpha" v-slot="{ errors }">
                                                <input type="text" placeholder="ex : DUPONT" v-model.lazy="userData.lastName" name="Nom" ref="last-name" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div v-if="etapes.perso" key="email" style="transition-delay:0.3s"  class="mm-sm:col-span-6 mm-sm:mx-5 mm-sm:mb-5 col-span-3 ml-10 mb-10">
                                            <label for="email" class="text-indoor font-elegant leading-5 text-lg">
                                                Adresse-mail
                                            </label>
                                            <ValidationProvider rules="required|email" v-slot="{ errors }">
                                                <input ref="email" placeholder="ex : jeandupont@gmail.com" name="email" v-model.lazy="userData.email" type="email" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div v-if="etapes.perso" key="mobile" style="transition-delay:0.4s"  class="mm-sm:col-span-6 mm-sm:mx-5 col-span-3 mr-10 mb-10">
                                            <label for="telephone" class="text-indoor font-elegant leading-5 text-lg">
                                                Téléphone
                                            </label>
                                            <ValidationProvider rules="required|digits:10" v-slot="{ errors }">
                                                <input ref="mobile" placeholder="ex : 06 36 65 65 65" v-model.lazy="userData.mobile" name="Téléphone" type="telephone" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>  
                                        <div v-if="etapes.perso" key="next" style="transition-delay:0.5s"  class="col-span-6 mm-sm:mx-5 mb-10">
                                            <div class="px-10 w-full flex items-center text-center">
                                                <span @click="drawerLoc()" class="group rounded-xl w-max place-items-center mx-auto bg-gray-300 text-black py-4 px-6 tracking-wide text-lg font-elegant focus:outline-none hover:bg-indoor hover:text-white cursor-pointer text-center transition ease-in duration-300">Étape suivante</span>
                                            </div>
                                        </div>   
                                </transition-group>
                            </ValidationObserver>

                            <!-- INFO LOC -->
                            <div class="group p-10 bg-white col-span-6 relative cursor-pointer" @click="drawerLoc()">
                                <h2 ref="applicant-localisation-title" :class="{'text-resine': etapes.livraison, 'text-gray-400': !etapes.livraison}" class="transition-all select-none hover:text-indoor text-left text-2xl leading-6 font-medium font-elegant text-gray-400">
                                    <!-- Heroicon name: solid/check -->
                                    <svg v-if="validation.livraison" class="w-8 h-8 text-indoor inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg> 
                                    Adresse de livraison
                                </h2>
                                <div class="absolute top-[2.5rem] right-[2.5rem]">
                                    <svg :class="{'rotate-180': etapes.livraison, 'rotate-0 animate-pulse': !etapes.livraison}" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            <ValidationObserver ref="observerLivraison">
                                <transition-group name="slide-in" tag="div" class="grid gap-x-5 grid-cols-6 border-b border-gray-200 bg-gray-100">
                                    <div v-if="etapes.livraison" key="map" class="col-span-6 border-b border-gray-200 transition-all duration-500">
                                        <widget-gmap  @onChangeLocation="updateLocation" />
                                    </div>
                                    <div v-if="etapes.livraison" key="info" style="transition-delay:0.2s" class="col-span-6">
                                        <div class="grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-6 mx-10 mb-5 mt-10 mm-sm:mx-0">
                                            <div class="mm-sm:col-span-6 mm-sm:mx-5 col-span-2 mb-5">
                                                <label for="number" class="text-indoor font-elegant leading-5 text-lg">
                                                    Numéro
                                                </label>
                                                <ValidationProvider rules="required" v-slot="{ errors }">
                                                    <input type="text" v-model.lazy="userData.location.street_number" name="number" ref="number" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                    <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="mm-sm:col-span-6 mm-sm:mx-5 col-span-4 mb-5">
                                                <label for="rue" class="text-indoor font-elegant leading-5 text-lg">
                                                    Rue
                                                </label>
                                                <ValidationProvider rules="required" v-slot="{ errors }">
                                                    <input type="text" v-model.lazy="userData.location.rue" name="rue" ref="rue" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                    <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="mm-sm:col-span-6 mm-sm:mx-5 col-span-2 mb-5">
                                                <label for="zip" class="text-indoor font-elegant leading-5 text-lg">
                                                    Code-postal
                                                </label>
                                                <ValidationProvider rules="required|digits:5" v-slot="{ errors }">
                                                    <input type="text" v-model.lazy="userData.location.zipcode" name="zip" ref="zip" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                    <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="mm-sm:col-span-6 mm-sm:mx-5 col-span-4 mb-5">
                                                <label for="city" class="text-indoor font-elegant leading-5 text-lg">
                                                    Ville
                                                </label>
                                                <ValidationProvider rules="required|alpha" v-slot="{ errors }">
                                                    <input type="text" v-model.lazy="userData.location.city" name="city" ref="city" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                    <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="mm-sm:col-span-6 mm-sm:mx-5 col-span-2 mb-5">
                                                <label for="country" class="text-indoor font-elegant leading-5 text-lg">
                                                    Pays
                                                </label>
                                                <ValidationProvider rules="required|alpha" v-slot="{ errors }">
                                                    <input @change="shippingOpts(token.id)" type="text" v-model.lazy="userData.location.country" name="country" ref="country" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                    <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="mm-sm:col-span-6 mm-sm:mx-5 col-span-4 mb-5"> 
                                                <label for="area" class="text-indoor font-elegant leading-5 text-lg">
                                                    Région
                                                </label>
                                                <ValidationProvider rules="required|alpha" v-slot="{ errors }">
                                                    <input type="text" v-model.lazy="userData.location.area" name="area" ref="area" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                    <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="etapes.livraison" key="next" style="transition-delay:0.5s"  class="col-span-6 mm-sm:mx-5 mb-10">
                                        <div class="px-10 w-full flex items-center text-center">
                                            <span @click="drawerTypeLivraison()" class="group rounded-xl w-max place-items-center mx-auto bg-gray-300 text-black py-4 px-6 tracking-wide text-lg font-elegant focus:outline-none hover:bg-indoor hover:text-white cursor-pointer text-center transition ease-in duration-300">Étape suivante</span>
                                        </div>
                                    </div>   
                                </transition-group>
                            </ValidationObserver>

                            <!-- INFO TYPE DE LIVRAISON -->
                            <div class="group p-10 bg-white col-span-6 relative cursor-pointer" @click="drawerTypeLivraison()">
                                <h2 ref="applicant-autres-title" :class="{'text-resine': etapes.typeLivraison, 'text-gray-400': !etapes.typeLivraison}" class="transition-all select-none hover:text-indoor  text-left text-2xl leading-6 font-medium font-elegant text-gray-400">
                                    <!-- Heroicon name: solid/check -->
                                    <svg ref="cost" v-if="this.shippingCost != 0.00" class="w-8 h-8 text-indoor inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg> 
                                    Mode de livraison
                                </h2>
                                <div class="absolute top-[2.5rem] right-[2.5rem]">
                                    <svg :class="{'rotate-180': etapes.typeLivraison, 'rotate-0 animate-pulse': !etapes.typeLivraison}" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            <transition-group name="slide-in" tag="div" class="grid gap-x-5 grid-cols-6 border-b border-gray-200 ">
                                <nav v-if="etapes.typeLivraison" key="shippingMethod" class="col-span-6 transition-all p-10 bg-gray-100">
                                    <div v-if="shipMethod === 'ship_A12JwrgmMoPjnk' && !horaire" key="heureLivraison" style="transition-delay:0.1s"  class="col-span-6 px-2.5">
                                        <label for="heureLivraison" class="text-indoor font-elegant leading-5 text-lg">
                                            Heure de livraison
                                        </label>
                                        <ValidationProvider rules="" v-slot="{ errors }">
                                            <input type="text" placeholder="ex : 18H30" v-model.lazy="heureLivraison" rows="5" cols="33" name="heureLivraison" ref="heureLivraison" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                            <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <ol role="list" class="">
                                        <li v-if="motiv === true && userData.location.city === 'Toulouse'" class="cursor-pointer group w-full">
                                            <a :class="{'shadow-indoor bg-indoor text-white hover:text-outdoor': shipMethod === 'ship_A12JwrgmMoPjnk', 'shadow-lg hover:text-indoor text-black bg-gray-200': shipMethod != 'ship_A12JwrgmMoPjnk'}" class=" rounded-xl hover:shadow-indoor text-center px-5 py-5 flex flex-col" @click="shipMethod = 'ship_A12JwrgmMoPjnk', shippingOpts()">
                                                <span class="text-md font-elegant tracking-wide leading-8 flex justify-between" >
                                                    <b class="w-8 h-8 bg-white rounded-full inline-block mr-5">🚴</b> <p>Livraison en vélo</p> <p>+5€</p>
                                                </span>
                                            </a>
                                        </li>
                                        <li v-if="motiv === false && userData.location.city === 'Toulouse'" class="select-none group w-full opacity-50 hover:opacity-100">
                                            <a class="bg-white rounded-xl hover:shadow-outdoor shadow-outdoor  text-black text-center px-5 py-5 flex flex-col">
                                                <span class="text-md font-elegant tracking-wide leading-8 flex justify-between" >
                                                    <b class="w-8 h-8 bg-white rounded-full inline-block mr-5 hover:line-through">🚴</b> <p class="hover:animate-pulse">Livraison indisponible (10H > 22H) !</p>
                                                </span>
                                            </a>
                                        </li>
                                        <li v-if="userData.location.city != 'Toulouse'" class="select-none group w-full opacity-50 hover:opacity-100">
                                            <a class="bg-white rounded-xl hover:shadow-outdoor shadow-outdoor  text-black text-center px-5 py-5 flex flex-col">
                                                <span class="text-md font-elegant tracking-wide leading-8 flex justify-between" >
                                                    <b class="w-8 h-8 bg-white rounded-full inline-block mr-5 hover:line-through">🚴</b> <p class="hover:animate-pulse">Non disponible dans votre secteur</p>
                                                </span>
                                            </a>
                                        </li>
                                        <li class="cursor-pointer group w-full mt-5">
                                            <a :class="{'shadow-indoor bg-indoor text-white hover:text-outdoor': shipMethod === 'ship_BkyN5YbNOl0b69', 'shadow-lg hover:text-indoor text-black bg-gray-200': shipMethod != 'ship_BkyN5YbNOl0b69'}" class="rounded-xl  hover:shadow-indoor text-center px-5 py-5 flex flex-col" @click="shipMethod = 'ship_BkyN5YbNOl0b69', shippingOpts()">
                                                <span class="text-md  font-elegant tracking-wide leading-8 flex justify-between" >
                                                    <b class="w-8 h-8 bg-white rounded-full inline-block mr-5">📦</b> <p>Envoyer par colis</p> <p>+3€</p>
                                                </span>
                                            </a>    
                                        </li>
                                    </ol>

                                    <div v-if="etapes.typeLivraison" key="next" style="transition-delay:0.5s" class="col-span-6 mm-sm:mx-5 mt-10">
                                        <div class="px-10 w-full flex items-center text-center">
                                            <span @click="drawerPaiement(), submitOrderPaypal()" class="group rounded-xl w-max place-items-center mx-auto bg-gray-300 text-black py-4 px-6 tracking-wide text-lg font-elegant focus:outline-none hover:bg-indoor hover:text-white cursor-pointer text-center transition ease-in duration-300">Étape suivante</span>
                                        </div>
                                    </div> 
                                </nav>

                            </transition-group>

                            <!-- INFO PAIEMENT -->
                            <div class="group p-10 bg-white col-span-6 relative cursor-pointer" >
                                <h2 ref="applicant-autres-title" :class="{'text-resine': etapes.paiement, 'text-gray-400': !etapes.paiement}" class="transition-all select-none hover:text-indoor  text-left text-2xl leading-6 font-medium font-elegant text-gray-400">
                                    Finalisation
                                </h2>
                                <div class="absolute top-[2.5rem] right-[2.5rem]">
                                    <svg :class="{'rotate-180': etapes.paiement, 'rotate-0 animate-pulse': !etapes.paiement}" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            <ValidationObserver ref="observerPaiement">
                                <transition-group name="slide-in" tag="div" class="grid gap-x-5 grid-cols-6 border-b border-gray-200 bg-gray-100">
                                        <div v-if="etapes.paiement" key="commentaire" style="transition-delay:0.1s"  class="mm-sm:col-span-6 mm-sm:mx-5 mm-sm:mb-5 col-span-6 mx-10 mb-10 mt-10">
                                            <label for="commentaire" class="text-indoor font-elegant leading-5 text-lg mb-5">
                                                Commentaire
                                            </label>
                                            <ValidationProvider rules="" v-slot="{ errors }">
                                                <textarea placeholder="ex : Sans salades ni tomates svp chef <3 !" v-model.lazy="commentaire" rows="2" cols="33" name="commentaire" ref="commentaire" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10"></textarea>
                                                <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div v-if="etapes.paiement" key="paiement" style="transition-delay:0.1s"  class="mm-sm:col-span-6 mm-sm:mx-5 mm-sm:mb-5 col-span-6 mx-10">
                                            <p class="text-indoor font-elegant leading-5 text-lg">
                                                Méthodes de paiement
                                            </p>
                                            <span id="comments-description" class="text-gray-500 text-sm">En cliquant sur le bouton <b>Payer</b>, vous acceptez de vous conformer aux <nuxt-link class="underline hover:text-resine" to="/conditions-generales-de-vente" >Conditions Générales de Vente</nuxt-link> que vous reconnaissez avoir lues, comprises et acceptées dans leur intégralité !</span>
                                            <div id="checkout" class="mm-sm:col-span-6 mm-sm:mx-5 mm-sm:mb-5 col-span-6 mt-5 mb-10">
                                                <div id="paypal-button-container"></div>
                                            </div>
                                        </div>
                                </transition-group> 
                            </ValidationObserver>
                        </div>                       
                    </div>
                </div>
            </div>
        </section>
        <!-- COL2 /> -->
        <section>
            <div class="sticky top-0 hover:shadow-lg rounded-xl transition">
                <div class="bg-white h-28 align-middle">
                    <div class="flex items-center justify-between h-full"> 
                        <h2 ref="applicant-information-title" class="w-full items-center text-center text-2xl leading-6 font-medium font-elegant text-indoor">
                            Récapitulatif
                        </h2>
                    </div>
                </div>
                <div class="border-t border-b border-indoor group-hover:border-outdoor transition-all duration-500 sm:px-0 fond-gray bg-white max-h-96 scrollbar-thin scrollbar-thumb-indoor scrollbar-track-outdoor overflow-y-scroll">
                    <div class=" ">
                        <div class="p-5 pb-0 h-auto duration-1000"> 
                            <transition-group name="fade" tag="ul">
                                <li v-for="product in this.$store.state.app.commerce.cart.line_items" :key="product.id" class="w-full h-20 px-2 mb-5 m-auto hover:bg-gray-200 bg-white shadow-xl rounded-xl relative text-white transition-transform transform  hover:scale-95 ">
                                    <div class="w-full p-2 top-0 flex">
                                            <div class="ml-2 flex-1 flex flex-col ">
                                                <div class="">
                                                    <div class="flex justify-between text-base font-elegant py-3">
                                                        <div class="flex justify-between items-center">
                                                            <img :src="require('~/assets/img/produits/'+product.image.filename)" class="mr-2 w-10 h-10 object-center object-contain">
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
                                                            <p class="font-fat text-gray-500 text-1xl text-right leading-10 select-none">
                                                                <b class="font-light"> {{ product.line_total.formatted || '0.00' }}</b> €
                                                            </p>
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
                <div class="col-span-6 flex justify-between items-center">
                    <span class="relative z-0  flex w-full shadow-sm">
                        <p class="absolute ml-5 mt-5 z-20 animate-bounce">🎁</p>
                        <input v-model.lazy="discount" type="text" placeholder="CODE PROMO" class="z-10 relative block w-full items-center pl-14 pr-5 py-5 border border-gray-200 text-lg font-fat uppercase text-indoor focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor" />
                        <button v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Soumettre la promotion', classes: 'z-[60]' }" @click="checkDiscount({ id: token, promo: discount })" type="submit" class="-ml-px relative inline-flex items-center px-5 py-5 border border-gray-200 bg-gray-200 text-black text-sm font-medium font-elegant focus:outline-none hover:bg-indoor hover:text-white hover:border-indoor cursor-pointer text-center transition ease-in duration-300">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                            </svg>
                        </button>
                    </span>
                </div>
                <div class="bg-white rounded-b-xl py-10 align-middle">
                    <div class="px-10 w-full text-center align-center">
                        <p v-if="this.$store.state.app.commerce.cart.subtotal" ref="applicant-information-title-if" class="flex justify-between w-full py-3 text-center text-1xl font-fat text-outdoor">
                            <b class="text-gray-500  font-elegant ">Sous total : </b><b class="text-black font-light"> {{ this.$store.state.app.commerce.cart.subtotal.formatted }} €</b>
                        </p>
                        <p v-else ref="applicant-information-title-else" class="flex justify-between w-ful py-3 text-center text-1xl font-medium font-fat text-outdoor ">
                            <b class="text-gray-500  font-elegant ">Sous total :</b><b class="text-black font-light"> {{ subtotal }} €</b>
                        </p>
                        <p class="flex justify-between w-full py-3 text-center text-1xl font-medium font-fat text-outdoor ">
                            <b class="text-gray-500  font-elegant ">Frais de livraison :</b><b class="text-black font-light"> + {{ this.shippingCost }} €</b>
                        </p>
                        <p v-if="this.$store.state.app.commerce.discount.amount_saved.raw != 0" ref="applicant-information-title-if" class="flex justify-between w-full py-3 text-center text-1xl font-fat text-outdoor">
                            <b class="text-gray-500  font-elegant ">Discount : <span class="animate-pulse">- {{ this.$store.state.app.commerce.discount.value }}%</span></b>
                            <b class="text-resine font-thin animate-pulse">{{ this.$store.state.app.commerce.discount.code }}</b>
                            <b class="text-indoor font-light"> - {{ this.$store.state.app.commerce.discount.amount_saved.formatted }} €</b>
                        </p>

                        <p v-if="this.$store.state.app.commerce.discount.amount_saved.raw != 0" class="flex justify-between w-full py-3 text-center text-1xl font-medium font-fat text-outdoor ">
                            <b class="text-gray-500  font-elegant ">Total :</b><b class="text-black font-light"> {{ Number( (Math.round(total * 100) / 100) ).toFixed(2) - Number( (Math.round(this.$store.state.app.commerce.discount.amount_saved.formatted * 100) / 100) ) }} €</b>
                        </p> 
                        <p v-else class="flex justify-between w-full py-3 text-center text-1xl font-medium font-fat text-outdoor ">
                            <b class="text-gray-500  font-elegant ">Total :</b><b class="text-black font-light"> {{ total }} €</b>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>
<script lang="ts">
    import Vue from 'vue'
    import { mapActions } from 'vuex'
    import { ValidationObserver, ValidationProvider } from "vee-validate";
    export default Vue.extend({    
    computed: {
        total() {
            let total = 0.00
            if (this.$store.state.app.commerce.cart.subtotal) {
                let test = this.$store.state.app.commerce.cart.subtotal.formatted
                let test2 = Number((Math.round(test * 100) / 100)).toFixed(2);
                let test3 =  this.shippingCost
                let test4 = Number((Math.round(test3 * 100) / 100)).toFixed(2);
                total = Number(test2) + Number(test4)

            }
            return `${total.toFixed(2)}`
        },
        token() {
            let token = ''
            if (this.$store.state.app.commerce.token) { 
                token = this.$store.state.app.commerce.token.id
            } else {}
            return `${token}`
        },
        areaState() {
            let areaState = ''
            if (this.$store.state.app.users.profil.location.zipcode.length != 0) { 
                areaState = this.$store.state.app.users.profil.location.zipcode.slice(0,2)
            }
            return `${areaState}`
        },
        countryState() {
            let countryState = ''
            if (this.$store.state.app.users.profil.location.country.length != 0) { 
                let upper = this.$store.state.app.users.profil.location.country.toUpperCase()
                countryState = upper.slice(0,2)
            }
            return `${countryState}`
        },
        motiv() {
            let motiv = false
            let date = this.$moment(new Date()).format('HH:mm')
            let compareDate = this.$moment(date, 'HH:mm')
            let startDate   = this.$moment("09:30", "HH:mm");
            let endDate     = this.$moment("21:30", "HH:mm");
            if (date.length != 0) {
                motiv = compareDate.isBetween(startDate, endDate);
            }
            return motiv
        }

    },
    components: {
        ValidationObserver, ValidationProvider
    },
    head() {
      return {
        script: [
          {
            //src: 'https://www.paypal.com/sdk/js?client-id=AYDSj_fHINTpumQxAnMZ4gy-tf8ysgwAK5h3e64XBpoMdEYuqgyzKHYtve6sIkcNmaJhJt-shlpyKo5w&currency=EUR&intent=authorize'
            src: "https://www.paypalobjects.com/api/checkout.js"
          }
        ],
      }
    },
    data() {
    //let loc = this.$store.state.app.users.profil.location
        return {   
            cart: this.$store.state.app.commerce.cart, 
            userData: {
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
            commentaire: '',
            heureLivraison: '',
            shipMethod: '',
            shippingCost: 0.00,
            discount:'',
            subtotal: 0.00,
            etapes: {
                perso:true,
                livraison:false,
                typeLivraison:false,
                paiement:false,
            },
            validation: {
                perso:false,
                livraison:false,
                typeLivraison:false,
                paiement:false,               
            }
        }
    },
    created() {
        this.setGetToken()
    },
    methods: { 
        ...mapActions({
            checkDiscount: 'checkDiscount', setGetToken: 'setGetToken',
            soundUiAccordeonUp: 'soundUiAccordeonUp', soundUiAccordeonBot: 'soundUiAccordeonBot', 
            soundUiAlertInfo: 'soundUiAlertInfo', soundUiAlertError: 'soundUiAlertError', soundUiAlertSucces: 'soundUiAlertSucces'
        }),
        async drawerPerso() {
            const observerPerso = await (this.$refs.observerPerso as Vue & { validate: () => boolean }).validate()
            try {
                if(observerPerso) { 
                    //tgl
                    this.etapes.perso = !this.etapes.perso
                    this.etapes.livraison = false
                    this.etapes.typeLivraison = false
                    this.etapes.paiement = false
                    //sound
                    if(this.etapes.perso) {
                        this.soundUiAccordeonUp()
                    } else {
                        this.soundUiAccordeonBot()
                    }
                } else {
                    //vld
                    this.validation.perso = false;
                }
            } catch(e) {
            }
        },
        async drawerLoc() {
            const observerPerso = await (this.$refs.observerPerso as Vue & { validate: () => boolean }).validate()
            try {
                if(observerPerso) { 
                    //tgl
                    this.etapes.perso = false
                    this.etapes.livraison = !this.etapes.livraison 
                    this.etapes.typeLivraison = false
                    this.etapes.paiement = false
                    //vld
                    this.validation.perso = true
                    //sound
                    if(this.etapes.livraison) {
                        this.soundUiAccordeonUp()
                    } else {
                        this.soundUiAccordeonBot()
                    }
                } else {
                  //vld
                  this.validation.perso = false  
                }
            } catch(e) {
            }       
        }, 
        async drawerTypeLivraison() {
            const observerLivraison = await (this.$refs.observerLivraison as Vue & { validate: () => boolean }).validate()
            try {
                if(observerLivraison) { 
                    //tgl
                    this.etapes.perso = false
                    this.etapes.livraison = false
                    this.etapes.typeLivraison = !this.etapes.typeLivraison
                    this.etapes.paiement = false
                    //vld
                    this.validation.livraison = true  
                    //sound
                    if(this.etapes.typeLivraison) {
                        this.soundUiAccordeonUp()
                    } else {
                        this.soundUiAccordeonBot()
                    }
                } else {
                  //vld
                  this.validation.livraison = false  
                }
            } catch(e) {
            }                
     
        },
        async drawerPaiement() {
            let observerTypeLivraison = false
            if (this.shippingCost != 0.00) {
                observerTypeLivraison = true
            } else {
                observerTypeLivraison = false
            }
            try {
                if(observerTypeLivraison) { 
                    //tgl
                    this.etapes.perso = false
                    this.etapes.livraison = false
                    this.etapes.typeLivraison = false                    
                    this.etapes.paiement = !this.etapes.paiement
                    //vld
                    this.validation.typeLivraison = true 
                    
                    //sound
                    if(this.etapes.paiement) {
                        this.soundUiAccordeonUp()
                    } else {
                        this.soundUiAccordeonBot()
                    }
                } else {
                  //vld  
                  this.validation.typeLivraison = false  
                }
            } catch(e) {
            }

        },    

        async shippingOpts() { 
           let total:number = 0
            if(this.shipMethod === 'ship_A12JwrgmMoPjnk') {
                this.shippingCost = 5.00
                total = 5.00
            } 
            if(this.shipMethod === 'ship_BkyN5YbNOl0b69') {
                this.shippingCost = 3.00
                total = 3.00
            }
            if(this.shipMethod === '') {
                this.shippingCost = 0.00
                total = 0.00
            }    
             
        },
        async submitOrderPaypal() {
            const observerPerso = await (this.$refs.observerPerso as Vue & { validate: () => boolean }).validate()
            const observerLivraison = await (this.$refs.observerLivraison as Vue & { validate: () => boolean }).validate()
            let observerTypeLivraison = false
            if (this.shippingCost != 0.00) {
                observerTypeLivraison = true
            } else {
                observerTypeLivraison = false
            }

            let test = this.$store.state.app.commerce.cart.subtotal.formatted
            let test2 = Number((Math.round(test * 100) / 100)).toFixed(2);
            let test3 =  this.shippingCost
            let test4 = Number((Math.round(test3 * 100) / 100)).toFixed(2);
            let toto = Number(test2) + Number(test4)
            let test5 =  this.$store.state.app.commerce.discount.amount_saved.raw
            let test6 = Number((Math.round(test5 * 100) / 100)).toFixed(2);
            const total = Number(toto) - Number(test6)

            const lineItems: {[id: string]:any} = {}
            for (const i of this.cart.line_items) {
                lineItems[i.id] = {
                    quantity: i.quantity
                } 
            }
            const data = {
                line_items: lineItems,
                customer: {
                    firstname: (this as any).userData.firstName,
                    lastname: (this as any).userData.lastName,
                    email: (this as any).userData.email,
                },
                shipping: {
                    name: `${(this as any).userData.firstName} ${(this as any).userData.lastName}`,
                    street: `${(this as any).userData.location.street_number} ${(this as any).userData.location.rue}`,
                    town_city: (this as any).userData.location.city,
                    county_state: (this as any).areaState, 
                    postal_zip_code: (this as any).userData.location.zipcode,
                    country: (this as any).countryState, 
                },
                fulfillment: {
                    shipping_method: (this as any).shipMethod,
                },
                billing: {
                    name: `${(this as any).userData.firstName} ${(this as any).userData.lastName}`,
                    street: `${(this as any).userData.location.street_number} ${(this as any).userData.location.rue}`,
                    town_city: (this as any).userData.location.city,
                    county_state: (this as any).areaState, 
                    postal_zip_code: (this as any).userData.location.zipcode,
                    country: (this as any).countryState, 
                },
                extra_fields: {
                    extr_gvRjwOqKA54mNL: ''+(this as any).commentaire,
                    extr_mOVKl4G1V5prRP: ''+(this as any).heureLivraison
                },
                payment: {
                    gateway: 'paypal', 
                    paypal: { 
                        action: 'authorize' 
                    }  
                }
            }
            try {
                this.$toast.global.gfinfo('Verifications des informations ⏳');
                this.soundUiAlertInfo()
                if (observerPerso && observerLivraison && observerTypeLivraison) {
                    this.$store.dispatch('captureCheckoutPaypal', {token: this.$store.state.app.commerce.token.id, dataa : data, uid: this.userData.uid, total: total})
                    this.$toast.global.gfsucces('Informations valide !');
                    this.soundUiAlertSucces()
                } else {
                    this.$toast.global.gferror('Verifications impossible !');
                    this.soundUiAlertError()
                }
            } catch(e) {
                this.$emit('orderError', e)
                console.error('orderE: ', e)
            }
        },
        async updateLocation(r: { loc: any; }) {    
            this.userData.location.street_number = r.loc.street_number
            this.userData.location.rue = r.loc.rue
            this.userData.location.city = r.loc.city
            this.userData.location.area = r.loc.area
            this.userData.location.zipcode = r.loc.zipcode  
            this.userData.location.country = r.loc.country
        }
    }
    })
</script>
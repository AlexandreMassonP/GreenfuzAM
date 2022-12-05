<template>
    <main class="mm-sm:px-5 sm:px-5 lg:px-14 fond-outdoor pt-5  lg:pt-10">
      <div class="grid grid-cols-1 gap-5 max-w-[1024px] mx-auto" 
      :class="{
          'lg:grid-cols-2': this.$store.state.app.panier, //open
          'lg:grid-cols-1 xl:grid-cols-2': !this.$store.state.app.panier  //close
      }">
        <!-- COL1 -->
        <section class="order-2 lg:order-1">
            <div class="hover:shadow-outdoor shadow-indoor transition group max-w-screen-sm m-auto rounded-xl">
                <!-- TITRE -->
                <div class="p-10 bg-white rounded-t-xl border-b border-indoor group-hover:border-outdoor">
                    <h2 ref="applicant-information-title" class="text-center text-4xl leading-10 font-medium font-elegant text-black">
                        Inscription
                    </h2>
                    <nav class="w-max mt-5 mx-auto">
                        <ol role="list" class="flex items-center">
                            <li class="relative pr-8 lg:pr-16" @click="drawerInfo()">
                                <!-- Completed Step -->
                                <div v-if='this.CreatedFormData.validation.info'>
                                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div class="h-0.5 w-full bg-indoor"></div>
                                    </div>
                                    <a v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Étape 1', classes: 'z-[60]' }" href="#" class="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-black" :class="{'bg-indoor': !this.CreatedFormData.etapes.info, 'bg-black': this.CreatedFormData.etapes.info}">
                                        <!-- Heroicon name: solid/check -->
                                        <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                                <!-- Upcoming Step -->
                                <div v-if='!this.CreatedFormData.validation.info'> 
                                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div class="h-0.5 w-full bg-outdoor " ></div>
                                    </div>
                                    <a v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Étape 1', classes: 'z-[60]' }" :class="{'border-outdoor': !this.CreatedFormData.etapes.info, 'border-indoor': this.CreatedFormData.etapes.info}" href="#" class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 rounded-full hover:border-black">
                                        <span class="h-2.5 w-2.5 rounded-full" :class="{'bg-indoor': !CreatedFormData.etapes.info, 'bg-outdoor animate-pulse': this.CreatedFormData.etapes.info}" aria-hidden="true"></span>
                                    </a>
                                </div>
                            </li>
                            <li class="relative pr-8 lg:pr-16" @click="drawerPerso()">
                                <!-- Completed Step -->
                                <div v-if='this.CreatedFormData.validation.perso'>
                                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div class="h-0.5 w-full bg-indoor"></div>
                                    </div>
                                    <a v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Étape 2', classes: 'z-[60]' }" href="#" class="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-black"  :class="{'bg-indoor': !this.CreatedFormData.etapes.perso, 'bg-black': this.CreatedFormData.etapes.perso}">
                                        <!-- Heroicon name: solid/check -->
                                        <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                                <!-- Upcoming Step -->
                                <div v-if='!this.CreatedFormData.validation.perso'> 
                                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div class="h-0.5 w-full bg-outdoor " ></div>
                                    </div>
                                    <a v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Étape 2', classes: 'z-[60]' }" :class="{'border-outdoor': !this.CreatedFormData.etapes.perso, 'border-indoor': this.CreatedFormData.etapes.perso}" href="#" class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 rounded-full hover:border-black">
                                        <span class="h-2.5 w-2.5 rounded-full" :class="{'bg-indoor': !this.CreatedFormData.etapes.perso, 'bg-outdoor animate-pulse': this.CreatedFormData.etapes.perso}" aria-hidden="true"></span>
                                    </a>
                                </div>
                            </li>
                            <li class="relative" @click="drawerLocalisation()">
                                <!-- Completed Step -->
                                <div v-if='this.CreatedFormData.validation.localisation'>
                                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div class="h-0.5 w-full bg-indoor"></div>
                                    </div>
                                    <a v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Étape 2', classes: 'z-[60]' }" href="#" class="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-black"  :class="{'bg-indoor': !this.CreatedFormData.etapes.localisation, 'bg-black': this.CreatedFormData.etapes.localisation}">
                                        <!-- Heroicon name: solid/check -->
                                        <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                                <!-- Upcoming Step -->
                                <div v-if='!this.CreatedFormData.validation.localisation'> 
                                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div class="h-0.5 w-full bg-outdoor " ></div>
                                    </div>
                                    <a v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Étape 2', classes: 'z-[60]' }" :class="{'border-outdoor': !this.CreatedFormData.etapes.localisation, 'border-indoor': this.CreatedFormData.etapes.localisation}" href="#" class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 rounded-full hover:border-black">
                                        <span class="h-2.5 w-2.5 rounded-full" :class="{'bg-indoor': !this.CreatedFormData.etapes.localisation, 'bg-outdoor animate-pulse': this.CreatedFormData.etapes.localisation}" aria-hidden="true"></span>
                                    </a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <!-- FORM -->
                <div class="bg-white rounded-b-xl overflow-hidden">
                    <div class="block text-center">
                      <ValidationObserver ref="observerCreateUser">
                          <form @submit.prevent="createUser()">
                            <!-- INFO GLOBAL -->
                            <div class="group p-10 bg-white col-span-6 relative cursor-pointer" @click="drawerInfo()">
                                <h2 :class="{'text-resine': this.CreatedFormData.etapes.info, 'text-gray-400': !this.CreatedFormData.etapes.info}" class="transition-all select-none hover:text-indoor text-left text-2xl leading-6 font-medium font-elegant pr-6">
                                    <!-- Heroicon name: solid/check -->
                                    <svg v-if="this.CreatedFormData.validation.info" class="w-8 h-8 text-indoor inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    Informations de connexion
                                </h2>
                                <div class="absolute top-1/2 right-[2.5rem] transform -translate-y-1/2">
                                    <svg :class="{'rotate-180': this.CreatedFormData.etapes.info, 'rotate-0 animate-pulse': !this.CreatedFormData.etapes.info}" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div> 
                            <ValidationObserver ref="oberserverInfo">                       
                              <transition-group name="slide-in" tag="div" class="grid gap-5 grid-cols-6 border-b border-gray-200 bg-gray-100">
                                  <div v-if="this.CreatedFormData.etapes.info" key="email" style="transition-delay:0.1s"  class="col-span-6 mm-sm:mx-5 mb-5 mx-10 mt-10">
                                        <label for="email" class="text-indoor font-elegant leading-3 text-lg">
                                            Adresse email
                                        </label> 
                                        <ValidationProvider rules="required|email" v-slot="{ errors }">
                                            <input ref="email" placeholder="ex : jeandupont@gmail.com" name="Email" v-model.lazy="CreatedFormData.email" type="email" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                            <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                  </div>
                                  <div v-if="this.CreatedFormData.etapes.info" key="pass" style="transition-delay:0.2s"  class="col-span-6 mm-sm:mx-5 mb-5 mm-sm:mt-0 mx-10">
                                        <label for="password" class="text-indoor font-elegant leading-3 text-lg">
                                            Mot de passe
                                        </label>
                                        <ValidationProvider rules="required" v-slot="{ errors }">
                                          <div class="relative">
                                            <input ref="password" type="password" placeholder="ex : ••••••••••" v-model.lazy="CreatedFormData.password" name="Mot de passe" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                                              <svg v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Afficher le mot de passe', classes: 'z-[60]' }" v-if="!refPass" @click="tglpass()" class="h-5 w-5 text-resine hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                              </svg>
                                              <svg v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Cacher le mot de passe', classes: 'z-[60]' }" v-if="refPass" @click="tglpass()" class="h-5 w-5 text-gray-500 hover:text-resine" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                              </svg>
                                            </div>
                                          </div>
                                          <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                  </div>
                                  <div v-if="this.CreatedFormData.etapes.info" key="next" style="transition-delay:0.3s"  class="col-span-6 mm-sm:mx-5 mb-10">
                                      <div class="px-10 w-full flex items-center text-center">
                                          <span @click="drawerPerso()" class="group rounded-xl w-max place-items-center mx-auto bg-gray-300 text-black py-4 px-6 tracking-wide text-lg font-elegant focus:outline-none hover:bg-indoor hover:text-white cursor-pointer text-center transition ease-in duration-300">Étape suivante</span>
                                      </div>
                                  </div> 
                              
                              </transition-group>

                            </ValidationObserver>
                            <!-- INFO PERSO -->
                            <div class="group p-10 bg-white col-span-6 relative cursor-pointer" @click="drawerPerso()">
                                <h2 :class="{'text-resine': this.CreatedFormData.etapes.perso, 'text-gray-400': !this.CreatedFormData.etapes.perso}" class="transition-all select-none hover:text-indoor text-left text-2xl leading-6 font-medium font-elegant pr-6">
                                    <!-- Heroicon name: solid/check -->
                                    <svg v-if="this.CreatedFormData.validation.perso" class="w-8 h-8 text-indoor inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    Données personnelles
                                </h2>
                                <div class="absolute top-1/2 right-[2.5rem] transform -translate-y-1/2">
                                    <svg :class="{'rotate-180': this.CreatedFormData.etapes.perso, 'rotate-0 animate-pulse': !this.CreatedFormData.etapes.perso}" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            <ValidationObserver ref="oberserverPerso">
                                <transition-group name="slide-in" tag="div" class="grid gap-5 grid-cols-6 border-b border-gray-200 bg-gray-100">
                                  <div v-if="this.CreatedFormData.etapes.perso" key="prenom" style="transition-delay:0.1s"  class="mm-sm:col-span-6 mm-sm:mx-5 mb-5 col-span-3 ml-10 mt-10">
                                        <label for="first-name" class="text-indoor font-elegant leading-3 text-lg">
                                            Prénom
                                        </label>
                                        <ValidationProvider rules="required|alpha_spaces" v-slot="{ errors }">
                                            <input type="text" placeholder="ex : Jean" v-model.lazy="userNewData.firstName" name="Prénom" ref="first-name" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                            <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                  </div>
                                  <div v-if="this.CreatedFormData.etapes.perso" key="nom" style="transition-delay:0.2s"  class="mm-sm:col-span-6 mm-sm:mx-5 mb-5 mm-sm:mt-0 col-span-3 mr-10 mt-10">
                                        <label for="last-name" class="text-indoor font-elegant leading-3 text-lg">
                                            Nom
                                        </label>
                                        <ValidationProvider rules="required|alpha_spaces" v-slot="{ errors }">
                                            <input type="text" placeholder="ex : DUPONT" v-model.lazy="userNewData.lastName" name="Nom" ref="last-name" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                            <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                  </div>
                                  <div v-if="this.CreatedFormData.etapes.perso" key="telephone" style="transition-delay:0.3s"  class=" mm-sm:mx-5 mb-5 col-span-6 mx-10">
                                        <label for="mobile" class="text-indoor font-elegant leading-3 text-lg">
                                            Téléphone
                                        </label>
                                        <ValidationProvider rules="required|digits:10" v-slot="{ errors }">
                                        <input ref="mobile" placeholder="ex : 0636656565" v-model.lazy="userNewData.mobile" name="Téléphone" type="telephone" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                        <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                  </div>
                                  <div v-if="this.CreatedFormData.etapes.perso" key="next" style="transition-delay:0.4s"  class="col-span-6 mm-sm:mx-5 mb-10">
                                      <div class="px-10 w-full flex items-center text-center">
                                          <span @click="drawerLocalisation()" class="group rounded-xl w-max place-items-center mx-auto bg-gray-300 text-black py-4 px-6 tracking-wide text-lg font-elegant focus:outline-none hover:bg-indoor hover:text-white cursor-pointer text-center transition ease-in duration-300">Étape suivante</span>
                                      </div>
                                  </div> 
                                </transition-group>
                            </ValidationObserver>
                            <!-- INFO LOCALISATION -->
                            <div class="group p-10 bg-white col-span-6 relative cursor-pointer" @click="drawerLocalisation()">
                                <h2 :class="{'text-resine': this.CreatedFormData.etapes.localisation, 'text-gray-400': !this.CreatedFormData.etapes.localisation}" class="transition-all select-none hover:text-indoor text-left text-2xl leading-6 font-medium font-elegant pr-6">
                                    <!-- Heroicon name: solid/check -->
                                    <svg v-if="this.CreatedFormData.validation.localisation" class="w-8 h-8 text-indoor inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    Votre localisation
                                </h2>
                                <div class="absolute top-1/2 right-[2.5rem] transform -translate-y-1/2">
                                    <svg :class="{'rotate-180': this.CreatedFormData.etapes.localisation, 'rotate-0 animate-pulse': !this.CreatedFormData.etapes.localisation}" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                            </div>
                            <ValidationObserver ref="oberserverLocalisation">
                                <transition-group name="slide-in" tag="div" class="grid gap-5 grid-cols-6 border-b border-gray-200 bg-gray-100">
                                    <div v-if="this.CreatedFormData.etapes.localisation" key="map" class="col-span-6 border-b border-gray-200 transition-all duration-500">
                                        <widget-gmap @onChangeLocation="updateLocation" />
                                    </div>
                                    <div v-if="this.CreatedFormData.etapes.localisation" key="info" style="transition-delay:0.2s" class="col-span-6">
                                        <div class="grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-6 mx-10 mt-10 mm-sm:mx-0">
                                            <div class="mm-sm:col-span-6 mm-sm:mx-5 col-span-2 mb-5">
                                                <label for="number" class="text-indoor font-elegant leading-5 text-lg">
                                                    Numéro
                                                </label>
                                                <ValidationProvider rules="required" v-slot="{ errors }">
                                                    <input type="text" v-model.lazy="userNewData.location.street_number" name="number" ref="number"  :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                    <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="mm-sm:col-span-6 mm-sm:mx-5 col-span-4 mb-5">
                                                <label for="rue" class="text-indoor font-elegant leading-5 text-lg">
                                                    Rue
                                                </label>
                                                <ValidationProvider rules="required" v-slot="{ errors }">
                                                    <input type="text" v-model.lazy="userNewData.location.rue" name="rue" ref="rue"  :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                    <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="mm-sm:col-span-6 mm-sm:mx-5 col-span-2 mb-5">
                                                <label for="zip" class="text-indoor font-elegant leading-5 text-lg">
                                                    Code-postal
                                                </label>
                                                <ValidationProvider rules="required|digits:5" v-slot="{ errors }">
                                                    <input type="text" v-model.lazy="userNewData.location.zipcode" name="zip" ref="zip" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                    <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="mm-sm:col-span-6 mm-sm:mx-5 col-span-4 mb-5">
                                                <label for="city" class="text-indoor font-elegant leading-5 text-lg">
                                                    Ville
                                                </label>
                                                <ValidationProvider rules="required" v-slot="{ errors }">
                                                    <input type="text" v-model.lazy="userNewData.location.city" name="city" ref="city" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                    <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="mm-sm:col-span-6 mm-sm:mx-5 col-span-2 mb-5">
                                                <label for="country" class="text-indoor font-elegant leading-5 text-lg">
                                                    Pays
                                                </label>
                                                <ValidationProvider rules="required|is:France" v-slot="{ errors }">
                                                    <input type="text" v-model.lazy="userNewData.location.country" name="country" ref="country" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                    <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="mm-sm:col-span-6 mm-sm:mx-5 col-span-4 mb-5"> 
                                                <label for="area" class="text-indoor font-elegant leading-5 text-lg">
                                                    Région
                                                </label>
                                                <ValidationProvider rules="required" v-slot="{ errors }">
                                                    <input type="text" v-model.lazy="userNewData.location.area" name="area" ref="area" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                                    <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="this.CreatedFormData.etapes.localisation" key="next"  @click="drawerValid()" style="transition-delay:0.5s"  class="col-span-6 mm-sm:mx-5 mb-10">
                                        <div class="px-10 w-full flex items-center text-center">
                                            <span class="group rounded-xl w-max place-items-center mx-auto bg-gray-300 text-black py-4 px-6 tracking-wide text-lg font-elegant focus:outline-none hover:bg-indoor hover:text-white cursor-pointer text-center transition ease-in duration-300">Valider mon adresse</span>
                                        </div>
                                    </div>   
                                </transition-group> 
                            </ValidationObserver>
                            <div class="px-10 pt-10" v-if="this.CreatedFormData.validation.info && this.CreatedFormData.validation.perso && this.CreatedFormData.validation.localisation">
                              <span id="comments-description" class="text-gray-500 text-sm">En cliquant sur le bouton <b>S'inscrire dès maintenant !</b>, vous acceptez de vous conformer aux <nuxt-link class="underline hover:text-resine" to="/mentions-legales">Mentions Légales</nuxt-link> et à la <nuxt-link class="underline hover:text-resine" to="/politique-de-confidentialite" >Politique de Confidentialité</nuxt-link>, que vous reconnaissez avoir lues, comprises et acceptées dans leur intégralité !</span>
                              <span  @click="createUser()" class="group flex rounded-xl w-max place-items-center my-10 mx-auto bg-gray-300 text-black p-5 tracking-wide text-lg font-elegant focus:outline-none hover:bg-indoor hover:text-white cursor-pointer text-center transition ease-in duration-300">
                                  S'inscrire dès maintenant !
                                    <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:animate-pulse stroke-current w-5 h-5 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                                    </svg>
                              </span>
                            </div>
                            <span v-else class="opacity-50 flex rounded-xl w-max place-items-center my-10 mx-auto bg-gray-300 text-black p-5 tracking-wide text-lg font-elegant focus:outline-none select-none hover:opacity-100 text-center transition ease-in duration-300">
                                Veuillez valider les étapes !
                            </span>
                          </form>
                        </ValidationObserver>
                                   
                    </div>
                </div>

            </div>
        </section>
        <!-- COL2 -->
        <section class="order-1 lg:order-2">
            <div class="hover:shadow-outdoor shadow-indoor transition group max-w-screen-sm place-items-center m-auto rounded-xl">
                <!-- HEAD -->
                <div class="p-10 bg-white rounded-t-xl border-b border-indoor group-hover:border-outdoor">
                    <h2 ref="applicant-information-title" class="text-center text-4xl leading-10 font-medium font-elegant text-black">
                        Connexion 
                    </h2>
                </div>
                <!-- FORM -->
                <div class="bg-white rounded-b-xl relative">
                    <ValidationObserver ref="observerSignUser">
                        <form @submit.prevent="signInUser()">
                          <!-- STP1 -->
                            <div class="grid gap-5 grid-cols-6 border-b border-gray-200 bg-gray-100 text-center rounded-b-xl"> 
                                <div class="col-span-6 mm-sm:mx-5 mm-sm:mb-5 mx-10 mb-5 mt-10">
                                      <label for="email2" class="text-indoor font-elegant leading-5 text-lg">
                                          Adresse email
                                      </label>
                                      <ValidationProvider rules="required|email" v-slot="{ errors }">
                                          <input ref="email2" placeholder="ex : jeandupont@gmail.com" name="Email" v-model.lazy="SignInFormData.email" type="email" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                          <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                      </ValidationProvider>
                                </div>
                                <div class="col-span-6 mm-sm:mx-5 mm-sm:mb-5 mm-sm:mt-0 mx-10 mb-0 ">
                                      <label for="password2" class="text-indoor font-elegant leading-5 text-lg">
                                          Mot de passe
                                      </label>
                                      <ValidationProvider rules="required" v-slot="{ errors }">
                                        <div class="relative">
                                          <input ref="password2" type="password" placeholder="ex : ••••••••••" v-model.lazy="SignInFormData.password" name="Mot de passe" :class="{'border-red-400 bg-gray-100': errors[0]}" class="border-outdoor font-simple text-center w-full text-black border-b  focus:outline-none focus:border-indoor focus:shadow-indoor focus:text-indoor  leading-10">
                                          <div class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                                            <svg v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Afficher le mot de passe', classes: 'z-[60]' }" v-if="!refPass2" @click="tglpass2()" class="h-5 w-5 text-resine hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg> 
                                            <svg v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Cacher le mot de passe', classes: 'z-[60]' }" v-if="refPass2" @click="tglpass2()" class="h-5 w-5 text-gray-500 hover:text-resine" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                            </svg>
                                          </div>
                                        </div>
                                        <span class="block leading-[16px] text-sm font-simple animate-pulse text-red-400 pt-2">{{ errors[0] }}</span>
                                      </ValidationProvider>
                                </div>
                                <div class="col-span-6 mb-5 "> 
                                  <a @click="forgotPassword()" v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Veuillez remplir le champ Adresse email avant de cliquer !', classes: 'z-[60]' }" class=" text-center hover:text-outdoor hover:cursor-pointer w-full text-sm font-medium text-indoor">Mot de passe oublié ?</a>
                                </div>
                                <div class="border-t border-gray-200 p-10 w-full flex items-center text-center col-span-6 relaive bg-white rounded-b-xl">
                                    <div class="absolute bottom-0 opacity-0 right-0 rounded-b-xl overflow-hidden group-hover:opacity-100 linear duration-300">
                                        <img src="@/assets/img/linememe-2.png" class="delay-100 transition-all h-52 duration-500 -mr-10 group-hover:-mr-5 -mb-14 group-hover:-mb-10 -rotate-2 group-hover:rotate-0 ">
                                    </div> 
                                    <span @click="signInUser()"  class="z-10 group flex rounded-xl w-max place-items-center mt-2 mx-auto bg-gray-300 text-black py-4 px-6 tracking-wide text-lg font-elegant focus:outline-none hover:bg-indoor hover:text-white cursor-pointer text-center transition ease-in duration-300">
                                        Connexion
                                        <svg class="group-hover:animate-pulse stroke-current w-5 h-5 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg>
                                    </span>
                                </div>                                
                            </div>
                      </form>
                    </ValidationObserver>
                    
                </div>
            </div>
        </section> 
      </div>
      <audio :src="require('@/assets/sounds/waiting-screen.ogg').default" ref="waitingSND"></audio>
      <ui-footer />
    </main>
</template>
<script lang="ts">
  import Vue from 'vue'
  import { mapActions } from 'vuex'
  import { ValidationObserver, ValidationProvider } from "vee-validate";
  export default Vue.extend({
    name: "auth",
    head() {
      return {
      title: 'Authentification - GreenFuz.fr',
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
        // Si l'utilisateur est authentifié
        if (store.state.app.users.isLoggedIn) {
            return redirect('/auth/profil')
        }
    },
    data() {
      return {
        refPass2: false,
        refPass: false,
        SignInFormData: {
          email: "",
          password: "",
        },
        CreatedFormData: {
          email: '',
          password: '',
          etapes: {
            info:true,
            perso:false,
            localisation:false,
          },
          validation: {
              info:false,
              perso:false,
              localisation:false,
          }
        },
        userNewData: {
            firstName: "",
            lastName: "",
            mobile: "",
            email: "",
            uid: "",
            location: {
                street_number: "",
                rue: "",
                city: "",
                area: "",
                zipcode: "",
                country: "",
            },
            completed: "",
            dateTime: {
                created: "",
                lastLogin: "",
                updated: "",
            },
            order: [
                ""
            ]
        },
        soundUI: true,
        searchFullLocation: ""
      }
    },
    mounted() {
      this.tglSound() 
    },
    beforeDestroy() {
      this.tglSound()
    },
    methods: {
      ...mapActions({
          soundUiAccordeonUp: 'soundUiAccordeonUp', soundUiAccordeonBot: 'soundUiAccordeonBot',
          soundUiAlertInfo: 'soundUiAlertInfo', soundUiAlertError: 'soundUiAlertError', soundUiAlertSucces: 'soundUiAlertSucces'
      }),
      tglSound() {
        const snd = this.$refs.waitingSND
        snd.muted = true
          if( this.$store.state.app.users.isSoundEnabled ) { 
            if(this.soundUI) {
              snd.muted = false
              snd.volume = 0.2
              snd.play()
              this.soundUI = false
            } else {
              snd.muted = true
              snd.pause()
              this.soundUI = true
            }

          }

      },
      tglpass2() {
          const input = this.$refs.password2
          if (input.getAttribute("type") === "password") {
            this.refPass2 = true
            input.setAttribute("type", "text");
          } else {
            this.refPass2 = false
            input.setAttribute("type", "password");
          }
      },
      tglpass() {
          const input = this.$refs.password
          if (input.getAttribute("type") === "password") {
            this.refPass2 = true
            input.setAttribute("type", "text");
          } else {
            this.refPass2 = false
            input.setAttribute("type", "password");
          }
      },
      async drawerInfo() { 
        //tgl
        const oberserverInfo = await (this.$refs.oberserverInfo as Vue & { validate: () => boolean }).validate()
        try {
          if(oberserverInfo) { 
            //tgl
            this.CreatedFormData.etapes.info = !this.CreatedFormData.etapes.info
            this.CreatedFormData.etapes.perso = false
            this.CreatedFormData.etapes.localisation = false

            //sound
            if(this.CreatedFormData.etapes.info) {
                this.soundUiAccordeonUp()
            } else {
                this.soundUiAccordeonBot()
            }
          } else {
            this.CreatedFormData.validation.info = false;
          }
        } catch(e) {
        }
      },
      async drawerPerso() {
        //observer
        const oberserverInfo = await (this.$refs.oberserverInfo as Vue & { validate: () => boolean }).validate()
        try {
          if(oberserverInfo) { 
            //tgl
            this.CreatedFormData.etapes.info = false;
            this.CreatedFormData.etapes.perso = !this.CreatedFormData.etapes.perso;
            this.CreatedFormData.etapes.localisation = false;
            //vld
            this.CreatedFormData.validation.info = true;
            //sound
            if(this.CreatedFormData.etapes.perso) {
                this.soundUiAccordeonUp()
            } else {
                this.soundUiAccordeonBot()
            }
          }
        } catch(e) {
        }
      },
      async drawerLocalisation() {
        //observer
        const oberserverPerso = await (this.$refs.oberserverPerso as Vue & { validate: () => boolean }).validate()
        try {
          if(oberserverPerso) { 
            //tgl
            this.CreatedFormData.etapes.info = false;
            this.CreatedFormData.etapes.perso = false;
            this.CreatedFormData.etapes.localisation = !this.CreatedFormData.etapes.localisation;
            //vld
            this.CreatedFormData.validation.perso = true;
            //sound
            if(this.CreatedFormData.etapes.localisation) {
                this.soundUiAccordeonUp()
            } else {
                this.soundUiAccordeonBot()
            }
          }
        } catch(e) {
        }
      },
      async drawerValid() {
        //observer
        const oberserverLocalisation = await (this.$refs.oberserverLocalisation as Vue & { validate: () => boolean }).validate()
        try {

          if(oberserverLocalisation) { 
            //tgl
            this.CreatedFormData.etapes.info = false;
            this.CreatedFormData.etapes.perso = false;
            this.CreatedFormData.etapes.localisation = !this.CreatedFormData.etapes.localisation;
            //vld
            this.CreatedFormData.validation.localisation = true;
            //sound
            if(this.CreatedFormData.etapes.localisation) {
                this.soundUiAccordeonUp()
            } else {
                this.soundUiAccordeonBot()
            }
          }
        } catch(e) {
        }
      },
      async createUser() {
        try {
          this.$toast.global.gfinfo("Inscription en cours ⏳");
          this.soundUiAlertInfo()
          //observer
          const oberserverInfo = await (this.$refs.oberserverInfo as Vue & { validate: () => boolean }).validate()
          const oberserverPerso = await (this.$refs.oberserverPerso as Vue & { validate: () => boolean }).validate()
          const oberserverLocalisation = await (this.$refs.oberserverLocalisation as Vue & { validate: () => boolean }).validate()
         
          if (oberserverInfo && oberserverPerso && oberserverLocalisation) {
            await this.$fire.auth.createUserWithEmailAndPassword(this.CreatedFormData.email, this.CreatedFormData.password).then((userCredential: { user: { uid: any; }; }) => {
              const profil = this.$fire.firestore.collection('users').doc(userCredential.user.uid)
              profil.set({
                firstName: this.userNewData.firstName,
                lastName: this.userNewData.lastName,
                mobile: this.userNewData.mobile,
                email: this.CreatedFormData.email,
                uid: userCredential.user.uid,
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
                    created: this.$moment(new Date()).format('DD MMMM YYYY [à] HH[H]mm'),
                    lastLogin: this.$moment(new Date()).format('DD MMMM YYYY [à] HH[H]mm'),
                    updated: this.$moment(new Date()).format('DD MMMM YYYY [à] HH[H]mm'),
                },
              })         
            })
            this.$toast.global.gfsucces("Inscription réussie !!!");
              this.soundUiAlertSucces()
          }  
        } catch (e) {
          this.$toast.global.gferror(e);
            this.soundUiAlertError()
        } finally {
          this.$router.push({ path: "/"})
        }
      },
      async signInUser() {
        try {
          this.$toast.global.gfinfo("Connexion en cours ⏳");
            this.soundUiAlertInfo()
          //observer
          const observerSignUser = await (this.$refs.observerSignUser as Vue & { validate: () => boolean }).validate()
          if (observerSignUser) {
            await this.$fire.auth.signInWithEmailAndPassword(this.SignInFormData.email, this.SignInFormData.password)
            this.$toast.global.gfsucces("Connexion réussie !!!");
              this.soundUiAlertSucces()
            this.$router.push({ path: '/'})
          }
        } catch (e:any) {
          console.log({e})
            if(e.code === "auth/email-already-exists") {
              this.$toast.global.gferror("L'e-mail fourni est déjà utilisé par un utilisateur existant.");
                this.soundUiAlertError()
            } else if(e.code === "auth/wrong-password") {
              this.$toast.global.gferror("Le mot de passe fournie ne correspond pas à celui enregistrer !");
                this.soundUiAlertError()
            } else if(e.code === "auth/too-many-requests") {
              this.$toast.global.gferror("L'accès à ce compte a été temporairement désactivé en raison de nombreuses tentatives de connexion infructueuses.");
                this.soundUiAlertError()
              this.$toast.global.gfinfo("Vous pouvez le restaurer immédiatement en réinitialisant votre mot de passe ou vous pouvez réessayer plus tard !");
                
            } else if(e.code === "auth/user-not-found") {
              this.$toast.global.gferror("Il n'existe aucun utilisateur correspondant à l'identifiant fourni.");
                this.soundUiAlertError()
            } else {
              this.$toast.global.gferror(e);
                this.soundUiAlertError()
            }
        }
      },
      async forgotPassword() {
        try {
          this.$toast.global.gfinfo('Réinitialisation du mot de passe en cours ⏳');
            this.soundUiAlertInfo()
          await this.$fire.auth.sendPasswordResetEmail(this.SignInFormData.email)
        } catch (e) {
          this.$toast.global.gferror(e);
            this.soundUiAlertError()
        } finally {
          this.$toast.global.gfsucces('Réinitialisation du mot de passe envoyer par mail !!!');
            this.soundUiAlertSucces()
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

    },
})
</script>
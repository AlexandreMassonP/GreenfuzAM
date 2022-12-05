<template>
  <nav class="fixed w-full p-5 h-20 max-h-20 z-50">
    <div class="flex items-center min-h-full justify-between">
        <!-- Mobile toggle -->
        <div class="flex justify-between">
            <button @click="menu()">
                <svg @click="soundUiNavLeft()" v-if="this.$store.state.app.menu === false" class="h-5 w-5 fill-current text-black hover:animate-pulse transition" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <!-- Close -->
                <svg @click="soundUiNavRight()" v-if="this.$store.state.app.menu === true" class="w-5 h-5 animate-pulse" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12"></path>
                 </svg>
            </button>
            <h1 class="select-none text-4xl text-outdoor font-elegant pl-12 sm:inline-block md:inline-block md:pl-6">green<span class="text-indoor">fuz</span></h1>
            <ui-menu />
        </div>
        <!-- Logo -->
        <nuxt-link to="/" class="absolute left-16  md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  ">
            <ui-logo :size="'50'" />
        </nuxt-link>
        <!-- Navbar -->
        <ul class="flex space-x-8 text-sm font-sans items-center">
            <!-- Panier -->
            <li class="block"> 
                <a class="cta font-semibold cursor-pointer relative block" @click="panier()">
                  <div @click="soundUiNavLeft()" v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Panier', classes: 'z-[60]' }" v-if="this.$store.state.app.panier">
                    <svg  class="h-5 w-5 stroke-current hover:animate-pulse text-gray-500 hover:text-outdoor" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span class="absolute -right-2 top-2 rounded-full bg-resine w-4 h-4 p-0 text-white font-simple text-sm leading-tight text-center">{{this.$store.state.app.commerce.cart.total_unique_items || "0"}}</span>
                  </div>
                    
                  <!-- Close -->
                  <div @click="soundUiNavRight()" v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Fermer', classes: 'z-[60]' }" v-if="!this.$store.state.app.panier">
                    <svg  class="w-5 h-5 animate-pulse" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </div>
                </a> 
            </li>
            <!-- Inscription -->
            <li class="block group" v-if="!this.$store.state.app.users.isLoggedIn">
                <nuxt-link to="/auth" class="cta font-semibold cursor-pointer" >
                    <div v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Inscription', classes: 'z-[60]' }">
                      <svg class="inline-block h-5 w-5 group-hover:animate-pulse  stroke-current text-gray-500 group-hover:text-outdoor" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                    </div>
                </nuxt-link>
            </li>
            <!-- Connexion -->
            <li class="block group" v-if="!this.$store.state.app.users.isLoggedIn">
                <nuxt-link to="/auth" class="cta font-semibold cursor-pointer">
                  <div v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Connexion', classes: 'z-[60]' }">
                    <svg class="inline-block h-5 w-5 group-hover:animate-pulse  stroke-current text-gray-500 group-hover:text-outdoor" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                  </div>
                </nuxt-link>
            </li>
            <!-- Profil -->
            <li class="block" v-if="this.$store.state.app.users.isLoggedIn" >
              <div class="text-left items-center">
                <a class="cta font-semibold cursor-pointer" @click="drawerUtilisateur">
                    <div v-tooltip="{ arrowSelector: '.tooltip-arrow, .tooltip__arrow', content: 'Votre profil', classes: 'z-[60]' }" v-if="this.siUtilisateurOuvert === false">
                      <svg  class="h-5 w-5 hover:animate-pulse  stroke-current text-gray-500 hover:text-outdoor" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <!-- Close -->
                    <svg v-if="this.siUtilisateurOuvert === true" class="w-5 h-5 animate-pulse" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </a>
                <transition name="top-fade">
                  <div v-if="this.siUtilisateurOuvert" class="transition-all delay-0 origin-top-right absolute right-0 mr-14 -mt-5 w-56 rounded-tl-md rounded-bl-md rounded-br-md shadow-indoor bg-white ring-1 ring-indoor ring-opacity-5 divide-y divide-gray-200 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">

                      <div class="py-1" role="none" @click="drawerUtilisateur()">
                        <div class="text-gray-700 group flex items-center text-center w-full px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">
                          <span class="mr-3 inline-flex items-center justify-center h-5 w-5 rounded-full bg-resine">
                            <span class="text-xs font-medium font-fat leading-none text-white">{{this.$store.state.app.users.profil.firstName.slice(0,1)}}{{this.$store.state.app.users.profil.lastName.slice(0,1)}}</span>
                          </span>
                          <p>Bonjour <b>{{this.$store.state.app.users.profil.firstName}}</b> !</p>
                        </div>
                      </div>
                      <div class="py-1 bg-gray-100 " role="none" @click="drawerUtilisateur()">
                        <nuxt-link to="/auth/profil" class="text-gray-700 group flex items-center text-center w-full px-4 py-2 hover:font-bold text-sm" role="menuitem" tabindex="-1" id="menu-item-0">
                          <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:mr-5 transition-all group-hover:text-gray-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                          </svg>
                          Voir votre profil
                        </nuxt-link>
                      </div>
                      <div class="py-1 bg-gray-100 " role="none" @click="drawerUtilisateur()">
                        <a target="_blank" href="tel:0836656565" class="text-gray-700 group flex items-center px-4 py-2 text-sm hover:font-bold" role="menuitem" tabindex="-1" id="menu-item-4">
                          <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:mr-5 transition-all group-hover:text-gray-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                          </svg>
                          S.A.V
                        </a>
                      </div>
                      <div class="py-1 bg-gray-100 " role="none" @click="drawerUtilisateur()">
                        <a target="_blank" href="https://www.facebook.com/share.php?u=https%3A%2F%2Fwww.greenfuz.fr%2F" class="text-gray-700 group flex items-center px-4 py-2 text-sm hover:font-bold" role="menuitem" tabindex="-1" id="menu-item-4">
                          <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:mr-5 transition-all group-hover:text-gray-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          Partager GreenFuz
                        </a>
                      </div>
                      <div class="py-1 bg-gray-100 " role="none" @click="tglsound()"> 
                        <span v-if="this.$store.state.app.users.isSoundEnabled" class="group hover:text-gray-700 flex items-center px-4 py-2 text-sm cursor-pointer hover:font-bold" role="menuitem" tabindex="-1" id="menu-item-6">
                          <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:mr-5 transition-all group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          </svg>                          
                          Son activé
                        </span>
                        <span v-else class="group flex items-center px-4 py-2 text-sm cursor-pointer hover:text-gray-700 hover:font-bold" role="menuitem" tabindex="-1" id="menu-item-6">
                          <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:mr-5 transition-all group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                          </svg>
                          Son désactivé
                        </span>
                      </div>
                      <div class="py-1" role="none" @click="drawerUtilisateur()">
                        <span @click="logout()" class="group flex items-center px-4 py-2 text-sm cursor-pointer hover:font-bold" role="menuitem" tabindex="-1" id="menu-item-6">
                          <svg class="mr-3 h-5 w-5 text-indoor group-hover:mr-5 transition-all group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Déconnexion
                        </span>
                      </div>
                  </div>
                </transition> 
              </div>
            </li>
        </ul>
    </div>
  </nav>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        siUtilisateurOuvert: false, /* drawer-cart */
        siLightMode: false, /* color.mode */
      };
    },
    methods: {
      ...mapActions({ 
        menu: 'menu', panier: 'panier', tglsound: 'sounds',
        soundUiNavLeft: 'soundUiNavLeft', soundUiNavRight: 'soundUiNavRight', 
        soundUiAccordeonUp: 'soundUiAccordeonUp', soundUiAccordeonBot: 'soundUiAccordeonBot', 
        soundUiAlertInfo: 'soundUiAlertInfo', soundUiAlertError: 'soundUiAlertError', soundUiAlertSucces: 'soundUiAlertSucces',
        playLighterFlick: 'playLighterFlick' 
      }),
      async drawerUtilisateur() { 
        this.siUtilisateurOuvert = !this.siUtilisateurOuvert; 
          if(this.siUtilisateurOuvert) {
              this.soundUiAccordeonUp()
          } else {
              this.soundUiAccordeonBot()
          }
      },
      async logout() {
        try {
          await this.$fire.auth.signOut()
          this.$router.push({ name: 'auth'})
          this.$toast.global.gfsucces('Déconnexion effectuée avec succés');
          this.soundUiAlertInfo()
        } catch (e) {
          this.$toast.global.gferror(e);
          this.soundUiAlertError()
        }
      },
    },
    computed: {
        /* if color.mode */
        isLightModeActive() {
            return this.isLightMode;
        },
        checkedValue: {
            get() {
                return this.defaultState
            },
            set(newValue) {
                this.isLightMode = newValue;
                if (this.isLightMode === true) { 
                  $nuxt.$colorMode.preference = 'dark'
                } else {
                  $nuxt.$colorMode.preference = 'light'
                }
            }
        }
    },    
    created() {
      this.$nuxt.$colorMode.preference = 'light';
    }
  };
</script>
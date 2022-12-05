
const actions = {
    //init
    async nuxtServerInit({ dispatch}, ctx) {
      
      console.log( `%c GreenFuz %c users/Actions.js %c async nuxtServerInit 🟣 start"`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#ae9d8c ; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFFFFF', 'background:transparent')
      if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
        const { allClaims: claims, ...authUser } = ctx.res.locals.user
            console.log( `%c GreenFuz %c users/Actions.js %c Claims ✔️"`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#ae9d8c ; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFFFFF', 'background:transparent')
            console.info(claims)
            console.log( `%c GreenFuz %c users/Actions.js %c Auth User (verified on server-side) : ✔️"`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#ae9d8c ; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFFFFF', 'background:transparent')
            console.info(authUser)
            await dispatch('onAuthStateChanged', {authUser, claims})
            
      }
      await dispatch('getProducts')
      console.log( `%c GreenFuz %c users/Actions.js %c async nuxtServerInit 🟣 end"`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#ae9d8c ; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFFFFF', 'background:transparent')
    },
    //app
    async menu({commit}) {
        commit('TGL_MENU')
    },
    async konami({commit}) {
      let user_keys = []
      let konamite = "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,KeyB,KeyQ"
      document.addEventListener('keydown', function (e) { 
        user_keys.push(e.code)
        if (user_keys.toString().indexOf(konamite) >= 0) {
          commit('TGL_KONAMI')
          user_keys = []

          var colors = 0;
          window.setInterval(function () {
            colors = colors + 1;
            document.getElementById("color").style.filter = 'hue-rotate('+colors+'deg)';
          }, 10); 

          if (user_keys.toString().indexOf(konamite) > 0) {
            document.addEventListener('keydown', function (e) { 
              commit('TGL_KONAMI')
            })
          }
        }
      })
      
    },
    async sounds({commit}) {
      commit('TGL_SOUND')
    },
    async panier({commit, state}) {
        commit('TGL_PANIER')
        const cart = await this.$commerce.cart.retrieve()
            if( state.panier === false ) {
              //Si le panier est ouvert
              console.log( `%c GreenFuz %c commerce/Actions.js %c 🛒 Recherche de contenue ⏳`,'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4','background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558','background:transparent')
              if (cart.total_items === 0) { 
                //Si le résultat du panier sur commerce.js est vide
                console.log( `%c GreenFuz %c commerce/Actions.js %c 🛒 Panier vide`,'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4','background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558','background:transparent')
                commit('SET_PANIER', cart)
              } else { 
                //Si le résultat du panier sur commerce.js est remplie de au moins un objet
                console.log( `%c GreenFuz %c commerce/Actions.js %c 🛒 Panier remplie`,'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4','background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558','background:transparent')           
                commit('SET_PANIER', cart)
              }

            } 
    
    },
    async setGetToken({commit, state}) {
      if( Object.keys(state.commerce.token).length === 0) {
        //Si la State TOKEN est vide
        const token = await this.$commerce.checkout.generateToken(state.commerce.cart.id, {type: 'cart'})
        commit('SET_TOKEN', token)
      } else {
        let checkoutTokenId = state.commerce.token.id;
        const tokenId = await this.$commerce.checkout.getToken(checkoutTokenId)
        commit('GET_TOKEN', tokenId)
      }
    },
    async setToken({commit, state}) {
      if( state.commerce.token === '{}') {
        console.log( `%c GreenFuz %c commerce/Actions.js %c 🛒 SET_TOKEN ❔`,'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4','background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558','background:transparent')
        const token = await this.$commerce.checkout.generateToken(cart.id, {type: 'cart'})
        commit('SET_TOKEN', token)
      }
    },
    async getToken({commit, state}) {
      if( state.commerce.token != '{}') {
        console.log( `%c GreenFuz %c commerce/Actions.js %c 🛒 GET_TOKEN ❔`,'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4','background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558','background:transparent')
        let checkoutTokenId = state.commerce.token.id;
        const tokenId = await this.$commerce.checkout.getToken(checkoutTokenId)
        commit('GET_TOKEN', tokenId)
      }
    },
    //users
    async onAuthStateChanged( { commit  }, { authUser } ) {
        console.log( `%c GreenFuz %c users/Actions.js %c async onAuthStateChanged 🔵 start"`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#ae9d8c ; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFFFFF', 'background:transparent')
      if (!authUser) {
        commit('RESET_STORE_USERS', { authUser })
        return console.log( `%c GreenFuz %c users/Actions.js %c Store User Reset ✔️"`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#ae9d8c ; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFFFFF', 'background:transparent') 
      }
      if (authUser && authUser.getIdToken && authUser.uid) {
        const profil = await this.$fire.firestore.collection('users').doc(authUser.uid);
        const snapshot = await profil.get()
        const doc = snapshot.data()
  
        try {
          const idToken = await authUser.getIdToken(true)
          console.log( `%c GreenFuz %c users/Actions.js %c ID Token ✔️"`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#ae9d8c ; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFFFFF', 'background:transparent')  
          console.info(idToken);
          commit('SET_AUTH_USER', { authUser })
          if (doc){
            commit('SET_PROFIL',  {doc} )
            await profil.update({ 
              dateTime: { 
                created: doc.dateTime.created,
                lastLogin: this.$moment(new Date()).format('DD MMMM YYYY [à] HH[H]mm'),
                updated: doc.dateTime.updated,
              } 
            });           
          } else {
            console.log( `%c GreenFuz %c users/Actions.js %c Doc introuvable ❌"`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#ae9d8c ; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFFFFF', 'background:transparent')  
          }
          
        } catch (e) {
            console.log( `%c GreenFuz %c users/Actions.js %c ID Token ❌"`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#ae9d8c ; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFFFFF', 'background:transparent')  
            console.error(e);
        }
      }
      if (authUser.uid) {
        const order = await this.$fire.firestore.collection("users/" + authUser.uid + "/commandes")
        const snapshot = await order.get()
        try {     
          if (snapshot.size > 0) {
            console.log(snapshot.size)
            let test = []
            snapshot.forEach(function(val) {
                  const rr = val.data()
                  test.push(rr)
              })
              commit('SET_ORDERS', {test})
          }
          else {
              console.log("No documents in the results");
          }
        } catch (e) {
            console.log( `%c GreenFuz %c users/Actions.js %c ID Token ❌"`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#ae9d8c ; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFFFFF', 'background:transparent')  
            console.error(e);
        }
      }
      
      console.log( `%c GreenFuz %c users/Actions.js %c async onAuthStateChanged 🔵 end"`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#ae9d8c ; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFFFFF', 'background:transparent')  
    }, 
    //commerce
    async getProducts({ commit }) {
      const products = await this.$commerce.products.list();
      if (products) {
        console.log( `%c GreenFuz %c commerce/Actions.js %c Recherche de produit ⏳`,
          'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
          'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
          'background:transparent'
        )
        commit('SET_PRODUCTS', products.data)
      }
    },
    async addProductToCart({ commit }, {id, count, var1, opt1}) {
      const addProduct = await this.$commerce.cart.add(id, count, {[var1] : opt1})
      const cart = await this.$commerce.cart.retrieve()

      try {
        console.log( `%c GreenFuz %c commerce/Actions.js %c Ajout du produit dans le panier ⏳`,
        'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
        'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
        'background:transparent'
        )
        console.log(id +' : '+ count +' : '+ var1  +' : '+ opt1)
        commit('ADD_PRODUCTS_TO_CART', addProduct.cart)
      } catch(e) {
      } finally {

        commit('SET_PANIER', cart)
      }
    },
    async removeProductFromCart({ commit }, payload) {
      const removeProduct = await this.$commerce.cart.remove(payload)
      const cart = await this.$commerce.cart.retrieve()

      try {
          console.log( `%c GreenFuz %c commerce/Actions.js %c Supression du produit dans le panier ⏳`,
              'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
              'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
              'background:transparent'
          )
          commit('REMOVE_PRODUCTS_FROM_CART', removeProduct.cart)
      } catch(e) {
      } finally {
          commit('SET_PANIER', cart)
      }
    },
    async clearCart({ commit }) {
      const clear = await this.$commerce.cart.empty()
      const cart = await this.$commerce.cart.retrieve()

      try {
          console.log( `%c GreenFuz %c commerce/Actions.js %c Réinitialisation du panier ⏳`,
          'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
          'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
          'background:transparent'
          )
          commit('CLEAR_CART', clear)
      } catch(e) {
      } finally {
          commit('SET_PANIER', cart)
      }
    },
    async updateCart({ commit }, {id, count, var1, opt1} ) {
      const update = await this.$commerce.cart.update(id, count)
      const cart = await this.$commerce.cart.retrieve()

      try {
          console.log( `%c GreenFuz %c commerce/Actions.js %c Mise à jour du panier ⏳`,
          'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
          'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
          'background:transparent'
          )
          commit('UPDATE_CART', update)
      } catch(e) {
      } finally {
          commit('SET_PANIER', cart)
      }
    },

    //checkout
    async captureCheckoutPaypal({ commit, dispatch, state }, { token, dataa, uid, total }) {  
        console.log( `%c GreenFuz %c commerce/Actions.js %c Capture du panier pour Paypal ⏳`,
        'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
        'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
        'background:transparent'
        )
        console.info('captureCheckoutPaypal Token :', token)
        console.info('captureCheckoutPaypal Dataa :', dataa)

        this.$commerce.checkout.capture(token, dataa).then(response => {
          console.log('captureCheckoutPaypal Response Capture : ',response);

          function captureOrder(dataa, uid, token) {
            let dato  = {
              line_items: dataa.line_items,
              customer: dataa.customer,
              shipping: dataa.shipping,
              fulfillment: dataa.fulfillment,
              billing: dataa.billing,
              extra_fields: dataa.extra_fields,
              payment: {
                gateway: 'paypal',
                paypal: {
                    action: 'capture',
                    payment_id: state.commerce.paypalID,
                    payer_id: state.commerce.paypalUsr,
                },
              },
            }
            dispatch('captureCheckout', {token: token, datou: dato, uid: uid})  
            console.log('Token 2 : ', token);

          }
          function renderPaypalButton(response) {
            paypal.Button.render({
              env: 'production', // Or 'sandbox'
              client: {
                //sandbox : 'AWRTHxRRPxgm-_sCBKG-juyKsxzYDUUHqbw0QY9tcSXpu74bGjXjXteGSZB9iOiFsUiqMMcRHwx75Nm7',
                production : 'AYDSj_fHINTpumQxAnMZ4gy-tf8ysgwAK5h3e64XBpoMdEYuqgyzKHYtve6sIkcNmaJhJt-shlpyKo5w',
              },
              funding: {
                allowed: [ paypal.FUNDING.CARD, paypal.FUNDING.CREDIT ],
                disallowed: [ ]
              },
              style: {
                layout: 'vertical',
                size:  'responsive', // small | medium | large | responsive
                shape: 'rect',   // pill | rect
                color: 'black',
                label: 'pay',   // gold | blue | silver | black
              },
              experience: {
                input_fields: {
                    no_shipping: 1
                } 
              },
              commit: true, // Show a 'Pay Now' button
              //enableStandardCardFields: true,
              payment: function(data, actions) {
                console.log(response)
                commit('SET_PPL_ID', response.payment_id)
                actions.payment.create({
                  payment: {
                    transactions: [
                      {
                        amount: {
                          total: total,
                          currency: 'EUR'
                        }
                      }
                    ]
                  }
                });
                return response.payment_id

                
              },
              onAuthorize: function(data, actions) {
                
                commit('SET_PPL_USR', data.payerID)
                console.log('onApprove data: ', data)
                captureOrder(dataa, uid, token)
              },
              onCancel: function(data, actions) {
                // Handler if customer does not authorize payment
                console.log('onCancel : ', data)
              }, 
              onError: function(err) {
                console.log('onError : ', err)
              }
            },'#paypal-button-container');
          }
          renderPaypalButton(response);
        }).catch(error =>{
          console.error('Error captureCheckoutPaypal: ',error)
        })

    },
    async captureLastorder({ commit }, { uid, response }) {
      console.log('captureLastorder')

      if(uid) {
        console.log('captureLastorder uid:', uid)
        const reorder = this.$fire.firestore.collection("users/" + uid + "/commandes")
        const snapshot = reorder.get()
        
        const clear = this.$commerce.cart.empty()
        const cart = this.$commerce.cart.retrieve()

        try {
          console.log('captureLastorder try')
          snapshot.then((doc) => {
              // Document was found in the cache. If no cached document exists,
              // an error will be returned to the 'catch' block below.
              console.log("Document data:", doc.size);
              if(doc.size > 0) {
                let test = []
                doc.forEach(function(val) {
                  const rr = val.data()
                  console.log(rr)
                  test.push(rr)
                  console.log('captureLastorder try : snapshot push')
                })
                commit('SET_ORDERS', {test})
              } 
          }).catch((error) => {
              console.log("Error getting document:", error);
          });
          setTimeout(() => {
            this.$router.push(`/commande/` + response.customer_reference)
            console.log('captureLastorder try : router push avec 15s')
          }, 5000);
          setTimeout(() => {
            commit('CLEAR_CART', clear) 
            commit('SET_PANIER', cart) 
            console.log('captureLastorder try : commit avec 16s (CLEAR_CART et SET_PANIER)')
          }, 6000);
        } catch(e) {
          console.log('captureLastorder catch:', e)
        }


      }
    },
    async captureCheckout({ commit, dispatch }, { token, datou, uid }) {
      const order = this.$fire.firestore.collection('users').doc(uid)
      const ordered = order.collection('commandes').doc(token)
      const gblOrder = this.$fire.firestore.collection('orders').doc(token)

      try {    
        this.$commerce.checkout.capture(token, datou).then((response) => {
          gblOrder.set({
            dateTime: {
                created: this.$moment(new Date()).format('DD[/]MM[/]YYYY [à] HH[H]mm'),
                unix: this.$moment().unix(),
            },
            tokenID: token,
            orderID: response.id,
            clientUID: uid,
            clientID: response.customer.id,
            orderREF: response.customer_reference,
            cartID: response.cart_id,
            livraison: response.shipping,
            order: response.order,
            extra: response.extra_fields
          })
          ordered.set({
              dateTime: {
                  created: this.$moment(new Date()).format('DD[/]MM[/]YYYY [à] HH[H]mm'),
                  unix: this.$moment().unix(),
              },
              tokenID: token,
              orderID: response.id,
              clientID: response.customer.id,
              orderREF: response.customer_reference,
              cartID: response.cart_id,
              livraison: response.shipping,
              order: response.order,
              extra: response.extra_fields
          })
          console.log('Try:',response); 
          commit('SET_CHECKOUT', response)
          dispatch('captureLastorder', {uid: uid, response: response})  

          
        }).catch((error) => {
          console.log('tryError:',error);
        }).finally((e) => {
          this.$toast.global.gfsucces('Achat réussi, redirection en cours !');

       
        });
        
      } catch (e) {
        console.log('catchError:',e)
      }
    },

    //checkout
    async checkDiscount({ commit }, {id, promo}) {
      const discount = await this.$commerce.checkout.checkDiscount(id, {code: promo})

      try {
          console.log( `%c GreenFuz %c commerce/Actions.js %c Validation du code promo ⏳`,
          'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
          'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
          'background:transparent'
          )
          commit('SET_DISCOUNT', discount.live)
      } catch(e) {
      } finally {
          
      }
    },
    async filterProducts({ commit }, {id}) {

      try {
          console.log( `%c GreenFuz %c commerce/Actions.js %c Filtrage des produits ⏳`,
          'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
          'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
          'background:transparent'
          )
          commit('FLTR_PRODUCTS', id)
      } catch(e) {
      } finally {
          
      }
    },

    //sounds
    async playLighterFlick({state}) {
      const soundLighterFlick = require("@/assets/sounds/lighter-flick.ogg")
      let LighterFlick = soundLighterFlick.default
      try {
        if( state.users.isSoundEnabled ) { 
          const snd = new Audio(LighterFlick); 
          snd.volume = "0.2"
          snd.play()
        }
      } catch(e) {
      }
    },
    async soundUiNavLeft({state}) {
      const sound = require("@/assets/sounds/navigation_transition-left.ogg")
      let sndUi = sound.default
      try {
        if( state.users.isSoundEnabled ) { 
          const snd = new Audio(sndUi)
          snd.play()
        }
      } catch(e) {
      }
    },
    async soundUiNavRight({state}) {
      const sound = require("@/assets/sounds/navigation_transition-right.ogg")
      let sndUi = sound.default
      try {
        if( state.users.isSoundEnabled ) { 
          const snd = new Audio(sndUi)
          snd.play()
        }
      } catch(e) {
      }
    },
    async soundUiAccordeonUp({state}) {
      const sound = require("@/assets/sounds/navigation_accordeon-up.ogg")
      let sndUi = sound.default
      try {
        if( state.users.isSoundEnabled ) { 
          const snd = new Audio(sndUi)
          snd.play()
        }
      } catch(e) {
      }
    },
    async soundUiAccordeonBot({state}) {
      const sound = require("@/assets/sounds/navigation_accordeon-bot.ogg")
      let sndUi = sound.default
      try {
        if( state.users.isSoundEnabled ) { 
          const snd = new Audio(sndUi)
          snd.play()
        }
      } catch(e) {
      }
    },
    async soundUiAlertInfo({state}) {
      const sound = require("@/assets/sounds/alert_info.ogg")
      let sndUi = sound.default
      try {
        if( state.users.isSoundEnabled ) { 
          const snd = new Audio(sndUi)
          snd.play()
        }
      } catch(e) {
      }
    },
    async soundUiAlertError({state}) {
      const sound = require("@/assets/sounds/alert_error.ogg")
      let sndUi = sound.default
      try {
        if( state.users.isSoundEnabled ) { 
          const snd = new Audio(sndUi)
          snd.play()
        }
      } catch(e) {
      }
    },
    async soundUiAlertSucces({state}) {
      const sound = require("@/assets/sounds/alert_succes.ogg")
      let sndUi = sound.default
      try {
        if( state.users.isSoundEnabled ) { 
          const snd = new Audio(sndUi)
          snd.play()
        }
      } catch(e) {
      }
    },
    async soundUiHoverImg({state}) {
      const sound = require("@/assets/sounds/hover_image.ogg")
      let sndUi = sound.default
      try {
        const snd = new Audio(sndUi)
        snd.muted = true
        if( state.users.isSoundEnabled ) { 
          snd.muted = false
          snd.play()
        }
      } catch(e) {
      }
    },
    async soundUiShopDelete({state}) {
      const sound = require("@/assets/sounds/shop_delete.ogg")
      let sndUi = sound.default
      try {
        if( state.users.isSoundEnabled ) { 
          const snd = new Audio(sndUi)
          snd.play()
        }
      } catch(e) {
      }
    },
    //others
    checkVuexStore(ctx) {
        if (this.$fire.auth === null) {
          throw 'Vuex Store example not working - this.$fire.auth cannot be accessed.'
        }
        alert(
          'Success. Nuxt-fire Objects can be accessed in store actions via this.$fire___'
        )
      },
};
export default actions;
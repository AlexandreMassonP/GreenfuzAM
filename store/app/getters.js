// Getters
const getters = {
  get_menu: (state) => {
    try {
      console.log( `%c GreenFuz %c app/Getters.js %c Menu : ✔️"`,
          'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
          'background:#186558 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #b0eba4',
          'background:transparent'
      )
      return state.menu
    } catch {
      console.log( `%c GreenFuz %c app/Getters.js %c Menu : ❌"`,
          'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
          'background:#186558 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #b0eba4',
          'background:transparent'
      )
      return false
    }
  },
  get_panier: (state) => {
      try {
        console.log( `%c GreenFuz %c app/Getters.js %c Panier : ✔️"`,
          'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
          'background:#186558 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #b0eba4',
          'background:transparent'
        )
        return state.panier
      } catch {
        console.log( `%c GreenFuz %c app/Getters.js %c Panier : ❌"`,
          'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
          'background:#186558 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #b0eba4',
          'background:transparent'
        )
        return false
      }
  },
  profil: (state) => {
    try {
      console.log( `%c GreenFuz %c users/Getters.js %c Profil : ✔️"`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#ae9d8c ; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFFFFF', 'background:transparent')  
      return state.users.profil
    } catch {
      console.log( `%c GreenFuz %c users/Getters.js %c Profil : ❌"`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#ae9d8c ; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFFFFF', 'background:transparent')  
      return false
    }
  },
  orders: (state) => {
    try {
      console.log( `%c GreenFuz %c users/Getters.js %c Orders : ✔️"`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#ae9d8c ; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFFFFF', 'background:transparent')  
      return state.users.orders
    } catch {
      console.log( `%c GreenFuz %c users/Getters.js %c Orders : ❌"`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#ae9d8c ; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFFFFF', 'background:transparent')  
      return false
    }
  },
  isLoggedIn: (state) => {
    try {
      console.log( `%c GreenFuz %c users/Getters.js %c isLoggedIn : ✔️"`,
        'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
        'background:#ae9d8c ; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFFFFF',
        'background:transparent'
      )
      return state.users.authUser.uid !== null
    } catch {
      console.log( `%c GreenFuz %c users/Getters.js %c isLoggedIn : ❌"`,
        'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
        'background:#ae9d8c ; padding: 1px; border-radius: 0 3px 3px 0;  color: #FFFFFF',
        'background:transparent'
      )
      return false
    }
  },
  products: (state) => {
    try {
      console.log( `%c GreenFuz %c commerce/Getters.js %c products : ✔️"`,
        'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
        'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
        'background:transparent'
      )
      return state.commerce.products
    } catch {
      console.log( `%c GreenFuz %c commerce/Getters.js %c products : ❌"`,
        'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
        'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
        'background:transparent'
      )
      return false
    }
  },
  cart: (state) => {
    try {
      console.log( `%c GreenFuz %c commerce/Getters.js %c cart : ✔️"`,
        'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
        'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
        'background:transparent'
      )
      return state.commerce.cart
    } catch {
      console.log( `%c GreenFuz %c commerce/Getters.js %c cart : ❌"`,
        'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
        'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
        'background:transparent'
      )
      return false
    }
  },
  cartSubtotal: (state) => {
    try {
      console.log( `%c GreenFuz %c commerce/Getters.js %c cart sub total : ✔️"`,
        'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
        'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
        'background:transparent'
      )
      if (state.commerce.cart.subtotal) {
        return state.commerce.cart.subtotal.formatted
      }
    } catch {
      console.log( `%c GreenFuz %c commerce/Getters.js %c cart sub total : ❌"`,
        'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
        'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
        'background:transparent'
      )
      return false
    }
  },
  token: (state) => {
    try {
      console.log( `%c GreenFuz %c commerce/Getters.js %c Token : ✔️"`,
        'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
        'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
        'background:transparent'
      )
      return state.commerce.token
    } catch {
      console.log( `%c GreenFuz %c commerce/Getters.js %c Token : ❌"`,
        'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
        'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
        'background:transparent'
      )
      return false
    }
  },
  discount: (state) => {
    try {
      console.log( `%c GreenFuz %c commerce/Getters.js %c Discount : ✔️"`,
        'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
        'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
        'background:transparent'
      )
      return state.commerce.discount
    } catch {
      console.log( `%c GreenFuz %c commerce/Getters.js %c Discount : ❌"`,
        'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4',
        'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558',
        'background:transparent'
      )
      return false
    }
  },        
}
export default getters;
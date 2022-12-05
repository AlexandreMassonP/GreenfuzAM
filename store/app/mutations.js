import initialState from './state'

export default {
//TGL
    TGL_MENU: (state) => {
        state.menu = !state.menu
    },
    TGL_KONAMI: (state) => {
        state.konami = !state.konami
    },
    TGL_PANIER: (state) => {
        state.panier = !state.panier
    },
    TGL_SOUND: (state) => {
        state.users.isSoundEnabled = !state.users.isSoundEnabled;
    },
//SET
    SET_AUTH_USER: (state, { authUser }) => {
        state.users.authUser = {uid: authUser.uid, email: authUser.email}
        state.users.isLoggedIn = true
    },
    SET_PROFIL: (state, { doc }) => {
        state.users.profil = doc
    },
    SET_ORDERS: (state, { test }) => {
        console.log( `%c GreenFuz %c commerce/Mutations.js %c 📚 SET_ORDERS ✔️`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558', 'background:transparent')
        state.users.orders = test
    },
//GET
    GET_TOKEN: (state, payload) => {
        console.log( `%c GreenFuz %c commerce/Mutations.js %c 🛒 GET_TOKEN ✔️`,'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4','background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558','background:transparent')
        state.commerce.token = payload
    },
//RESET
    RESET_STORE_USERS: (state) => {
        Object.assign(state.users, initialState().users)
    },
    RESET_STORE_COMMERCE: (state) => {
        Object.assign(state.commerce, initialState().commerce)
    },
//COMMERCE
    SET_PANIER: (state, payload) => {
        console.log( `%c GreenFuz %c commerce/Mutations.js %c 🛒 SET_PANIER ✔️`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558', 'background:transparent')
        state.commerce.cart = payload
    },
    ADD_PRODUCTS_TO_CART: (state, payload) => {
        console.log( `%c GreenFuz %c commerce/Mutations.js %c 🛒 ADD_PRODUCTS_TO_CART ✔️`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558', 'background:transparent')
        state.commerce.cart.add(payload)
    },
    REMOVE_PRODUCTS_FROM_CART: (state, payload) => {
        console.log( `%c GreenFuz %c commerce/Mutations.js %c 🛒 REMOVE_PRODUCTS_FROM_CART ✔️`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558', 'background:transparent')
        const filtered = state.commerce.cart.filter((v) => {return v.line_item_id !== payload})
        state.commerce.cart = filtered
    },
    CLEAR_CART: (state, payload) => {
        console.log( `%c GreenFuz %c commerce/Mutations.js %c 🛒 CLEAR_CART ✔️`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558', 'background:transparent')
        state.commerce.cart = {}
        state.commerce.cart.subtotal = '0.00'
    },
    UPDATE_CART: (state, payload) => {
        console.log( `%c GreenFuz %c commerce/Mutations.js %c 🛒 UPDATE_CART ✔️`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558', 'background:transparent')
        state.commerce.cart = payload
    },
    SET_PPL_ID: (state, payload) => {
        console.log( `%c GreenFuz %c commerce/Mutations.js %c 💳 SET_PPL_ID ✔️`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558', 'background:transparent')
        state.commerce.paypalID = payload
    },
    SET_PPL_USR: (state, payload) => {
        console.log( `%c GreenFuz %c commerce/Mutations.js %c 💳 SET_PPL_USR ✔️`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558', 'background:transparent')
        state.commerce.paypalUsr = payload
    },
    SET_PRODUCTS: (state, payload) => {
        console.log( `%c GreenFuz %c commerce/Mutations.js %c 📦 SET_PRODUCTS ✔️`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558', 'background:transparent')
        state.commerce.products = payload
    },
    SET_TOKEN: (state, payload) => {
        console.log( `%c GreenFuz %c commerce/Mutations.js %c 💳 SET_TOKEN ✔️`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558', 'background:transparent')
        state.commerce.token = payload
    },
    SET_CHECKOUT: (state, payload) => {
        console.log( `%c GreenFuz %c commerce/Mutations.js %c 💳 SET_CHECKOUT ✔️`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558', 'background:transparent')
        state.commerce.checkout = payload
    },
    SET_DISCOUNT: (state, payload) => {
        console.log( `%c GreenFuz %c commerce/Mutations.js %c 🎁 SET_DISCOUNT ✔️`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558', 'background:transparent')
        state.commerce.discount = payload.discount
        state.commerce.token.live.total = payload.total
    },
    FLTR_PRODUCTS: (state, payload) => {
        console.log( `%c GreenFuz %c commerce/Mutations.js %c 📦 FLTR_PRODUCTS ✔️`, 'background:#186558 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #b0eba4', 'background:#b0eba4 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #186558', 'background:transparent')
        state.commerce.filter = payload
    },
}

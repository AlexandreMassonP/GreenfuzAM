export default () => ({
    menu:false,
    panier:true,
    konami:false,
    commerce: {
        filter:'',
        products: [],
        cart: {
            line_items: null
        },
        token: {},
        checkout: {},
        paypalID:'',
        paypalUsr: '',
        discount: {
            amount_saved: {
                raw: 0
            }
        },
    },
    users: {
        isSoundEnabled: false,
        authUser: null,
        isLoggedIn: false,
        profil: {},
        orders: [],
    }
})
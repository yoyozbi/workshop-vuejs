const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      action: "Achat de café",
      brand: "Nespresso",
      homeRoute: "#",
      premium: false,
      cart: [],
    };
  },
  methods: {
    addToCart(id) {
      if (!this.cart.includes(id)) {
        this.cart.push(id);
      }
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item !== id);
    },
  },
  computed: {
    title() {
      return `${this.action} ${this.brand}`;
    },
    cartSize() {
      return this.cart.length;
    },
    isCartEmpty() {
      return this.cart.length === 0;
    },
  },
});

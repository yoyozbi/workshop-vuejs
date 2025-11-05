app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
    canRemoveFromCart: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["add-to-cart", "remove-from-cart"],
  template:
    /*html*/
    `<p>{{ description }}</p>
                <img
                    height="200"
                    :src="image"
                    :class="{disabledImage: isStockEmpty}"
                />
                <div>
                    <span
                        v-for="(carouselImage, index) in carouselImages"
                        :key="index"
                        @mouseover="updateImage(index)"
                    >
                        <img
                            height="50"
                            alt="carouselImage.text"
                            :src="carouselImage.image"
                        />
                    </span>
                </div>
                <p v-if="stock > 10">Disponible</p>
                <p v-else-if="stock <= 10 && stock > 0">Peu de stock</p>
                <p v-else>Plus de stock</p>
                <p v-show="onSale">En Vente !</p>
                <product-details :details="details" />
                <p>Shipping: {{ shipping }}</p>
                <button
                                @click="addToCart"
                                :style="styles.roundButton"
                                :class="{disabledButton: isStockEmpty}"
                                :disabled="isStockEmpty"
                            >
                                Ajouter au panier
                            </button>
                            <button
                                @click="removeFromCart"
                                :style="styles.roundButton"
                                :class="{disabledButton: !canRemoveFromCart}"
                                :disabled="!canRemoveFromCart"
                            >
                                Retirer du panier
                            </button>
  `,
  data() {
    return {
      styles: {
        roundButton: {
          borderRadius: "20px",
          padding: "10px",
          backgroundColor: "rgb(0, 114, 180)",
          color: "white",
          cursor: "pointer",
        },
      },
      stock: 10,
      onSale: false,
      description: "Description du café Nespresso",
      selectedImage: 0,
      details: [
        {
          text: "Doux",
          color: "#6C99C6",
        },
        {
          text: "Harmonieux",
          color: "#BF9E74",
        },
      ],
      carouselImages: [
        {
          text: "Capsule 1",
          image: "./assets/images/colombia.png",
        },
        {
          text: "Capsule 2",
          image: "./assets/images/colombia_de_cote.png",
        },
        {
          text: "Tasse",
          image: "./assets/images/colombia_tasse.png",
        },
        {
          text: "Paquet",
          image: "./assets/images/colombia_paquet.png",
        },
      ],
    };
  },
  methods: {
    updateImage(image) {
      this.selectedImage = image;
    },
    addToCart() {
      this.$emit("add-to-cart", this.selectedImage);
    },
    removeFromCart() {
      this.$emit("remove-from-cart", this.selectedImage);
    },
  },
  computed: {
    isStockEmpty() {
      return this.stock === 0;
    },
    image() {
      return this.carouselImages[this.selectedImage].image;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }

      return 2.99;
    },
  },
});

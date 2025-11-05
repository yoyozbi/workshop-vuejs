app.component("product-details", {
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
  template: `
  <ul>
      <li
          v-for="(detail, index) in details"
          :key="index"
          :style="{color: detail.color}"
      >
          {{ detail.text }}
      </li>
  </ul>
  `,
});

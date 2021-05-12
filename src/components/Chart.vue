<template>
  <vue-c3 :handler="handler"></vue-c3>
</template>
<script>
import Vue from "vue";
import VueC3 from "vue-c3";
import "c3/c3.min.css";
export default {
  // props: {
  //   div: String,
  //   p: String,
  //   a: String,
  // },
  components: {
    VueC3,
  },
  data() {
    return {
      handler: new Vue(),
    };
  },
  computed: {
    options() {
      return {
        data: {
          columns: [
            ["p", 10, 20, 10, 40, 15],
            ["a", 10, 20, 10, 40, 15],
            ["div", 10, 20, 10, 40, 15],
          ],
          type: "bar",
        },
        axis: {
          x: {
            label: {
              text: "標籤",
              position: "outer-center",
            },
          },
          y: {
            label: {
              text: "數量",
              position: "outer-middle",
            },
          },
        },
        tooltip: {
          format: {
            title(d) {
              return `第 ${d} 期`;
            },
            value(value) {
              return `${value}個`;
            },
          },
        },
        grid: {
          x: {
            show: true,
          },
          y: {
            show: true,
          },
        },
        legend: {
          position: "right",
        },
        bar: {
          width: {
            ratio: 0.5,
          },
        },
      };
    },
  },
  mounted() {
    this.handler.$emit("init", this.options);
  },
};
</script>
<style scoped>
.button-wrapper {
  text-align: center;
}

button {
  padding: 10px;
  background: red;
}
</style>

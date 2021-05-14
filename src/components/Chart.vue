<template>
  <vue-c3 :handler="handler"></vue-c3>
</template>
<script>
import Vue from "vue";
import VueC3 from "vue-c3";
import "c3/c3.min.css";
export default {
  props: {
    stringTag: String,
  },
  components: {
    VueC3,
  },
  data() {
    return {
      handler: new Vue(),
      childTag: this.stringTag,
      APIData: {
        tag: [],
        quantity: ["標籤數量"],
      },
      totalTag: [
        "p",
        "div",
        "span",
        "h1",
        "h2",
        "h3",
        "a",
        "ul",
        "li",
        "select",
        "meta",
        "link",
        "img",
        "table",
      ],
    };
  },
  computed: {
    options() {
      const that = this;
      return {
        data: {
          columns: [[...this.APIData.quantity]],
          type: "bar",
        },
        color: {
          pattern: [this.$vuetify.theme.themes.light.error],
        },
        axis: {
          rotated: true,
          x: {
            type: "category",
            categories: this.APIData.tag,
            label: {
              text: "標籤",
              position: "outer-center",
            },
          },
          y: {
            show: true,
            categories: this.APIData.quantity,
            label: {
              text: "數量",
              position: "outer-middle",
            },
          },
          y2: {
            show: true,
            categories: this.APIData.quantity,
            label: {
              text: "數量",
              position: "outer-middle",
            },
          },
        },
        size: {
          height: this.APIData.tag.length * 30,
        },
        bar: {
          width: {
            ratio: 0.8,
          },
        },
        tooltip: {
          format: {
            title(x) {
              return that.totalTag[x];
            },
            value(value) {
              return `${value} 個`;
            },
          },
        },
      };
    },
  },
  methods: {
    // 計算tag的使用數量
    findTotalTag() {
      let htmlTags = this.transHTMLTag();
      this.pushToData(htmlTags);
    },
    // 轉換成htmlTag
    transHTMLTag() {
      let tmpTag = document.createElement("div");
      tmpTag.innerHTML = this.childTag;
      return tmpTag;
    },
    //把標籤由高到低排序
    sort() {},
    //把htmlTag的數量推進data裡
    pushToData(handleTag) {
      this.APIData = {
        tag: [],
        quantity: ["標籤數量"],
      };
      const that = this;
      this.totalTag.forEach(function (item) {
        let tmp = handleTag.getElementsByTagName(item);
        that.APIData.tag.push(item);
        that.APIData.quantity.push(tmp.length);
      });
    },
  },
  mounted() {
    this.findTotalTag();
    this.handler.$emit("init", this.options);
  },
};
</script>


<template>
  <v-container>
    <v-img
      src="../../public/img/search.svg"
      alt="Search"
      width="500px"
      class="mx-auto mb-10"
    ></v-img>
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="5">
        <v-form lazy-validation>
          <v-text-field
            v-model.trim="url"
            label="input url/uri"
            solo
            rounded
            required
            :rules="[empty]"
            @submit="check"
            append-icon="mdi-send"
            @click:append="check"
          ></v-text-field>
        </v-form>
      </v-col>
    </v-row>
    <h2 class="text-center accent--text text-h3">查詢結果</h2>
    <Chart :stringTag="totalTag" />
  </v-container>
</template>

<script>
import Chart from "../components/Chart.vue";
export default {
  components: { Chart },
  data() {
    return {
      url: "",
      totalTag: `<div class="header">
        <h1>完成率排序功能</h1>
        <div id="chart"></div>
    </div>

    <div class="content">
        <select class="choose">
            <option value="id">依照 id 編號排序(由1開始從上往下)</option>
            <option value="process">依照完課率排序(由最高到最低)</option>
        </select>
        <ul class="list"></ul>
        <div id="chartBar"></div>
        
    </div>`,
    };
  },
  computed: {
    empty() {
      return this.url.length <= 0 ? "required input something" : "";
    },
  },
  methods: {
    check() {
      console.log("hello");
    },
  },
};
</script>
<style scoped>
.result-color {
  color: #a960c8;
}
</style>
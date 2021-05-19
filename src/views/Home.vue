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
        <v-form ref="form" lazy-validation @submit.prevent>
          <v-text-field
            v-model.trim="url"
            label="input url/uri"
            solo
            rounded
            required
            :rules="[rules.empty, rules.removeRules]"
            append-icon="mdi-send"
            @click:append="sendCrawl"
          ></v-text-field>
        </v-form>
      </v-col>
    </v-row>
    <template v-if="returnResult === -1">{{ errorMessage }}</template>
    <template v-else-if="returnResult === 1">
      <h2 class="text-center accent--text text-h3">查詢結果</h2>
      <Chart :stringTag="totalTag" />
    </template>
  </v-container>
</template>

<script>
import Chart from "../components/Chart.vue";
export default {
  components: { Chart },
  data() {
    return {
      url: "",
      totalTag: ``,
      returnResult: 0,
      errorMessage: "",
    };
  },
  computed: {
    rules() {
      return {
        empty: (value) => !!value || "input is required",
        removeRules(value) {
          const regs = new RegExp(/[://]/);
          return regs.test(value) && "please remove agreement";
        },
      };
    },
  },
  methods: {
    async sendCrawl() {
      const response = await this.axios.post(
        "http://140.125.207.197:3000/crawler/",
        {
          URL: this.url,
        }
      );
      if (response.data === 1 || response.data === 0) {
        this.sendContent(this.url);
        
      }
    },
    responseMess() {
      if (this.returnResult === -1) {
        console.log(this.returnResult);
      }
    },
    async sendContent(url) {
      const response = await this.axios.get(
        `http://140.125.207.197:3000/crawler/${url}`
      );
      this.returnResult = 1;
      this.totalTag = `${response.data}`;
    },
  },
};
</script>
<style scoped>
.result-color {
  color: #a960c8;
}
</style>
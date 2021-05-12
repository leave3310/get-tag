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
    <Chart />
  </v-container>
</template>

<script>
import Chart from '../components/Chart.vue';
export default {
  components: { Chart },
  data() {
    return {
      url: "",
    };
  },
  computed: {
    empty() {
      return this.url.length <= 0 ? "required input something" : "";
    },
  },
  methods: {
    check() {
      console.log('hello')
    }
  },
};
</script>

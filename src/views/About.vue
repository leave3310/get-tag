<template>
  <v-container>
    <h2 class="mx-auto mb-2">組員</h2>
    <v-row>
      <v-col v-for="item in groupMember" :key="item.name" cols="12" md="6">
        <v-card
          max-width="700px"
          class="mx-auto"
          color="error"
          transition="slide-y-transition"
        >
          <div
            class="d-flex justify-md-space-between justify-center align-center flex-column flex-md-row"
          >
            <div>
              <v-card-title class="card-title-width mx-auto text-color">{{
                item.name
              }}</v-card-title>
              <v-card-subtitle class="text-color mx-auto card-text-width">{{
                item.subtitle
              }}</v-card-subtitle>
              <v-card-text
                class="mx-auto card-text-width text-color "
                v-html="item.description"
              ></v-card-text>
            </div>
            <v-avatar tile size="250" class="ma-3">
              <v-img :src="item.image"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      image: "",
      groupMember: [
        {
          name: "陳塏閎",
          description: "最近正在暴死抽卡還抽不到要的腳色",
          image: "../../img/members/leader.png",
        },
        {
          name: "鄭茗鴻",
          description:
            "我的名字叫做鄭茗鴻，就讀國立雲林科技大學，興趣是聽音樂和看小說，喜歡的運動是太極，比較擅長扇和劍",
          image: "../../img/members/member1.jpg",
        },
        {
          name: "鄭文愷",
          description: "沒什麼貢獻的躺分廢物",
          image: "../../img/members/member2.jpg",
        },
        {
          name: "王子軒",
          description: "f!4g{keyboard-based_d3v310p3r0_4nd_C7Fer}",
          image: "../../img/members/member3.gif",
        },
        {
          name: "王基德",
          subtitle: "孤高の宿命",
          description:
            "我叫耀德，是個學生<br> 閎 你好厲害 又考到機車駕照了  這顯然是監理站的疏失",
          image: "../../img/members/member4.png",
        },
      ],
    };
  },
  mounted() {
    console.log(this.image);
  },
};
</script>
<style scoped>
h2 {
  width: 50px;
}
.card-title-width {
  width: 100px;
}
.card-text-width{
  width: 250px;
}
.text-color {
  color: #ffe6e8;
}
</style>
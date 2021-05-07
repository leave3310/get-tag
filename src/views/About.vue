<template>
  <v-container>
    <h2 class="mx-auto mb-2">組員</h2>
    <v-row>
      <v-col v-for="item in groupMember" :key="item.name" cols="12" md="6">
        <v-card max-width="700px" min-height="325px" class="mx-auto">
          <div
            class="d-flex justify-md-space-between justify-center align-center flex-column flex-md-row"
          >
            <div>
              <v-card-title width="200px" class="card-title-width mx-auto">{{
                item.name
              }}</v-card-title>
              <v-card-text class="mx-auto card-text-width">{{
                item.description
              }}</v-card-text>
            </div>
            <v-avatar tile size="300" class="ma-3">
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
.card-text-width {
  width: 275px;
}
</style>
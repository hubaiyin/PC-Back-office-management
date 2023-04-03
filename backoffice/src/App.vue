<template>
  <div>
    <Header />
    <!-- 路由组件的出口 -->
    <router-view></router-view>
    <!-- 在home、search显示，在login、register是隐藏 -->
    <Footer v-show="$route.meta.isShow" />
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
export default {
  name: "App",
  components: { Header, Footer },
  mounted() {
    // 通知vuex发送请求，获取数据，存储于仓库中
    this.$store.dispatch("categoryList");
    this.$store.dispatch("getBannerList");
  },
};
</script>

<style lang="less" scoped>
</style>

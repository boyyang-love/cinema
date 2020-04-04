<template>
  <div id="detail" class="movein">
    <Header title="电影详情">
      <i class="iconfont icon-iconfontzuo" @click="back"></i>
    </Header>
    <div class="detail" :style="{backgroundColor:mes.backgroundColor}">
      <div class="pho">
        <img :src="pho" alt />
        <p>{{mes.nm}}</p>
        <p>{{mes.enm}}</p>
      </div>
      <div class="movieMessage">{{mes.dra}}</div>
    </div>
    <div class="video">
      <video :src="mes.vd" controls :poster="mes.videoImg"></video>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Detail",
  components: { Header },
  props: ["movieid"],
  data() {
    return {
      mes: "",
      pho: "",
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    
  },
  mounted() {
    this.$axios
      .get("/api/detailmovie?movieId=" + this.movieid)
      .then(res => {
        this.mes = res.data.data.detailMovie;
        this.pho = res.data.data.detailMovie.img.replace(/w\.h/, "125.175");
        // console.log(res.data.data.detailMovie.img);
        // let photos = res.data.data.detailMovie.photos;
        // this.change(photos);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
#detail {
  position: absolute;
  left: 0;
  top: 0;
  background-color: white;
  width: 100%;
  min-height: 100%;
  z-index: 5000;
  animation: move 3s;
}
.detail {
  display: flex;
  margin-top: 55px;
}
@keyframes move {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
.iconfont {
  position: absolute;
  left: 15px;
  font-size: 32px;
}
.pho {
  text-align: center;
  width: 100%;
  color: white;
  font-weight: bold;
}
.movieMessage {
  color: white;
  font-size: 17px;
}
.video{
  width: 100%;
}
.video video{
  width: 100%;
  height: 225px;
}
</style>
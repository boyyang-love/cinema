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
    <div class="imgShow">
      <ul>
        <li v-for="(item,i) in moviePiece" :key="i">
          <img :src="item" alt="">
        </li>
      </ul>
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
      photos: '',
      pho:'',
      moviePiece:[]
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    change(photos){
      for(let i = 0; i < photos.length ; i++){
        let  img = photos[i].replace("w.h",'370.250');
        // console.log(img);
        this.moviePiece.push(img);
        // console.log(this.moviePiece);
      }
    }
    
  },
  mounted() {
    // let that = this;
    this.$axios
      .get("/api/detailmovie?movieId=" + this.movieid)
      .then(res => {
        this.mes = res.data.data.detailMovie;
        this.pho = res.data.data.detailMovie.img.replace(/w\.h/, "125.175");
        // console.log(res.data.data.detailMovie.img);
        let photos = res.data.data.detailMovie.photos;
        this.change(photos);
        // console.log(imgs);
        // this.photos =imgs;
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
.imgShow ul {
  list-style: none;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
</style>
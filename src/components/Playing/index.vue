<template>
  <div id="isPlaying">
    <div class="wrap" ref="wrap">
      <div class="content">
        <ul>
          <li v-for="(item,i) in movies" :key="i">
            <div class="photo">
              <img :src="item.img | setWH(90.118)" alt="图片" @touchstart="hand(item.id)"/>
            </div>
            <div class="brief">
              <h3>{{item.nm}}</h3>
              <span>{{item.star}}</span>
              <span>{{"期待度: "+item.wish}}</span>
              <span>{{item.comingTitle}}</span>
            </div>
            <div class="sale">
              <button class="buy">购票</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Playing",
  data() {
    return {
      movies: "",
      precityid: -1
    };
  },
  methods: {
    hand(movieid){
      this.$router.push('/movie/detail/' + movieid)
    }
  },
  activated() {
    var cityid = this.$store.state.city.id;
    if (cityid === this.precityid) {
      return;
    }
    // console.log('123');
    this.$axios
      .get("/api/movieOnInfoList?cityId=" + cityid)
      .then(res => {
        // console.log(res.data.data.movieList)
        // console.log(cityid);
        this.precityid = cityid;
        this.movies = res.data.data.movieList;

        this.$nextTick(() => {
          new BScroll(this.$refs.wrap, {});
        });
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
#isPlaying {
  margin-top: 100px;
}
.wrap {
  width: 100%;
  height: 250px;
}
.content {
  width: 99%;
}
ul li {
  display: flex;
  height: 150px;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.photo {
  flex: 2;
}
.brief {
  display: flex;
  flex-direction: column;
  flex: 3;
}
.sale {
  flex: 1;
}
.buy {
  width: 50px;
  height: 30px;
  background-color: #9d2933;
  color: white;
  font-size: 18px;
}
</style>
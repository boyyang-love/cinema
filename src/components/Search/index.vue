<template>
  <div id="search">
    <div class="wrap" ref="wrap">
      <div class="content">
        <div class="searchbox">
          <input type="text" v-model="keywords" />
          <i class="iconfont icon-circularsearch">搜索</i>
        </div>
        <div class="result">
          <ul>
            <li v-for="(item,i) in movies" :key="i" @touchstart=hand(item)>
              <div class="photo">
                <img :src="item.img | setWH(90.118)" alt="图片" />
              </div>
              <div class="brief">
                <h3>{{item.nm}}</h3>
                <span>{{item.star}}</span>
                <span>{{"期待度: "+item.wish}}</span>
                <span>{{"上映时间：" +item.rt}}</span>
              </div>
              <div class="sale">
                <button class="buy">预购</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Search",
  data() {
    return {
      movies: "",
      keywords: ""
    };
  },
  methods: {
    cancelRequest() {
      if (typeof this.source === "function") {
        this.source("终止请求");
      }
    },
    hand(movieid){
      console.log(movieid);
    }
  },
  watch: {
    keywords(newval) {
      var that = this;
      // 取消上一次请求
      this.cancelRequest();
      this.$axios
        .get("/api/searchList?cityId=10&kw=" + newval, {
          cancelToken: new this.$axios.CancelToken(function(c) {
            that.source = c;
          })
        })
        .then(res => {
          // 在这里处理得到的数据
          //数据逻辑处理
          let movies = res.data.data.movies.list;
          that.movies = movies;
          that.$nextTick(() => {
            new BScroll(that.$refs.wrap, {});
          });
        })
        .catch(err => {
          if (this.$axios.isCancel(err)) {
            console.log("Rquest canceled", err.message); //请求如果被取消，这里是返回取消的message
          } else {
            //handle error
            console.log(err);
          }
        });
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
#search {
  margin-top: 120px;
}
.wrap {
  width: 100%;
  height: 200px;
}
.searchbox {
  width: 100%;
  height: 38px;
  border: 1px solid gold;
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchbox input {
  flex: 8;
  width: 70%;
  height: 35px;
  margin-left: 25px;
  border: none;
  outline: none;
}
.iconfont {
  flex: 2;
  height: 35px;
  font-size: 18px;
  color: red;
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
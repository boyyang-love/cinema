<template>
  <div id="coming">
      <div class="wrap" ref="wrap">
        <div class="content">
            <ul>
              <li v-for="(item,i) in movies" :key="i">
                <div class="photo">
                  <img :src="item.img | setWH(90.118)" alt="图片">
                </div>
                <div class="brief">
                  <h3>{{item.nm}}</h3>
                  <span>{{item.star}}</span>
                  <span>{{"期待度:   "+item.wish}}</span>
                  <span>{{"上映时间：" +item.comingTitle}}</span>
                </div>
                <div class="sale">
                  <button class="buy">预购</button>
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
    name:"Coming",
   data(){
      return{
        movies:'',
        precityid:-1
      }
    },
    methods:{},
    activated(){
      var cityid = this.$store.state.city.id;
      if(cityid === this.precityid){return;};
      this.$axios.get("/api/movieComingList?cityId="+cityid).then(res => {
        this.precityid = cityid;
        
        this.movies = res.data.data.comingList;
        
        this.$nextTick(()=>{
          new BScroll(this.$refs.wrap,{})
        }) 
      }).catch(err =>{
        console.log(err)
      })
    }
}
</script>

<style scoped>
   *{
    padding: 0;
    margin: 0;
  }
  #coming{
    margin-top: 100px;
  }
  .wrap{
    width: 100%;
    height: 250px;
  }
  .content{
    width: 99%;
  }
  ul li{
    display: flex;
    height: 150px;
    width: 100%;
    justify-content: center;
    align-items: center;
    
  }
  .photo{
    flex: 2;
  }
  .brief{
    display: flex;
    flex-direction: column;
    flex: 3;
  }
  .sale{
    flex: 1;
  }
  .buy{
    width: 50px;
    height: 30px;
    background-color:#9d2933;
    color: white;
    font-size: 18px;
    
  }
</style>
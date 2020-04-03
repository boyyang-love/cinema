<template>
  <div id="cinemaList" ref="cinemaList">
    <div class="cinemaList" > 
      <div class="head">
        <ul>
          <li>
            全城
            <i class="iconfont icon-down"></i>
          </li>
          <li>
            品牌
            <i class="iconfont icon-down"></i>
          </li>
          <li>
            特色
            <i class="iconfont icon-down"></i>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="cinemaName" v-for="(item,i) in cinemas" :key="i">
          <div class="position">
            <h3>{{item.nm}}</h3>
            <p>{{item.addr}}</p>
            <ul>
              <li v-for="(card,key) in item.tag" :key="key" v-show="card ===1 "> {{key |formatCard}}</li>
            </ul>
          </div>
          <div class="card">
            <p>{{item.distance}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: "CinemaList",
  data(){
    return{
      cinemas:'',
      precityid :-1
    }
  },
  activated() {
    var cityid = this.$store.state.city.id;
    console.log(cityid);
    if(this.precityid === cityid){return;}
    this.$axios
      .get("/api/cinemaList?cityId="+cityid)
      .then(res => {
        let cinemas = res.data.data.cinemas;
        this.cinemas = cinemas;
        this.precityid = cityid;
        this.$nextTick(()=>{
          new BScroll(this.$refs.cinemaList,{})
        })
       
      })
      .catch(err => {
        console.log(err)
      });
  },
  filters:{
    formatCard(key){
      let card = [
        {key :'allowRefund',value :'改签'},
        {key :'endorse' ,value:'退'},
        {key :'sell', value:"折扣卡"},
        {key :'snack', value:'小吃'}
      ];
      for(let i=0; i<card.length;i++){
        if(card[i].key === key){
          return card[i].value;
        }
      }
      return '';
    }
  }



};
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
#cinemaList {
  width: 100%;
  height: 200px;
  margin-top: 50px;
}
.cinemaList{
  width: 99%;
 
}
.head{
    width: 99%;
  }
  .content{
    width: 99%;
  }
.head ul {
  list-style: none;
  width: 100%;
  height: 50px;
  background-color: #c0ebd7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.head ul li {
  text-align: center;
  font-size: 20px;
  flex: 1;
}

.cinemaName {
  width: 100%;
  height: 200px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
}
.position {
  flex: 3;
}
.card {
  flex: 1;
}
.position ul {
  height: 25px;
  height: 55px;
  margin-top: 15px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
.position ul li {
  margin-left: 3px;
  width: 55px;
  height: 22px;
  border: 1px solid gold;
  text-align: center;
 
}
.position h3 {
  margin-top: 0px;
}
.position p {
  margin-top: 10px;
}
</style>
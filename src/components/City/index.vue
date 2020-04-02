<template>
<div>
  <div id="city" ref="city">
      <div class="city" >
         <span>{{mes}}</span>
        <div class="hotcity">
          <ul>
            <li v-for="(item,i) in CityHot" :key="i" @tap = hand(item.nm,item.id)>{{item.nm}}</li>
          </ul>
        </div>
        <div class="allcities" ref="sort">
            <div class="sort"  v-for="(item,i) in CityList" :key="i">
                <h2>{{item.index}}</h2>
                <ul >
                  <li v-for="(city,i) in item.list" :key="i" @tap=hand(city.nm,city.id)>{{city.nm}}</li>
                </ul>
            </div>
        </div>
      </div>
      <div class="scroll">
          <ul>
            <li v-for="(item,i) in CityList" :key="i" @touchstart="position(i)">{{item.index}}</li>
          </ul>
        </div>
  </div>
</div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    name:"City",
    data(){
      return{
        CityList:'',
        CityHot:'',
        mes:''
      }
    },
    mounted(){
      var CityList = window.localStorage.getItem('CityList');
      var CityHot = window.localStorage.getItem('CityHot');

      if(CityList && CityHot){
          this.CityList = JSON.parse(CityList);
          this.CityHot = JSON.parse(CityHot);
          console.log('数据已加载');
          this.$nextTick(() =>{
           let scroll = new BScroll(this.$refs.city,
           {
             tap:true,
             probeType:1
            });

           scroll.on('scroll',(pos)=>{
             if(pos.y > 30){this.mes = '正在更新中'}; 
           })

            scroll.on('touchEnd',(pos)=>{
              if (pos.y >30){this.mes = '更新成功'};
              setTimeout(() => {
                 this.mes = '';
              }, 2000);
            })

          })
          
      }else{

        this.$axios.get('/api/cityList').then(res => {
          console.log(res.data.data.cities);
          var cities = res.data.data.cities;
          // this.format(cities);
          var {citylist,hotcity} = this.format(cities);
          this.CityList = citylist;
          this.CityHot = hotcity;
          // 本地存储
          window.localStorage.setItem('CityList' , JSON.stringify(this.CityList));
          window.localStorage.setItem('CityHot' , JSON.stringify(this.CityHot));

          this.$nextTick(() =>{
           let scroll = new BScroll(this.$refs.city,{tap:true,probeType:1});

           scroll.on('scroll',(pos)=>{

             if(pos.y > 30){this.mes = '正在更新中'}; 
           })

            scroll.on('touchEnd',(pos)=>{
              if (pos.y >30){this.mes = '更新成功'};
              setTimeout(() => {
                 this.mes = '';
              }, 2000);
            })

          })
        }).catch(err => {
          console.log(err)
        });
       }

    },
    methods:{
      format(cities){
        let citylist = [];
        let hotcity = [];
        for(let i = 0; i < cities.length; i++){
          // [index:first,data[{id:1,nm:name,ishot:1}]]
          let first = cities[i].py.substring(0,1).toUpperCase();
          if(cities[i].isHot === 1){
            hotcity.push(cities[i]);
          }
          if(tocome(first)){
            citylist.push({index:first,list:[{id:cities[i].id,nm:cities[i].nm}]});
          }else{
            for(let j =0 ;j<citylist.length;j++){
              if(citylist[j].index === first){
                citylist[j].list.push({id:cities[i].id,nm:cities[i].nm});
              }
              
            }
            
          }
        }
        function tocome(first){
          for(let i = 0; i<citylist.length;i++){
            if(citylist[i].index === first){
              return false;
            }
          }
          return true;
        }
        citylist.sort((n1,n2)=>{
          if(n1.index < n2.index){
            return -1;
          }else if(n1.index > n2.index){
            return 1;
          }else{
            return 0;
          }
        })
        // this.CityList = citylist;
        // this.CityHot = hotcity;
        // console.log(citylist);
        // return {citylist,hotcity};
        return {
          citylist,
          hotcity
        };
        

      },
      position(i){
        let h2 = this.$refs.sort.getElementsByTagName("h2");
        document.documentElement.scrollTop = h2[i].offsetTop -98;
      },

      hand(nm,id){
        this.$store.commit('city/CITY_INFO',{nm,id});
        window.localStorage.setItem('nowNm',nm);
        window.localStorage.setItem('nowId',id);
        this.$router.push('/movie/playing');
      }
    }
}
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  #city{
    width: 100%;
    height: 500px;
    margin-top: 100px;
  }
  .city{
    width: 99%;
  }
  .hotcity{
    width: 99%;
    height: 55px;
    border-bottom: 1px solid #1685a9;
  }
  .allcities{
    width: 100%;
  }
  .hotcity ul{
    height: 54px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .hotcity ul li{
    color: #ff2d51;
    flex: 1;
  }
  .sort ul{
    width: 100%;
    background-color:#ffc773;
  }
  .sort ul li{
    width: 100%;
    height: 28px;
    font-size: 18px;
  }
  .scroll ul{
    list-style: none;
    position: fixed;
    right: 10px;
    top: 150px;
    z-index: 99999;
  }
</style>
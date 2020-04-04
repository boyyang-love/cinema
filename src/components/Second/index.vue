<template>
  <div id="second">
      <div class="second">
          <router-link tag="div" to="/movie/city" class="city">
              <h3>{{$store.state.city.nm}}</h3><span><i class="iconfont icon-down"></i></span>
          </router-link>
          <router-link tag="div" to="/movie/playing" class="isPlaying">
              <h3>正在热映</h3>
          </router-link>
          <router-link tag="div" to="/movie/coming" class="comingSoon">
              <h3>即将上映</h3>
          </router-link>
          <router-link tag="div" to="/movie/search" class="search">
              <i class="iconfont icon-soushuo1"></i>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name:"Second"
}
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .active{
        color: red;
        margin-top: 1px;
        border-bottom:2px solid red;
    }
    #second{
        margin-top: 50px;
    }
    .second{
        position: fixed;
        top: 50px;
        left: 0px;
        width: 100%;
        height: 45px;
        background-color: #a1afc9;
        border-bottom: 2px solid #d6ecf0;
        display: flex;
        z-index: 20;
    }
   
    .city{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex: 2;
    }
    .icon-down{
        margin-left: 10px;
    }
    .isPlaying{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 2;
    }
    .comingSoon{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 2;
    }
    .search{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
    .iconfont{
        font-size: 18px;
    }
    
</style>
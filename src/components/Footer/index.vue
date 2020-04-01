<template>
  <div id="footer">
      <div class="footer">
          <ul>
              <router-link tag="li" to="/movie">
                  <i class="iconfont icon-dianying"></i>
                  <h3>电影</h3>
              </router-link>
              <router-link tag="li" to="/cinema">
                  <i class="iconfont icon-dianyingyuanjulebulitang"></i>
                  <h3>影院</h3>
              </router-link>
              <router-link tag="li" to="/mine">
                  <i class="iconfont icon-wode1"></i>
                  <h3>我的</h3>
              </router-link>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .active{
        color: red;
        font-size: 22px;
    }
    #footer{
        width: 100%;
        position: fixed;
        left: 0px;
        bottom: 0px;
    }
    .footer{
        width: 100%;
        height: 50px;
        background-color: #a6acec;
    }
    .footer ul{
        width: 100%;
        list-style: none;
        display: flex;
    }
    .footer ul li{
        flex: 1;
        text-align: center;
    }
    h3{
        font-size: 16px;
    }
    .iconfont{
        font-size: 24px;
    }
</style>
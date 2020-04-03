<template>
  <div id="position">
      <div class="position">
          <h2>定位</h2>
          <p>成都</p>
          <div>
              <div>取消</div>
              <div>切换</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Position'
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .position{
        width: 200px;
        height: 140px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: white;
        box-shadow:  3px 3px 3px 3px #ccc; 
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -70px 0 0 -100px;
        text-align: center;

    }
    .positon h2{
        
        line-height: 40px;
        font-size: 18px;
    }
    .position p{
        text-align: center;
        line-height: 40px;
    }
    .position > div{
        display: flex;
        position: absolute;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #ccc;
    }
    .position > div div{
        flex: 1;
        text-align: center;
        line-height: 30px;
        border-right: 1px solid #ccc;
    }
    .position > div div:last-child{border: none;}
    
</style>
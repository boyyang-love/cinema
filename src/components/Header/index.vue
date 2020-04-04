<template>
  <div id="header">
      <div class="header">
       <slot/> <h4>{{title}}</h4>
      </div>
  </div>
</template>

<script>
export default {
    name:"Header",
    props:{
        title:{
            type:String,
            default:"boyyang"
        }
    }
}
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    #header{
        width: 100%;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 20;
    }
    .header{
        width: 100%;
        height: 50px;
        background-color: #00e0ff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h4{
        font-size: 26px;
        color: #e8ffe8;
    }
</style>
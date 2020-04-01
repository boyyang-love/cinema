<template>
  <div id="mine">
     <Header title="我的电影"/>
      
      <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
    name:'Mine',
    components:{
      Header,
      Footer
    }
}
</script>

<style>

</style>
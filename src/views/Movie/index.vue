<template>
    <div id="movie">
      <Header title="boyyang"/>
      <Second/>
      <keep-alive>
        <router-view/>
      </keep-alive> 
      <Footer/>
      <router-view name='detail'/>
    </div>
    
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Second from "@/components/Second";

export default {
    name:'Movie',
    components:{
      Header,
      Footer,
      Second,
    }
}
</script>

<style>

</style>
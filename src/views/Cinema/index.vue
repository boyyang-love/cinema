<template>
  <div id="cinema">
      <Header title="电影院"/>
        <CinemaList/>
      <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CinemaList from "@/components/CinemaList";
export default {
    name:"Cinema",
     components:{
      Header,
      Footer,
      CinemaList
    }
}
</script>

<style>

</style>
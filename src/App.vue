<template>
  <div id="app">
    <div id="content" class="content">
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
</style>

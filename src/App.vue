<template>
  <navbar></navbar>
  <router-view> </router-view>
  <Footer></Footer>
</template>
<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import ProductList from './components/ProductList.vue'

export default {
  components: {
    ProductList,
    Navbar,
    Footer,
  },
}
</script>

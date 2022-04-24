<template>
  <div>
    <!-- {{ process.env.APP_URL }} -->
    <Navbar />
    <Nuxt />
    <Footer />
    <FixedView />
  </div>
</template>
<script>
import Navbar from "~/components/layouts/Navbar.vue"
import Footer from "~/components/layouts/Footer.vue"
import FixedView from "~/components/layouts/FixedView.vue"

export default {
  components:{
    Navbar,
    Footer,
    FixedView
  },
  mounted(){
    // console.log(process.env.BASE_URL)
  }
}
</script>
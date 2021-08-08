<template>
  <Menu />
  <router-view />
  <Footer />
</template>
<script>
import Menu from "@/components/menu/Menu";
import Footer from "@/components/footer/Footer";
export default {
  components: { Footer, Menu },
};
</script>

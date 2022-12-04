<template>
   
<section class="row wrap product-list-wrapper">
   <product-list v-for="product in products" :key="product.id" :product="product"></product-list>

</section>
</template>

<style>
</style>

<script>
  import ProductList from './../components/ProductList.vue';
export default {
  name: 'HomePage',
  components: {
    ProductList
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
   
  },
  mounted() {
   this.$store.dispatch('getProducts');
  }
}
</script>

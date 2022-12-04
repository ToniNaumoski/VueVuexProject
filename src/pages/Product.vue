<template>
    <div class="row product-details-wrapper">
      <div class="col-12 col-md-6">
        <div class="row row justify-center">
        <img src="https://via.placeholder.com/850x500"/>
       </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="row column items-start">
             <h2>Product Title</h2>
             <h2>$13</h2>
             <div class="row">
               <input type="text">
               <q-btn color="primary" label="ADD TO CARD" />
             </div>
             <h4>Product description</h4>
        </div>
      </div>
    </div>
  
 </template>
 
 <style>
 </style>
 
 <script>
 export default {
   props: ["id"],
   mounted() {
       this.$store.dispatch('getProduct', this.id);
   },
  
   computed: {
      product() {
        return console.log(this.$store.state.product.data)
      }
   }


 };
 </script>
 
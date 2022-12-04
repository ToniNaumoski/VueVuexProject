<template>
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card bg-secondary text-white">
          <q-card-section class="row justify-center">
           <img :src="product.image" alt=""/>
          </q-card-section>
          <q-card-section class="row justify-center" >
            <h4>product id {{product.id}}</h4> 
           
          </q-card-section>
          <q-card-section class="row justify-center" >
            
           <h4>{{product.title}}</h4> 
          </q-card-section>
          <q-card-section class="row justify-center">
            {{product.price}}
          </q-card-section>
          <q-card-actions vertical>
            <q-btn flat @click="routerClick">ADD TO CARD</q-btn>
            <h5 style="text-align: center;">{{product.description}}</h5>
          </q-card-actions>
          <q-separator dark />
    
      
        </q-card>
    
  
        </div>
 </template>
 
 <style>
 </style>
 
 <script>
 export default {
   props: ['product'],

   name: 'ProductList',
   data () {
    return {
      id: this.product.id
    }
   },
   methods: {
  routerClick() {
   let link = `/product/${this.id}`
    this.$router.push(link);
  }
 }

 }
 </script>
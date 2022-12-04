<template>
  <header  class="row justify-between ">
    <nav>
        <q-btn color="primary" label="HOME" @click="$router.push('/')" />
        <q-btn color="primary" label="ABOUT" @click="$router.push('/about')" />
        <q-btn color="primary" label="PRODUCT" @click="$router.push('/product/3')" />
    </nav>
    <q-btn-dropdown color="primary" label="CARD">
      <mini-card/>
    </q-btn-dropdown>
  </header>
</template>
<script>
    import MiniCard from './MiniCard';

    export default {
        name: 'Header',
        components:{
            MiniCard
        }
    }
    </script>
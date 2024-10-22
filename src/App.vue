<script>
import AppHeader from './components/AppHeader.vue';
import {store} from './store.js';
import {router} from './router.js';
export default {
  components:{
    AppHeader
  },
  data () {
    return {
      store
    }
}
</script>

<template lang="">
  <div>
    <AppHeader :menu="store.menuItems" />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import './styles/generals.scss';
</style>

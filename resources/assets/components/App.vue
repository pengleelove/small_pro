<template>
    <div id="app-container">
        <layout-header></layout-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import LayoutHeader from './layouts/LayoutHeader'
  export default {
    name: 'HOME',
    components: {
       LayoutHeader
    },
    mounted () {
      console.log(44455)
    }
  }
</script>

<style scoped>

</style>

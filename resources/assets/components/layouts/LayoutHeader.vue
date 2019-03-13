<template>
    <section>
        <header class="container header clearfix">
            <ul class="nav nav-tabs bg-dark float-left" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="pill" href="#">
                        <router-link to="user">List of users</router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#">
                        <router-link to="role">List of roles</router-link>
                    </a>
                </li>

            </ul>
            <div class="btns float-right">
                <button type="button" class="btn btn-outline-danger" v-on:click="logout">logout</button>
            </div>

        </header>
    </section>

</template>

<script>
  export default {
    name: 'Header',
    methods: {
      logout () {
        let _this = this;
        this.$http.post('logout').then(function (res) {
          if (res.data.status) {
            _this.$message.success(res.data.msg)
            // _this.$route.redirect({
            //   path: '/'
            // })
            // _this.$router.replace({
            //   path: '/'
            // })
            window.location.reload();
          } else {
            _this.$message.warning(res.data.msg);
          }
        })
      }
    }
  }
</script>

<style scoped>
    .header {
        /*background-color : #1d643b;*/
    }
</style>

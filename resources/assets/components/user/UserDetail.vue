<template>
    <section>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">user detail</p>
            </header>
            <section class="modal-card-body">
                <p >Name:</p><p>{{rowData.name}}</p>
                <p >Email:</p><p>{{rowData.email}}</p>

            </section>
        </div>


    </section>
</template>
<script>
  export default {
    name: 'user-detail',
    props: {
      rowData: {
        type: Object
      }
    },
    data () {
      return {
        name: null,
        email: null,

      }
    },

    mounted () {
      this.name = this.rowData.name;
      this.email = this.rowData.email;
    },


  }
</script>
<style scoped lang="css">
    .modal-card {
        width: 640px;
    }
</style>

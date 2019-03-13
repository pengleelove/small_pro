<template>
    <div style="height: 48px; line-height: 48px">
        <button type="button" class="button btn-sm btn-success" @click="dataView">
            view
        </button>
        <button type="button" class="button btn-sm btn-danger" @click="dataDelete">delete</button>
    </div>
</template>

<script>
  export default {
    name: 'table-operation',
    props: {
      rowData: {
        type: Object
      },
      field: {
        type: String
      },
      index: {
        type: Number
      },
      type: {
        type: String
      }
    },
    methods: {
      dataView () {
        let params = {type: 'view', index: this.index, rowData: this.rowData}
        this.$emit('on-custom-comp', params)
      },
      dataDelete () {
        let params = {type: 'delete', index: this.index, rowData: this.rowData}
        this.$emit('on-custom-comp', params)
      }
    }
  }
</script>

<style scoped>

</style>

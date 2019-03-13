<template>
<section class="container">
    <v-table
            is-horizontal-resize
            style="width:50%;"
            :is-loading="isLoading"
            :height="500"
            :rowHeight="46"
            column-width-drag
            :vertical-resize-offset='60'
            :columns="tableConfig.columns"
            :table-data="tableConfig.tableData"
            row-hover-color="#eee"
            row-click-color="#edf7ff"
            :paging-index="(params.page-1)*params.page_size"
            @on-custom-comp="onCustomComp"
    >

    </v-table>
</section>
</template>

<script>
  export default {
    name: 'Role',
    data () {
      return {
        isLoading: false,
        params: {
          page: 1,
          page_size: 30
        },
        tableConfig: {
          multipleSort: false,
          tableData: [],
          columns: [
            {
              field: 'id',
              width: 160,
              title: 'ID',
              columnAlign: 'center',
              isFrozen: true,
              orderBy: 'asc'
            },
            {
              field: 'name',
              width: 180,
              title: 'Name',
              columnAlign: 'center',
              isFrozen: true
            },
            {field: 'guard_name',
              width: 260,
              title: 'Role',
              isFrozen: true},
          ]
        }

      }
    },
    methods: {
      onCustomComp () {

      }
    }
  }
</script>

<style scoped>

</style>

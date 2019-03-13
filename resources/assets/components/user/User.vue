<template>
    <section class="container">
        <v-table
                is-horizontal-resize
                style="width:100%"
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
                @sort-change="sortChange"
        >

        </v-table>
        <hr>
        <div class="mt20 mb20 bold"></div>
        <v-pagination
                @page-change="pageChange"
                @page-size-change="pageSizeChange"
                :total="total"
                :page-size="params.page_size"
                :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']">
        </v-pagination>
        <b-modal :active.sync="detailShow" :width="640" scroll="keep">
              <user-detail v-bind:row-data="rowData"></user-detail>
        </b-modal>
    </section>

</template>

<script>
    import UserDetail from './UserDetail'
  export default {
    name: 'User',
    components: {
      UserDetail,
    },
    data () {
      return {
        isLoading: false,
        params: {
          sort: 'asc',
          page: 1,
          page_size: 30
        },
        detailShow: false,
        total:0,
        rowData: null,
        tableConfig: {
          multipleSort: false,
          tableData: [],
          columns: [
            {
              field: 'id',
              title: 'ID',
              width: 100,
              columnAlign: 'center',
              isFrozen: true,
              isResize: true,
              orderBy: 'asc'
            },
            {
              field: 'name',
              title: 'Name',
              width: 100,
              columnAlign: 'center',
              isFrozen: true,
              isResize: true,
            },
            {
              field: 'email',
              title: 'Email',
              width: 100,
              isFrozen: true,
              isResize: true,
            },
            {
              field: 'email_verified_at',
              title: 'email Verified Time',
              width: 100,
              isFrozen: true,
              isResize: true,
            },
            {
              width: 100,
              title: 'Operation',
              isResize: true,
              columnAlign: 'center',
              componentName: 'table-operation'
            }
          ]
        }

      }
    },
    mounted () {
       this.getList();
    },
    methods: {
      pageChange (pageIndex) {
        this.params.page = pageIndex
        this.getList()
      },
      pageSizeChange (arg) {
        this.params.page = 1;
        this.params.page_size = arg
        this.getList()
      },
      onCustomComp (arg) {
        if (arg.type === 'view') {
          console.log(arg.type, this.detailShow);
          this.detailShow = !this.detailShow;

        } else {
          this.$message.warning('The current function has not been opened yet');
        //   delete data
        }
        this.rowData = arg.rowData;
      },
      sortChange (arg) {
        if (!_.isEmpty(arg.id)) {
           this.params.sort = arg.id;
        }
        this.getList();
      },

      getList() {
        let _this = this;
         this.$http.get('users', {params: this.params}).then(function (res) {
             _this.tableConfig.tableData = res.data.data;
             _this.total = res.data.meta.total;
         }).finally(function () {

         })
      }


    }
  }
</script>

<style scoped>

</style>

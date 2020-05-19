<template>
  <div class="index">
    <div class="table-content">
      <mp-table :title="title" :data="tableData"/>
    </div>
  </div>
</template>

<script>
  import MpTable from './../../components/MpTable'

  export default {
    name: "index",
    data() {
      return {
        title: [
          {
            type: 'selection',
            width: 40
          },
          {
            title: '应用名称',
            key: 'date'
          },
          {
            title: 'corpId',
            key: 'address'
          },
          {
            title: 'secretId',
            key: 'address'
          },
          {
            title: '应用类型',
            key: 'address'
          },
          {
            width: 36,
            headSlot: (h) => {
              return h('i', {class: 'el-icon-s-operation'})
            },
            render: (h, {row}) => {
              console.log(row);
              return h('span', 'row')
            }
          }
        ],
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      }
    },
    created() {
    },
    methods: {},
    components: {
      MpTable
    },
    computed: {},
    mounted() {
    },
    destroyed() {
    }
  }
</script>

<style scoped lang="scss">
  .index {
  }
</style>

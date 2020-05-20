<template>
  <div class="jingli">
    <div class="table-content">
      <mp-table
        :title="title"
        :ColumnType="index"
        :border="border"
        :data="tableData"
        :pageSize="pageSize"
        :total="total"
        :is-page="true"
      >
        <div class="slot_topbtn">
          <el-button class="system-tbar-button" icon="el-icon-refresh-right"
                     style="margin-right:10px;border:1px solid rgb(242, 234, 234)"
                     size="mini" circle
                     @click="onLoadData">
          </el-button>
          <div class="screen_Btn">筛选
            <i class="el-icon-arrow-down"></i>
          </div>
          <div class="screen_Btn">
            <i class="el-icon-plus"></i>
            添加
          </div>
          <div class="screen_Btn">修改
            <i class="el-icon-arrow-down"></i>
          </div>
          <div class="screen_Btn">
            <i class="el-icon-delete"></i>
            删除
          </div>
        </div>
      </mp-table>
    </div>
  </div>
</template>

<script>
  import MpTable from "../../components/MpTable";

  export default {
    name: "jingli",
    data() {
      return {
        index: 'index',
        border: false,
        total: 15,
        pageSize: 5,
        title: [
          {
            type: 'selection',
            align: 'center'
          },
          {
            title: '类型',
            key: 'date'
          },
          {
            title: 'Sim卡号',
            key: 'address'
          },
          {
            title: '机身序列号',
            key: 'address'
          },
          {
            title: '创建时间',
            key: 'date'
          },
          {
            title: '通信id',
            key: 'address'
          },
          {
            title: '备注信息',
            key: 'address'
          }
          // {
          //     headSlot: (h) => {
          //         return h('span', '#')
          //     },
          //     render: (h, {row}) => {
          //         // console.log(row);
          //         return h('span', 'row')
          //     }
          // }
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
    methods: {
      onLoadData() {
      }//点击刷新
    },
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
  .jingli {
    height: 100%;

    .table-content {
      height: inherit;

      .slot_topbtn {
        display: flex;
        justify-content: right;
        align-items: center;

        .system-tbar-button {
          border: #ddd;
          color: #606266;
          background: #ddd;
        }

        :hover {
          color: #3a8ee6;;
          background: #ecf5ff;
        }

        .screen_Btn {
          width: 74px;
          height: 28px;
          border-radius: 20px;
          background: #ddd;
          cursor: pointer;
          font-size: 12px;
          line-height: 28px;
          text-align: center;
          margin-right: 10px;
        }

        :hover {
          color: white;
          background: #3a8ee6;
          transition: all .4s;
        }
      }
    }
  }
</style>

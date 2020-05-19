<template>
  <div class="base_table">
    <el-table
      :data="data"
      highlight-current-row
      style="width: 100%"
      :border="border"
      :key="tableKey"
      :max-height="getMaxHeight"
      ref="MpTable"
    >
      <template v-for="(row, i) of title">
        <el-table-column
          :type="ColumnType"
          width="40"
          :fixed="row.fixed"
          :key="i"
          v-if="row.type === 'selection'"
        />
        <el-table-column
          v-else
          :key="i"
          :prop="row.key"
          :label="row.title"
          :width="row.width"
          :min-width="row.minWidth"
          :fixed="row.fixed"
          show-overflow-tooltip
        >
          <template slot="header" slot-scope="scope">
            <span v-if="!row.headSlot">{{scope.column.label}}</span>
            <render-dom
              v-else
              :render="row.headSlot"
              :index="scope.$index"
              :column="scope.column"
              :row="scope.column"
            />
          </template>
          <template slot-scope="scope">
            <span v-if="!row.render">{{ scope.row[row.key] }}</span>
            <render-dom
              v-else
              :render="row.render"
              :index="scope.$index"
              :column="scope.column"
              :row="scope.row"
            />
          </template>
        </el-table-column>
      </template>
    </el-table>

    <div class="base_table_page" v-if="isPage">
      <el-pagination
        small
        layout="prev, pager, next, total, sizes,  jumper"
        :page-size="pageSize"
        :total="total"
        :page-sizes="pageSizes"
        @size-change="sizeChange"
        @current-change="onPage"
        :current-page="page"
      />
    </div>
  </div>
</template>

<script>
  import renderDom from './render_dom'

  export default {
    name: 'MpTable',
    data() {
      return {
        tableKey: null,
        TableMaxHeight: null
      }
    },
    props: {
      title: {
        type: Array,
        default() {
          return []
        }
      }, // 表格 header
      data: {
        type: Array,
        default() {
          return []
        }
      }, // 表格数据
      ColumnType: {
        type: String,
        default: 'index'
      }, // 对应列的类型
      maxHeight: [String, Number], // 最大高度
      border: {
        type: Boolean,
        default: true
      }, // 表格边框
      page: {
        type: Number,
        default: 1
      }, // 当前页面序号
      pageSizes: {
        type: Array,
        default() {
          return [10, 20]
        }
      }, // 展示页面条数设置
      total: {
        type: Number,
        default: 0
      }, // 总条数
      pageSize: {
        type: Number,
        default: 10
      }, // 每页展示数
      isPage: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      data: {
        handler() {
          this.tableKey = new Date().getTime()
          if (this.$refs.MpTable) {
            this.$refs.MpTable.bodyWrapper.scrollTop = 0
          }
        },
        deep: true
      }
    },
    created() {
      this.tableKey = new Date().getTime()
    },
    methods: {
      putTableBodyWidth() {
        if (this.$refs.MpTable) {
          // el-table__body
          this.$nextTick(() => {
            let dom = this.$refs.MpTable.bodyWrapper.querySelector('.el-table__body')

            if (dom) {
              console.log(`${dom.getBoundingClientRect().width - 15}px`)
              setTimeout(() => {
                dom.style.width = `${dom.getBoundingClientRect().width - 15}px`
              }, 20)
            }
            // console.log(this.$refs.ldTable.bodyWrapper.querySelector('.el-table__body').getBoundingClientRect().width)
          })
        }
      },
      sizeChange(val) {
        this.$emit('on-size', val)
      },
      onPage(val) {
        this.$emit('on-page', val)
      }
    },
    components: {
      renderDom
    },
    computed: {
      getMaxHeight() {
        return this.maxHeight || this.TableMaxHeight
      }
    },
    mounted() {
      this.$nextTick(() => {
        if (!this.isPage) return false
        this.TableMaxHeight = this.$el.offsetHeight - 56
      })
    },
    destroyed() {
    }
  }
</script>

<style scoped lang="scss">
  .base_table {
    height: 100%;

    .base_table_page {
      height: 56px;
      display: flex;
      align-items: center;
    }
  }
</style>

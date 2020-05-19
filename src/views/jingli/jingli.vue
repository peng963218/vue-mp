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
            />
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
    .jingli {
    }
</style>

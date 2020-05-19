<template>
    <div class="nav-bar">
        <h2>{{$route.meta.title}}</h2>
        <div class="btn_Box">
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
    </div>
</template>

<script>
    export default {
        name: "nav-bar",
        data() {
            return {}
        },
        created() {
        },
        methods: {
            onLoadData() {
            }//点击刷新
        },
        components: {},
        computed: {},
        mounted() {
            console.log(this.$route);
        },
        destroyed() {
        }
    }
</script>

<style scoped lang="scss">
    .nav-bar {
        height: 100%;
        padding: 0 24px;
        line-height: 56px;
        background: #F1F1F1;
        border-bottom: 1px solid #ddd;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
            font-size: 18px;
        }

        .btn_Box {
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
</style>

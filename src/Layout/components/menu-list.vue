<template>
    <div class="menu-list">
        <el-menu
                :default-active="$route.name"
                class="el-menu-vertical-demo menu-li"
                @select="selectNavBar"
                background-color="#3C3C46"
                text-color="rgb(167, 177, 194)"
                active-text-color="#ffffff"
        >
            <template v-for="(item, i) of menuList">
                <el-menu-item
                        :key="i"
                        :index="item.name"
                        v-if="item.children && item.children.length === 1"
                >
                    <i :class="item.children[0].meta.icon"></i>
                    <span slot="title">{{item.children[0].meta.title}}</span>
                </el-menu-item>

                <el-submenu
                        v-else
                        :index="item.name"
                        :key="i"
                >
                    <template slot="title">
                        <i :class="item.meta.icon"></i>
                        <span>{{item.meta.title}}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for="(child, k) of item.children" :key="`${i}k${k}`" :index="child.name"
                                      class="group-li">
                            {{child.meta.title}}
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "menu-list",
        data() {
            return {
                alwaysShow: null
            }
        },
        props: {
            menuList: {
                type: Array,
                default() {
                    return {}
                }
            }
        },
        created() {
        },
        methods: {
            isNotChild(item) {
                let m = item.meta
            }, // 判断菜单子级是不是只有一项 或者 alwaysShow 为true 时展示父子级
            selectNavBar(name) {
                this.$router.push({name})
            }
        },
        components: {},
        computed: {},
        mounted() {
        },
        destroyed() {
        }
    }
</script>

<style scoped lang="scss">
    .menu-list {
        min-height: 100%;
        width: 220px;
        background: #3C3C46;
        position: relative;

        .menu-li {
            .el-menu-item {
                width: 220px;
            }

            .el-submenu {
                width: 220px;

                ul {
                    .el-menu-item-group {
                        ul {
                            .group-li {
                                padding-left: 60px !important;
                            }
                        }
                    }
                }
            }

            :hover {
                color: white !important;
            }
        }
    }
</style>

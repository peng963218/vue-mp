<template>
    <div class="bg-top">
        <div class="left">
            <div class="logo">
                <img src="" alt="">
            </div>
            <div class="NavContent">
                <ul>
                    <li
                            v-for="(item, i) of bgTop" :key="i" @click="$router.push({name: item.name})"
                            :class="[{['li-pitch-on']: $route.name === item.name}]">
                        {{item.meta.title}}
                        <span @click.stop="delBgTop(item)">×</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "bg-top",
        data() {
            return {}
        },
        created() {
        },
        methods: {
            ...mapActions(['delBgTop'])
        },
        components: {},
        computed: {
            ...mapGetters(['bgTop'])
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>

<style scoped lang="scss">
    .bg-top {
        width: 100%;
        height: 60px;
        background: #3a8ee6;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            width: 90%;
            height: 100%;
            background: #3a8ee6;
            display: flex;

            .logo {
                width: 320px;
                height: 100%;
                background: #3a8ee6;
            }

            .NavContent {
                height: 100%;
                line-height: 60px;

                ul {
                    display: flex;

                    li {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        padding: 0px 20px;
                        font-size: 16px;
                        cursor: pointer;
                        color: #ffffff;


                        span {
                            display: inline-block;
                            margin-left: 10px;
                            width: 15px;
                            height: 15px;
                            border-radius: 50%;
                            font-size: 16px;
                            color: #ffffff;
                            line-height: 15px;
                            text-align: center;
                        }

                        :hover {
                            color: #3a8ee6;
                            background-color: rgba(255, 255, 255, 0.7);
                            transition: all .4s;
                        }
                    }

                    li.li-pitch-on {
                        background-color: rgba(0, 0, 0, 0.2);
                    }

                    :hover {
                        background-color: rgba(0, 0, 0, 0.2);
                        transition: all .4s;
                    }
                }
            }
        }
    }
</style>

<template>
  <div class="mp_layout">
    <div class="bg-top">
      <bgTop/>
    </div>
    <div class="Main-content clearfix">
      <div class="menu-left fl">
        <MenuList :menu-list="MenuList"/>
      </div>
      <div class="template-right fr">
        <div class="nav-bar">
          <NavBar/>
        </div>
        <div class="mp_content">
          <router-view/>
        </div>
        <!-- <div class="pages_footer">
             <PagesFooter/>
         </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import bgTop from './components/bg-top'
  import MenuList from './components/menu-list'
  import NavBar from './components/nav-bar'
  import PagesFooter from './components/Pages-footer'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "Layout",
    data() {
      return {}
    },
    watch: {
      '$route'(to) {
        this.setBgTop({name: to.name, meta: to.meta})
      }
    },
    created() {
      // this.routerName = this.setBgTop.name //一进项目的时候就赋值，这样就不会一进项目出现菜单列表空白
    },
    methods: {
      ...mapActions(['setBgTop'])
    },
    components: {
      bgTop,
      MenuList,
      NavBar,
      PagesFooter
    },
    computed: {
      ...mapGetters(['MenuList'])
    },
    mounted() {
      let to = this.$route
      this.setBgTop({name: to.name, meta: to.meta})
    },
    destroyed() {
    }
  }
</script>

<style scoped lang="scss">
  .mp_layout {
    width: 100%;
    height: 100vh;
    background: #F4F4F4;

    .bg-top {
      position: relative;
      z-index: 1000;
      height: 60px;
      /*border-bottom: 1px solid #e8e8e8;*/
    }

    .Main-content {
      width: 100%;
      height: calc(100vh - 60px);

      .menu-left {
        background-color: #3C3C46;
        height: 100%;
        width: 220px;
      }

      .template-right {
        height: 100%;
        width: calc(100% - 220px);
        background-color: #ffffff;

        .nav-bar {
          height: 56px;
        }

        .mp_content {
          height: calc(100% - 56px);
          overflow: auto;
        }

        /*.pages_footer {
          height: 56px;
        }*/

      }
    }
  }
</style>

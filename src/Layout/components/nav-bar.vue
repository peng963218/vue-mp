<template>
  <div class="nav-bar">
    <h2>{{$route.meta.title}}</h2>
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
    methods: {},
    components: {},
    computed: {},
    mounted() {
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
  }
</style>

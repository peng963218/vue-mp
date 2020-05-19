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
      console.log(this.$route);
    },
    destroyed() {
    }
  }
</script>

<style scoped lang="scss">
  .nav-bar {
    min-height: 56px;
    padding: 0 24px;
    line-height: 56px;
    background: #f2f3f3;
    border-bottom: 1px solid #ddd;
    width: 100%;

    h2 {
      font-size: 18px;
    }
  }
</style>

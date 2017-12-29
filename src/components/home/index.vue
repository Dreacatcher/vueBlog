<template>
	<div id="app">
		<!--头部导航-->
    <section class="FtbMain">
      <header>
        <Head></Head>
      </header>
      <MainCont v-if="ishome"></MainCont>
      <transition v-if="!ishome">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </section>
	</div>
</template>

<script>
import Head from 'appHead'
import MainCont from 'mainCont'
export default {
  name: 'app',
  data: function() {
    return {
      show: true,
      ishome: false
    }
  },
  created() {},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.path === '/') {
        vm.ishome = true
      } else {
        vm.ishome = false
      }
    })
  },
  methods: {},
  components: {
    Head,
    MainCont
  }
}
</script>
<style type="text/scss" lang="scss">
@import '../../style/_include/_all';
/*body*/
.FtbMain {
  .mainWp {
    max-width: 1200px;
    margin: 0 auto;
    .itemWp {
      li {
        font-size: px2rem(12);
      }
    }
  }
  @media only screen and (max-device-width: 500px) {
    .mainWp {
      .el-col-18 {
        width: 90%;
        margin-left: 5%;
      }
      .el-col-6 {
        display: none;
      }
    }
  }
}
</style>


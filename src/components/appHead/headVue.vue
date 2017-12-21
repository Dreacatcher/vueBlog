<template>
	<!--头部导航-->
  <section class="FtbMain">
    <header>
      <section class="headerWp"> 
        <transition name="slide-fade"><h2 v-if="show">FTB~智慧空间</h2></transition>
        <nav class="navWpMain">
           <ul class="navWp">
            <li><router-link :to="{path:'/'}">首页</router-link></li>
            <li><router-link :to="{path:'/'}">技术博客</router-link></li>
            <li><router-link :to="{path:'/'}">慢生活</router-link></li>
          </ul>
          <ul class="navWp">
            <li><router-link :to="{path:'/'}">随笔</router-link></li>
            <li><router-link :to="{path:'/'}">关于我</router-link></li>
            <li><router-link :to="{path:'/'}">留言</router-link></li>
          </ul>
        </nav>
        <nav class="navWpMain2">
          <ul class="navWp">
            <li><router-link :to="{path:'/'}">首页</router-link></li>
            <li><router-link :to="{path:'/'}">技术博客</router-link></li>
            <li><router-link :to="{path:'/'}">慢生活</router-link></li>
            <li><router-link :to="{path:'/'}">随笔</router-link></li>
            <li><router-link :to="{path:'/'}">关于我</router-link></li>
            <li><router-link :to="{path:'/'}">留言</router-link></li>
          </ul>
        </nav>
      </section>
    </header>
  </section>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      show: true
    }
  },
  methods: {}
}
</script>
<style type="text/scss" lang="scss">
@import '../../style/_include/_all';
/*body*/
.FtbMain {
  max-width: 1200px;
  margin: 0 auto;
  header {
    max-width: 1200px;
    padding: px2rem(20);
    margin: 0 auto;
    height: auto;
    margin: 0 auto;
    background: $pageBgc;
    .headerWp {
      background: $white;
      padding: px2rem(15) 0;
    }
    .slide-fade-enter-active {
      transition: all 0.3s ease;
      -webkit-transform: translatex(0);
    }
    .slide-fade-enter,
    .slide-fade-leave-to {
      transform: translateX(10px);
      opacity: 0;
    }

    @media only screen and (max-device-width: 500px) {
      .FtbMain{
        font-size: px2rem(14);
      }
      .navWpMain {
        display: block;
      }
      .navWpMain2 {
        display: none;
      }
      .headerWp{
        h2 {
          font-size: px2rem(14);
          color: $fontColor;
          text-align: left;
          padding-left: px2rem(10);
        }
      }
      .navWpMain {
        .navWp {
          width: 100%;
          display: flex;
          padding: 0 px2rem(5);
          font-size: px2rem(16);
          li {
            width: 30%;
            padding: px2rem(10);
            font-size: px2rem(12);
            color: $fontColor;
          }
        }
      }
    }
    @media (min-device-width: 500px) and (max-device-width: 2000px) {
      .navWpMain {
        display: none;
      }
      .navWpMain2 {
        display: block;
      }
      .headerWp{
        h2 {
          font-size: px2rem(20);
          color: $fontColor;
          text-align: left;
          padding-left: px2rem(10);
        }
      }
      .FtbMain {
        font-size: px2rem(16);
      }
      .navWpMain2 {
        .navWp {
          width: 100%;
          padding: 0 px2rem(5);
          display: flex;
          font-size: px2rem(16);
          li {
            display: inline;
            padding: px2rem(10);
            font-size: px2rem(16);
          }
          li:first-child {
            padding: px2rem(10) px2rem(5) px2rem(10) 0;
          }
        }
      }
    }
  }
}
</style>


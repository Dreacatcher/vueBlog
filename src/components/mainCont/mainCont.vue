<template>
  <section class="mainWp">
    <el-row :gutter="20">
      <el-col :span="19">
        <el-card class="box-card" v-for="o in 4" :key="o" >
          <article>
            <div class="text itemWp">
              <ul>
                <li class="item" >
                  <h3 class="articleTt">Webstorm Setting</h3>
                  <p class="pubTime">
                    <span class="icon-file-video"></span>
                    <em class="pubTimeInfo">2017-12-18 </em>
                  </p>
                  <p class="cont">Webstorm SettingWebstorm SettingWebstorm SettingWebstorm SettingWebstorm SettingWebstorm SettingWebstorm SettingWebstorm SettingWebstorm SettingWebstorm SettingWebstorm Setting ...</p>
         
                  <a class="articleLink" href="">阅读全文{{o}} >></a>
                </li>
              </ul>
            </div>
          </article>
        </el-card>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div class="text itemWp">
              <ul>
                <li class="item" >
                  <p class="userIcon"><img src="" alt=""></p>
                  <b class="name">FTB</b>
                  <span class="info">前端码农</span>
                </li>
                <li class="tagWp">
                  <p class="tag">
                    <b>1000</b>
                    <span>日志</span>
                  </p>
                   <p>
                    <b>33</b>
                    <span>标签</span>
                  </p>
                   <p>
                    <b>1000</b>
                    <span>浏览量</span>
                  </p>
                  </li>
              </ul>
              <ul class="contactTagWp">
                <li class="contactTag">
                  <span class="icon-package"></span>
                  <em class="info">知乎</em>
                </li>
                <li class="contactTag">
                  <span class="icon-package"></span>
                  <em class="info">知乎</em>
                </li>
                <li class="contactTag">
                  <span class="icon-package"></span>
                  <em class="info">知乎</em>
                </li>
                <li class="contactTag">
                  <span class="icon-package"></span>
                  <em class="info">知乎</em>
                </li>   
              </ul>
              <ul class="links">
                <li> <h2>友情链接</h2></li>
                <li><a href="www.baidu.com">xz</a></li>
              </ul>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
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
.mainWp {
  padding: px2rem(20);
  // 左边内容
  .box-card{
    margin-bottom: px2rem(18);
  }

  article{
    margin-bottom: px2rem(30);
    .articleTt{
      font-size: px2rem(20);
      padding-bottom: px2rem(10) 0;
    }
    .pubTime{
      padding: px2rem(5) 0;
    }
    .cont{
      line-height: px2rem(20);
      margin-bottom: px2rem(30);
    }
    .articleLink{
      border: 2px solid $black;
      background: $white;
      padding: px2rem(4);
      &:hover{
        background:$black;
        color: $white;
        padding: px2rem(4);
      }
    }
  }
  // 右边个人信息
  .itemWp {
    .userIcon {
      width: px2rem(80);
      height: px2rem(80);
      display: block;
      overflow: hidden;
      border-radius: 50%;
      background: $black;
      margin: 0 auto;
      img {
        width: px2rem(80);
        height: px2rem(80);
        display: block;
        border: none;
      }
    }
    .name,
    .info {
      display: block;
      text-align: center;
      line-height: px2rem(20);
    }
    .tagWp {
      display: flex;
      justify-content: flex-start;
      p {
        width: 100%;
        border-right: 1px solid $mainBgb;
      }
      p:last-child {
        border-right: none;
      }
    }

    .tag {
      font-size: px2rem(12);
      b,
      span {
        display: block;
        text-align: center;
      }
    }
    .contactTagWp {
      width: 100%;
      overflow: hidden;
      clear: both;
      padding: px2rem(10) 0;
      span{
        padding-right: px2rem(4);
      }
      span,em{
        display: inline;
      }
    }
    .contactTag {
      width: 50%;
      display: inline-block;
      float: left;
      padding: px2rem(4) 0;
      span {
        display: inline;
      }
    }
  }
  .links{
    padding: px2rem(4) 0;
    border-top: 1px solid $mainBgb;
    h2{
      font-size: px2rem(12);
      font-style: normal;
      text-align: left;
    }
    li{
      padding: px2rem(4) 0;
      text-align: left;
      a{
        color: $aFontColor;
      }
    }
  }
}
</style>


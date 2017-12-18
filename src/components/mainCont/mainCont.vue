<template>
  <section class="mainWp">
    <el-row :gutter="20">
      <el-col :span="18">
        <el-card class="box-card">
          <article>
            <div class="text itemWp">
              <ul>
                <li class="item" v-for="o in 4" :key="o" >
                  {{'列表内容 ' + o }}
                </li>
              </ul>
            </div>
          </article>
        </el-card>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div class="text itemWp">
              <ul>
                <li class="item" v-for="o in 4" :key="o" >
                  {{'列表内容 ' + o }}
                </li>
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
    .mainWp{
      .el-col-18{
        width: 90%;
        margin-left: 5%;
      }
      .el-col-6{
        display: none;
      }
    }
  }
</style>


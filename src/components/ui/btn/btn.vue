<template>
  <transition name="fade">
    <span class="online-apply-link">{{btnText}}</span>
  </transition>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String
    }
  }
}
</script>

<style type="text/scss" lang="scss">
@import '../../../style/_include/_all.scss';
.online-apply-link {
  width: 100%;
  height: px2rem(50);
  line-height: px2rem(50);
  font-size: px2rem(17);
  color: $white;
  font-weight: bold;
  text-align: center;
  background: $lightGreen;
  border-radius: px2rem(8);
  display: inline-block;
  &:active {
    background: $deepGreen;
  }
}
</style>

<template>
  <div id="userLayout">
    <div id="container">
      <div class="top">
        <img
          src="~@/assets/logo.png"
          class="logo"
          alt="logo"
        >
        <span>Logo</span>
      </div>

      <route-view></route-view>

      <div class="footer">
        <div class="links">
          <a href="#">帮助</a>
          <a href="#">隐私</a>
          <a href="#">条款</a>
        </div>
        <div class="copyright">
          Copyright &copy; 2022
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RouteView from "@/components/layouts/RouteView.vue"
export default {
  name: "UserLayout",
  components: {
    RouteView
  }
};
</script>

<style scoped lang="less">
#userLayout {
  height: 100%;
  #container {
    width: 100%;
    min-height: 100%;
    padding: 110px 0 144px;
    background-size: 100%;
    .top {
      text-align: center;
      .logo {
        height: 45px;
        vertical-align: bottom;
        margin-right: 16px;
        border-style: none;
      }
      span {
        font-size: 33px;
        color: rgba(0, 0, 0, 0.85);
      }
    }
    .footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 0 16px;
      margin: 48px 0 24px;
      text-align: center;
      .links {
        margin-bottom: 8px;
        font-size: 14px;
        a {
          color: rgba(0, 0, 0, 0.45);
          &:not(:last-child) {
            margin-right: 40px;
          }
        }
      }
      .copyright {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
    }
  }
}
</style>
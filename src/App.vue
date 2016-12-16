<template>
  <div>
    <!-- pass data to component with props -->
    <v-header :seller="seller"></v-header>
    <div class="tab">
        <div class="tab-item"><a href="#" v-link="{path:'/goods'}">商品</a></div>
        <div class="tab-item"><a href="#" v-link="{path:'/ratings'}">评价</a></div>
        <div class="tab-item"><a href="#" v-link="{path:'/seller'}">商家</a></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
import vHeader from './components/header/header'

// define ok status const
const ERR_OK = 0

export default {
  data () {
    return {
      seller: {}
    }
  },
  created () {
    // send request
    this.$http.get('/api/seller').then((res) => {
      res = res.body // get body
      console.log(res.data)

      if (res.errno === ERR_OK) {
        this.seller = res.data
      }
    })
  },
  components: {
    vHeader
  }
}
</script>

<style lang="scss">
@import url('./common/sass/index.scss');

  .tab {
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
    .tab-item{
        background: white;
        text-align: center;
        flex: 1;
        border-bottom: 1px solid gray;
    }

    .tab-item a{
        display: block;
        color:red;
    }

    .tab-item .active{
        color:yellow;
        background: green;
    }
</style>
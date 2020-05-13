<!--
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\views\Book\Bookinfo.vue
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-12 14:41:54
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-12 14:50:20
 -->
<template>
  <div class="bookinfo">
    {{name}}
  </div>
</template>
<script>

export default {
  name:"BookInfo",
  data(){
    return{
      name:"BookInfo"
    }
  },
  created(){
    this.$store.dispatch("")
    this.initData(this.$route.params.bookid);
  },
  methods:{
    async initData(bookId){
      let res = await this.axios.post("/hwyc/book/detail" , {bookId})
      console.log(res);
    }
  }
}
</script>
<style lang="less">

</style>

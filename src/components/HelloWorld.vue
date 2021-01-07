<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-01-07 15:18:22
 * @LastEditors: cy
 * @LastEditTime: 2021-01-07 15:47:29
-->
<template>
  <div class="hello">
    <live-player></live-player>
  </div>
</template>

<script>
import Player from "../Player.vue";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: { 
    LivePlayer: Player
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

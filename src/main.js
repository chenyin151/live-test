/*
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-01-07 15:18:22
 * @LastEditors: cy
 * @LastEditTime: 2021-01-07 15:27:46
 */
import Vue from 'vue'
import App from './App.vue'
import VideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';
import 'vue-video-player/src/custom-theme.css';
import videojs from 'video.js';
import 'videojs-flash';
import 'videojs-contrib-hls'

Vue.use(VideoPlayer);
window.videojs = videojs;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

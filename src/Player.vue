<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-01-07 15:34:25
 * @LastEditors: cy
 * @LastEditTime: 2021-01-07 15:50:03
-->
<template>
    <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
</template>

<script>
    export default {
        computed: {
            playerOptions() {
                let option = {
                    overNative: true,
                    autoplay: true,
                    controls: false,
                    techOrder: ['flash', 'html5'],
                    sourceOrder: true, 
                    muted: true,
                    sources: [
                        { 
                            type: 'rtmp/mp4',
                            src: 'rtmp://192.168.0.100:1935/mylive/light_live'
                        },
                        { 
                            withCredentials: false,
                            type: 'application/x-mpegURL',
                            src: 'http://192.168.0.100:8000/hls/h5_light_live.m3u8'
                        }
                    ],
                };
                Object.assign(option, {
                    controlBar: {
                        timeDivider: false,
                        durationDisplay: false
                    },
                    flash: { hls: { withCredentials: false }},
                    html5: { hls: { withCredentials: false }},
                    techOrder: ['flash']
                })

                Object.assign(option, {
                    language: 'zh-CN',
                    fruid: true,
                    preload: 'auto',
                    notSupportedMessage: 'xxx',
                    sources: option.sources.filter(item => item.type && item.src)
                })
                return option;
            }
        },        
    }
</script>

<style lang="scss" scoped>

</style>

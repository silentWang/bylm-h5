<template>
    <div class="ip_main">
        <div class="ip_title">赶快联系我们领取福利吧</div>
        <img class="ip_image" src="./assets/logo.png" @click="download">
        <div>微信客服:zzhsmj888</div>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
    methods:{
        download(){
            let url = window.location.origin + '/files/bylm.apk'
            window.open(url);
        }
    }
}
</script>
<style scoped>
    .ip_main {
        font-size: 36px;
        margin: 30px 0;
    }
    .ip_title {
        font-size: 40px;
        padding: 10px 0;
        font-weight: bold;
    }
    .ip_image {
        cursor: pointer;
    }
</style>
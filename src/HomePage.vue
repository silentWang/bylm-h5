<template>
    <div class="home_main">
        <div class="home_background">
            <img class="firstbg" src="./assets/top_bg.jpg">
            <img class="secondbg" src="./assets/top_bg_980.jpg">
        </div>
        <div class="home_logo_icon">{{logo}}</div>
        <div class="home_download">
            <div class="detail">
                <img class="app_icon" src="./assets/logo.png">
                <div class="description">
                    <h3>{{logo}}</h3>
                    <div>{{desc}}</div>
                </div>
            </div>
            <!-- <a :href="dowloadAppUrl" class="downbtn"></a> -->
        </div>
        <!-- <div class="home_qrcode">
            <img src="./assets/imgvcode.png">
            <div>{{downDesc}}</div>
        </div> -->
        <router-view></router-view>
        <right-inc-comp></right-inc-comp>
    </div>
</template>
<script>
import RightIncComp from './components/RightIncComp.vue'
export default {
    setup() {
        
    },
    components:{
        RightIncComp
    },
    data(){
        return {
            logo:'6677捕鱼',
            desc:'能赚话费的捕鱼',
            downDesc:'扫码下载手机版',
            dowloadAppUrl:'/files/bylm.apk'
        }
    }
}
</script>
<style scoped>
    .home_main {
        width: 100%;
    }
    .home_background {
        position: relative;
        width: 100%;
        min-width: 950px;
        height: 517px;
        text-align: center;
        overflow: hidden;
    }
    .firstbg {
        left: 0;
        top: 0;
    }
    .secondbg {
        position: absolute;
        top: 0;
        left: 458px;
    }
    .home_logo_icon {
        position: fixed;
        left: 20%;
        top: 0px;
        width: 100px;
        background: #fff;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        font-size: 20px;
        padding: 15px 5px 15px 5px;
        font-weight: bold;
        color: rgb(255, 144, 0);
        font-style:oblique;
        cursor: pointer;
    }
    .home_download {
        display: flex;
        justify-content: left;
        flex-direction: column;
        width: 360px;
        position: absolute;
        top: 100px;
        right: 80px;
    }
    .home_download .app_icon {
        width: 120px;
    }
    .home_download .detail {
        text-align: left;
        display: flex;
        flex-direction: row;
    }
    .home_download .description {
        margin-left: 10px;
        padding-top: 10px;
        color: rgb(11, 44, 94);
    }
    .description h3 {
        font-size: 36px;
    }
    .description div {
        padding-top: 10px;
        font-size: 22px;
        color: rgb(19, 89, 146);
    }
    .home_download .downbtn {
        width: 350px;
        height: 80px;
        margin-top: 40px;
        background: url("./assets/download.png");
        background-position: 0px 0%;
        cursor: pointer;
    }
    .home_download .downbtn:hover {
        background-position: 0px 49.5%;
    }
    .home_qrcode {
        width: 120px;
        text-align: center;
        position: fixed;
        right: 50px;
        bottom: 10vh;
    }
    .home_qrcode img {
        width: 100px;
    }
</style>
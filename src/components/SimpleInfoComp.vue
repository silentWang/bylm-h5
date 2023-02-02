<template>
    <div class="si_main">
        <img src=".././assets/logo.png">
        <div class="si_info">
            <h3>{{appName}}</h3>
            <span>{{desc}}</span>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
    data(){
        return {
            appName:'6677捕鱼',
            desc:'形象可爱，威力不减！6677捕鱼给你特别的捕鱼乐趣。卡通设计，真人美女语音，美人鱼人见人爱！全新大招boss，祝你打遍海底世界无敌手。更有黄金大奖池玩法，你离大奖就是那么近！'
        }
    }
}
</script>

<style scoped>
    .si_main {
        width: 320px;
        text-align: center;
        margin: 0 auto;
        margin-top: 100px;
    }
    .si_info {
        width: 320px;
    }
    .si_info h3 {
        font-size: 32px;
        display: block;
        margin: 10px 0 10px 0;
    }
    .si_info span {
        word-wrap: break-word;
        text-align: left;
    }
</style>
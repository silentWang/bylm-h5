<template>
    <div class="dl_main">
        <h3>游戏特点</h3>
        <div class="dl_detail">
            <div class="dl_item" v-for="(item,index) in details" :key="index">
                <img :src="item">
            </div>
        </div>
    </div>
</template>
<script>
import Image1 from '.././assets/detail_1.jpg'
import Image2 from '.././assets/detail_2.jpg'
import Image3 from '.././assets/detail_3.jpg'
import Image4 from '.././assets/detail_4.jpg'
export default {
    setup() {
        
    },
    data(){
        return {
            details:[]
        }
    },
    mounted(){
        this.details = [Image1,Image2,Image3,Image4];
    }
}
</script>

<style scoped>
    .dl_main {
        background: #f2f4fb;
        width: 100%;
        padding: 40px 0 40px 0;
        margin: 40px 0 0 0;
    }
    .dl_detail {
        display: flex;
        margin-top: 30px;
        justify-content: center;
    }
    .dl_item {
        margin: 0 10px;
    }
</style>
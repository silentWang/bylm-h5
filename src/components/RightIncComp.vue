<template>
    <div class="ri_main">
        <div class="ri_links">
            <a v-for="(item,index) in maps" 
                :key="index" 
                :class="index==maps.length - 1 ? 'ri_links_a_last':'ri_links_a'"
                @click="gotoView(item.route)"
                >{{item.name}}</a>
        </div>
        <div class="ri_right">{{desc}}</div>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
    data(){
        return {
            maps:[],
            desc:'金华畅游企业管理咨询有限公司 版权所有 Copyright©2017-2023 新广初审[2017]'
        }
    },
    mounted(){
        this.maps = [
            {route:'/info',name:'关于我们'},
            {route:'/info',name:'联系我们'},
        ]
    },
    methods:{
        gotoView(route){
            this.$router.push(route)
        }
    }
}
</script>
<style scoped>
    .ri_main {
        background: #F0F0F0;
        border-top: 1px solid #999;
        padding-bottom: 25px;
    }
    .ri_links {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .ri_links_a {
        display: block;
        width: 80px;
        height: 20px;
        cursor: pointer;
        border-right: 1px solid #333;
    }
    .ri_links_a_last {
        display: block;
        width: 80px;
        height: 20px;
        cursor: pointer;
    }
    .ri_right {
        width: 780px;
        line-height: 32px;
        margin: 0 auto;
        margin-top: 20px;
        word-break: break-all;
    }
</style>
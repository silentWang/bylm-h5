<template>
    <div>
        <simple-info-comp></simple-info-comp>
        <detail-info-comp></detail-info-comp>
    </div>
</template>
<script>
import SimpleInfoComp from './components/SimpleInfoComp.vue'
import DetailInfoComp from './components/DetailInfoComp.vue'
export default {
    setup() {
        
    },
    components:{
        SimpleInfoComp,
        DetailInfoComp,
    },
}
</script>
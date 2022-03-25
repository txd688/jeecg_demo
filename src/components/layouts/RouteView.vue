<template>
    <div class="main">
        <keep-alive>
            <router-view v-if="!!keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!keepAlive"></router-view>
    </div>
</template>
<script>
export default {
    name:'RouteView',
    computed:{
        keepAlive(){
            return this.$route.meta.keepAlive;
        }
    }
}
</script>

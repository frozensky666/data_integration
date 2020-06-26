<template>
    <el-container>
        <aside class="nav" >
            <router-link class="nav-item" to=""><i class="el-icon-menu"></i><span>用户看板</span></router-link>
        </aside>
        <el-container ref="ct">
            <div class="dashboard">
                <router-view></router-view>
            </div>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Container"
    }
</script>

<style scoped>
    .nav {
        background-color: rgb(74, 82, 89);
        padding-top: 40px;
    }
    .nav-item {
        display: block;
        height: 50px;
        background-color: rgb(74, 82, 89);
        line-height: 50px;
        padding-left: 20px;
        cursor: pointer;
        color: #fff;
    }
    .nav-item:hover {
        background-color: #fff;
        color: rgb(74, 82, 89);
    }
    .nav-item span {
        margin-left: 10px;
    }
    .dashboard {
        width: 100%;
        background-color: #fff;
        margin-left: 220px;
    }
    .router-link-active {
        color: yellow;
    }
    aside {
        width: 220px;
        position: fixed;
        top: 0;
        bottom: 0;
        left:0;
        display: block;
    }
</style>
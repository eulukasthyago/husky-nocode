<template>
    <div id="leftPanel" class="bg-gray-700">
        <div class="panelTitle">
            Blocos
        </div>
    </div>
</template>

<script>
    //import grapesjs from "grapesjs";
    export default {
        name: 'LeftPanel'
    }
</script>

<style lang="scss" scoped>
    #leftPanel{
        position: relative;
        width: 200px;

        .gjs-block {
            width: calc((100% / 2) - 6%);
            height: auto;
            min-height: auto;
        }
    }
</style>
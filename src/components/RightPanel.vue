<template>
    <div id="rightPanel" class="bg-gray-700">
        <div id="selectormanager">
            <div class="panelTitle">
                Classes
            </div>
        </div>

        <div id="stylemanager">
            <div class="panelTitle">
                Configurações
            </div>
        </div>  
    </div>
</template>

<script>
    //import grapesjs from "grapesjs";
    export default {
        name: 'RightPanel'
    }
</script>

<style lang="scss" scoped>
    #rightPanel{
        position: relative;
        width: 250px;
        max-height: calc(100vh - 50px);
        overflow: auto;
    }
</style>
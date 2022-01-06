<template>
  <div id="app">
    <TopBar />
    <LeftPanel />
    <div id="gjs">
      <h1 class="text-red-500 text-3xl font-bold underline">
        Hello world!
      </h1>
      <h1>Hello World Component!</h1>
      <img alt="Vue logo" src="./assets/logo.png">
      <input type="text" />
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
    <RightPanel />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import 'grapesjs/dist/css/grapes.min.css';
import './styles/tawind.css'
import './styles/style.css'
import TopBar from './components/TopBar.vue';
import RightPanel from './components/RightPanel.vue';
import LeftPanel from './components/LeftPanel.vue';
import grapesjs from 'grapesjs';
import grapesjs_configs from './grapesjs';

export default {
  name: 'App',

  mounted(){
    grapesjs.init(grapesjs_configs);
  },

  components: {
    //HelloWorld,
    TopBar,
    LeftPanel,
    RightPanel
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

*{
  box-sizing: border-box;
}

/* Reset some default styling */
.gjs-cv-canvas {
  top: 0;
  width: 100%;
  height: 100%;
}
</style>

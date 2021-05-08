<template>
  <h1>Time Rection</h1>
  <button @click="start" :disabled="isPlay">Play</button>
  <Block v-if="isPlay" :delay="time" />
</template>

<script>

import Block from './components/Block.vue'

export default {
  name: 'App',
  components:  { Block },
  data(){
    return{
      isPlay:false,
      time:null
    }
  },
  methods:{
    start(){
      this.time=2000+Math.random()*5000
      this.isPlay=true    
     
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

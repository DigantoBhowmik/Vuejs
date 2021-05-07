<template>
  <h1>Time Rection</h1>
  <button @click="start" :disabled="isPlay">Play</button>
  <Box v-if="isPlay" :delay="delay"/>
</template>

<script>

import Box from './components/Block'
export default {
  name: 'App',
  components:  { Box },
  data(){
    return{
      isPlay:false,
      delay:null
    }
  },
  methods:{
    start(){
      this.delay=20000000000+Math.random()*500000000000
      this.isPlay=true
      console.log(this.isPlay)
     
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

<template>
  <div id="app">
    <header>計算ツール</header>
    <ul>
      <li><input type="text" v-model.number="input1">分<input type="text" v-model.number="input2">秒 駐屯数:<input type="text" v-model.number="input3">
      <samp>{{ multi1 }}部隊</samp></li>
      <li><input type="text" v-model.number="input4">分<input type="text" v-model.number="input5">秒 駐屯数:<input type="text" v-model.number="input6">
      <samp>{{ multi2 }}部隊</samp></li>
      <li><input type="text" v-model.number="input7">分<input type="text" v-model.number="input8">秒 駐屯数:<input type="text" v-model.number="input9">
      <samp>{{ multi3 }}部隊</samp></li>
      <li>合計:{{ multi4 }}部隊</li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return{
    input1:'',
    input2:'',
    input3:'',
    input4:'',
    input5:'',
    input6:'',
    input7:'',
    input8:'',
    input9:'',
    second:1.5,
    minutes:60
    }
  },
  computed:{
    multi1() {
      return (this.input1 * this.minutes + this.input2) / this.second * this.input3
    },
    multi2() {
      return (this.input4 * this.minutes + this.input5) / this.second * this.input6
    },
    multi3() {
      return (this.input7 * this.minutes + this.input8) / this.second * this.input9
    },
    multi4() {
      return Math.round(this.multi1 + this.multi2 + this.multi3) 
    }
  },
}
</script>

<style>
li {
  list-style: none;
}
input {
  width: 30px;
}
samp {
  margin-left: 20px;
}
</style>

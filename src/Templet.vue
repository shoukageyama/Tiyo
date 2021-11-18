<template>
  <div id="">
    <!-- 表示画像 -->
    <!-- ここからsvg -->
    <div class="imagebox">

<!-- ここまでsvg -->
      <img id="bg_img" src="@/assets/image/img/.jpeg" alt="">
    </div>
    <!-- ここまで画像 -->
    <div class="result">{{ totalhuman }}部隊</div>
    <modal name="hello-world" :draggable="false" :resizable="true" :clickToClose="false" :adaptive="true" >
      <div class="modal-body">
        <input type="text" v-model.number="input1">分<input type="text" v-model.number="input2">秒 駐屯数:<input type="text" v-model.number="input3">
        <button class="btn" @click="hide()">駐屯</button>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name:"",
  data() {
    return{
    input1:'',
    input2:'',
    input3:'',
    second:1.5,
    minutes:60,
    Data: [
      { id: 1, name:"交趾", human:0},
      { id: 2, name:"夷陵", human:0},
      { id: 3, name:"永安", human:0},
      { id: 4, name:"麦城", human:0},
      { id: 5, name:"武陵", human:0},
      { id: 6, name:"零陵", human:0},
      { id: 7, name:"江陵", human:0},
      { id: 8, name:"襄陽", human:0},
      { id: 9, name:"桂陽", human:0},
      { id: 10, name:"衡陽", human:0},
      { id: 11, name:"長沙", human:0},
      { id: 12, name:"新野", human:0},
      { id: 13, name:"華容", human:0},
      { id: 14, name:"江夏", human:0},
      { id: 15, name:"豫章", human:0},
      { id: 16, name:"建業", human:0},
      { id: 17, name:"紫桑", human:0},
      { id: 18, name:"蒼梧", human:0},
      { id: 19, name:"建安", human:0},
      { id: 20, name:"曲阿", human:0},
      { id: 21, name:"呉郡", human:0},
      { id: 22, name:"会稽", human:0},
      { id: 23, name:"臨海", human:0},
    ]
    }
  },
  computed:{
    multi() {
      return (this.input1 * this.minutes + this.input2) / this.second * this.input3
    },
    totalhuman() {
      let total = 0
      const length = this.Data.length
      for(let i = 0; i < length; i++) {
        total += this.Data[i].human
      }
      return Math.round(total) 
    }
  },
  methods: {
    show(nu) {
      this.num = this.Data[nu]
      this.$modal.show('hello-world');
    },
    hide() {
      this.num.human = this.multi
      this.$modal.hide('hello-world');
  },
}
}
</script>

<style>
.imagebox {
  width: 100vw;
  height: 100vh;
  position: relative;
  /* position: absolute;
  width: auto;
  height: 100%;
  margin: 0 auto; */
}
#kz {
  width: auto;
  min-height: 100%;
  position: relative;
  z-index: 100;
  mix-blend-mode: overlay; 
}
/* #bg_img {
  width: auto;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
} */

input {
  width: 30px;
  border: solid 0.5px;
  margin-right: 5px;
}
.modal-body {
  width: 100%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.result {
  position: absolute;
  background-color: black;
  text-align: center;
  color: aliceblue;
  top: 24px;
  width: 2314px;
  height: 35px;
}
</style>

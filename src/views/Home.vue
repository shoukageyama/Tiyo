<template>
  <div class="home">
    <p class="ta">傾国 計算ツール(仮)</p>
    <img class="bg_img" :src="selectedImage" >
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return{
      images: [
        require("@/assets/image/img/charaimg/yoshitune.jpeg"),
        require("@/assets/image/img/charaimg/hakuki.jpeg"),
        require("@/assets/image/img/charaimg/motonari.jpeg"),
        require("@/assets/image/img/charaimg/oukizin.jpeg")
      ],
      selectedImage: '',
    }
  },
  created() {
    const idx = Math.floor(Math.random() * this.images.length)
    this.selectedImage = this.images[idx]
  }
}
</script>

<style>
.ta {
  width: auto;
  position: absolute;
  top: 10%;
  left: 30%;
  font-size: 60px;
  border: solid 2px;
  background-color: azure;
}
.bg_img {
  width: 100vw;
}
@media (max-width: 500px) {
  .ta {
    left: 20%;
    font-size: 25px;
  }
}
</style>
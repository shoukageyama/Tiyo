<template>
  <div class="home">
    <p>傾国 計算ツール(仮)</p>
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
        require("@/assets/image/img/yoshitune.jpeg"),
        require("@/assets/image/img/hakuki.jpeg"),
        require("@/assets/image/img/motonari.jpeg"),
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
p {
  width: auto;
  position: absolute;
  top: 10%;
  left: 20%;
  font-size: 30px;
  border: solid 2px;
  background-color: azure;
}
.bg_img {
  width: 100vw;
}
</style>
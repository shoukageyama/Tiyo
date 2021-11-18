<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/keiyou">荊揚州</router-link> |
      <router-link to="/kiyuusyu">冀幽州</router-link> |
      <router-link to="/outon">王都圏</router-link> |
      <router-link to="/ryoueki">涼益州</router-link> |
      <router-link to="/seiyosyu">青豫州</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#nav {
  width: 602px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  z-index: 1;
}
</style>

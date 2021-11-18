<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/keiyou">keiyou</router-link> |
      <router-link to="/kiyuusyu">kiyuusyu</router-link> |
      <router-link to="/outon">outon</router-link> |
      <router-link to="/ryoueki">ryoueki</router-link> |
      <router-link to="/seiyosyu">seiyosyu</router-link> |
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
}
</style>

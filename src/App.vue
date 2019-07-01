<template>
  <div id="app">
    <Header />
    <router-view/>
    <div class="container">
      <div id="status">
        <MojangStatus />
      </div>
      <Nav />
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header';
import Nav from '@/components/common/Nav';
import MojangStatus from '@/components/MojangStatus';
export default {
  components: {
    Header,
    Nav,
    MojangStatus
  }
}
</script>


<style>
html, body, #app {
  min-height: 100% !important;
  height: 100% !important;
  max-height: 100% !important;
  padding: 0px;
  margin: 0px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

body {
  background: #212121 url('./assets/Background 1.png') no-repeat center;
  background-size: cover;
  overflow: hidden;
}


.container {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

#status {
  position: fixed;
  left: 25px;
}

#app {
  text-align: center;
  color: #eee;
}
</style>

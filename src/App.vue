<template>
  <div id="app">
    <Header />
    <div class="container">
      <Nav />
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header';
import Nav from '@/components/common/Nav';
export default {
  components: {
    Header,
    Nav
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align:
  baseline;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

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
  background: #212121 url('./assets/backgrounds/1.png') no-repeat center;
  background-size: cover;
  overflow: hidden;
}

#content {
  z-index: 1;
  flex: 1 1 0;
}

.container {
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: inherit;
}

#status {
  position: fixed;
  left: 25px;
}

#app {
  text-align: center;
  color: #eee;
  display: flex;
  flex-direction: column;
}
</style>

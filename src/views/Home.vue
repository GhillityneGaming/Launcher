<template>
  <div class="home">
    <UserContainer v-bind:allowSwitch="false" uniqueId="7fe6c6a8659a4a75ba7fca364f6cfa57"/>
    <div class="launch">
      <GradientButton text="Launch Game"/>
      <span id="cog">
      <img src="@/assets/settings_cog.png">
      </span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserContainer from '@/components/common/UserContainer.vue'
import GradientButton from '@/components/common/GradientButton.vue'
export default {
  name: 'home',
  components: {
    UserContainer,
    GradientButton,
  }
}
</script>

<style>

h1 {
  font-weight: 500;
  display: block;
  text-transform: uppercase;
  font-family: 'Lato';
}

.home {
  display: -webkit-box;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: inherit;
  height: inherit;
}

.launch {
  margin-top: 50px;
  display: flex;
  align-content: center;
  justify-content: center;
}

#cog {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  cursor: pointer;
}
#cog img {
  width: 30.5px;
  height: 30.5px;
  pointer-events: none;
}

</style>
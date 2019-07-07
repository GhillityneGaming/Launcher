<template>
  <div class="home">
    <UserContainer v-bind:allowSwitch="true" uniqueId="7fe6c6a8659a4a75ba7fca364f6cfa57"/>
    <div class="launch">
      <TransparentButton text="LabyMod 1.14.2 (LabyMod 1.14.2)" icon="chevron-down" />
      <GradientButton text="Launch Game" />
    </div>
    <MojangStatus />
  </div>
</template>

<script>
// @ is an alias to /src
import UserContainer from '@/components/common/UserContainer.vue'
import GradientButton from '@/components/common/GradientButton.vue'
import TransparentButton from '@/components/common/TransparentButton.vue'
import MojangStatus from '@/components/MojangStatus.vue'

export default {
  name: 'home',
  components: {
    UserContainer,
    TransparentButton,
    GradientButton,
    MojangStatus
  }
}
</script>

<style scoped>
.status,
.btn {
  margin-top: 25px;
}

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
  height: 100%;
}

.launch,
#cog {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.launch {
  flex-flow: column;
}

#cog {
  margin-left: 15px;
  cursor: pointer;
}

#cog img {
  width: 30.5px;
  height: 30.5px;
  pointer-events: none;
}

</style>
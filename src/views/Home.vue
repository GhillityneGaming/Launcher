<template>
  <div class="home">
    <h1>Logged In As...</h1>
    <UserContainer v-bind:allowSwitch="false" uniqueId="7fe6c6a8659a4a75ba7fca364f6cfa57"/>
    <div class="launch">
      <GradientButton text="Launch Game"/>
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
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#main-logo {
  width: 250px;
}

.launch {
  margin-top: 50px;
}

</style>
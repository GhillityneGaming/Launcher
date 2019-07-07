<template>
  <div class="home">
    <UserContainer v-bind:allowSwitch="true" uniqueId="7fe6c6a8659a4a75ba7fca364f6cfa57"/>
    <div class="launch">
      <div class="dropdown">
      <TransparentButton v-on:click.native="toggleDropdown" image="https://i.imgur.com/56iQxhC.png" text="LabyMod 1.14.2 (LabyMod 1.14.2)" icon="chevron-down" />
      <ul class="dropdown-content">
        <li><img src="https://i.imgur.com/56iQxhC.png" alt="">LabyMod 1.14.2 (LabyMod 1.14.2)</li>
        <li><img src="https://i.imgur.com/56iQxhC.png" alt="">LabyMod 1.14.2 (LabyMod 1.14.2)</li>
        <li><img src="https://i.imgur.com/56iQxhC.png" alt="">LabyMod 1.14.2 (LabyMod 1.14.2)</li>
        <li><img src="https://i.imgur.com/56iQxhC.png" alt="">LabyMod 1.14.2 (LabyMod 1.14.2)</li>
      </ul>
      </div>
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
  },
  methods: {
    toggleDropdown: function() {
      console.log('Test');
      this.$el.querySelector('.dropdown-content').classList.toggle('show');
    }
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

.dropdown {
  position: relative;
  width: 100%;
}

.dropdown-content {
  display: none;
  position: absolute;
  background: #191919;
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  font-family: 'Lato';
  font-weight: 500;
  text-transform: uppercase;
}

.show {
  display:block;
}

.dropdown-content li {
  position: relative;
  color: #ddd;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  width: 100%;
  cursor: pointer;
}

.dropdown-content li:hover {
  background-color: #212121
}

.dropdown-content li img {
    width: 32px;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    left: 8%;
}

</style>
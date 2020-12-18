<template>
  <div class="app">
    <!--  -->
    <div class="bg">
      <div class="bg1"></div>
      <div class="bg2"></div>
    </div>
    <!--  -->
    <Navigation />
      <transition name="view">
          <router-view />
      </transition>
    <Links />

  </div>
</template>

<script>
import Navigation from './components/globalComponents/nav.vue'
import Links from './components/globalComponents/link.vue'




export default {
  name: 'App',
  components: {
    Navigation,
    Links,
  },
  data() {
    return {
      
    }
  },


}


</script>

<style>
:root{
  --white: white;
  --black: black;
  --italic: italic;
  --normal: normal;
  --btn: #87FF85;
}
a{
  text-decoration: none;
}
.en{
  overflow: hidden;
}
h1{
  color: var(--white)
}
.bg{
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
  width: 100%;
  height: 100vh;
  display: flex;
}
.bg1{
  background: #006788;
  width: 50%;
  height: 100vh;
}
.bg2{
  background: #2D2D2D;
  width: 50%;
  height: 100vh;
}

.view-enter-active, .view-leave-active{
  transition: all .5s
}
.view-enter-active{
  transition-delay: .5s
}

.view-enter, .view-leave-to{
 opacity: 0;
}
.view-leave, .view-enter-to{
 opacity: 1;  
}
</style>

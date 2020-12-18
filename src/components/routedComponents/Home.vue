<template>
  <div class="home">
    <svg class="watermark" width="322" height="223" viewBox="0 0 322 223" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="5">
      <rect class="bumi" x="211.036" y="57.5571" width="127.587" height="11.3889" rx="5.69444" transform="rotate(147.012 211.036 57.5571)" fill="#40FF75"/>
      <rect class="bumi" x="211.346" y="29.2954" width="55.3681" height="11.3889" rx="5.69444" transform="rotate(147.012 211.346 29.2954)" fill="#40FF75"/>
      <rect class="bumi" x="165.719" y="30.8516" width="190.177" height="11.3889" rx="5.69444" transform="rotate(147.012 165.719 30.8516)" fill="#40FF75"/>
      <rect class="bumi" x="299.719" y="43.572" width="190.177" height="11.3889" rx="5.69444" transform="rotate(147.012 299.719 43.572)" fill="#40FF75"/>
      </g>
      <g opacity="5">
      <rect class="bumi" x="358.036" y="106.557" width="127.587" height="11.3889" rx="5.69444" transform="rotate(147.012 358.036 106.557)" fill="#40FF75"/>
      <rect class="bumi" x="358.346" y="78.2954" width="55.3681" height="11.3889" rx="5.69444" transform="rotate(147.012 358.346 78.2954)" fill="#40FF75"/>
      <rect class="bumi" x="312.719" y="79.8516" width="190.177" height="11.3889" rx="5.69444" transform="rotate(147.012 312.719 79.8516)" fill="#40FF75"/>
      <rect class="bumi" x="446.719" y="92.572" width="190.177" height="11.3889" rx="5.69444" transform="rotate(147.012 446.719 92.572)" fill="#40FF75"/>
      </g>
    </svg>
    <div class="main">
      <div class="en">
      <h1>YO!</h1>
      </div>

      <div class="me">
          <img class="svg" src="https://res.cloudinary.com/devdaniel/image/upload/v1608326487/yo_ekgoch.svg" alt="" srcset="">
          <div class="text">
            <p>
              I’m Daniel Adekoya. I'm a  Vuejs Frontend <br>Developer
            </p>
          </div>
      </div>
        
    </div>
    <router-link class="explore" to="/about">EXPLORE <img class="arrow" src="../../assets/images/Arrow.svg" alt="" srcset=""></router-link>
  </div>
</template>

<script>
import { gsap } from 'gsap'
  export default {
    name: 'Home',
    data() {
      return {
        logo: '../../assets/images/banner.png'
      }
    },
    metaInfo(){
      return {
        title: 'Yo!👋 | Daniel Adekoya',
      }
    },
    methods: {
      intro(){
        gsap.from('.bumi', .7, {
          width: 0,
          stagger: .2,
          ease: "expo",
        })
        gsap.from('h1', 1, {
          y: '120%',
          ease: "expo",
          delay: 1
        })
        gsap.from('.main .svg',1, {
          scale: 0,
          ease: "expo.out",
          transformOrigin: 'center',
          delay: 1

        })
        gsap.from('.main .text',1, {
          scaleY: 0,
          opacity: 0,
          ease: "expo.out",
          delay: 2

        })
        gsap.from('.main .text p',1, {
          y: "100%",
          opacity: 0,
          ease: "expo.out",
          delay: 2

        })
        gsap.from('.explore',1, {
          opacity: 0,
          scaleY: 0,
          transformOrigin: "top",
          ease: "expo",
          delay: 1

        })
      }
    },
    mounted(){
      this.intro()
    }
  }
</script>

<style scoped>
.watermark{
  position: absolute;
  top: 100px;
  right: 0;
}
.en{
  overflow: hidden;
}
.main{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  flex-wrap: wrap-reverse;
}
.main h1{
  color: var(--white);
  font-size: 170px; 
  font-size: clamp(100px, 10vw, 270px);
  margin-right: 40px;
}
.main img{
  margin-left: 40px; 
  width: clamp(200px, 20vw, 500px);
}
.me{
  position: relative
}
.text{
  background: var(--white);
  padding:  19px;
  position: absolute;
  width: 130px;
  text-align: center;
  font-size: 10px;
  top: 0;
  overflow: hidden;
  right: -20%;
  border-radius: 20px;
}
a{
  font-weight: 500;
  color: var(--black);
  background: var(--btn);
  padding: 15px 30px;
  border-radius: 20px;
  width: 200px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, 0%);
}
.arrow{
  transition: .3s all;
}
a:hover .arrow{
  transform: translateX(10px);
}
@media screen and (max-width: 545px){
    .main h1{
      margin-right: 0px
    }
    .main image{
      margin-left: 0px
    }
    .text{
      background: var(--white);
      position: absolute;
      width: 140px;
      text-align: center;
      font-size: 10px;
      top: 0;
      overflow: hidden;
      right: -10%;
      border-radius: 20px;
    }
    .watermark{
      position: absolute;
      top: 100px;
      right: 0;
      display: none;
    }
}
</style>
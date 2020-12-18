<template>
    <div class="resume">
        <div class="main">
            <h1>CHECK OUT MY RESUME.</h1>
            <a href="https://docs.google.com/document/d/e/2PACX-1vQNIAyJ53JZSh9H5PWDktdG1RgDvtb_fSnE4v5Jt5KjvGssmpXqoAuknLIoveFSdSuBJVIkh4oM0FDe/pub" target="_blank" download="Daniel Adekoya's Resume" class="download">View Resume</a> 
        </div>
        

        <router-link class="link back" to="/">YO! <img class="arrow" src="../../assets/images/Arrow.svg" alt="" srcset=""></router-link>

    </div>
</template>

<script>
import { gsap } from 'gsap'

    export default {
        metaInfo(){
            return {
                title: 'Resume✍ | Daniel Adekoya'
            }
        },
        data() {
            return {
                
            }
        },
        methods: {
            intro(){
                gsap.from('.main h1', 1, {
                    opacity: 0,
                    y: -30,
                    ease: 'expo',
                    delay: 1
                })
                gsap.from('.download', 1, {
                    opacity: 0,
                    scaleY: 0,
                    transformOrigin: "top",
                    ease: "expo",
                    delay: 1
                })
                gsap.from('.back', 1, {
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

.main{
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
}
.main h1{
    font-size: clamp(50px, 5vw, 100px);
    margin-bottom: 30px;
}
.link{
    font-weight: 500;
    color: var(--black);
    background: var(--btn);
    padding: 15px 30px;
    border-radius: 20px;
    width: 200px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 85%;
    right: 5%;
    transform: translate(0%, 0%);
}
.download{
    font-weight: 500;
    color: var(--black);
    background: var(--btn);
    padding: 15px 30px;
    border-radius: 20px;
    width: auto;
    padding: 15px 50px;
}
.arrow{
  transition: .3s all;
}
a:hover .arrow{
  transform: translateX(10px);
}
</style>
<template>
    <div class="assets">
        <div class="logo">
            <img class="svg" src="https://res.cloudinary.com/devdaniel/image/upload/v1608326459/assetslogo_x1x0xt.svg" alt="" srcset="">
            <div class="en">
                <h1>WORKS</h1>
            </div>
        </div>
        <div class="Main">
            <div class="works">
                <div class="work" v-for="(item, index) in works" :key="index">
                    <h3 class="title">{{item.title}}</h3>
                    <p class="description">
                        {{item.disc}}
                    </p>
                    <a :href="item.link" target="_blank"><img src="../../assets/images/link.svg" alt="" srcset=""></a> 
                </div>
            </div>

            <a href="https://github.com/devdanielcodes/" target="_blank" class="more">Github for More</a>
        </div>

    <router-link class="resume" to="/resume">RESUME <img class="arrow" src="../../assets/images/Arrow.svg" alt="" srcset=""></router-link>


    </div>
</template>

<script>
import { gsap } from 'gsap'

    export default {
        metaInfo(){
            return {
                title: 'Works💪 | Daniel Adekoya',
                meta: [

                ]
            }
        },
        data(){
            return {
                condition: false,
                works: [
                    {
                        title: "Boton",
                        disc: "A simple CSS library for getting nice styled custom buttons",
                        link: "https://boton.vercel.app",
                    },
                    {
                        title: "Github Users",
                        disc: "Type in a github username to see his or her stats",
                        link: "https://getgithubuser.vercel.app/",
                    },
                    {
                        title: "Jots",
                        disc: "A Demo writing app for taking down notes etc",
                        link: "https://jots.vercel.app",
                    },
                ]
            }
        },
        methods: {
            intro(){                    
                    gsap.from('.assets .svg', {
                        scale: 0,
                        ease: "power4.out",
                        duration: 1,
                        delay: 1
                    })
                    gsap.from('.assets svg #image0', {
                        scale: 0,
                        ease: "expo.out",
                        transformOrigin: 'center',
                        duration: 1,
                        delay: 1
                    }, "-=.6")
                    gsap.from('.logo h1', {
                        y: '120%',
                        ease: "expo",
                        duration: 1,
                        delay: 1
                    },)
                    gsap.from('.works .work', {
                        y: '200%',
                        ease: "expo",
                        stagger: .1,
                        duration: 1,
                        delay: 1
                    },)
                    gsap.from('.resume', {
                        opacity: 0,
                        scaleY: 0,
                        transformOrigin: "top",
                        ease: "expo",
                        duration: 1,
                        delay: 1
                    }, "-=1.2")
            }
        },
        mounted(){
            this.intro()
        }
        
    }
</script>

<style scoped>
.logo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 270px;
    color: var(--white)
}
.logo h1{
    font-weight: 500; 
}
.Main{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 35vh;

}
.works{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
    overflow: hidden;
    overflow-y: scroll; 
    width: auto;
    height: 100%;
    flex-wrap: wrap;
    transform: translate(0%, 0%);
}
.work{
    background: #87FF85;
    padding: 30px;
    width: 320px;
    border-radius: 20px;
    margin-left: 10px;
    margin-bottom: 10px;
}
.work h3, .work p{
    margin-bottom: 30px;
}
.work a{
    justify-self: flex-end;
}
.more{
    font-weight: 500;
    color: var(--black);
    background: var(--btn);
    border-radius: 20px;
    top: 70%;
    width: auto;
    padding: 15px 30px;
    right: 50%;
    transform: translate(50%, 0%);
    margin-right: 10px;
}
.em{
    font-size: 40px;
    font-size: clamp(20px, 5vw, 40px);
    margin-bottom: 30px;
    color: var(--white);
    cursor: pointer;
}
.resume{
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
.arrow{
  transition: .3s all;
}
a:hover .arrow{
  transform: translateX(10px);
}
@media screen and (max-width: 1685px){
    .assets{
        cursor: default;
    }
}
</style>
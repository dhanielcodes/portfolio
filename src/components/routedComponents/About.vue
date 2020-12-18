<template>
    <div class="about">
        <div class="main">
            <img class="svg" src="https://res.cloudinary.com/devdaniel/image/upload/v1608326426/about_kag6jj.svg" alt="" srcset="">
            <div class="en">
                <h1>
                    I'm a Frontend/Visual Developer & UI Designer.
                </h1>       
            </div>
            <div class="btns">
            <router-link to="/assets">WORKS <img class="arrow" src="../../assets/images/Arrow.svg" alt="" srcset=""></router-link>
            <router-link to="/resume">RESUME <img class="arrow" src="../../assets/images/Arrow.svg" alt="" srcset=""></router-link>
        </div>
        </div>
        
    </div>
</template>

<script>
import { gsap } from 'gsap'

    export default {
        metaInfo(){
            return {
                title: 'About😄 | Daniel Adekoya'
            }
        },
        data() {
            return {
                intro(){

                    gsap.from('h1', 1, {
                        y: '120%',
                        ease: "expo",
                        delay: 1
                    },)
                    gsap.from('.main .svg', 1, {
                        scale: 0,
                        ease: "power4.out",
                        delay: 1
                    })
                    gsap.from('.btns', 1, {
                        opacity: 0,
                        scaleY: 0,
                        transformOrigin: "top",
                        ease: "expo",
                        delay: 1
                    })
                }
            }
        },
        mounted(){
            this.intro()
        }
    }
</script>

<style scoped>
.main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 50%;  
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 20px auto;
}
.main .svg{
    width: clamp(150px, 20vw, 500px);
}
.main h1{
    text-align: center;
    color: var(--white);
    width: 90%;
    margin: auto;
    font-size: clamp(25px, 4vw, 70px);
}
.btns{
    width: 450px;
    text-align: center;
    display: flex;
    margin: 50px auto; 
    justify-content: space-between; 
}
a{
    font-weight: 500;
    color: var(--black);
    background: var(--btn);
    padding: 15px 30px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
}
a img{
    margin-left: 50px;
}
.arrow{
  transition: .3s all;
}
a:hover .arrow{
  transform: translateX(10px);
}
@media screen and (max-width: 535px){
    .btns{
        width: 90%;
        top: 76%;
        flex-direction: column
    }
    a{
        margin-bottom: 5px;
    }
}
</style>
<template>
        <nav>
            <router-link class="logo" to="/"> 
                <svg  @click="open = false, link = false" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1" fill="white">
                <path d="M39 19.5C39 15.6433 37.8563 11.8731 35.7137 8.66638C33.571 5.45962 30.5255 2.96026 26.9623 1.48435C23.3992 0.00844025 19.4784 -0.377725 15.6957 0.374687C11.9131 1.1271 8.43854 2.98429 5.71142 5.71142C2.98429 8.43854 1.1271 11.9131 0.374687 15.6957C-0.377725 19.4784 0.0084403 23.3992 1.48435 26.9623C2.96026 30.5255 5.45962 33.571 8.66638 35.7137C11.8731 37.8563 15.6433 39 19.5 39L19.5 19.5H39Z"/>
                </mask>
                <path d="M39 19.5C39 15.6433 37.8563 11.8731 35.7137 8.66638C33.571 5.45962 30.5255 2.96026 26.9623 1.48435C23.3992 0.00844025 19.4784 -0.377725 15.6957 0.374687C11.9131 1.1271 8.43854 2.98429 5.71142 5.71142C2.98429 8.43854 1.1271 11.9131 0.374687 15.6957C-0.377725 19.4784 0.0084403 23.3992 1.48435 26.9623C2.96026 30.5255 5.45962 33.571 8.66638 35.7137C11.8731 37.8563 15.6433 39 19.5 39L19.5 19.5H39Z" stroke="#40FF75" stroke-width="4" mask="url(#path-1-inside-1)"/>
                <path d="M12.736 11.2H19.576C21.352 11.2 22.92 11.56 24.28 12.28C25.64 12.984 26.696 13.976 27.448 15.256C28.2 16.52 28.576 17.968 28.576 19.6C28.576 21.232 28.2 22.688 27.448 23.968C26.696 25.232 25.64 26.224 24.28 26.944C22.92 27.648 21.352 28 19.576 28H12.736V11.2ZM19.48 26.464C20.952 26.464 22.24 26.176 23.344 25.6C24.448 25.008 25.304 24.2 25.912 23.176C26.52 22.136 26.824 20.944 26.824 19.6C26.824 18.256 26.52 17.072 25.912 16.048C25.304 15.008 24.448 14.2 23.344 13.624C22.24 13.032 20.952 12.736 19.48 12.736H14.512V26.464H19.48Z" fill="#40FF75"/>
                </svg>
            </router-link>

            <h3 @click="open = false, link = false" class="contact"><router-link class="con" to="/contact">REACH OUT</router-link></h3>

            <div @click="open = !open, link = false" class="burger"  :class="{open: open}">
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
            </div>
            <ul :class="{open: open}">
                <div @click="open = false, link = false" >
                    <router-link class="link" to="/">Home | Yo!</router-link>
                </div>
                <div @click="open = false, link = false" >
                    <router-link @click="open = false, link = false" class="link" to="/about">About</router-link>
                </div>
                <div @click="open = false, link = false" >
                    <router-link @click="open = false, link = false" class="link" to="/assets">Projects</router-link>
                </div>
                <div @click="open = false, link = false" >
                    <router-link @click="open = false, link = false" class="link" to="/resume">Resume</router-link>
                </div>
                <a class="ma">
                    <a class="link" href="" @click.prevent="link = !link">Contact</a>
                    <a :class="{open: link}" href="mailto:adekoyadaniel53@gmail.com" class="lin" target="_blank">adekoyadaniel53@gmail.com</a>
                </a>
            </ul>
            
        </nav>
    
</template>

<script>
import { gsap } from 'gsap'
    export default {
        data() {
            return {
                condition: true,
                open: false,
                link: false
            }
        },
        methods:{
           
        },
        mounted(){
            gsap.from('svg .burger-line', 1, {
                width: 0,
                ease: "expo"
            })
                gsap.from('.contact', 1, {
                opacity: 0,
                ease: "expo"
            })
            gsap.from('.logo svg path', 3, {
                strokeDasharray: 1000,
                strokeDashoffset: 1000,
                opacity: 0,
                ease: "circ.out"
            })
        }
    }
</script>

<style scoped>
nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    position: relative;
}
.logo, a{
    font-weight: 300;
    color: var(--white);
    cursor: pointer;
    text-decoration: none;
}
.contact{
    font-weight: 300;
    color: var(--white);
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
}
nav ul .link{
    display: inline-block;
    text-decoration: none
}
.ma{
    position: relative;
}
.lin{
    padding: 10px;
    border-radius: 20px; 
    background: #41d63e4b;
    border: 3px solid #41d63e93;
    position: absolute;
    top: 20px;
    right: 0px;
    opacity: 0;
    pointer-events: none;
    backdrop-filter: blur(7px);
    transition: all .3s;
    z-index: 10;
}
.lin.open{
    opacity: 1;
    pointer-events: all;
    top: 40px
}
.burger{
    display: block;
    width: 40px;
    height: auto;
    cursor: pointer;
    position: relative;
}
.burger span{
    width: 100%;
    height: 3px;
    background: rgb(255, 255, 255);
    margin-bottom: 7px;
    display: block;
    transition: all .5s;
    position: relative;
    border-radius: 100px;
    top: 0;
}
.burger span:nth-child(2){
    width: 80%
}
.burger span:nth-child(3){
    width: 50%;
    bottom: 0
}
.burger.open span:nth-child(1){
    transform: rotate(45deg);
    top: 14px;
}
.burger.open span:nth-child(2){
    opacity: 0;
}
.burger.open span:nth-child(3){
    transform: rotate(-45deg);
    width: 100%;
    top: -5px;
}
ul{
    position: absolute;
    top: 50px;
    right: 0px;
    display: flex;
    flex-direction: column;
    background: #41d63e4b;
    border: 5px solid #41d63e93;
    border-radius: 30px;
    padding: 30px;
    width: 180px;
    opacity: 0;
    transition: all .3s;
    pointer-events: none;
    backdrop-filter: blur(7px);
    z-index: 20;

}
ul.open{
    opacity: 1;
    pointer-events: all;
    top: 100px;
}
nav ul .link{
    margin-left: 0px;
    margin: 10px 0;
    color: black;
    font-weight: 400
}
.lin{
    right: -30px;
    color: black;
    font-weight: 400
}
.lin.open{
    top: 85px;
    right: -30px;
}




@media (min-width: 1880px){
    nav ul .link{
        font-size: 23px
    }
}
</style>
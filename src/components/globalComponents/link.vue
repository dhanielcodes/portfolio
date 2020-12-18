<template>
    <div>
        <ul>
            <li class="li"><h3><a href="https://www.linkedin.com/in/daniel-adekoya-010810192/" target="_blank">Ln.</a></h3></li>
            <li class="li"><h3><a href="https://www.instagram.com/danieladekoya_/" target="_blank">Ig.</a></h3></li>
            <li class="li"><h3><a href="https://twitter.com/daniel_adekoya_" target="_blank">Tw.</a></h3></li>
            <li class="li"><h3><a href="https://github.com/devdanielcodes/" target="_blank">Git.</a></h3></li>
        </ul>
    </div>
</template>

<script>
import { gsap } from 'gsap'
    export default {
        mounted(){
            gsap.from('.li', 1, {
                y: '100%',
                delay: 1,
                stagger: .2,
                ease: "expo"
            })
        }
    }
</script>

<style scoped>
ul{
    display: flex;
    width: 200px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    z-index: 3;
    overflow: hidden;
}
a{
    color: var(--white);
    text-decoration: none;
    font-style: var(--normal);
    font-weight: 400
}
li a{
    position: relative;
}
li a::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 1px;
    background: var(--white);
    transition: all .4s;
    opacity: 0;
}
li a:hover::after{
    width: 100%;
    opacity: 1;
}
</style>

<template>
    <div>
    <div class="contact-open">
            <div class="details">
                <h2 class="det">Contact me 📞!</h2>
                <a class="mail det" href="mailto:http://adekoyadaniel53@gmail.com/" target="_blank">adekoyadaniel53@gmail.com</a>
                <h3 class="det">08090641563 - 08085820883</h3>
            </div>
            <p class="det">© copyrights 2021.Daniel Adekoya</p>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
    export default {
        data(){
            return {

            }
        },
        metaInfo(){
            return {
                title: 'Contact!📞 | Daniel Adekoya',
            }
        },
        methods: {
            stage(){
                gsap.from('.det', 1, {
                    scaleY: 0,
                    transformOrigin: "top",
                    opacity: 0,
                    ease: "expo",
                    delay: 1
                })
            }
        },
        mounted(){
            this.stage()
        }
    }
</script>

<style scoped>
.contact-open{
    width: 90%;
    height: 65%;
    border-radius: 20px;
    background: #40FF75;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
}
.close{
    float: right;
    padding: 10px;
    cursor: pointer;
}
.details{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 30%;
}
.mail{
    font-size: clamp(18px, 5vw, 40px);
    text-decoration-line: underline;
    color: var(--black)
}
h3, h2{
    font-size: clamp(12px, 5vw, 30px);
    font-weight: 500;
}
p{
    text-align: center;
    position: relative;
    width: 100%;
    bottom: -50%;
    left: 50%;
    transform: translate(-50%, 0%);
}
</style>
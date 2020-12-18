<template>
    <div class="404">
        <div class="main">
            <img src="https://res.cloudinary.com/devdaniel/image/upload/v1608326431/404-face_ppx4xr.svg" alt="" srcset="">
            <h1>
                Sorry , page never existed
            </h1>
        </div>

        <router-link to="/">YO! <img src="../../assets/images/Arrow.svg" alt="" srcset=""></router-link>
    </div>
</template>

<script>
    export default {
        metaInfo() {
            return {
                title: 'Page Not Found 😥'
            }
        },
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>
.main{
    width: 98%;
    text-align: center;
    margin: 20px auto;
}
.main img{
    width: clamp(250px, 20vw, 500px);
}
.main h1{
    text-align: center;
    color: var(--white);
    font-size: clamp(25px, 4vw, 70px);
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
  top: 85%;
  left: 50%;
  transform: translate(-50%, 0%);
}
</style>
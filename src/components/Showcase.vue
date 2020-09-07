<template>
  <div class="">
    <!-- <div id="single-fixed" class="fixed"></div> -->
    <h1 class="light-big h-title">{{ $t('showcase') }}:</h1>  

    <div class="project-row">

      <div class="project-oktawave project"  v-in-viewport='{ margin: "-30% 0%" }' v-on:click="fullscreen()">
        <div class="placeholder">
          <a target="blank" class="sc-link" href="https://oktawave.com/pl">            
            <div class="project-title text-white">
              <p>Grav flat-file CMS</p>
              <h2>Oktawave</h2>
            </div>
            <div class="project-thumbnail">
              <img src="~@/assets/project_oktawave2.svg" class="img-responsive" alt="">
            </div>
          </a>
        </div>
      </div>

      <div class="project-setbuygo project" v-in-viewport='{ margin: "-30% 0%" }'  v-on:click="fullscreen()">
        <div class="placeholder">
          <a target="blank" class="sc-link" href="https://setbuygo.com/">
            <div class="project-title text-white">
              <p>Woocommerce shop</p>
              <h2>SetBuyGo</h2>
            </div>
            <div class="project-thumbnail">
              <img src="~@/assets/laptop_sbg-565px.png" class="img-responsive" alt="">
            </div>
          </a>
        </div>
      </div>

      <div class="project-wysocki project" v-in-viewport='{ margin: "-30% 0%" }' v-on:click="fullscreen()">
        <div class="placeholder">
          <a target="blank" class="sc-link" href="http://wysockiobuwie.pl/">
            <div class="project-title text-white">
              <p>Woocomerce shop</p>
              <h2>Wysocki</h2>
            </div>
            <div class="project-thumbnail">
              <img src="~@/assets/project_wysocki.png" class="img-responsive" alt="">
            </div>
          </a>
        </div>
      </div>
      
      <div class="project-apelrecords project" v-in-viewport='{ margin: "-30% 0%" }' v-on:click="fullscreen()">
        <div class="placeholder">
          <a target="blank" class="sc-link" href="http://apelrecords.pl/">
            <div class="project-title text-white">
              <p>Wordpress site</p>
              <h2>ApelRecords</h2>
            </div>
            <div class="project-thumbnail">
              <img src="~@/assets/project_apelrecords.png" class="img-responsive" alt="">
            </div>
          </a>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'Showcase',
  methods: {
    fullscreen(){
      console.log(this.$el);

    }
  }
}

</script>
<style  scoped>
/*.fixed{
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  display: none;
}*/
.h-title{
  margin-left: 25px;
}
.placeholder{

  padding: 35px;
  cursor: pointer;
  position: relative;
  min-height: 60vh;
  overflow: hidden;
  transition: transform .3s;
  margin: 40px;
  margin-left: 0px;
  margin-right: 0px;
}
.placeholder .sc-link{
  text-decoration: none;
}
.project-row{
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;  
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.project{
  width: 100%;
  opacity: 0;
  transition: opacity .35s, transform .7s;
  transform: translateY(60px);
  /*transition-delay: .1s;*/
}
.project-title{
  z-index: 9;
  position: relative;
}

.project.in-viewport{
  opacity: 1;
  transform: translateY(0);
}
.project.above-viewport{
  opacity: 1;
  transform: translateY(0);
}
.placeholder h2{
  font-size: 2em;
  letter-spacing: .05em;
  margin-top: 0;
}
.project:hover .placeholder{
  transform: scale(0.94);
}
.project .placeholder .project-thumbnail img{
  transition: transform .3s;  
}
.project{
  padding-left: 0;
  padding-right: 0;
}
.project:hover .placeholder .project-thumbnail img{
  transform: scale(1.15);
}
.project-thumbnail img{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
}

.project-oktawave .placeholder{
  background-color: #57c3e0;
  background-image: linear-gradient(#439cea, #57c3e0);
}
.project-setbuygo .placeholder{
  background-color: #2ECC71;
  margin-top: 0;
  /*background-color: #fff;*/
}
.project-wysocki .placeholder{
  background-color: #42cfff;
  /*background-color: #fff;*/
}
.project-apelrecords .placeholder{
  background-color: #f1c25b;
  margin-top: 0;

}
@media all and (min-width: 768px) {
  .project{
    width: 50%; 
  }
  .placeholder{
    margin-left: 40px;
    margin-right: 40px;

  }
  .placeholder h2{
   font-size: 3em;
  }
  .project-setbuygo .placeholder{
    margin-top: -100px;


  }
  .project-apelrecords .placeholder{
    margin-top: -60px;
  }
}

</style>
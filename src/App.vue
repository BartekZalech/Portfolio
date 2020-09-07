<template>
  <div id="app">
            <langSwitch/>

      <div class="slides-wrapper">
            
          <div class="slide">
           
              <img src="./assets/me.jpg" alt="" class="round">
              <article class="short-about">
                <vue-typed-js :backSpeed="30" :loop="true" :strings="['Frontend', 'Web', 'Wordpress', 'Grav']">
                  <h1 class="short-about__title"><span class="short-about__span typing"></span><br>developer</h1>
                </vue-typed-js>
              </article>

            <p class="about-me">{{ $t('aboutme.text1') }}</p>
            <p class="about-me">{{ $t('aboutme.text2') }}</p>
            <p class="about-me">{{ $t('aboutme.text3') }}</p>

            <div id="more"></div>

            <!-- <div @click="appendNext" class="btn-more">Read more {{counter}}</div>      -->

          
          </div>

          <div class="slide slide-nd text-white skills" v-in-viewport='{ margin: "-40% 0%" }'>
            <h1 class="light-big">{{ $t('skills') }}:</h1>            
            <Skills/>
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,0L60,10.7C120,21,240,43,360,53.3C480,64,600,64,720,85.3C840,107,960,149,1080,149.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> -->

          </div>


          <div class="slide showcase">
            <Showcase/>
          </div>

          <div class="slide companies"  v-in-viewport>
            <Companies/>
          </div>
          <div class="slide cta"  v-in-viewport>
            <Cta/>
          </div>
          <footer class="text-center">
            <p>Made with love using Vue.js 2020</p>
            
          </footer>
      </div> <!-- slider-wrapper -->
<!--     <customcursor
      :targets="['img', 'a', 'button', 'custom-hover']"
      :circleColor="'#f0b045'"
      :circleColorHover="'#2f2f2f'"
      :dotColor="'#f0b045'"
      :dotColorHover="'lightgray'"
      :hoverSize="1.8"
    ></customcursor> -->

    
  </div> <!-- #app -->
</template>


<script>

import Companies from './components/Companies.vue'
import Skills from './components/Skills.vue'
import Showcase from './components/Showcase.vue'
import Cta from './components/Cta.vue'
import langSwitch from './components/langSwitch.vue'
// import customcursor from './components/customcursor.vue'

export default {
  name: 'App',
  components: {
    Companies,
    Showcase,
    Skills,
    Cta,
    langSwitch
    // customcursor,
  },
  data(){
    return {
      title: 'Front-end'      
   }
  },
     metaInfo() {
        return { 
            title: "Bartlomiej Zalech - portfolio",
            meta: [
                // { name: 'description', content:  ''},
                // { property: 'og:title', content: ""},
                { property: 'og:site_name', content: 'Portfolio'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
            ],

        }
    },
}



</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700&display=swap&subset=latin-ext');
/** { cursor: none; }*/
body{
  margin: 0;
  font-family: 'Open Sans Condensed', sans-serif;
  padding: 0;
}
.slides-wrapper{
  position: relative;
}
h1.light-big{
  font-size: 2em;
  font-weight: lighter;
}
img.round{
  border-radius: 50%;
}
.slide{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;  
  justify-content: center; 
  align-items: center;
  transition: all .5s;

}

.slide.slide-nd{
  /*position: absolute;*/
  transform: scale(.9);
  /*bottom: -90%;*/
  /*width: 90%;*/
  background-color: #000;
  margin-top: -8%;  
  /*margin: auto;*/
  /*transform: translate3d(0, -9%, 0)*/
}
.slide.showcase{
  margin-top: 4em;
}
.short-about__title{
  font-size: 2em;
  font-weight: 400;
  text-align: center;
  width: 100%;
}
.short-about__title .typed-cursor{
  color: #f0b045;
}
.text-white{
  color: #fff;
}
.text-center{
  text-align: center; 
}
a.custom-link{
  text-decoration: none; 
  color: #f0b045;
  position: relative; 
}
a.custom-link:after{
  content: ' ';
  width: calc( 100% + 6px );
  position: absolute; 
  left: -2px;
  bottom: -5px;
  height: 3px;
  background-color: #f0b045;
  transition: all .35s;
  z-index: -1;  

}
a.custom-link:hover{
  color: #fff;
  transition: all .35s;
}
a.custom-link:hover:after{
  height: 100%;
}
.about-me{
  margin: 5px 10px;
  text-align: center;
}
@media only screen and (min-width: 768px){
  h1.light-big{
    font-size: 3em;
  }
}
</style>

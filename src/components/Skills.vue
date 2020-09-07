<template>
  
            <ul class="tech-list">

            <li>
              <span><a target="_blank" href="https://developer.mozilla.org/pl/docs/HTML/HTML5">HTML5</a></span>
              
              <!-- <p>Semantyczny kod strony jest dla mnie bardzo ważny dlatego najnowsze znaczniki HTML5 nie są mi obce</p> -->
            </li><!--
            --><li>
              <span><a target="_blank" href="https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/">CSS3</a></span>
              <!-- <p>Stylowanie i animacja elementów z użyciem css3 to czysta przyjemność</p> -->
            </li><!--
            --><li>
              <span><a target="_blank" href="https://pl.wikipedia.org/wiki/Responsive_web_design">RWD</a></span>
              <!-- <p>kodowanie responsywnych stron z zasadą mobile first, piszę własne reguły lub korzystam z gotowych rozwiazań</p> -->
            </li><!--
            --><li>
              <span><a target="_blank" href="https://sass-lang.com/">SASS / LESS</a></span>
              <!-- <p>Lepsza organizacja pracy nad stylami.</p> -->
            </li><!--
            --><li>
              <span><a target="_blank" href="https://developer.mozilla.org/pl/docs/Web/JavaScript">JavaScript</a></span>
              <!-- <p>Pisanie skryptów to nieodłączny element pracy z webowymi aplikacjami</p> -->
            </li><!--           
            --><li>
              <span><a target="_blank" href="https://jquery.com/">jQuery</a></span>
              <!-- <p>Doczytywanie asynchroniczne danych za pomoca AJAX w jquery jest najlepszym udogodnieniem</p> -->
            </li><!--           
            --><li>
              <span><a target="_blank" href="https://gulpjs.com/">Gulp</a></span>
              <!-- <p>Autoprefixer, minify ,browser sync oraz wiele innych automatyzują część mojej pracy</p> -->
            </li><!--
            --><li>
              <span><a target="_blank" href="https://git-scm.com/">Git</a></span>
              <!-- <p>Codzienne commitowanie kodu to dobry nawyk</p> -->
            </li><!--
            --><li>
              <span><a target="_blank" href="https://getbootstrap.com/">Bootstrap</a></span>
              <!-- <p>Ułatwia tworzenie responsywnego interfejsu strony</p> -->
            </li><!--
            --><li>
              <span><a target="_blank" href="https://pl.wordpress.org/">Wordpress</a></span>
              <!-- <p>Tworzenie własnych pluginów, motywów z wykorzystaniem niestandardowych pól (ulubiona wtyczka ACF pro).</p> -->
            </li><!--
            --><li>
              <span><a target="_blank" href="https://www.atlassian.com/pl/software/jira">Jira</a></span>
              <!-- <p>Praca według metodologii Scrum i Kanban</p> -->
            </li><!--
            --><li>
              <span><a target="_blank" href="https://www.invisionapp.com/">inVision</a></span>
              <!-- <p>Bardzo dobry internetowy pośrednik między grafikiem, projekt menadżerem oraz web developerem</p> -->
            </li><!--
            --><li>
              <span><a target="_blank" href="https://www.adobe.com/pl/products/photoshop.html">Photoshop</a></span>
              <!-- <p>Znajomość cięcia szablonów psd, podstawowej obróbki grafiki dla strony www</p> -->
            </li><!--
            --><li>
              <span><a target="_blank" href="https://www.npmjs.com/">npm</a></span>
              <!-- <p>Wygodne narzędzie do zarządzania pakietami</p> -->
            </li><!--
            --><li>
              <span><a target="_blank" href="https://www.jetbrains.com/youtrack/">YouTrack</a></span>
              <!-- <p>Kolejne narzędzie do zarządzania projektami</p> -->
            </li><!--
            --><li>
              <span><a target="_blank" href="https://getgrav.org/">Grav</a></span>
              <!-- <p>Wygodne narzędzie do zarządzania pakietami</p> -->
            </li><!--
            --><li>
              <span><a target="_blank" href="https://www.atlassian.com/pl/software/bamboo">Bamboo</a></span>
              
            </li><!--
            --><li>
              <span><a target="_blank" href="https://vuejs.org/">VueJs</a></span>
              
            </li>
            <!--
            --><li>
              <span><a target="_blank" href="https://www.php.net/">Php</a></span>              
            </li>
            <!--
            --><li>
              <span><a target="_blank" href="https://woocommerce.com/">Woocommerce</a></span>              
            </li>
          </ul>


  
</template>

<script>
export default {
  name: 'Skills',
}
</script>
<style>
.skills.slide-nd.in-viewport{
  transform: scale(1);
  /*width: 100%;*/
}
.skills.slide-nd.above-viewport{
  transform: scale(1);
  /*width: 100%;*/
}
.skills.in-viewport .tech-list li {
  opacity: 1;
}
.skills.above-viewport .tech-list li{
  opacity: 1;  
}

.slide.slide-nd{
  /*position: absolute;*/
  transform: scale(.9);
  min-height: 70vh;
  /*bottom: -90%;*/
  /*width: 90%;*/
  background: #fdbb2d;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #1a2a6c, #b21f1f, #fdbb2d);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #1a2a6c, #b21f1f, #fdbb2d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  margin-top: -10%;  
  /*margin: auto;*/
  /*transform: translate3d(0, -9%, 0)*/
}

.tech-list{
  list-style: none;
  overflow: hidden;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 0;
  padding-right: 0;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.tech-list li{
  opacity: 0;
  /*flex-grow: 3;*/
  margin-bottom: 34px;
  width: 51%;
  /*display: inline-block;*/
  /*width: 100%;*/
  /*padding-right: 30px;*/
  box-sizing: border-box;
  vertical-align: top;
  transition: transform .35s, opacity 1s .5s;
}
.tech-list li span{
  margin-left: 95px;
  position: relative;
  font-size: 1em;
  display: block;
  line-height: 1.4;
}
.tech-list li span a, .tech-list li span a:visited{
  cursor: pointer;
  text-decoration: none;
  color: #fff;
}

.tech-list li span:before{
  content: '';
  background-image: url('~@/assets/skills_icons.png');
  position: absolute;
  left: -55px;
  top: -9px;
  border-radius: 50%;
  border: 1px solid #fff;
  width: 40px;
  height: 40px;
  background-size: 100% auto;
  background-repeat: no-repeat;
}
.tech-list li:hover{

  transform: scale(1.05);
}
.tech-list li:nth-child(1) span:before{
  background-position-y: 0;
}
.tech-list li:nth-child(2) span:before{
  background-position-y: -40px;
}
.tech-list li:nth-child(3) span:before{
  background-position-y: -80px;
}
.tech-list li:nth-child(4) span:before{
  background-position-y: -120px;
}
.tech-list li:nth-child(5) span:before{
  background-position-y: -160px;
}
.tech-list li:nth-child(6) span:before{
  background-position-y: -200px;
}
.tech-list li:nth-child(7) span:before{
  background-position-y: -240px;
}
.tech-list li:nth-child(8) span:before{
  background-position-y: -280px;
}
.tech-list li:nth-child(9) span:before{
  background-position-y: -320px;
}
.tech-list li:nth-child(10) span:before{
  background-position-y: -360px;
}
.tech-list li:nth-child(11) span:before{
  background-position-y: -400px;
}
.tech-list li:nth-child(12) span:before{
  background-position-y: -440px;
}
.tech-list li:nth-child(13) span:before{
  background-position-y: -480px;
}
.tech-list li:nth-child(14) span:before{
  background-position-y: -520px;
}
.tech-list li:nth-child(15) span:before{
  background-position-y: -560px;
}
.tech-list li:nth-child(16) span:before{
  background-position-y: -600px;
}
.tech-list li:nth-child(17) span:before{
  background-position-y: -640px;
}
.tech-list li:nth-child(18) span:before{
  background-position-y: -680px;
}
.tech-list li:nth-child(19) span:before{
  background-position-y: -720px;
}
.tech-list li:nth-child(20) span:before{
  background-position-y: -760px;
}
@media all and (min-width: 768px) {
  .tech-list li{
    width: 25%;
  }
}

</style>
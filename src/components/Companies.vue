<template>
  <div class="container-fluid">

    <h1 class="light-big text-center">{{ $t('company') }}</h1>
    
    <div class="row">
      
      <div class="col-xs-12 company-wrapper">
        <a href="https://oktawave.com/" target="blank">
          <img alt="Oktawave logo" src="~@/assets/oktawave.svg">    
        </a>

        <a href="https://www.synermedia.pl/" target="blank">        
          <img alt="synermedia logo" src="~@/assets/synermedia.svg">
        </a>

        <a href="https://rockon.tech/" target="blank">
          <img alt="rockon logo" src="~@/assets/rockon.png">     
        </a>

      </div>

    </div>

  </div>
  
</template>

<script>
export default {
  name: 'Companies',
}
</script>

<style>
.slide.companies{
  min-height: 50vh;
  margin: 60px auto 60px auto;
}

.companies.in-viewport img{
  transform: scale(1);
  opacity: 1;
}
.companies.above-viewport img{
  transform: scale(1);
  opacity: 1;
}
.company-wrapper{
  justify-content: space-between;
  vertical-align: middle;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
}
.company-wrapper a{
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-grow: 1;
}
.company-wrapper img{
  transform: scale(0);
  opacity: 0;
  margin: auto;
  margin-bottom: 25px;
  transition: all .35s;
  transition-delay: .5s;
  max-width: 200px;
  max-height: 80px;
  display: block;
  /*margin-bottom: 25px;*/
  width: 100%;
  height: auto;
  padding-left: 25px;
  padding-right: 25px;
}
@media all and (min-width: 768px) {
  .companies img{
    margin-bottom: auto;
  }

}
</style>
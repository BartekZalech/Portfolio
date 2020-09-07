
<template>
  <div class="locale-changer">

    <div class="lang-switch en" value="en" v-on:click='toggle = !toggle' v-show="toggle">
        <country-flag country='gb' size='small' rounded.true/>
        <input type="radio" value="en" v-model="$i18n.locale">
    </div>
    <div class="lang-switch pl" value="pl" v-on:click='toggle = !toggle' v-show="!toggle">
        <country-flag country='pl' size='small' rounded.true/>
        <input type="radio" value="pl" v-model="$i18n.locale">
    </div>
  </div>


</template>

<script>
import CountryFlag from 'vue-country-flag'
 

export default {
  name: 'locale-changer',
  data(){
    return {
        toggle: true,
        langs: ['pl', 'en'] }
  },
  components: {
      CountryFlag
  },
}
</script>

<style  scoped>
.locale-changer{
    position: fixed;
    right: 0;
    z-index: 777;
}
.lang-switch{
    position: relative;

}
.lang-switch input{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    z-index: 99;
    margin: 0;
}

</style>
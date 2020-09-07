<template>
  <div>
    <h1 class="light-big text-center">{{ $t('cta.text1') }}<br> {{ $t('cta.text2') }} <a class="custom-link" href="mailto:bartlomiej.zalech@gmail.com">{{ $t('cta.contact') }}</a> {{ $t('cta.text3') }}!</h1>

  </div>
  
</template>

<script>
export default {
  name: 'CTA',
}
</script>
<style>
.slide.cta{
	min-height: 50vh;
}

</style>
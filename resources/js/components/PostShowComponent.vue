<template>
  <div>
    <div>
    ciao
    </div>

  </div>
</template>

<script>
export default {
    name:'PostShowComponent',
    props:{postToShow:Array},

    mounted(){

        console.log(this.postToShow)
    }

}
</script>

<style lang="scss" scoped>

</style>

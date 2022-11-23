<template>
  <div>
    <div v-for="post in posts.result.data" :key="post.id">{{post.title}}</div>
    <div>ciaxxx</div>

  </div>

</template>

<script>
export default {
    name:'PostListComponent',
    props:{posts: Object },
    mounted(){
        console.log('xiao',this.posts)
    }

}
</script>

<style lang="scss" scoped>

</style>


<template>
  <div>
    <div v-for="post in posts.result.data" :key="post.id">

        {{post.title}}
        <button @click="showPost(post.id)">show</button>

    </div>





  </div>

</template>

<script>
export default {
    name:'PostListComponent',
    props:{posts: Object },
    mounted(){
        console.log('xiao',this.posts)
    },
    methods:{
        showPost(id){
            this.$emit('postToShow',id)
        }
    }

}
</script>

<style lang="scss" scoped>

</style>


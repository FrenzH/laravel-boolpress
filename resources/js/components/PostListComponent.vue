<template>
  <div>
    <div v-for="post in posts.data" :key="post.id">

        {{post.title}}
        <button @click="showPost(post.id)">show</button>

    </div>
    <div>
        <button @click="go(posts.prev_page_url, currentPage-1)">prev</button>
        <button @click="go(posts.next_page_url, currentPage + 1)">next</button>

    </div>





  </div>

</template>

<script>
export default {
    name:'PostListComponent',
    props:{posts: Object },
    computed:{
        currentPage(){
            return this.posts.current_page
        }
    },
    mounted(){
        console.log('list',this.posts.next_page_url)

    },
    methods:{
        showPost(id){
            this.$emit('postToShow',id)
        },
        go(url,currentPage){
            console.log('dopp')
            console.log(currentPage)
                this.$router.push({ path: '/posts', query: { page: currentPage} })
                this.$emit('requestPage', url)
                console.log(url)
        }
    }

}
</script>

<style lang="scss" scoped>

</style>


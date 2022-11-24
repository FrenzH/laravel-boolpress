<template>
    <div>
        <div v-if="loading">

        </div>
        <div v-else>
        <PostListComponent :posts="pageResult" @postToShow="postDetail" />
        </div>

    </div>


</template>

<script>
import PostListComponent from '../components/PostListComponent.vue';
export default {
    name:'PostsIndex',
    data(){
        return{
            pageResult:{},
            loading:true
        }

    },
    mounted(){

        axios.get('/api/posts').then(response=>{


                if(response.data.success){
                    this.pageResult=response.data
                    console.log(this.pageResult)
                    this.loading=false


                }else{
                    this.errorMessage=response.data.error
                }

            })
    },
    methods:{
        postDetail(id){

            this.$router.push('/posts/' + id)
        }
    },
    components:{PostListComponent}

}
</script>

<style lang="scss" scoped>

</style>

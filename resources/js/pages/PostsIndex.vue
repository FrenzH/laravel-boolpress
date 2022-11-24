<template>
    <div>
        <div v-if="loading">

        </div>
        <div v-else>
          <PostListComponent :posts="pageResult" @postToShow="postDetail" @requestPage="loadPage"/>
        </div>

    </div>


</template>

<script>
import PostListComponent from '../components/PostListComponent.vue';
export default {
    name:'PostsIndex',
    data(){
        return{
            pageResult:undefined,
            loading:true
        }

    },
    mounted(){

      //  const page = this.$route.query.page ? this.$route.query.page : 1;
        this.loadPage('/api/posts');
        const page = this.$route.query.page;
        console.log(this.page);

    },
    methods:{
        postDetail(id){

            this.$router.push('/posts/' + id)
        },
        loadPage(url){

            axios.get(url).then(response=>{
                if(response.data.success){
                    console.log(response.data.result)

                    this.pageResult=response.data.result;
                    console.log(this.pageResult)
                    this.loading = false;


                }else{


            }}).catch(e =>{
                console.log(e);
            })
        }
    },
    components:{PostListComponent}

}
</script>

<style lang="scss" scoped>

</style>

<template>
    <div v-if="!detail">

        <div v-for="post in posts" :key="post.id">
           <span @click="showPost(post.id)">{{post.title}}</span>
        </div>
    <button @click="goNext(response.next_page_url)">next</button>
    <button @click="goPrev(response.prev_page_url)">prev</button>


    </div>
    <div v-else>
        <PostShowComponent :postToShow='PostForComponent'/>
    </div>
</template>

<script>
import PostShowComponent from './PostShowComponent.vue';
    export default {
        name:'PostComponent',
        data(){
            return{
                posts:[],
                errorMessage:'',
                response:undefined,
                detail:false,
                PostForComponent:undefined
            }
        },
        mounted() {
            axios.get('/api/posts').then(response=>{
                console.log(response);

                if(response.data.success){
                    this.posts=response.data.result.data
                    this.response=response.data.result;

                }else{
                    this.errorMessage=response.data.error
                }

            })
        },
        methods:{
            goNext(url){

               console.log(url)
               axios.get(url).then(response=>{
                console.log(response);

                if(response.data.success){
                    this.posts=response.data.result.data
                    this.response=response.data.result;

                }else{
                    this.errorMessage=response.data.error
                }

            })


            },
            goPrev(url){

            console.log(url)
            axios.get(url).then(response=>{
            console.log(response);

            if(response.data.success){
                this.posts=response.data.result.data
                this.response=response.data.result;

            }else{
                this.errorMessage=response.data.error
            }

})


},
showPost(id){
    axios.get('/api/posts/' + id).then(response=>{


                if(response.data.success){
                    this.PostForComponent=response.data.result
                    console.log(this.PostForComponent)
                    this.response=response.data.result;
                    this.detail=true;

                }else{
                    this.errorMessage=response.data.error
                }

            })

}
        },
        components:{
            PostShowComponent
        }
    }
</script>

<style scoped lang="scss">
</style>

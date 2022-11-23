<template>
    <div>

        <div v-for="post in posts" :key="post.id">
            {{post.title}}
        </div>
<button @click="goNext(response.next_page_url)">next</button>
<button @click="goPrev(response.prev_page_url)">prev</button>

    </div>
</template>

<script>
    export default {
        name:'PostComponent',
        data(){
            return{
                posts:[],
                errorMessage:'',
                response:undefined
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


}
        }
    }
</script>

<style scoped lang="scss">
</style>

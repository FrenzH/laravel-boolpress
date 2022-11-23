<template>
    <div>

        <div v-for="post in posts" :key="post.id">
            {{post.title}}
        </div>


    </div>
</template>

<script>
    export default {
        name:'PostComponent',
        data(){
            return{
                posts:[],
                errorMessage:''
            }
        },
        mounted() {
            axios.get('/api/posts').then(response=>{
                console.log(response);

                if(response.data.success){
                    this.posts=response.data.result.data
                }else{
                    this.errorMessage=response.data.error
                }

            })
        }
    }
</script>

<style scoped lang="scss">
</style>

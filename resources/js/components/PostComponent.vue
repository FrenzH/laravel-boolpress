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

                if(response.status){
                    this.posts=response.data
                }

            })
        }
    }
</script>

<style scoped lang="scss">
</style>

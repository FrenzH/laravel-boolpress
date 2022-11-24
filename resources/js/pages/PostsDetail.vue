<template>
  <div v-if="loading">

    {{post.title}}

  </div>
  <div v-else>loading</div>

</template>

<script>
export default {
    name:"PostsDetail",
    data(){
        return{
            post:undefined,
            loading:false

        }
    },


    mounted(){
        const id = this.$route.params.id;
        this.loadPage('api/posts/' + id)
    },
    methods:{
        loadPage(url){


            console.log(url);

            axios.get(url).then(response=>{
                if(response.data.success){
                   // const k = response.data.result;
                   // let flag = Object.keys(k)[0];
                    console.log(response.data.result)

                    this.post=response.data.result;
                   // console.log(this.$route.params.id);
                   console.log(this.post)

                    this.loading = true;
                }
              //  else-if () {

              //  }

                else{

                }

            }).catch(e =>{
                console.log(e);
            })
        }
    }

}
</script>

<style lang="scss" scoped>

</style>

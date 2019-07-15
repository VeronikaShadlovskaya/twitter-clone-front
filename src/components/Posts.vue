<template>
  <div id="add-blog">   
    <form>
      <textarea type="text" v-model="content" placeholder="Новый пост..."></textarea> 
      <div class="row">
        <div class="col-md-9"></div>
        <div class="col-md-3"> 
          <button @click.prevent="addPost" class="btn btn-primary  ml-auto">Опубликовать
          </button>
        </div>
      </div>
    </form> 

    <div>
      <like :key="post.id" v-for="post in this.$store.state.posts" id="single-post" :post="post" />
    </div> 
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapState} from 'vuex'
  import like from './like.vue'

  export default {
    name: "Posts",
    components: {
     like
   },
   data: function () {
    return {      
      content:""
    }
  },
  mounted()
  {
    try{
     axios.get("https://jsonplaceholder.typicode.com/posts?userId=1")
     .then(response =>{
      this.$store.dispatch('setPosts',response.data)
    })
   }
   catch(error){
    console.log(error)
  }      
},

methods:
{
 addPost(){
  try{
    axios.post("https://jsonplaceholder.typicode.com/posts",{
     body:this.content
   }).then(response=>{this.$store.dispatch('addPost',response.data);
 }).then(this.content="");
 }
 catch(error){
  console.log(error)
}      
}
}

};
</script>


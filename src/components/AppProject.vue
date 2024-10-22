<script>
import axios from 'axios';
import AppCardProject from '../components/AppProjectCard.vue';
export default {
  name:'AppProject',
  components:{
        AppCardProject,
    },
    data(){
        return{
            projects:[]
        }
    },
    created(){
        this.getProjects()
    },
    methods:{
        getProjects(){
            axios.get('http://127.0.0.1:8000/api/index')
            .then((results) => {
                this.projects = results.data
            })
        }
    }
}
</script>
<template>
  <div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center">L'elenco dei progetti:</h1>
            </div>
            <AppCardProject :projects="projects" />
        </div>
    </div>
  </div>
</template>
<style>
  
</style>
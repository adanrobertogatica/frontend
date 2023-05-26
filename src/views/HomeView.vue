<template>
<div class="panel panel-default">
  <input type="text" class="form-control" v-model="searchValue" placeholder="Search users..." > <hr>
  <div class="panel-heading">Users </div>
    <div class="panel-body">
      <div class="row">
        <CardProfile v-for="user in searchResult" v-bind:key="user.id" :user=user />
      </div>
    </div>
  </div>


  
</template>

<script>
import CardProfile from '@/components/CardProfile.vue'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'ProfileList',
  data: function () {
    return {
      searchValue:''
    }
  },
  components: {
    CardProfile
  },
  computed:{
    ...mapGetters([
      'users_list'
    ]),
    searchResult() {
      let tempRecipes = this.users_list
      
      if (this.searchValue != '' && this.searchValue) {
            tempRecipes = tempRecipes.filter((item) => {
              return item.firstName
                .toUpperCase()
                .includes(this.searchValue.toUpperCase())
            })
          }
        return tempRecipes
    }
  },
  methods:{
    ...mapActions([
      'GET_USERS'    
    ])
  },
  mounted(){
    this.GET_USERS();
  }
}
</script>

<template>
   
      <div class="card text-center" style="width: 25rem;">
        <img :src="user_profile.picture">
        <div class="card-body">
          <h5 class="card-title"> <b>{{ user_profile.title}}. {{ user_profile.firstName}} {{ user_profile.lastName}}</b></h5>
          <p class="card-text">
            <ul class="list-group">
              <li class="list-group-item">Gender: {{ user_profile.gender  }}</li>
              <li class="list-group-item">Email: {{ user_profile.email  }}</li>
              <li class="list-group-item">Birth: {{ dateOfBirth }}</li>
              <li class="list-group-item">Phone: {{ user_profile.phone  }}</li>
              <li class="list-group-item">City: {{ user_profile.location.city }}</li>
              <li class="list-group-item">Street: {{ user_profile.location.street }}</li>
              <li class="list-group-item">State: {{ user_profile.location.state }}</li>
              <li class="list-group-item">Country: {{ user_profile.location.country }}</li>
            </ul>
          </p>

          <button @click="$router.back()" class="btn btn-primary">Back</button>
        </div>
      </div>
  </template>
  
<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  computed:{
    ...mapGetters([
      'user_profile'
    ]),
    ...mapGetters([
      'user_id'
    ]),
    dateOfBirth(){
      return this.user_profile.dateOfBirth.substring(0, 10)
    }
  },
  methods:{
    ...mapActions([
      'GET_USER'
    ]),
  }
}
</script>
<template>
  <div class="col-sm-4">
    <br>
    <div class="panel panel-default border rounded">

    <div class="panel-body">
      <div class="row">
        <div class="col-2"><img class="rounded-circle img-fluid" alt="avatar1" :src="user.picture" width="100" height="100"/></div>
        <div class="col-8 text-nowrap " > <b>{{ user.firstName }}</b></div>
        <div class="col-2"><button class="btn" v-on:click="goprofile()"><i class="fa fa-arrow-right"></i></button></div>
      </div>
    </div>
  </div>
  </div>


  
</template>

<script>
import { mapActions } from 'vuex'
import router from "@/router";

export default {
  name: 'CardProfile',
  props: {
    user: {}
  },
  methods:{
    ...mapActions([
      'GET_USER'    
    ]),
    
    goprofile: function () {
      /*Es importante que al cambiar de página el valor del usuario seleccionado se guarde en el store de Vuex y en la página de
      perfil del usuario la información se muestre desde el store de Vuex.*/

      //Guardo en el store de Vuex objeto user y luego abro la nueva pantalla
      this.GET_USER(this.user.id);
      //Abro la url que contiene el perfils
      router.push({ name: "profile" });    }
  }
}
</script>

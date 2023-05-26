import { createStore } from 'vuex'

export default createStore({
  state: {
    users_list:[],
    user_profile:{},
  },
  getters: {
    users_list: state => state.users_list,
    user_profile: state => state.user_profile  
  },
  mutations: {
    SET_USERS(state, users_list ){
      state.users_list = users_list
    },
    SET_USER(state, user_profile ){
      state.user_profile = user_profile
    }
  },
  actions: {
      async GET_USERS({commit}){
        const headers = { "app-id": "64702f3cb29c5ccc80bd442c" }
        const res = await fetch("https://dummyapi.io/data/v1/user", { headers })
        const {data} = await res.json();
        commit('SET_USERS', data)
      },
      async GET_USER({commit},user_id){
        const headers = { "app-id": "64702f3cb29c5ccc80bd442c" }
        const res = await fetch("https://dummyapi.io/data/v1/user/" + user_id, { headers })
        const json = await res.json();
        commit('SET_USER', json)
      }
  },
  modules: {
  }
})

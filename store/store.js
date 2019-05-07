import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store  = new Vuex.Store({
    state:{
        price: 0 
        
    },
     mutations:{
        increase_price: (state ) =>{
            state.price  += 1
        },
        decrease_price: (state ) =>{
            state.price  -= 1
        }
     }, 
     actions:{
        increase_price:({ commit } ) =>{
            commit('increase_price')
        },
        decrease_price:({ commit } ) =>{
            commit('decrease_price')
        }
     },
     getters:{
        current_price: state  =>{
            return state.price;
        }
    }
}); 
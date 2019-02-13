'use strict';

import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const actions = {
    updateShowMobileSearch({ commit }, payload) {
        commit('updateTasks', payload);
    },
    async updateTasks({ commit }) {
        Vue.http.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(resFinal => {
                commit('updateTasks', resFinal.body);
            });
    },
    addTask({ commit },payload) {
        commit('addTask', payload);
    }
};

export default actions;
'use strict';

const mutations = {
    updateTasks(state, payload) {
        state.tasks = payload;
    },
    addTask(state, payload) {
        state.tasks.push(payload);
    }
};

export default mutations;

<template>
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="indigo" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>TODO List</v-toolbar-title>
        </v-toolbar>
        <v-list two-line subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Lista de tarefas</v-list-tile-title>
              <v-list-tile-sub-title>Total de tarefas -> {{ getCompleted }}/{{ getTasks.length }} tarefas</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-btn color="pink" dark small absolute top right fab @click="dialog = !dialog">
              <v-icon>add</v-icon>
        </v-btn>
        <v-list subheader two-line  v-for="(todo, i) in getTasks" :key="i">
          <v-list-tile>
                <v-list-tile-action>
                    <v-checkbox v-model="todo.completed"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content @click="todo.completed = !todo.completed">
                <v-list-tile-title>{{ todo.title }}</v-list-tile-title>
                    <v-list-tile-sub-title>Número da task: {{todo.id}}</v-list-tile-sub-title>
                </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-text>
              <v-text-field label="Todo" v-model="taskContent"></v-text-field>
              <small class="grey--text">Adicione sua tarefa</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="addTask">Confirmar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            taskContent: ''
        }
    },
    computed: {
        getTasks() {
            return this.$store.getters.getTasks;
        },
        getCompleted() {
            let count = 0;
            this.getTasks.forEach(element => {
                if (element.completed)
                    count++;
            });
            return count;
        }
    },
    created: function () {
        this.$store.dispatch('updateTasks');
    },
    methods: {
        addTask() {
            if (this.taskContent !== '') {
                this.$store.dispatch('addTask',{
                    userId: 1,
                    id: Math.random(),
                    title: this.taskContent,
                    completed: false
                }); 
                this.dialog = false;
                this.taskContent = '';
            }
        }
    }
}
</script>

<style>

</style>



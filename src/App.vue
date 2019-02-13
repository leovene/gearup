<template>
  <v-app>
    <v-toolbar color="blue" app absolute>
      <v-toolbar-title class="headline text-uppercase">
        <span>GEARUP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <TodoList/>
    </v-content>
  </v-app>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList
  },
  data () {
    return {
      //
    }
  }
}
</script>

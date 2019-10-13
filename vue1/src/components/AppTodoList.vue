<template>
    <div class="todos">
        <div v-for="todo in todos" :key="todo.id">
            <AppTodoItem :todo="todo" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppTodoItem, { Todo } from './AppTodoItem.vue'

// このコンポーネント内でデータ表示のために使う型を定義（内部に子コンポーネントでexportした型定義を含む）
export type Data = {
    todos: Todo[]
}

export default Vue.extend({
    data: (): Data => ({
        todos: []
    }),
    components: {
        AppTodoItem
    }
})
</script>
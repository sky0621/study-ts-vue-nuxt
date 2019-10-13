<template>
    <div class="todo">
        {{ myTask }}
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"

// このコンポーネントで必要なパラメータを定義する型
export type Todo = {
    id: string
    task: string
    done: boolean
}

export default Vue.extend({
    props: {
        // 定義したTodo型として、このコンポーネントではパラメータを受け取る
        todo: Object as PropType<Todo>
    },
    computed: {
        myTask(): string {
            return this.todo.task
        }
    }
})
</script>
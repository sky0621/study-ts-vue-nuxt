<script lang="ts">
import Vue from 'vue'

// 型定義をアノテーションで付与
export type Todo = {
    id: string
    task: string
    done: boolean
}
export type Data = {
    firstName: string
    lastName: string
    todos: Todo[]
}

export default Vue.extend({
    data: (): Data => ({
        firstName: 'Taro',
        lastName: 'Yamada',
        todos: []
    })
})
</script>

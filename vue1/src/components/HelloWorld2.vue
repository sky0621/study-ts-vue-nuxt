<template>
    <div @click="onClickElement">
        test
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export type Rect = {
    width: number
    height: number
}

export type Position = {
    top: number
    left: number
}

export default Vue.extend({
    data: () => ({
        bounds: null as ClientRect | DOMRect | null,
    }),
    methods: {
        onClickElement({ target }: { target: HTMLElement }): void {
            this.bounds = target.getBoundingClientRect()
        }
    },
    computed: {
        boundsInfo(): string {
            if (this.bounds === null) return ""
            return JSON.stringify(this.bounds)
        },
        // TODO: 
    }
})
</script>
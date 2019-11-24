```vue
<input v-model="searchText">

<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>
```

```vue
var ComponentA = { /* ... */ }
var ComponentB = { /* ... */ }
var ComponentC = { /* ... */ }

new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})
```




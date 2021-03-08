# `vue-emitter-bus`

![npm](https://img.shields.io/npm/v/vue-emitter-bus?color=orange&label=vue-emitter-bus&style=flat-square)

> `EventBus for Vue3.`
>
> > 具体用法请参考[`mitt`](https://github.com/developit/mitt)

## `main.js`
```js
import {createApp} from 'vue'
import App from './App.vue'

import {EmitterBus} from 'vue-emitter-bus'

const app = createApp(App)
  .use(EmitterBus)
  // 或者
  // .use(EmitterBus, {propertyName: '$bus'})

app.mount('#app')
```



## 1、当前 `Vue` 实例直接使用

> `this.$copyText('')`

```vue
<script>
export default {
  name: "Test",
  created() {
      // listen to an event
      this.$bus.on('foo', e => console.log('foo', e) )

      // listen to all events
      this.$bus.on('*', (type, e) => console.log(type, e) )

      // fire an event
      this.$bus.emit('foo', { a: 'b' })

      // clearing all events
      this.$bus.all.clear()

      // working with handler references:
      function onFoo() {}
      this.$bus.on('foo', onFoo)   // listen
  },
  unmounted () {
      this.$bus.off('foo', onFoo)  // unlisten
  }
  methods: {}
}
</script>
```



## 2、单独使用

```js
import {emitter} from "vue-emitter-bus"

// listen to an event
emitter.on('foo', e => console.log('foo', e) )

// listen to all events
emitter.on('*', (type, e) => console.log(type, e) )

// fire an event
emitter.emit('foo', { a: 'b' })

// clearing all events
emitter.all.clear()

// working with handler references:
function onFoo() {}
emitter.on('foo', onFoo)   // listen
emitter.off('foo', onFoo)  // unlisten
```


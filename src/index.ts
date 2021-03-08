import {App} from 'vue'
import mitt from 'mitt'

const emitter = mitt()

const EmitterBus = {
  install (app: App<any>): void {
    app.config.globalProperties.$bus = emitter
  }
}

export {
  EmitterBus,
  emitter
}
import {App} from 'vue'
import mitt from 'mitt'
import {getOption, InstallerOption, setOption} from './option'

const emitter = mitt()

const EmitterBus = {
  install (app: App<any>, opts?: InstallerOption): void {
    if (opts) {
      setOption(opts)
    }
    opts = getOption()
    app.config.globalProperties[opts.propertyName] = emitter
  }
}

export {
  EmitterBus,
  emitter
}
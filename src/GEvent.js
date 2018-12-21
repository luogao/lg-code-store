import { spliceOne } from '../src/utils'

class GEvent {
  constructor(name) {
    this.name = name
    this.listeners = []
  }

  getListenersLength() {
    return this.listeners.length
  }

  getListeners() {
    return this.listeners
  }

  addListener(handler) {
    this.listeners.push(handler)
  }

  trigger(args) {
    const listeners = this.getListeners()
    if (listeners.length === 0) {
      return false
    }
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      typeof listener === 'function' && listener.apply(this, args)
    }
  }

  remove(listener) {
    const listeners = this.getListeners()
    const listenerIndex = listeners.indexOf(listener)
    if (listenerIndex !== -1) {
      spliceOne(listeners, listenerIndex)
    }
  }

  removeAll() {
    this.listeners = []
  }
}

export default GEvent

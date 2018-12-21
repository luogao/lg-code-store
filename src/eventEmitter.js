import GEvent from './GEvent'

class GEventEmitter {
  constructor() {
    this.events = {}
  }

  _add(eventName) {
    if (!this._hasEvent(eventName)) {
      this.events[eventName] = new GEvent(eventName)
    }
    return this.events[eventName]
  }

  _getEvent(eventName) {
    if (this._hasEvent(eventName)) {
      return this.events[eventName]
    }
    return null
  }

  _hasEvent(eventName) {
    return !!this.events[eventName]
  }

  getEventNames() {
    return Object.keys(this.events)
  }

  addEventListener(eventName, handler) {
    if (typeof handler !== 'function')
      throw new TypeError('"listener" argument must be a function')

    const event = this._getEvent(eventName)
    if (!event) {
      console.warn(
        `Dosen't have ${eventName} registered, please register it first`
      )
      return false
    }
    event.addListener(handler)
  }

  on(eventName, handler) {
    if (typeof handler !== 'function')
      throw new TypeError('"listener" argument must be a function')

    this._add(eventName).addListener(handler)
  }

  emit(eventName, data) {
    const event = this._getEvent(eventName)
    if (!event) {
      return false
    }
    event.trigger(data)
  }

  removeListener(eventName, handler) {
    if (typeof handler !== 'function')
      throw new TypeError('"listener" argument must be a function')

    if (!handler) return false
    const event = this._getEvent(eventName)
    if (!event) {
      return false
    }
    event.remove(handler)
  }

  removeAllListener(eventName) {
    const event = this._getEvent(eventName)
    if (event) {
      event.removeAll()
      return this
    }
  }
}

export default GEventEmitter

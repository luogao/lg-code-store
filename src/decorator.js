function readonly(target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}

const asyncClass = errorHandler => target => {
  Object.getOwnPropertyNames(target.prototype).forEach(key => {
    const func = target.prototype[key]
    target.prototype[key] = async (...args) => {
      try {
        await func.apply(this, args)
      } catch (error) {
        errorHandler && errorHandler(error)
      }
    }
  })
  return target
}

const asyncMethod = errorHandler => (target, propertyKey, descriptor) => {
  const func = descriptor.value
  return {
    get() {
      return (...args) => {
        return Promise.resolve(func.apply(this, args)).catch(error => {
          errorHandler && errorHandler(error)
        })
      }
    },
    set(newValue) {
      return newValue
    }
  }
}

export { readonly, asyncMethod, asyncClass }

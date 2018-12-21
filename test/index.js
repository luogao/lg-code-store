import GEventEmitter from '../src/eventEmitter'

const GEE = new GEventEmitter()

const listenerRemoved = function(...res) {
  console.log('will be removed after emitted', res)
}

const listenerOnce = function(data, data1) {
  console.log('will only run once', data, data1)
}

GEE.on('testRemove', listenerRemoved)
GEE.on('normalEvent', function(a, b, c, d, e) {
  console.log(a, b, c, d, e)
})

GEE.once('testOnce', listenerOnce)

console.log('All Events ', GEE.getEventNames())
console.log(GEE)

const testBtn = document.querySelector('.btn')

testBtn.addEventListener('click', function() {
  GEE.emit('testRemove', {}, 123, 13, 4324352345)
  GEE.emit('testOnce', 123, 123)
  GEE.emit('normalEvent', 1, 2, 3, 4, 5)
  GEE.removeListener('testRemove', listenerRemoved)
})

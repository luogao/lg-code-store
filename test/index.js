import GEventEmitter from '../src/eventEmitter'

const GEE = new GEventEmitter()

const event1 = GEE._add('23')

GEE.addEventListener('23', function() {
  console.log(this.name)
})

event1.addListener(function(data) {
  console.log('ceshi', data)
})

const listenerRemoved = function() {
  console.log('will be removed after emitted')
}

GEE.on('testRemove', listenerRemoved)
GEE.on('testRemove', listenerRemoved)
GEE.on('testRemove', listenerRemoved)
GEE.on('testRemove', listenerRemoved)
GEE.on('testRemove', listenerRemoved)
GEE.on('testRemove', listenerRemoved)

console.log('All Events ', GEE.getEventNames())
console.log(GEE)

const testBtn = document.querySelector('.btn')

testBtn.addEventListener('click', function() {
  GEE.emit('23')
  GEE.emit('testRemove')
  GEE.removeListener('testRemove', listenerRemoved)
})

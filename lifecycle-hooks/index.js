var obj = {
  foo: 'bar'
}

Object.freeze(obj)

var app = new Vue({
  el: '#app',
  data: obj,
  created: function () {
    // `this` points to the vm instance
    console.log('foo is: ' + this.foo)
  }
})

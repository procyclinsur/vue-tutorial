// Vue Components
// CURRENTLY NOT WORKING NEED TO REVIEW THIS AFTER LEARNING COMPONENTS
Vue.component('test', {
  methods: {
      reverseMessage: function () {
          return this.message.split('').reverse().join('')
      }
  }
})

// Vue instances
// CURRENTLY NOT WORKING NEED TO REVIEW THIS AFTER LEARNING COMPONENTS
var vm1 = new Vue({
    el: "app9",
    data: {
        message: "HelloWorld"
    }
})

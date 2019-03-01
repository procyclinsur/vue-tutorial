var vm = new Vue ({
  el: "#app"
  methods: {
    warn: function (message, event) {
      if (event.preventDefault()) event.preventDefault()
      alert(message)
    }
  }
})

// Binding Class
// Data Class Object example
var vm = new Vue ({
  el: "#app",
  data: {
    classObject: {
      active: true,
      'text-danger': true
    }
  }
})

// Computed example
var vmcomp = new Vue ({
  el: "#app2",
  data: {
    isActive: true,
    error: true
  },
  computed: {
    classObject: function() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})

// Array Syntax
// Data Class Object example
var vm3 = new Vue ({
  el: "#app3",
  data: {
    isActive: false,
    errorClass: 'text-danger'
  }
})

// NEED TO REVISIT THIS SECTION LATER FOR COMPONENTS LOGIC

// Binding Inline Styles:
// Data Style Object example
var vm4 = new Vue ({
  el: "#app4",
  data: {
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
})

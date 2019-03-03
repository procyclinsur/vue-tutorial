// Components
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: "<button v-on:click='count++'>You clicked me {{ count }} times.</button>"
})

Vue.component('title-header', {
  props: ['post'],
  template: '\
    <div class="title-header">\
      <h3>{{ post.title }}</h3>\
      <button v-on:click="$emit(\'enlarge-text\', 0.1 )">\
        Enlarge text\
      </button>\
      <div v-html="post.content"></div>\
    </div>\
  '
})

Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})

Vue.component('custom-input', {
  props: ['value'],
  template: '\
    <div class="custom-input">\
      <input\
        v-bind:value="value"\
        v-on:input="$emit(\'input\', $event.target.value)"\
      >\
      <p>{{ value }}</p>\
    </div>\
  '
})

// App Definitions
var vm = new Vue ({
  el: "#components",
  data: {
    posts: [
      { id: 1, title: 'My Counter Button1', content: "counter button 1 not available" },
      { id: 2, title: 'My Counter Button2', content: "counter button 2 not available" },
      { id: 3, title: 'My Counter Button3', content: "counter button 3 available" }
    ],
    postFontSize: 1
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount * 3
    }
  }
})

var vm1 = new Vue ({
  el: "#app",
  data: {
    searchText: "hello_world"
  }
})

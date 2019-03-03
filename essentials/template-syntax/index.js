var app = new Vue({
  el: '#app',
  data: {
    rawHtml: '<span style="color: red">This should be red.</span>'
  }
})
var app2 = new Vue({
  el: '#app2',
  data: {
    attr_name: 'href',
    urlLink: 'https://www.google.com'
  }
})

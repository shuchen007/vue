var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
app.message='i hava change this guy';
console.log("fdjk"+app.message);
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '时间 ' + new Date().toLocaleString()
  }
});
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'ѧϰ JavaScript',id: 11},
      { text: 'ѧϰ Vue'},
      { text: 'css ' ,id: 31 }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverse: function () {
		console.log("事件监听")
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
  template: '<li>这是个待办项</li>'
})
Vue.component('todo-item', {
	 // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义特性。
  // 这个 prop 名为 gld.
  props: ['gld'],
  template: '<li>{{ gld.id }}:{{ gld.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    list: [
      { id: 0, text: '蔬1菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
})

app4.todos.push({text:'xuexi2'})
app2.message='to do';
app.message='i hava change this guy';

var vm = { rawHtml: 1 }




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
    message: 'ҳ������� ' + new Date().toLocaleString()
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
      { text: 'ѧϰ JavaScript' },
      { text: 'ѧϰ Vue' },
      { text: '����ţ��Ŀ' }
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

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    list: [
      { id: 0, text: '�߲�' },
      { id: 1, text: '����' },
      { id: 2, text: '�������ʲô�˳ԵĶ���' }
    ]
  }
})

app4.todos.push({text:'xuexi2'})
app2.message='to do';
app.message='i hava change this guy';
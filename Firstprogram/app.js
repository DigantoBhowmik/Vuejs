var app = new Vue({
    el: "#app",
    data:{
        msg: 'Hello World'
    }
})

var app2 = new Vue({
    el:"#app2",
    data:{
        seen: true
    }
})

var app3 = new Vue({
    el:"#app3",
    data:{
        todo:[{Text:"Diganto"},{Text:"Bhowmik"}]
    }
})

app3.todo.push({Text:"Dipto"})


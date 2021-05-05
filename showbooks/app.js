var app = Vue.createApp({
    data(){
        return{
            showbook:true,
            name:'The power of habit',
            author: 'charles'
        }
    },
    methods:{
        hidebook(){
            this.showbook=!this.showbook
        }

    }
})

app.mount('#app')
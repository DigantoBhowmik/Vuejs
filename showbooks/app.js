var app = Vue.createApp({
    data(){
        return{
            showbook:true,
            books:[
                {name:'The power of habit',author: 'charles',isFav:false},
                {name:'The power of habit',author: 'charles',isFav:false},
            ]
        }
    },
    methods:{
        hidebook(){
            this.showbook=!this.showbook
        },
        click1(book){
            book.isFav=!book.isFav
        }

    }
})

app.mount('#app')
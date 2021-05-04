const app = Vue.createApp({
    data(){
        return{
            firstName: 'Diganto',
            lastName: 'Bhowmik',
            email: 'digantobhowmik@gmail.com',
            
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.photo= results[0].picture.large
        },
    },
})

app.mount('#app')
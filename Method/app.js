var app = new Vue({
    el: '#app',
    data:{
        count: 0,
    },
    methods:{
        increase: function(x){
            this.count=this.count+x;
        },

        decrease: function(x){
            if((this.count-x)>=0)
            {
                this.count=this.count-x;
            }
        }
    }
});
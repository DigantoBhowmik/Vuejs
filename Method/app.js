var app = new Vue({
    el: '#app',
    data:{
        count: 0,
    },
    method:{
        increase: function(){
            this.count=this.count+1;
        },

        decrease: function(){
            this.count=this.count-1;
        }
    }
});
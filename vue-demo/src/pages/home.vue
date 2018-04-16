<template>  
    <div>  
        想要吃的水果  
        <ul>  
            <li v-for="x in list"> {{x.name}}</li>  
        </ul>  
    </div>  
</template>  
  
<script>  
    export default{  
        name: 'home',  
        data(){  
            return {  
                list:[]  
            }  
        },
        mounted:function(){
            var _this = this;
            this.$http.get('http://localhost:3030/getList.json').then(function(response){
                if(response.body.code == 0){  
                    _this.list = response.body.list;  
                } 
            })
        }  
    }  
</script>  
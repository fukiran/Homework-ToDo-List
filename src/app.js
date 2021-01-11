import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el:"#app",
        data: {
            todos: [
                {do: "Buy shopping", priority: "1"}, 
                {do: "Clean bathroom", priority: "1"},
                {do: "Car's MOT", priority: null }
            ],

            newItem: "",
            picked: ""
        },
        methods: {
            saveNewItem: function (){
                this.todos.push({do: this.newItem, priority: this.picked});
                this.newItem = "";
            },
            
        
            
        },
        
         
        
    });
});
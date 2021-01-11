import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el:"#app",
        data: {
            todos: [
                {do: "Buy shopping", highPriority: "low"}, 
                {do: "Clean bathroom", highPriority: "low"},
                {do: "Car's MOT", highPriority: "high"}
            ],

            newItem: "",
            picked: ""
        },
        methods: {
            saveNewItem: function (){
                this.todos.push({do: this.newItem, picked: this.picked});
                this.newItem = "";
            },
            
        },
         
        
    });
});
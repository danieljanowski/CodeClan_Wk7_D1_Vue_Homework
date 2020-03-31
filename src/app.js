import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",

    data: {
        todo: [
                {task: "Wash the car", priority: "low"},
                {task: "Walk the dog", priority: "high"},
                {task: "Feed the cat", priority: "high"}
             ],  
        newToDo: "",
        priority: "",
    },

    methods: {
        saveNewItem: function() {
            this.todo.push(
                            {
                                task: this.newToDo, 
                                priority: this.priority
                             }
                            ),
            this.newToDo = "",
            this.priority = ""
        }
    }
    })
})
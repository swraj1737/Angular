import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  localTodos: string|null;
  todos: any[];
  constructor() {
    this.localTodos = localStorage.getItem("todos")
    if(this.localTodos == null){
      this.todos = []
    } else {
      this.todos = JSON.parse(this.localTodos)
    }
  }

  deleteTodo(todo:any){
    const index= this.todos.indexOf(todo)
    this.todos.splice(index,1)
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  title: string;
  desc: string;
  todos: any[] = [];
  localTodos: string|null;
  constructor(private router: Router){
    this.localTodos = localStorage.getItem("todos")
    if(this.localTodos == null){
      this.todos = []
    } else {
      this.todos = JSON.parse(this.localTodos)
    }
  }
  addTodo() {
    const todo = {
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todos.push(todo)
    localStorage.setItem('todos',JSON.stringify(this.todos))
    this.router.navigate(['/']);

  }

}

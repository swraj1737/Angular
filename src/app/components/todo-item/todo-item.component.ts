import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: any;
  @Output() todoDelete: EventEmitter<any> = new EventEmitter();
  deleteTodo(todo: any){
    this.todoDelete.emit(todo);
  }
}

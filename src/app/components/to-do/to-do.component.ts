import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo.interface';
import { TodosService } from 'src/app/service/todos.service';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  constructor(
    public todosService: TodosService
  ) {

  }

  ngOnInit(): void {
    console.log('init')
    console.log(this.todosService)
  }

  addTask(item:string) {
    const todo: Todo = {
    id: 1,
    title: item,
    completed: false
    }
    setTimeout(() => {
      this.todosService.add(todo)
    }, 2000);

  }

  setTodoAsCompleted(todo: Todo) {
    setTimeout(() => {
      todo.completed = true
    }, 2000);

  }

}

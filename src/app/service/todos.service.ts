/**
 * Angular
 */
 import { Injectable, Inject } from '@angular/core'

/**
 * Interface
 */
 import { Todo } from '../interface/todo.interface'

 @Injectable({
   providedIn: 'root'
 })
 export class TodosService
 {
/**
  *per recuperare, aggiungere, rimuovere e modificare un’array di todo,
  ogni metodo dovra ritornare una promise che si completa dopo 2 sec
 */

  private list: Todo[] = []

  public add(todo: Todo) {
    this.list.push(todo)
    todo.id = this.list.length
  }

  public getList(filter: boolean): Todo[]{
    return this.list.filter(todo => filter === todo.completed)
  }
 }

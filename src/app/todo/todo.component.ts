import { Component } from '@angular/core';

interface Todo {
  label? : string
  priority? : string
  done? : boolean
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos : Todo[] = [];

  label = '';

  addNewTask() : void{
    var todo : Todo = {}

    if(this.label.indexOf(',') != -1){
      let task = this.label.split(',')
      todo.label = task[0].trim()
      todo.priority = task[1].trim()
    }else{
      todo.label = this.label
      todo.priority = ''
    }

    this.todos.push(todo)
    this.label = ''
  }

  delete(index : number) : void{
    this.todos.splice(index,1)
  }

  donef(index : number, isdone : boolean) : void{
    this.todos[index].done = isdone
  }
}

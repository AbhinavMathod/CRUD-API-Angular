import { Component, OnInit } from '@angular/core'

import { Todo } from './task'
import { TasksService } from './tasks.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  providers: [TasksService],
  styleUrls: ['./task.component.scss']
})
export class TasksComponent implements OnInit {
  todos: Todo[]
  editTodo: Todo

  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.getTasks();
  }


  getTasks(): void {
    this.taskService.getTasks().subscribe(todos =>{
      this.todos = todos;
      console.log(this.todos);
      })
    }

  add(title: string,content: string,dueDate : string,time : string): void {
    this.editTodo = undefined
    title = title.trim();
    content = content.trim();
    dueDate = dueDate.trim();
    time = time.trim();
    //createdDate= createdDate.trim();
    //modifiedDate= modifiedDate.trim();
    if (!title || !content || !dueDate || !time) {
      alert("Enter title, content, duedate and time");
      return;
    }
    const newTask: Todo = { title, content, dueDate, time } as unknown as Todo
    this.taskService.addTask(newTask).subscribe(task => this.todos.push(task))
  }
  edit(todo) {
    this.editTodo = todo
  }

  update() {
    console.log(this.editTodo);
    this.editTodo.modifiedDate = new Date();
    if (this.editTodo) {
      this.taskService.updateTask(this.editTodo).subscribe(todo => {
        const indexx = todo ? this.todos.findIndex(t => t.id === todo.id) : -1
        if (indexx > -1) {
          this.todos[indexx] = todo
        }
      })
      this.editTodo = undefined
    }
    else if(this.editTodo==undefined){
      alert("Click on any one of the Todo Item to edit and update.")
    }
  }
  delete(todo: Todo): void {

    this.todos = this.todos.filter(t => t !== todo)
    this.taskService.deleteTask(todo.id).subscribe()
  }

  

  myFunction(event) {
    console.log(document.getElementById(event.target.id).nextElementSibling.className)
   if(document.getElementById(event.target.id).nextElementSibling.className == "hidden_table"){
    document.getElementById(event.target.id).nextElementSibling.className =""
   }else{
    document.getElementById(event.target.id).nextElementSibling.className ="hidden_table"
   }
  }




}

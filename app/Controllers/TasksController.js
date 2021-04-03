import { tasksService } from "../Services/TasksService.js";



//Public
export default class TasksController {
  constructor(){
    console.log('Tasks') 
  }
  addTask(listId) {
    window.event.preventDefault()
    let form=window.event.target
    let rawTask = {
      name: form.name.value,
      listId: listId
    }
    tasksService.addTask(rawTask)
    form.reset()
  }

  deleteTask(id, listId){
    let del = confirm('Are you sure you want to delete this?');
    if(del ==true){
      tasksService.deleteTask(id, listId)}
  }

  checkTask(id,listId){
    tasksService.checkTask(id,listId)
  }

}

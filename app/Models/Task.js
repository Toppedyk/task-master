import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class Task{
  constructor(name, listId, id=generateId(), complete=false, checked=''){
    this.name=name
    this.listId=listId
    this.id = id
    this.complete = complete
    this.checked=checked
  }

  get Template(){
    return `    
    <li>
    <div class="input-group-text d-flex ">    
    <input type="checkbox" aria-label="Checkbox for following text input" onclick="app.tasksController.checkTask('${this.id}','${this.listId}')" ${this.checked}>
      <div class="ml-5">${this.name} <i class="fas fa-times ml-5 text-danger" onclick="app.tasksController.deleteTask('${this.id}','${this.listId}')"></i></div>
      </li>
      
    `
  }
}
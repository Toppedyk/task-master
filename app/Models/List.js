import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"


export default class Lists{
  constructor(name,color,id=generateId(),completedTasks=0,totalTasks=0){
    this.name=name
    this.color=color
    this.id=id
    this.completedTasks = completedTasks
    this.totalTasks= totalTasks
  }

  get Template(){
    return `
    <div class="col-md-4">
    <div class="pizza-card shadow bg-white rounded">
        <div class="text-center p-2 d-flex justify-content-between bg-${this.color}">
            <h3>${this.name}</h3>
            <i class="fas fa-times ml-2" onclick = "app.listsController.deleteList('${this.id}')"></i>
        </div>
        <div id = "count">
        ${this.completedTasks}/${this.totalTasks}
        </div>
        <div class="p-3">
        <ul id="tasks">
            ${this.Tasks}
        </ul>
        <form class="d-flex p-2" onsubmit="app.tasksController.addTask('${this.id}')">
  <input type="text" name="name" id="name" class="form-control" placeholder="Add Task..."
      aria-describedby="helpId" required minlength="3" maxlength="50" autocomplete="off">
  <button type="submit" class="btn btn-success" title='add task'><i class="fas fa-plus" ></i></button>
</form>
</div>
</div>
</div>
    `
  }


  get Tasks(){
    let tas = ProxyState.tasks.filter(t => t.listId === this.id)
    let template = ''
    tas.forEach(t => template+=t.Template)
    return template
  }
  
}
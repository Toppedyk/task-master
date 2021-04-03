import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import List from "../Models/List.js"

class TasksService {
  addTask(rawTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask.name, rawTask.listId)]
    let total = ProxyState.lists.find(c => c.id == rawTask.listId)
    total.totalTasks++
    saveState()
    ProxyState.tasks = ProxyState.tasks
  }

  deleteTask(id, listId){
    let total = ProxyState.lists.find(c => c.id == listId)
    total.totalTasks--
    console.log(total)
    ProxyState.tasks = ProxyState.tasks.filter(l => l.id != id)
    saveState()
  }

  checkTask(id,listId){
    let complete = ProxyState.tasks.find(t => t.id == id)
    let list = ProxyState.lists.find(c => c.id == listId)
 
    if(complete.complete==false){
      complete.complete=true
      list.completedTasks++
      console.log(list)
    }else{
      complete.complete=false
      list.completedTasks--
      console.log(list)
    }

    let tasks = ProxyState.tasks
    tasks.forEach(t => {if (t.complete == true) {
      t.checked = 'checked'
    }else{
      t.checked = ''
    }
    })
    

    
    ProxyState.lists = ProxyState.lists
    saveState()
  }
}

export const tasksService = new TasksService();
import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";


export function saveState() {
  localStorage.setItem('taskmaster', JSON.stringify({
    lists: ProxyState.lists,
    tasks: ProxyState.tasks
  }))
}
 
export function loadState() {
  let data = JSON.parse(localStorage.getItem('taskmaster'))
  if (data) {
    ProxyState.lists = data.lists.map(list => new List(list.name, list.color, list.id, list.completedTasks,list.totalTasks));
    ProxyState.tasks = data.tasks.map(task => new Task(task.name,task.listId,task.id,task.complete, task.checked));
  }
}
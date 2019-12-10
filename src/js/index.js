import {arrayOfProjectIdToBeAssignedAfterDeletingItems, Project, projectIdCount} from './Projects.js';
import { format, isDate, formatDistanceToNow } from 'date-fns';
import DOMStuff from './DOM.js';
import toDoClass from './toDos.js';


//main array with projects
let projectsArray = [];

//Main values for the PROJECT


//Resets value of all the arguments
function resetValue(...x) {
  for (var i of x) {
    i.value = "";
  }
}

//Assigning the main divs to contain the shortcuts for projects and the main viewed project.
DOMStuff.assignProjectMainContainer(document.getElementsByClassName('container')[0]);
DOMStuff.assignProjectNameContainer(document.getElementsByClassName('names-container')[0]);

//adds basic buttons to add Projects.
DOMStuff.populate();

//LOCAL STORAGE FUNCTION
function saveToLocalStorage(x) {
  var y = JSON.stringify(x);
  localStorage.setItem('projectsArray',y);
  var jsonIdArray = JSON.stringify(arrayOfProjectIdToBeAssignedAfterDeletingItems);
  localStorage.setItem('idArray', jsonIdArray);
  var jsonIdCount = JSON.stringify(projectIdCount);
  localStorage.setItem('idCount',jsonIdCount);
}
//LOCAL STORAGE SEARCH AND USE
const checkForStorage = () => {
  if (localStorage.getItem('projectsArray')) {
    var loadedProjectsArray = Array.from(JSON.parse(localStorage.getItem('projectsArray')));
    //Since i can't go around putting Objects into localStorage, i guess i'll have to make new Projects from them.
    for (var i = 0; i < loadedProjectsArray.length; i++) {
      let newProject = new Project(loadedProjectsArray[i]._title,loadedProjectsArray[i]._description,loadedProjectsArray[i]._dueDate,loadedProjectsArray[i]._id);
      let arrayOfToDos = Array.from(loadedProjectsArray[i]._toDos);

      for (var j of arrayOfToDos) {
        let newToDo = new toDoClass(j._title,j._description,j._priority,j._icon);
        newProject.addToDo(newToDo);
      }
      projectsArray.push(newProject);
    }


    DOMStuff.createProjectNamesDiv(projectsArray);
  } else {
  }
 }

 function projectsIdLocalStorageSetup(idArray, idCounter) {
   if (localStorage.getItem('idArray')) {
     idArray = Array.from(JSON.parse(localStorage.getItem('idArray')));
   }

   if (localStorage.getItem('idCount')) {
     idCounter = Number(JSON.parse(localStorage.getItem('idCount')));
   }
 }


//Function for creating and editing projects
function projectHandler(project) {
  let titleInput = document.querySelector('input[name="project-title"]'),
      descriptionInput = document.querySelector(`input[name='project-description']`),
      dateInput = document.querySelector(`input[name='project-date']`),
      priorityInput = document.querySelector(`input[name='project-priority']`);
  //if project is true - we are editing a new project
  if (project) {
    projectsArray[projectsArray.indexOf(project)].title = titleInput.value;
    projectsArray[projectsArray.indexOf(project)].description = descriptionInput.value;
    projectsArray[projectsArray.indexOf(project)].dueDate = dateInput.value;
    projectsArray[projectsArray.indexOf(project)].priority = priorityInput.value;
    DOMStuff.createProjectNamesDiv(projectsArray);
    DOMStuff.renderProjectMain(projectsArray[projectsArray.indexOf(project)]);
    projectsArray[projectsArray.indexOf(project)]

  } else {
  //if project is false - we are making a new project

      if(titleInput.value && descriptionInput.value && dateInput.value && priorityInput.value) {
        let newProject = new Project(titleInput.value,descriptionInput.value,dateInput.value,priorityInput.value);
        projectsArray.push(newProject);
        DOMStuff.createProjectNamesDiv(projectsArray);
      } else {
        console.error('You need to fill the fields to create a project');
      }
  }
  saveToLocalStorage(projectsArray);
}




//Function for creating and editing toDos
function toDoHandler(x,y) {
  let titleInput = document.querySelector('input[name="todo-title"]'),
      descriptionInput = document.querySelector(`input[name='todo-description']`),
      priorityInput = document.querySelector(`input[name='todo-priority']`),
      choosenIcon = document.querySelector('.icon-container-img-checked').src;
      console.log(choosenIcon);
  if (y) {
    //IN THIS CASE ==================== X IS EQUAL TO THE PROJECT, THE TODO WILL BE ASSIGNED TO it
    // IF Y is true, then we are EDITING A TODO. Y == toDo
    x.toDos[x.toDos.indexOf(y)].title = titleInput.value;
    x.toDos[x.toDos.indexOf(y)].description = descriptionInput.value;
    x.toDos[x.toDos.indexOf(y)].priority = priorityInput.value;
    x.toDos[x.toDos.indexOf(y)].icon = choosenIcon;
    DOMStuff.renderProjectMain(x);

  } else {
    //IF Y IS FALSE, THEN WE ARE MAKING A NEW ONE

        if (titleInput.value && descriptionInput.value && priorityInput.value) {
          if (!choosenIcon) {
            choosenIcon = './assets/imgs/icons/notification.png';
          }
          let newToDo = new toDoClass(titleInput.value,descriptionInput.value,priorityInput.value,choosenIcon);
          x.addToDo(newToDo);
          DOMStuff.renderProjectMain(x);
        } else {
          console.error('You need to fill all the fields in order to create a toDo');
        }
  }
  saveToLocalStorage(projectsArray);
}

checkForStorage();

export {projectsArray,resetValue,projectHandler,toDoHandler,saveToLocalStorage,projectsIdLocalStorageSetup};
export default projectsArray;

import x from "./toDos";
import Project from './Projects.js';
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

//we get the data from the form to create a new Project.
// function createProject() {
//   if(titleInput.value && descriptionInput.value && dateInput.value && priorityInput.value) {
//     let newProject = new Project(titleInput.value,descriptionInput.value,dateInput.value,priorityInput.value);
//     projectsArray.push(newProject);
//     resetValue(titleInput,descriptionInput,dateInput,priorityInput);
//     // DOMStuff.renderProjectMain(projectsArray);
//     DOMStuff.createProjectNamesDiv(projectsArray);
//   } else {
//     console.warn('you lack values');
//   }
// }




//Function for creating and editing projects
function projectHandler(project) {
  let titleInput = document.querySelector('input[name="project-title"]'),
      descriptionInput = document.querySelector(`input[name='project-description']`),
      dateInput = document.querySelector(`input[name='project-date']`),
      priorityInput = document.querySelector(`input[name='project-priority']`);
  //if project is true - we are editing a new project
  if (project) {
    console.log(project);
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
}

//Function for creating and editing toDos
function toDoHandler(x,y) {
  let titleInput = document.querySelector('input[name="todo-title"]'),
      descriptionInput = document.querySelector(`input[name='todo-description']`),
      priorityInput = document.querySelector(`input[name='todo-priority']`);
  if (y) {
    //IN THIS CASE ==================== X IS EQUAL TO THE PROJECT, THE TODO WILL BE ASSIGNED TO
    // IF Y is true, then we are EDITING A TODO. Y == toDo
    console.log(x);
    console.log(x.toDos[x.toDos.indexOf(y)]);
    x.toDos[x.toDos.indexOf(y)].title = titleInput.value;
    x.toDos[x.toDos.indexOf(y)].description = descriptionInput.value;
    x.toDos[x.toDos.indexOf(y)].priority = priorityInput.value;
    console.log(`this is the choosen toDo that will have its stats changed`);
    console.log(x.toDos[x.toDos.indexOf(y)]);
    DOMStuff.renderProjectMain(x);



  } else {
    //IF Y IS FALSE, THEN WE ARE MAKING A NEW ONE

    // let titleInput = document.querySelector('input[name="todo-title"]'),
    //     descriptionInput = document.querySelector(`input[name='todo-description']`),
    //     priorityInput = document.querySelector(`input[name='todo-priority']`);
        if (titleInput.value && descriptionInput.value && priorityInput.value) {
          let newToDo = new toDoClass(titleInput.value,descriptionInput.value,priorityInput.value);
          x.addToDo(newToDo);
          DOMStuff.renderProjectMain(x);
        } else {
          console.error('You need to fill all the fields in order to create a toDo');
        }
  }
}

export {projectsArray,resetValue,projectHandler,toDoHandler};
export default projectsArray;

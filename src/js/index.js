import x from "./toDos";
import Project from './Projects.js';
import { format, isDate, formatDistanceToNow } from 'date-fns';
import DOMStuff from './DOM.js';


console.log(DOMStuff);
    // console.log(formatDistanceToNow(new Date(newProject.dueDate)));


let projectsArray = [];

//Main values for the PROJECT
const titleInput = document.querySelector(`input[name='project-title']`),
      descriptionInput = document.querySelector(`input[name='project-description']`),
      dateInput = document.querySelector(`input[name='project-date']`),
      priorityInput = document.querySelector(`input[name='project-priority']`),
      sendDateButton = document.querySelector('.dateGetter');

priorityInput.addEventListener('input',function() {
  console.log(this.value);
})

//Resets value of all the arguments
function resetValue(...x) {
  for (var i of x) {
    i.value = "";
  }
}

//Assigning the main divs to contain the shortcuts for projects and the main viewed project.
DOMStuff.assignProjectMainContainer(document.getElementsByClassName('container')[0]);
DOMStuff.assignProjectNameContainer(document.getElementsByClassName('names-container')[0]);

//we get the data from the form to create a new Project.
function createProject() {
  if(titleInput.value && descriptionInput.value && dateInput.value && priorityInput.value) {
    let newProject = new Project(titleInput.value,descriptionInput.value,dateInput.value,priorityInput.value);
    projectsArray.push(newProject);
    resetValue(titleInput,descriptionInput,dateInput,priorityInput,sendDateButton);
    DOMStuff.renderProjectMain(projectsArray);
    DOMStuff.createProjectNamesDiv(projectsArray);
  } else {
    console.warn('you lack values');
  }

}

sendDateButton.addEventListener('click', createProject);


var domButton = document.querySelector('.checkDOM');
domButton.addEventListener('click', function() {
  DOMStuff.renderProjectMain(projectsArray);
})




var wuhButton = document.querySelector('#wuh');
wuhButton.addEventListener('click',function() {
  DOMStuff.createProjectNamesDiv(projectsArray);
})

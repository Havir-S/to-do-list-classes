import Project from './Projects.js';
//DOM stuff is here


//Create a row for a project

const DOMStuff = (function() {

  //Node to store project names
  let projectNamesContainer;
  //Node to store the selected Project's toDo's.
  let projectMainContainer;

  //This is where all the Project names will be contained.
  //User then can choose which project he wants to inspect.
  const assignProjectNameContainer = (value) => {
    if (value instanceof Element) {
      projectNamesContainer = value;
    } else {
      console.error('You need to provide a NODE element');
    }
  }

  // Assigning where the Main content has to appear when Project gets selected.
  const assignProjectMainContainer = (value) => {
    if (value instanceof Element) {
      projectMainContainer = value;
    } else {
      console.error('You need to provide a NODE element');
    }
  }


  //Deletes all children of the provided node
  const deleteAllChildNodes = (x) => {
    if (x instanceof Element) {
      while (x.firstChild) {
        x.removeChild(x.firstChild);
      }
    } else {
      console.error('Argument has to be a NODE Element');
      return;
    }
  }

  //Function that reacts to a main project change
  const changeMainProject = (x,y) => {
    console.log(x);
    console.log(y);
  }

  //Function for the arrows to show more details about a project.
  function showMoreDetails(e) {
  e.target.parentNode.parentNode.parentNode.children[1].classList.toggle('d-none');
  }

  //Renders all project names in the projectNamesContainer. =======================================================
  const renderProjectMain = ([...projects]) => {
    if (projectMainContainer) {
      //Fast clear of projects
      deleteAllChildNodes(projectMainContainer);
      for (var i of projects) {
        if (i instanceof Project && projectMainContainer) {
          let projectDiv = document.createElement('div');
          projectDiv.classList.add('project-div-shortcut');
          projectDiv.setAttribute('data-project',i._id);

          //THE Project Name Div creation
          let projectName = document.createElement('div');
          projectName.classList.add('project-name-container')
          let projectNameSpan = document.createElement('span');
          projectNameSpan.classList.add('project-name-container-span');
          projectNameSpan.innerHTML = i.title;
          projectName.appendChild(projectNameSpan);

          //The Project Remaining time Div creation
          let projectTime = document.createElement('div');
          projectTime.classList.add('project-time-container');
          let instructionTime = document.createElement('div');
          instructionTime.className = 'instruction instruction-time';
          instructionTime.innerHTML = "remaining time:";
          let projectTimeSpan = document.createElement('div');
          projectTimeSpan.classList.add('project-time-container-span');
          projectTimeSpan.innerHTML = i.projectTimeLimit;
          projectTime.appendChild(instructionTime);
          projectTime.appendChild(projectTimeSpan);

          //Project Priority
          let projectPriority = document.createElement('div');
          projectPriority.classList.add('project-priority-container');
          let instructionPriority = document.createElement('div');
          instructionPriority.className = 'instruction instruction-priority';
          instructionPriority.innerHTML = "priority:";
          let projectPrioritySpan = document.createElement('div');
          projectPrioritySpan.classList.add('project-priority-container-span');
          projectPrioritySpan.innerHTML = i.priority;
          projectPriority.appendChild(instructionPriority);
          projectPriority.appendChild(projectPrioritySpan);

          //More details arrow ================== and function listener
          let projectMoreDetails = document.createElement('div');
          projectMoreDetails.classList.add('project-more-details-container');
          let projectMoreDetailsArrow = document.createElement('div');
          projectMoreDetailsArrow.className = 'more-details-arrow';
          projectMoreDetailsArrow.innerHTML = 'click for description';
          projectMoreDetails.appendChild(projectMoreDetailsArrow);
          projectMoreDetailsArrow.addEventListener("click", showMoreDetails);

          projectDiv.appendChild(projectName);
          projectDiv.appendChild(projectTime);
          projectDiv.appendChild(projectPriority);
          projectDiv.appendChild(projectMoreDetails);

          //The big actual ROW ===================================
          let projectDivAll = document.createElement('div');
          projectDivAll.classList.add('project-name-row');

          let moreDetailsDiv = document.createElement('div');
          moreDetailsDiv.className = 'project-more-details d-none';
          let moreDetailsText = document.createElement('div');
          moreDetailsText.className = 'more-details-text';
          moreDetailsText.innerHTML = i.description;
          moreDetailsDiv.appendChild(moreDetailsText);

          projectDivAll.appendChild(projectDiv);
          projectDivAll.appendChild(moreDetailsDiv);

          //Div for all the toDoS
          let toDosDiv = document.createElement('div');
          toDosDiv.className = 'to-do-container';

          projectDivAll.appendChild(toDosDiv);

          projectMainContainer.appendChild(projectDivAll);
        } else {
          console.log('i is NOT an instance of Project, can not do shiet');
        }
      }
    }
  }

  //delete project function
  function deleteProject(x,y) {
    console.log(x);
    console.log(y);
    console.log(this);
  }

  //This is where the Project names are rendered (the shortcuts to create a main (viewed) project).
  const createProjectNamesDiv = ([...projects]) => {
    if (projectNamesContainer) {
      deleteAllChildNodes(projectNamesContainer);
      for (var i of projects) {
        //new row for a project
        let projectNameContainer = document.createElement('div');
        projectNameContainer.className = 'project-shortcut-row';

        //Contains the project Title
        let projectShortcutName = document.createElement('div');
        projectShortcutName.className = 'project-shortcut-name';
        projectShortcutName.innerHTML = i.title;

        projectNameContainer.appendChild(projectShortcutName);

        //Contains project's remaining time
        let projectShortcutRemainingTimeDiv = document.createElement('div');
        projectShortcutRemainingTimeDiv.className = 'project-shortcut-time-div';
        let projectShortcutRemainingTimeInstruction = document.createElement('div');
        projectShortcutRemainingTimeInstruction.className = 'project-shortcut-time-instruction';
        projectShortcutRemainingTimeInstruction.innerHTML = 'remaining time:';
        let projectShortcutRemainingTime = document.createElement('div');
        projectShortcutRemainingTime.className = 'project-shortcut-time';
        projectShortcutRemainingTime.innerHTML = i.projectTimeLimit;

        projectShortcutRemainingTimeDiv.appendChild(projectShortcutRemainingTimeInstruction);
        projectShortcutRemainingTimeDiv.appendChild(projectShortcutRemainingTime);

        projectNameContainer.appendChild(projectShortcutRemainingTimeDiv);


        //Contains project's priority
        let projectShortcutPriorityDiv = document.createElement('div');
        projectShortcutPriorityDiv.className = 'project-shortcut-priority-div';
        let projectShortcutPriorityInstruction = document.createElement('div');
        projectShortcutPriorityInstruction.className = 'project-shortcut-priority-instruction';
        projectShortcutPriorityInstruction.innerHTML = 'priority:';
        let projectShortcutPriority = document.createElement('div');
        projectShortcutPriority.className = 'project-shortcut-time';
        projectShortcutPriority.innerHTML = i.priority;

        projectShortcutPriorityDiv.appendChild(projectShortcutPriorityInstruction);
        projectShortcutPriorityDiv.appendChild(projectShortcutPriority);

        projectNameContainer.appendChild(projectShortcutPriorityDiv);

        //Trash bin - delete a project with a click
        let trashBinDiv = document.createElement('div');
        trashBinDiv.className = 'trash-bin-div';
        let trashBinIcon = document.createElement('div');
        trashBinIcon.className = 'trash-bin-icon-div';
        trashBinIcon.innerHTML = 'click me to delete this project';

        trashBinIcon.addEventListener('click',deleteProject.bind(this,i));

        trashBinDiv.appendChild(trashBinIcon);
        projectNameContainer.appendChild(trashBinDiv);

        //Final, it adds the entire row to the sooner assigned div for the project names.
        projectNamesContainer.appendChild(projectNameContainer);

      }
    } else {
      console.error('Div for containing all project names has not been defined');
    }

  }

  return {
    assignProjectNameContainer,assignProjectMainContainer,renderProjectMain,deleteAllChildNodes,createProjectNamesDiv
  }
})();

export default DOMStuff;

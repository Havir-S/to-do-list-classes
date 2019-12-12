import Project from './Projects.js';
import {projectsArray,resetValue,projectHandler,toDoHandler,saveToLocalStorage} from './index.js';
//DOM stuff is here

//Create a row for a project

//HOW DOES IT WORK
//1. You have to assign 2 variables, projectMainContainer for the project and it's toDos, and projectNamesContainer for all projects. They will also serve as a shortcut to its toDos.
//2. Then You have a part that creates a "CREATOR/EDITOR" of Projects and ToDos.
//3. You also have 2 functions that create modals, that pop up whenever you click on "Add Project" or "Add toDo" or edit any of these.
const DOMStuff = (function() {

  //icons ending
  let iconsNamesArray = ['airplane.png','box.png','cake.png','calculator.png','car.png','coffee-cup.png','dish.png','dog.png','drop.png','error.png','finish-flag.png','finish-line.png',
                    'fire.png','flag.png','forever.png','gift.png','group.png','headset.png','home.png','homework.png','loop-arrow.png','maintenance.png','management.png',
                    'map.png','map2.png','maps-and-flags.png','mountains.png','musical-note.png','notification.png','paper.png','paw-print-.png','pending.png','pond.png','priority.png',
                    'promotion.png','sea.png','settings.png','settings2.png','settings3.png','shop.png','start.png','startup.png','suitcase.png','team.png','technics.png','test.png',
                    'tools.png','users.png','visibility.png','winner.png','wrench.png'];

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
  };

  // Assigning where the Main content has to appear when Project gets selected.
  const assignProjectMainContainer = (value) => {
    if (value instanceof Element) {
      projectMainContainer = value;
    } else {
      console.error('You need to provide a NODE element');
    }
  };


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
  };

  const removeClass = ([...nodes],clas) => {
    for (var i of nodes) {
      i.classList.remove(clas);
    }
  };

  // ======================================================================================
  // SPAWNER OF "MENU TO CREATE TODOS"
  // ======================================================================================
  //Main problem - I could have just simply put if statements based on provided information.
  //If we provide a toDo, and it already has value = fill the input with it.
const createToDoMenuSpawner = (x,project,toDo) => {
  if (x) {
    //IF WE GET A TODO - WE SPAWN ONE WITH ITS DATA TO BE EDITED

    let toDoEditModal = document.createElement('div');
    toDoEditModal.className = 'create-project-modal create-todo-modal';

    //main container
    let toDoEditContainer = document.createElement('div');
    toDoEditContainer.className = 'create-project-container create-todo-container';

    toDoEditModal.appendChild(toDoEditContainer);

    let h3Text = document.createElement('h3');
    h3Text.className = 'h3-modal-title';
    h3Text.innerHTML = 'EDIT TODO';

    toDoEditContainer.appendChild(h3Text);


    //title label and input
    let toDoEditRowTitle = document.createElement('div');
    toDoEditRowTitle.className = 'create-todo-row create-todo-row-title';
    let toDoEditRowTitleLabel = document.createElement('label');
    toDoEditRowTitleLabel.className = 'create-todo-row-title-label';
    toDoEditRowTitleLabel.setAttribute('for','todo-title');
    toDoEditRowTitleLabel.innerHTML = 'Todo name:';
    let toDoEditRowTitleInput = document.createElement('input');
    toDoEditRowTitleInput.className = 'create-todo-row-title-input';
    toDoEditRowTitleInput.type = 'text';
    toDoEditRowTitleInput.name = 'todo-title';
    toDoEditRowTitleInput.value = toDo.title;

    toDoEditRowTitle.appendChild(toDoEditRowTitleLabel);
    toDoEditRowTitle.appendChild(toDoEditRowTitleInput);
    toDoEditContainer.appendChild(toDoEditRowTitle);

    //description label and input
    let toDoEditRowDescription = document.createElement('div');
    toDoEditRowDescription.className = 'create-todo-row create-todo-row-description';
    let toDoEditRowDescriptionLabel = document.createElement('label');
    toDoEditRowDescriptionLabel.className = 'create-todo-row-description-label';
    toDoEditRowDescriptionLabel.setAttribute('for','todo-description');
    toDoEditRowDescriptionLabel.innerHTML = 'Todo description:';
    let toDoEditRowDescriptionInput = document.createElement('input');
    toDoEditRowDescriptionInput.className = 'create-todo-row-description-input';
    toDoEditRowDescriptionInput.type = 'text';
    toDoEditRowDescriptionInput.name = 'todo-description';
    toDoEditRowDescriptionInput.value = toDo.description;

    toDoEditRowDescription.appendChild(toDoEditRowDescriptionLabel);
    toDoEditRowDescription.appendChild(toDoEditRowDescriptionInput);
    toDoEditContainer.appendChild(toDoEditRowDescription);

    //priority label and input
    let toDoEditRowPriority = document.createElement('div');
    toDoEditRowPriority.className = 'create-todo-row create-todo-row-priority';
    let toDoEditRowPriorityLabel = document.createElement('label');
    toDoEditRowPriorityLabel.className = 'create-todo-row-priority-label';
    toDoEditRowPriorityLabel.setAttribute('for','todo-priority');
    toDoEditRowPriorityLabel.innerHTML = 'Todo Priority:';
    let toDoEditRowPriorityInput = document.createElement('input');
    toDoEditRowPriorityInput.className = 'create-todo-row-priority-input';
    toDoEditRowPriorityInput.type = 'range';
    toDoEditRowPriorityInput.min = '1';
    toDoEditRowPriorityInput.max = '10';
    toDoEditRowPriorityInput.name = 'todo-priority';
    toDoEditRowPriorityInput.value = toDo.priority;
    toDoEditRowPriorityInput.setAttribute('data-value', "5");

    toDoEditRowPriorityInput.addEventListener('input', function() {
      event.target.setAttribute('data-value',toDoEditRowPriorityInput.value);
    });

    toDoEditRowPriority.appendChild(toDoEditRowPriorityLabel);
    toDoEditRowPriority.appendChild(toDoEditRowPriorityInput);
    toDoEditContainer.appendChild(toDoEditRowPriority);

    //icons
    let toDoIconsContainer = document.createElement('div');
    toDoIconsContainer.className = 'icons-container';
    let toDoIconsLabel = document.createElement('label');
    toDoIconsLabel.className = 'icons-label';
    toDoIconsLabel.innerHTML = 'Todos Icon :';
    toDoIconsContainer.appendChild(toDoIconsLabel);
    let toDoIconsGrid = document.createElement('div');
    toDoIconsGrid.className = 'icons-grid';
    for( var i of iconsNamesArray) {
      let iconImg = document.createElement('img');
      iconImg.className = 'icon icon-container-img';
      iconImg.src = `./assets/imgs/icons/${i}`;
      iconImg.alt = 'icon';
      toDoIconsGrid.appendChild(iconImg);

      if (iconImg.src == toDo.icon) {
        iconImg.className = 'icon-container-img icon-container-img-checked';
      }

      iconImg.addEventListener('click', function(e) {
        //making sure there is only one item with that class
        removeClass(document.querySelectorAll('.icon-container-img'),'icon-container-img-checked');
        this.classList.add('icon-container-img-checked');
      });
    }
    toDoIconsContainer.appendChild(toDoIconsGrid);
    toDoEditContainer.appendChild(toDoIconsContainer);


    //buttons
    let buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons-div';
    let buttonLeft =document.createElement('button');
    buttonLeft.className = 'buttons buttons-left';
    buttonLeft.innerHTML = 'Create TODO';
    let buttonRight =document.createElement('button');
    buttonRight.className = 'buttons buttons-right';
    buttonRight.innerHTML = 'Close';

    buttonsDiv.appendChild(buttonLeft);
    buttonsDiv.appendChild(buttonRight);
    toDoEditContainer.appendChild(buttonsDiv);

    buttonRight.addEventListener('click',function() {
      toDoEditModal.parentNode.removeChild(toDoEditModal);
    });

    buttonLeft.addEventListener('click',function() {
      toDoHandler(project,toDo);
      resetValue(toDoEditModal);
      toDoEditModal.parentNode.removeChild(toDoEditModal);
    });

    document.body.appendChild(toDoEditModal);

  } else {
    //WITHOUT TODO, WE SIMPLY JUST CREATE A MENU WITH EMPTY INPUTS TO CREATE A NEW ONE

    let toDoEditModal = document.createElement('div');
    toDoEditModal.className = 'create-project-modal create-todo-modal';

    //main container
    let toDoEditContainer = document.createElement('div');
    toDoEditContainer.className = 'create-project-container create-todo-container';

    toDoEditModal.appendChild(toDoEditContainer);

    let h3Text = document.createElement('h3');
    h3Text.className = 'h3-modal-title';
    h3Text.innerHTML = 'CREATE TODO';

    toDoEditContainer.appendChild(h3Text);

    //title label and input
    let toDoEditRowTitle = document.createElement('div');
    toDoEditRowTitle.className = 'create-todo-row create-todo-row-title';
    let toDoEditRowTitleLabel = document.createElement('label');
    toDoEditRowTitleLabel.className = 'create-todo-row-title-label';
    toDoEditRowTitleLabel.setAttribute('for','todo-title');
    toDoEditRowTitleLabel.innerHTML = 'todo name:';
    let toDoEditRowTitleInput = document.createElement('input');
    toDoEditRowTitleInput.className = 'create-todo-row-title-input';
    toDoEditRowTitleInput.type = 'text';
    toDoEditRowTitleInput.name = 'todo-title';

    toDoEditRowTitle.appendChild(toDoEditRowTitleLabel);
    toDoEditRowTitle.appendChild(toDoEditRowTitleInput);
    toDoEditContainer.appendChild(toDoEditRowTitle);

    //description label and input
    let toDoEditRowDescription = document.createElement('div');
    toDoEditRowDescription.className = 'create-todo-row create-todo-row-description';
    let toDoEditRowDescriptionLabel = document.createElement('label');
    toDoEditRowDescriptionLabel.className = 'create-todo-row-description-label';
    toDoEditRowDescriptionLabel.setAttribute('for','todo-description');
    toDoEditRowDescriptionLabel.innerHTML = 'todo description:';
    let toDoEditRowDescriptionInput = document.createElement('input');
    toDoEditRowDescriptionInput.className = 'create-todo-row-description-input';
    toDoEditRowDescriptionInput.type = 'text';
    toDoEditRowDescriptionInput.name = 'todo-description';

    toDoEditRowDescription.appendChild(toDoEditRowDescriptionLabel);
    toDoEditRowDescription.appendChild(toDoEditRowDescriptionInput);
    toDoEditContainer.appendChild(toDoEditRowDescription);

    //priority label and input
    let toDoEditRowPriority = document.createElement('div');
    toDoEditRowPriority.className = 'create-todo-row create-todo-row-priority';
    let toDoEditRowPriorityLabel = document.createElement('label');
    toDoEditRowPriorityLabel.className = 'create-todo-row-priority-label';
    toDoEditRowPriorityLabel.setAttribute('for','todo-priority');
    toDoEditRowPriorityLabel.innerHTML = 'todo Priority:';
    let toDoEditRowPriorityInput = document.createElement('input');
    toDoEditRowPriorityInput.className = 'create-todo-row-priority-input';
    toDoEditRowPriorityInput.type = 'range';
    toDoEditRowPriorityInput.min = '1';
    toDoEditRowPriorityInput.max = '10';
    toDoEditRowPriorityInput.value = '5';
    toDoEditRowPriorityInput.name = 'todo-priority';
    toDoEditRowPriorityInput.setAttribute('data-value', "5");

    toDoEditRowPriorityInput.addEventListener('input', function() {
      event.target.setAttribute('data-value',toDoEditRowPriorityInput.value);
    });

    toDoEditRowPriority.appendChild(toDoEditRowPriorityLabel);
    toDoEditRowPriority.appendChild(toDoEditRowPriorityInput);
    toDoEditContainer.appendChild(toDoEditRowPriority);

    //icons
    let toDoIconsContainer = document.createElement('div');
    toDoIconsContainer.className = 'icons-container';
    let toDoIconsLabel = document.createElement('label');
    toDoIconsLabel.className = 'icons-label';
    toDoIconsLabel.innerHTML = 'Todos Icon :';
    toDoIconsContainer.appendChild(toDoIconsLabel);
    let toDoIconsGrid = document.createElement('div');
    toDoIconsGrid.className = 'icons-grid';
    for( var i of iconsNamesArray) {
      let iconImg = document.createElement('img');
      iconImg.className = 'icon icon-container-img';
      iconImg.src = `./assets/imgs/icons/${i}`;
      iconImg.alt = 'icon';
      toDoIconsGrid.appendChild(iconImg);

      iconImg.addEventListener('click', function(e) {
        //making sure there is only one item with that class
        removeClass(document.querySelectorAll('.icon-container-img'),'icon-container-img-checked');
        this.classList.add('icon-container-img-checked');
      });
    }

    toDoIconsContainer.appendChild(toDoIconsGrid);
    toDoEditContainer.appendChild(toDoIconsContainer);

    //buttons
    let buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons-div';
    let buttonLeft =document.createElement('button');
    buttonLeft.className = 'buttons buttons-left';
    buttonLeft.innerHTML = 'Create TODO';
    let buttonRight =document.createElement('button');
    buttonRight.className = 'buttons buttons-right';
    buttonRight.innerHTML = 'Close';

    buttonsDiv.appendChild(buttonLeft);
    buttonsDiv.appendChild(buttonRight);
    toDoEditContainer.appendChild(buttonsDiv);

    buttonRight.addEventListener('click',function() {
      toDoEditModal.parentNode.removeChild(toDoEditModal);
    });

    buttonLeft.addEventListener('click',function() {
      toDoHandler(project);
      resetValue(toDoEditModal);
      toDoEditModal.parentNode.removeChild(toDoEditModal);
    });

    document.body.appendChild(toDoEditModal);

  }
};

// ======================================================================================
// SPAWNER OF "MENU TO CREATE PROJECTS"
// ======================================================================================

const createProjectMenuSpawner = (project) => {

  if (project) {
    //IF WE GET A PROJECT - WE SPAWN ONE WITH ITS DATA TO BE EDITED
    if (projectsArray.includes(project)) {


      let projectEditModal = document.createElement('div');
      projectEditModal.className = 'create-project-modal';

      //main container
      let projectEditContainer = document.createElement('div');
      projectEditContainer.className = 'create-project-container';

      projectEditModal.appendChild(projectEditContainer);

      let h3Text = document.createElement('h3');
      h3Text.className = 'h3-modal-title';
      h3Text.innerHTML = 'EDIT PROJECT';

      projectEditContainer.appendChild(h3Text);

      //title label and input
      let projectEditRowTitle = document.createElement('div');
      projectEditRowTitle.className = 'create-project-row create-project-row-title';
      let projectEditRowTitleLabel = document.createElement('label');
      projectEditRowTitleLabel.className = 'create-project-row-title-label';
      projectEditRowTitleLabel.setAttribute('for','project-title');
      projectEditRowTitleLabel.innerHTML = 'Project name:';
      let projectEditRowTitleInput = document.createElement('input');
      projectEditRowTitleInput.className = 'create-project-row-title-input';
      projectEditRowTitleInput.type = 'text';
      projectEditRowTitleInput.name = 'project-title';
      projectEditRowTitleInput.value = project.title;

      projectEditRowTitle.appendChild(projectEditRowTitleLabel);
      projectEditRowTitle.appendChild(projectEditRowTitleInput);
      projectEditContainer.appendChild(projectEditRowTitle);

      //description label and input
      let projectEditRowDescription = document.createElement('div');
      projectEditRowDescription.className = 'create-project-row create-project-row-description';
      let projectEditRowDescriptionLabel = document.createElement('label');
      projectEditRowDescriptionLabel.className = 'create-project-row-description-label';
      projectEditRowDescriptionLabel.setAttribute('for','project-description');
      projectEditRowDescriptionLabel.innerHTML = 'Project description:';
      let projectEditRowDescriptionInput = document.createElement('input');
      projectEditRowDescriptionInput.className = 'create-project-row-description-input';
      projectEditRowDescriptionInput.type = 'text';
      projectEditRowDescriptionInput.name = 'project-description';
      projectEditRowDescriptionInput.value = project.description;

      projectEditRowDescription.appendChild(projectEditRowDescriptionLabel);
      projectEditRowDescription.appendChild(projectEditRowDescriptionInput);
      projectEditContainer.appendChild(projectEditRowDescription);

      //date label and input
      let projectEditRowDate = document.createElement('div');
      projectEditRowDate.className = 'create-project-row create-project-row-date';
      let projectEditRowDateLabel = document.createElement('label');
      projectEditRowDateLabel.className = 'create-project-row-date-label';
      projectEditRowDateLabel.setAttribute('for','project-date');
      projectEditRowDateLabel.innerHTML = 'Project Date:';
      let projectEditRowDateInput = document.createElement('input');
      projectEditRowDateInput.className = 'create-project-row-date-input';
      projectEditRowDateInput.type = 'date';
      projectEditRowDateInput.name = 'project-date';
      projectEditRowDateInput.value = project.dueDate;

      projectEditRowDate.appendChild(projectEditRowDateLabel);
      projectEditRowDate.appendChild(projectEditRowDateInput);
      projectEditContainer.appendChild(projectEditRowDate);

      //priority label and input
      let projectEditRowPriority = document.createElement('div');
      projectEditRowPriority.className = 'create-project-row create-project-row-priority';
      let projectEditRowPriorityLabel = document.createElement('label');
      projectEditRowPriorityLabel.className = 'create-project-row-priority-label';
      projectEditRowPriorityLabel.setAttribute('for','project-priority');
      projectEditRowPriorityLabel.innerHTML = 'Project Priority:';
      let projectEditRowPriorityInput = document.createElement('input');
      projectEditRowPriorityInput.className = 'create-project-row-priority-input';
      projectEditRowPriorityInput.type = 'range';
      projectEditRowPriorityInput.min = '1';
      projectEditRowPriorityInput.max = '10';
      projectEditRowPriorityInput.value = project.priority;
      projectEditRowPriorityInput.name = 'project-priority';
      projectEditRowPriorityInput.setAttribute('data-value', "5");

      projectEditRowPriorityInput.addEventListener('input', function() {
        event.target.setAttribute('data-value',projectEditRowPriorityInput.value);
      });

      projectEditRowPriority.appendChild(projectEditRowPriorityLabel);
      projectEditRowPriority.appendChild(projectEditRowPriorityInput);
      projectEditContainer.appendChild(projectEditRowPriority);

      //buttons
      let buttonsDiv = document.createElement('div');
      buttonsDiv.className = 'buttons-div';
      let buttonLeft =document.createElement('button');
      buttonLeft.className = 'buttons buttons-left';
      buttonLeft.innerHTML = 'Create Project';
      let buttonRight =document.createElement('button');
      buttonRight.className = 'buttons buttons-right';
      buttonRight.innerHTML = 'Close';

      buttonsDiv.appendChild(buttonLeft);
      buttonsDiv.appendChild(buttonRight);
      projectEditContainer.appendChild(buttonsDiv);

      //Close button will delete the entire modal
      buttonRight.addEventListener('click',function() {
        resetValue(projectEditModal);
        projectEditModal.parentNode.removeChild(projectEditModal);
      });

      //Create a new project button
      buttonLeft.addEventListener('click',function() {
        projectHandler(project);
        resetValue(projectEditModal);
        projectEditModal.parentNode.removeChild(projectEditModal);
      });

      document.body.appendChild(projectEditModal);

    }

  } else {
    //WITHOUT PROJECT, WE SIMPLY JUST CREATE A MENU WITH EMPTY INPUTS TO CREATE A NEW ONE
    //main tab
    let projectEditModal = document.createElement('div');
    projectEditModal.className = 'create-project-modal';

    //main container
    let projectEditContainer = document.createElement('div');
    projectEditContainer.className = 'create-project-container';

    projectEditModal.appendChild(projectEditContainer);

    let h3Text = document.createElement('h3');
    h3Text.className = 'h3-modal-title';
    h3Text.innerHTML = 'CREATE PROJECT';

    projectEditContainer.appendChild(h3Text);


    //title label and input
    let projectEditRowTitle = document.createElement('div');
    projectEditRowTitle.className = 'create-project-row create-project-row-title';
    let projectEditRowTitleLabel = document.createElement('label');
    projectEditRowTitleLabel.className = 'create-project-row-title-label';
    projectEditRowTitleLabel.setAttribute('for','project-title');
    projectEditRowTitleLabel.innerHTML = 'Project name:';
    let projectEditRowTitleInput = document.createElement('input');
    projectEditRowTitleInput.className = 'create-project-row-title-input';
    projectEditRowTitleInput.type = 'text';
    projectEditRowTitleInput.name = 'project-title';

    projectEditRowTitle.appendChild(projectEditRowTitleLabel);
    projectEditRowTitle.appendChild(projectEditRowTitleInput);
    projectEditContainer.appendChild(projectEditRowTitle);

    //description label and input
    let projectEditRowDescription = document.createElement('div');
    projectEditRowDescription.className = 'create-project-row create-project-row-description';
    let projectEditRowDescriptionLabel = document.createElement('label');
    projectEditRowDescriptionLabel.className = 'create-project-row-description-label';
    projectEditRowDescriptionLabel.setAttribute('for','project-description');
    projectEditRowDescriptionLabel.innerHTML = 'Project description:';
    let projectEditRowDescriptionInput = document.createElement('input');
    projectEditRowDescriptionInput.className = 'create-project-row-description-input';
    projectEditRowDescriptionInput.type = 'text';
    projectEditRowDescriptionInput.name = 'project-description';

    projectEditRowDescription.appendChild(projectEditRowDescriptionLabel);
    projectEditRowDescription.appendChild(projectEditRowDescriptionInput);
    projectEditContainer.appendChild(projectEditRowDescription);

    //date label and input
    let projectEditRowDate = document.createElement('div');
    projectEditRowDate.className = 'create-project-row create-project-row-date';
    let projectEditRowDateLabel = document.createElement('label');
    projectEditRowDateLabel.className = 'create-project-row-date-label';
    projectEditRowDateLabel.setAttribute('for','project-date');
    projectEditRowDateLabel.innerHTML = 'Project Date:';
    let projectEditRowDateInput = document.createElement('input');
    projectEditRowDateInput.className = 'create-project-row-date-input';
    projectEditRowDateInput.type = 'date';
    projectEditRowDateInput.name = 'project-date';

    projectEditRowDate.appendChild(projectEditRowDateLabel);
    projectEditRowDate.appendChild(projectEditRowDateInput);
    projectEditContainer.appendChild(projectEditRowDate);

    //priority label and input
    let projectEditRowPriority = document.createElement('div');
    projectEditRowPriority.className = 'create-project-row create-project-row-priority';
    let projectEditRowPriorityLabel = document.createElement('label');
    projectEditRowPriorityLabel.className = 'create-project-row-priority-label';
    projectEditRowPriorityLabel.setAttribute('for','project-priority');
    projectEditRowPriorityLabel.innerHTML = 'Project Priority:';
    let projectEditRowPriorityInput = document.createElement('input');
    projectEditRowPriorityInput.className = 'create-project-row-priority-input';
    projectEditRowPriorityInput.type = 'range';
    projectEditRowPriorityInput.min = '1';
    projectEditRowPriorityInput.max = '10';
    projectEditRowPriorityInput.value = '5';
    projectEditRowPriorityInput.name = 'project-priority';
    projectEditRowPriorityInput.setAttribute('data-value', "5");

    projectEditRowPriorityInput.addEventListener('input', function() {
      event.target.setAttribute('data-value',projectEditRowPriorityInput.value);
    });

    projectEditRowPriority.appendChild(projectEditRowPriorityLabel);
    projectEditRowPriority.appendChild(projectEditRowPriorityInput);
    projectEditContainer.appendChild(projectEditRowPriority);

    //buttons
    let buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons-div';
    let buttonLeft =document.createElement('button');
    buttonLeft.className = 'buttons buttons-left';
    buttonLeft.innerHTML = 'Create Project';
    let buttonRight =document.createElement('button');
    buttonRight.className = 'buttons buttons-right';
    buttonRight.innerHTML = 'Close';

    buttonsDiv.appendChild(buttonLeft);
    buttonsDiv.appendChild(buttonRight);
    projectEditContainer.appendChild(buttonsDiv);

    //Close button will delete the entire modal
    buttonRight.addEventListener('click',function() {
      resetValue(projectEditModal);
      projectEditModal.parentNode.removeChild(projectEditModal);
    });

    //Create a new project button
    buttonLeft.addEventListener('click',function() {
      projectHandler();
      resetValue(projectEditModal);
      projectEditModal.parentNode.removeChild(projectEditModal);
    });

    document.body.appendChild(projectEditModal);

  }
};

//delete a TODO
function deleteToDo(project,toDo) {
  //if a project does include provided toDo, it deletes it.
  if (project.toDos.includes(toDo)) {
    project.toDos.splice(project.toDos.indexOf(toDo),1);
    saveToLocalStorage(projectsArray);
    renderProjectMain(project);
  }else {
    console.error('Project does not include that toDo');
    return;
  }
  event.stopImmediatePropagation();
}

//edit a TODO
function editToDo(project,toDo) {
  createToDoMenuSpawner(true,project,toDo);
}

  //CREATION OF A toDo ROW ===============================================================================================================================
  //A small management mistake, should have gone for only 2 arguments
  const createToDoRow = ([...toDos],nodeToAppend,project) => {
    for (var i of toDos) {
      //main DIV
      let mainToDoRow = document.createElement('div');
      mainToDoRow.className = 'to-do-row';

      //this is the first row
      let informationDiv = document.createElement('div');
      informationDiv.className = 'to-information-div';


      //TO DO ICON
      let toDoIconDiv = document.createElement('div');
      toDoIconDiv.className = 'to-do-icon-div';
      let toDoIcon = document.createElement('img');
      toDoIcon.className = 'icon to-do-icon';
      toDoIcon.src = `${i.icon}`;
      toDoIcon.innerHTML = 'toDo icon';

      toDoIconDiv.appendChild(toDoIcon);
      informationDiv.appendChild(toDoIconDiv);

      //TO DO TITLE
      let toDoTitleDiv = document.createElement('div');
      toDoTitleDiv.className = 'to-do-title-div';
      let toDoTitleText = document.createElement('div');
      toDoTitleText.className = 'to-do-title-text';
      toDoTitleText.innerHTML = i.title;

      toDoTitleDiv.appendChild(toDoTitleText);
      informationDiv.appendChild(toDoTitleDiv);

      //ToDo PRIORITY
      let toDoPriorityDiv = document.createElement('div');
      toDoPriorityDiv.className = 'to-do-priority-div';
      let toDoPriorityInstruction = document.createElement('div');
      toDoPriorityInstruction.className = 'to-do-priority-instruction';
      toDoPriorityInstruction.innerHTML = 'priority:';
      let toDoPriorityText = document.createElement('div');
      toDoPriorityText.className = 'to-do-priority-text';
      toDoPriorityText.innerHTML = i.priority;

      toDoPriorityDiv.appendChild(toDoPriorityInstruction);
      toDoPriorityDiv.appendChild(toDoPriorityText);
      informationDiv.appendChild(toDoPriorityDiv);

      //TODO EDIT
      let toDoEditDiv = document.createElement('div');
      toDoEditDiv.className = 'to-do-edit-div';
      let toDoEditIcon = document.createElement('img');
      toDoEditIcon.className = 'icon to-do-edit-icon';
      toDoEditIcon.src = './assets/imgs/icons/edit.png';

      toDoEditDiv.appendChild(toDoEditIcon);
      informationDiv.appendChild(toDoEditDiv);

      //EDIT TODO FUNCTION LISTENER
      toDoEditDiv.addEventListener('click',editToDo.bind(this,project,i));

      //TODO DELETE
      let toDoDeleteDiv = document.createElement('div');
      toDoDeleteDiv.className = 'to-do-delete-div';
      let toDoDeleteIcon = document.createElement('img');
      toDoDeleteIcon.className = 'icon to-do-delete-icon';
      toDoDeleteIcon.src = './assets/imgs/icons/delete.png';

      toDoDeleteDiv.appendChild(toDoDeleteIcon);
      informationDiv.appendChild(toDoDeleteDiv);

      //Function that invokes after clicking the Delete button
      toDoDeleteDiv.addEventListener('click', deleteToDo.bind(this,project,i));

      //adding the information div as the upper row
      mainToDoRow.appendChild(informationDiv);


      //ToDo DESCRIPTION - this is the second row
      let toDoDescriptionDiv = document.createElement('div');
      toDoDescriptionDiv.className = 'to-do-description-div';
      let toDoDescriptionText = document.createElement('div');
      toDoDescriptionText.className = 'to-do-description';
      toDoDescriptionText.innerHTML = i.description;

      toDoDescriptionDiv.appendChild(toDoDescriptionText);
      //adding the description as the second row
      mainToDoRow.appendChild(toDoDescriptionDiv);
      //adding the entire thing to the project div
      nodeToAppend.appendChild(mainToDoRow);
    }
  };

  //Function for the arrows to show more details about a project.
  function showMoreDetails(e) {
  e.target.parentNode.parentNode.parentNode.children[1].classList.toggle('d-none');
  }

  // ===================================================================================================================================================================
  //Renders THE MAIN SELECTED PROJECT AND ITS TODOS. =======================================================
  // ==============================================================================================================
  const renderProjectMain = (project) => {
    if (projectMainContainer) {
      //Fast clear of projects
      deleteAllChildNodes(projectMainContainer);
        if (project instanceof Project && projectMainContainer) {
          let projectDiv = document.createElement('div');
          projectDiv.classList.add('project-div-shortcut');
          projectDiv.setAttribute('data-project',project._id);

          //THE Project Name Div creation
          let projectName = document.createElement('div');
          projectName.classList.add('project-name-container');
          let projectNameSpan = document.createElement('span');
          projectNameSpan.classList.add('project-name-container-span');
          projectNameSpan.innerHTML = project.title;
          projectName.appendChild(projectNameSpan);

          //The Project Remaining time Div creation
          let projectTime = document.createElement('div');
          projectTime.classList.add('project-time-container');
          let instructionTime = document.createElement('div');
          instructionTime.className = 'instruction instruction-time';
          instructionTime.innerHTML = "remaining time:";
          let projectTimeSpan = document.createElement('div');
          projectTimeSpan.classList.add('project-time-container-span');
          projectTimeSpan.innerHTML = project.projectTimeLimit;
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
          projectPrioritySpan.innerHTML = project.priority;
          projectPriority.appendChild(instructionPriority);
          projectPriority.appendChild(projectPrioritySpan);

          //Project edit

          let projectEdit = document.createElement('div');
          projectEdit.classList.add('project-edit');
          let projectEditIcon = document.createElement('img');
          projectEditIcon.className = 'icon project-edit-icon';
          projectEditIcon.src = './assets/imgs/icons/edit.png';

          projectEdit.appendChild(projectEditIcon);

          //FUNCTION LISTENER - TO EDIT THE CURRENT PROJECT
          projectEdit.addEventListener('click',function() {
            createProjectMenuSpawner(project);
          });

          //More details arrow ================== and function listener
          let projectMoreDetails = document.createElement('div');
          projectMoreDetails.classList.add('project-more-details-container');
          let projectMoreDetailsArrow = document.createElement('img');
          projectMoreDetailsArrow.className = 'icon more-details-arrow';
          projectMoreDetailsArrow.src = './assets/imgs/icons/arrow.png';
          projectMoreDetails.appendChild(projectMoreDetailsArrow);
          projectMoreDetailsArrow.addEventListener("click", showMoreDetails);

          projectMoreDetails.addEventListener('click',function(e) {
            projectMoreDetailsArrow.classList.toggle('project-more-details-container-checked');
          });

          projectDiv.appendChild(projectName);
          projectDiv.appendChild(projectEdit);
          projectDiv.appendChild(projectMoreDetails);
          projectDiv.appendChild(projectTime);
          projectDiv.appendChild(projectPriority);


          //The big actual ROW ===================================
          let projectDivAll = document.createElement('div');
          projectDivAll.classList.add('project-main');

          let moreDetailsDiv = document.createElement('div');
          moreDetailsDiv.className = 'project-more-details d-none';
          let moreDetailsText = document.createElement('div');
          moreDetailsText.className = 'more-details-text';
          moreDetailsText.innerHTML = project.description;
          moreDetailsDiv.appendChild(moreDetailsText);

          projectDivAll.appendChild(projectDiv);
          projectDivAll.appendChild(moreDetailsDiv);

          //Div for all the toDoS
          let toDosDiv = document.createElement('div');
          toDosDiv.className = 'to-do-container';

          //Main "adder" of toDos
          let toDoAdd = document.createElement('div');
          toDoAdd.classList.add('to-do-add-div');
          let toDoAddIcon = document.createElement('img');
          toDoAddIcon.classList.add('icon');
          toDoAddIcon.classList.add('to-do-add-icon');
          toDoAddIcon.src = './assets/imgs/icons/plus.png';
          let toDoAddTextDiv = document.createElement('div');
          toDoAddTextDiv.classList.add('to-do-add-text-div');
          let toDoAddText = document.createElement('div');
          toDoAddText.classList.add('to-do-add-text');
          toDoAddText.innerHTML = 'ADD MORE TODOS';

          //ADDING TODOS
          toDoAdd.addEventListener('click',function() {
            createToDoMenuSpawner(false,project);
          });

          // create TODOS for every toDo instance in the project todo array.
          createToDoRow(project.toDos,toDosDiv,project);

          toDoAdd.appendChild(toDoAddIcon);
          toDoAddTextDiv.appendChild(toDoAddText);
          toDoAdd.appendChild(toDoAddTextDiv);
          toDosDiv.insertAdjacentElement('afterbegin',toDoAdd);

          projectDivAll.appendChild(toDosDiv);

          projectMainContainer.appendChild(projectDivAll);
        } else {
          console.log('i is NOT an instance of Project, can not do shiet');
        }
    }
  };

  //delete project function
  function deleteProject(project,event) {
    if (projectsArray.includes(project)) {
      project.idToArray;
      projectsArray.splice(projectsArray.indexOf(project),1);
      saveToLocalStorage(projectsArray);
      createProjectNamesDiv(projectsArray);
    }
    //Stopping Immediate Propagation in order to not render a project in the main div. (Because the main event of a Project Shortcut, is to spawn one)
    event.stopImmediatePropagation();
  }

  // ============================================================================================================
  // PROJECT NAMES(SHORTCUT) FUNCTION ============================================================================================================================================
  // ============================================================================================================

  //This is where the Project names are rendered (the shortcuts to create a main (viewed) project).
  const createProjectNamesDiv = ([...projects]) => {
    if (projectNamesContainer) {
      deleteAllChildNodes(projectNamesContainer);
      deleteAllChildNodes(projectMainContainer);
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
        projectShortcutPriority.className = 'project-shortcut-priority';
        projectShortcutPriority.innerHTML = i.priority;

        projectShortcutPriorityDiv.appendChild(projectShortcutPriorityInstruction);
        projectShortcutPriorityDiv.appendChild(projectShortcutPriority);

        projectNameContainer.appendChild(projectShortcutPriorityDiv);

        //Trash bin - delete a project with a click
        let trashBinDiv = document.createElement('div');
        trashBinDiv.className = 'trash-bin-div';
        let trashBinIcon = document.createElement('img');
        trashBinIcon.className = 'icon trash-bin-icon-div';
        trashBinIcon.src = './assets/imgs/icons/delete.png';

        trashBinIcon.addEventListener('click',deleteProject.bind(this,i));

        trashBinDiv.appendChild(trashBinIcon);
        projectNameContainer.appendChild(trashBinDiv);

        //Final, it adds the entire row to the sooner assigned div for the project names.
        projectNamesContainer.appendChild(projectNameContainer);

        //Adding an event - showing the project in main Project Container.
        projectNameContainer.addEventListener('click',renderProjectMain.bind(this,i));

      }
      //Add a ADD MORE PROJECTS button
      let moreProjectDiv = document.createElement('DIV');
      moreProjectDiv.className = 'more-projects-row';
      let moreProjectIcon = document.createElement('img');
      moreProjectIcon.className = 'more-projects-row-icon';
      moreProjectIcon.src = './assets/imgs/icons/plus.png';
      let moreProjectText = document.createElement('DIV');
      moreProjectText.className = 'more-projects-row-text';
      moreProjectText.innerHTML = 'ADD MORE PROJECTS';
      moreProjectDiv.appendChild(moreProjectIcon);
      moreProjectDiv.appendChild(moreProjectText);

      moreProjectDiv.addEventListener('click',function() {
        createProjectMenuSpawner();
      });

      projectNamesContainer.appendChild(moreProjectDiv);

    } else {
      console.error('Div for containing all project names has not been defined');
    }
  };

//a fast project population function
const populate = () => {

  //Adds a ADD MORE PROJECTS button on start.
  let moreProjectDiv = document.createElement('DIV');
  moreProjectDiv.className = 'more-projects-row';
  let moreProjectIcon = document.createElement('DIV');
  moreProjectIcon.className = 'more-projects-row-icon';
  let moreProjectText = document.createElement('DIV');
  moreProjectText.className = 'more-projects-row-text';
  moreProjectText.innerHTML = 'ADD MORE PROJECTS';
  moreProjectDiv.appendChild(moreProjectIcon);
  moreProjectDiv.appendChild(moreProjectText);

  moreProjectDiv.addEventListener('click',function() {
    createProjectMenuSpawner();
  });

  projectNamesContainer.appendChild(moreProjectDiv);

};

  return {
    assignProjectNameContainer,assignProjectMainContainer,renderProjectMain,deleteAllChildNodes,createProjectNamesDiv,populate
  };
})();

export default DOMStuff;

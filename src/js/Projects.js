//This is the toDos Creating class.
import toDoClass from './toDos.js';
import { formatDistanceToNow } from 'date-fns';

// Projects are the "main objects".



// ID FOR PROJECTS ======================================================================
//How does it work:
//Before assigning and Id, it checks the array that contains the ids of other projects that have been deleted.
//If it finds something, the missing id is assigned to the newly created project.


//Current id limit
let projectIdCount = 1;
//Id array with all the ids that can be reused after Project being deleted or completed
let arrayOfProjectIdToBeAssignedAfterDeletingItems = [];

//ID ASSIGNING FUNCTION
const assignProjectId = () => {
  //we have no need to reuse deleted ids, make a new one
  if (arrayOfProjectIdToBeAssignedAfterDeletingItems.length === 0) {
    return projectIdCount++;
  } else {
    //If after deleting a Project we still have an id unasigned, then use it
    //Sorry for the long variable, thought it's funny so I left it like that
    var missingId = arrayOfProjectIdToBeAssignedAfterDeletingItems.splice(arrayOfProjectIdToBeAssignedAfterDeletingItems.indexOf(Math.min(...arrayOfProjectIdToBeAssignedAfterDeletingItems)),1);
    return missingId;
  }
};

//Main Project object
class Project {
  constructor(title,description,dueDate,priority) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._id = assignProjectId();
    this._priority = priority;
    this._toDos = [];
  }
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }
  get description() {
    return this._description;
  }
  set description(value) {
    this._description = value;
  }
  get dueDate() {
    return this._dueDate;
  }
  set dueDate(value) {
    this._dueDate = value;
  }
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  get priority() {
    return this._priority;
  }
  set priority(value) {
    this._priority = value;
  }

  //ToDos PART =====================================
  get toDos() {
    return this._toDos;
  }
  set toDos(value) {
    this._toDos = value;
  }
  addToDo(value) {
    if (value instanceof toDoClass) {
      this._toDos.push(value);
    } else {
    }

  }
  deleteToDo(value) {
    if (this._toDos.indexOf(value) > -1) {
      this._toDos.splice(this._toDos.indexOf(value,1));
    } else {
      return;
    }
  }

  //DATES ===========================================
  get projectTimeLimit() {
    return formatDistanceToNow(new Date(this._dueDate));
  }

  //ID to the missing Id's array
  get idToArray() {
    arrayOfProjectIdToBeAssignedAfterDeletingItems.push(this._id);
  }
}

//Failure of a function
// setTimeout(projectsIdLocalStorageSetup(arrayOfProjectIdToBeAssignedAfterDeletingItems,projectIdCount),2000);
// projectsIdLocalStorageSetup(arrayOfProjectIdToBeAssignedAfterDeletingItems,projectIdCount);


export {arrayOfProjectIdToBeAssignedAfterDeletingItems, Project, projectIdCount};
export default Project;

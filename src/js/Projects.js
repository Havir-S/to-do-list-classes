//This is the toDos Creating class.
import toDoClass from './toDos.js';
import { format, isDate, formatDistanceToNow } from 'date-fns';

// Projects are the "main objects".



// ID FOR PROJECTS ======================================================================
//How does it work:
//Before assigning and Id, it checks the array that contains the ids of other projects that have been deleted.
//If it finds something, the missing id is assigned to the newly created project.


//Current id limit
let projectIdCount = 1;
//Id array with all the ids that can be reused after toDos being deleted or completed
let arrayOfProjectIdToBeAssignedAfterDeletingItems = [];
//ID ASSIGNING FUNCTION
const assignProjectId = () => {
  //we have no need to reuse deleted ids, make a new one
  if (arrayOfProjectIdToBeAssignedAfterDeletingItems.length === 0) {
    return projectIdCount++;
  } else {
    //If after deleting a toDo we still have an id unasigned, then use it
    var missingId = arrayOfProjectIdToBeAssignedAfterDeletingItems.shift();
    return missingId;
  }
}

// GET ICON FOR PROJECT ===============================================================
function getIcon() {
  return 'icon';
}

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
      console.log(`value is an instance of toDoClass`);
      this._toDos.unshift(value);
    } else {
      console.log('value is NOT and instance of toDoClass');
    }

  }
  deleteToDo(value) {
    if (this._toDos.indexOf(value) > -1) {
      console.log(`There is no toDo like ${value}. Currently, array looks like this ${this._toDos}`);
      this._toDos.splice(this._toDos.indexOf(value,1));
      console.log(`Now the array looks like this ${this._toDos}`);
    } else {
      console.log(`There is no toDo like ${value}`);
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
    console.log(arrayOfProjectIdToBeAssignedAfterDeletingItems);
  }
}



export default Project;
